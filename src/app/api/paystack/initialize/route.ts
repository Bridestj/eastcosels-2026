import { NextResponse } from "next/server";

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
    // International registration is displayed as $199
    // on the website, but processed in NGN because
    // this Nigerian Paystack account does not have
    // a USD domiciliary account.
    amount: 270000,
    currency: "NGN",
  },
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, registrationCategory } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        {
          status: false,
          message: "Email address is required.",
        },
        { status: 400 }
      );
    }

    // Validate registration category
    if (!registrationCategory) {
      return NextResponse.json(
        {
          status: false,
          message: "Registration category is required.",
        },
        { status: 400 }
      );
    }

    // Get the official price from the server
    const packageDetails =
      REGISTRATION_PRICES[registrationCategory];

    if (!packageDetails) {
      return NextResponse.json(
        {
          status: false,
          message: "Invalid registration category.",
        },
        { status: 400 }
      );
    }

    const { amount, currency } = packageDetails;

    // Determine the correct website URL
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000";

    // Initialize Paystack
    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,

          // Paystack expects the amount in the
          // smallest currency unit (kobo for NGN).
          amount: amount * 100,

          currency,

          callback_url: `${siteUrl}/payment/success`,

          metadata: {
            registrationCategory,
          },
        }),
      }
    );

    const data = await response.json();

    console.log("Paystack Response:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Paystack Error:", error);

    return NextResponse.json(
      {
        status: false,
        message: "Paystack initialization failed.",
      },
      { status: 500 }
    );
  }
}