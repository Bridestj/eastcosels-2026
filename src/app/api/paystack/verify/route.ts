import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { Resend } from "resend";
import TicketEmail from "@/emails/TicketEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

// Official registration prices.
// These must match the prices used in the Paystack initialization route.
const REGISTRATION_PRICES: Record<
  string,
  { amount: number; currency: "NGN" | "USD" }
> = {
  Student: {
    amount: 12000,
    currency: "NGN",
  },

  Alumni: {
    amount: 20000,
    currency: "NGN",
  },

  "International Delegate": {
    // Displayed as $199 on the website,
    // but processed in NGN.
    amount: 270000,
    currency: "NGN",
  },
};

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const reference = searchParams.get("reference");

    if (!reference) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing payment reference.",
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------
    // 1. VERIFY TRANSACTION WITH PAYSTACK
    // --------------------------------------------------

    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
        cache: "no-store",
      }
    );

    const result = await response.json();

    if (!response.ok || !result.status) {
      console.error("Paystack verification failed:", result);

      return NextResponse.json(
        {
          success: false,
          message:
            result.message ||
            "Unable to verify payment with Paystack.",
        },
        { status: 400 }
      );
    }

    const payment = result.data;

    // --------------------------------------------------
    // 2. MAKE SURE PAYSTACK MARKED THE PAYMENT SUCCESSFUL
    // --------------------------------------------------

    if (payment.status !== "success") {
      return NextResponse.json({
        success: false,
        message: `Payment status is ${payment.status}.`,
        status: payment.status,
      });
    }

    // --------------------------------------------------
    // 3. FIND THE REGISTRATION
    // --------------------------------------------------

    const {
      data: registration,
      error: fetchError,
    } = await supabaseAdmin
      .from("registrations")
      .select("*")
      .eq("payment_reference", payment.reference)
      .single();

    if (fetchError || !registration) {
      console.error(
        "Registration lookup failed:",
        fetchError
      );

      return NextResponse.json(
        {
          success: false,
          message: "Registration not found.",
        },
        { status: 404 }
      );
    }

    // --------------------------------------------------
    // 4. PREVENT DUPLICATE PROCESSING
    // --------------------------------------------------

    if (registration.payment_status === "Paid") {
      return NextResponse.json({
        success: true,
        message: "Payment already verified.",
        registration_id:
          registration.registration_id,
      });
    }

    // --------------------------------------------------
    // 5. GET THE OFFICIAL PRICE FROM THE SERVER
    // --------------------------------------------------

    const packageDetails =
      REGISTRATION_PRICES[
        registration.registration_category
      ];

    if (!packageDetails) {
      console.error(
        "Invalid registration category:",
        registration.registration_category
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid registration category.",
        },
        { status: 400 }
      );
    }

    const expectedAmount =
      packageDetails.amount * 100;

    const expectedCurrency =
      packageDetails.currency;

    // --------------------------------------------------
    // 6. VERIFY PAYMENT AMOUNT
    // --------------------------------------------------

    if (
      Number(payment.amount) !==
      expectedAmount
    ) {
      console.error(
        "Payment amount mismatch:",
        {
          expected: expectedAmount,
          received: payment.amount,
          category:
            registration.registration_category,
        }
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Payment amount could not be verified.",
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------
    // 7. VERIFY PAYMENT CURRENCY
    // --------------------------------------------------

    if (
      payment.currency !==
      expectedCurrency
    ) {
      console.error(
        "Payment currency mismatch:",
        {
          expected: expectedCurrency,
          received: payment.currency,
        }
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Payment currency could not be verified.",
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------
    // 8. VERIFY CUSTOMER EMAIL
    // --------------------------------------------------

    const paymentEmail =
      payment.customer?.email
        ?.trim()
        .toLowerCase();

    const registrationEmail =
      registration.email
        ?.trim()
        .toLowerCase();

    if (
      !paymentEmail ||
      paymentEmail !== registrationEmail
    ) {
      console.error(
        "Payment email mismatch:",
        {
          expected: registrationEmail,
          received: paymentEmail,
        }
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Payment could not be matched to the registration.",
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------
    // 9. VERIFY REGISTRATION CATEGORY
    // --------------------------------------------------

    if (
      payment.metadata?.registrationCategory &&
      payment.metadata.registrationCategory !==
        registration.registration_category
    ) {
      console.error(
        "Registration category mismatch:",
        {
          expected:
            registration.registration_category,
          received:
            payment.metadata
              .registrationCategory,
        }
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Payment registration category could not be verified.",
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------
    // 10. GENERATE REGISTRATION ID
    // --------------------------------------------------

    let registrationId =
      registration.registration_id;

    if (!registrationId) {
      registrationId =
        "ECS-2026-" +
        String(registration.id).padStart(
          5,
          "0"
        );
    }

    // --------------------------------------------------
    // 11. MARK REGISTRATION AS PAID
    // --------------------------------------------------

    const {
      data: updatedRegistration,
      error: updateError,
    } = await supabaseAdmin
      .from("registrations")
      .update({
        payment_status: "Paid",
        payment_reference:
          payment.reference,
        registration_id:
          registrationId,
      })
      .eq("id", registration.id)
      .eq("payment_status", "Pending")
      .select()
      .single();

    if (updateError || !updatedRegistration) {
      console.error(
        "Registration update failed:",
        updateError
      );

      // Another request may have processed
      // the payment at almost the same time.
      const {
        data: existingRegistration,
      } = await supabaseAdmin
        .from("registrations")
        .select(
          "registration_id, payment_status"
        )
        .eq("id", registration.id)
        .single();

      if (
        existingRegistration?.payment_status ===
        "Paid"
      ) {
        return NextResponse.json({
          success: true,
          message: "Payment already verified.",
          registration_id:
            existingRegistration.registration_id,
        });
      }

      return NextResponse.json(
        {
          success: false,
          message:
            "Could not update registration.",
        },
        { status: 500 }
      );
    }

    // --------------------------------------------------
    // 12. SEND TICKET EMAIL
    // --------------------------------------------------

    try {
      const {
        data,
        error: resendError,
      } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: registration.email,
        subject:
          "🎉 EASTCOSELS 2026 Registration Confirmed",
        react: TicketEmail({
          name: registration.full_name,
          registrationId,
        }),
      });

      if (resendError) {
        console.error(
          "Resend Error:",
          resendError
        );
      } else {
        console.log(
          "Email sent:",
          data
        );
      }
    } catch (emailError) {
      console.error(
        "Email failed:",
        emailError
      );
    }

    // --------------------------------------------------
    // 13. RETURN SUCCESS
    // --------------------------------------------------

    return NextResponse.json({
      success: true,
      message:
        "Payment verified successfully.",
      registration_id:
        registrationId,
    });
  } catch (err) {
    console.error(
      "Verification error:",
      err
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Verification failed.",
      },
      { status: 500 }
    );
  }
}