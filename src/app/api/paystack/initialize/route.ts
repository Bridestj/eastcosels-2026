import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      body: JSON.stringify({
  ...body,
  callback_url: "http://localhost:3000/payment/success",
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
        message: "Paystack initialization failed",
      },
      { status: 500 }
    );
  }
}