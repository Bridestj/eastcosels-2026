import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const registrationId = body.registrationId;

    if (!registrationId) {
      return NextResponse.json(
        {
          success: false,
          message: "Registration ID is required.",
        },
        { status: 400 }
      );
    }

    const { data: attendee, error } = await supabaseAdmin
      .from("registrations")
      .select(
        "registration_id, full_name, institution, registration_category, payment_status, checked_in, checked_in_at"
      )
      .eq("registration_id", registrationId)
      .single();

    if (error || !attendee) {
      return NextResponse.json(
        {
          success: false,
          message: "Registration not found.",
        },
        { status: 404 }
      );
    }

    if (attendee.payment_status !== "Paid") {
      return NextResponse.json(
        {
          success: false,
          message: "Payment has not been verified.",
          attendee,
        },
        { status: 403 }
      );
    }

    if (attendee.checked_in) {
      return NextResponse.json(
        {
          success: false,
          alreadyCheckedIn: true,
          message: "This attendee has already checked in.",
          attendee,
        },
        { status: 409 }
      );
    }

    const checkedInAt = new Date().toISOString();

    const { data: updatedAttendee, error: updateError } =
      await supabaseAdmin
        .from("registrations")
        .update({
          checked_in: true,
          checked_in_at: checkedInAt,
        })
        .eq("registration_id", registrationId)
        .select(
          "registration_id, full_name, institution, registration_category, payment_status, checked_in, checked_in_at"
        )
        .single();

    if (updateError || !updatedAttendee) {
      console.error("Check-in update error:", updateError);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to complete check-in.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Check-in successful.",
      attendee: updatedAttendee,
    });
  } catch (error) {
    console.error("Check-in API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while checking in.",
      },
      { status: 500 }
    );
  }
}