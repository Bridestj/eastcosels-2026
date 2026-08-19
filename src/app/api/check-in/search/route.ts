import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q")?.trim();

    if (!query) {
      return NextResponse.json(
        {
          message: "Search query is required.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("registrations")
      .select(
        "registration_id, full_name, institution, registration_category, payment_status, checked_in, checked_in_at"
      )
      .or(
        `registration_id.ilike.%${query}%,full_name.ilike.%${query}%`
      )
      .order("full_name", { ascending: true })
      .limit(20);

    if (error) {
      console.error("Attendee search error:", error);

      return NextResponse.json(
        {
          message: "Unable to search attendees.",
          error: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      attendees: data ?? [],
    });
  } catch (error) {
    console.error("Search API error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong while searching.",
      },
      { status: 500 }
    );
  }
}