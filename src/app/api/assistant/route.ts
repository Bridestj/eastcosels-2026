import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    if (!message) {
      return NextResponse.json(
        {
          error: "Please enter a message.",
        },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        {
          error:
            "Your message is too long. Please keep it under 1000 characters.",
        },
        { status: 400 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-5.6-luna",
      instructions: `
You are the official EASTCOSELS 2026 virtual assistant.

EASTCOSELS means the International Conference for South East
Students of English and Literary Studies.

Your job is to help visitors understand the conference,
registration, tickets, payment, venue, packages, and general
conference information.

IMPORTANT CONFERENCE INFORMATION:

Conference:
EASTCOSELS 2026

Venue:
University of Nigeria, Nsukka (UNN)

Date:
August 30, 2026

Registration packages:

1. Student Delegate — ₦12,000
Includes:
- Conference Materials
- Conference Badge
- Certificate of Participation
- Refreshments

2. Alumini — ₦20,000
Includes:
- Everything in Student
- EASTCOSELS Polo
- Special Conference Souvenir

3. International Delegate — $199
Includes:
- Everything in Alumini
- Airport Welcome Guide
- International Delegate Kit
- Priority Conference Support

REGISTRATION:
Visitors can register through the registration page on this
website.

PAYMENT:
Online registration payments are handled securely through
Paystack.

TICKETS:
Registered and successfully paid delegates receive a conference
ticket which can be used for check-in.

IMPORTANT:
Never invent information.

If you do not know the answer, clearly say that you don't have
that information and direct the visitor to contact the EASTCOSELS
organizers.

Do not claim that a payment was successful unless the website
provides that information.

Do not ask users for passwords, card numbers, PINs, OTPs, or
other sensitive financial information.

Be friendly, concise, professional, and helpful.

When appropriate, encourage visitors to use the registration
page or contact the organizers for assistance.
      `,
      input: message,
    });

    return NextResponse.json({
      message: response.output_text,
    });
  } catch (error) {
    console.error("EASTCOSELS ASSISTANT ERROR:", error);

    return NextResponse.json(
      {
        error:
          "The assistant is temporarily unavailable. Please try again.",
      },
      { status: 500 }
    );
  }
}