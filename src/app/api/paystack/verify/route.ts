import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const reference = searchParams.get("reference");

    if (!reference) {
      return NextResponse.json(
        { success: false, message: "Missing payment reference." },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const result = await response.json();

    if (!result.status) {
      return NextResponse.json(result);
    }

    const payment = result.data;

    if (payment.status === "success") {
      const { error } = await supabaseAdmin
        .from("registrations")
        .update({
          payment_status: "Paid",
          payment_reference: payment.reference,
        })
        .eq("email", payment.customer.email)
        .eq("payment_status", "Pending");

      if (error) {
        console.error(error);
      }
    }

    return NextResponse.json(result);
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        message: "Verification failed.",
      },
      { status: 500 }
    );
  }
}