import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import CheckInClient from "@/components/admin/CheckInClient";
import AttendeeSearch from "@/components/admin/AttendeeSearch";
import AdminNav from "@/components/admin/AdminNav";

export default async function CheckInPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { count: total } = await supabaseAdmin
    .from("registrations")
    .select("*", {
      count: "exact",
      head: true,
    });

  const { count: checkedIn } = await supabaseAdmin
    .from("registrations")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("checked_in", true);

  const { count: paid } = await supabaseAdmin
    .from("registrations")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("payment_status", "Paid");

  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="mx-auto max-w-5xl">

  <div className="mb-8 rounded-2xl bg-white p-4 shadow-lg">
    <AdminNav />
  </div>

  {/* Header */}

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-green-700 md:text-4xl">
            EASTCOSELS 2026 Check-In
          </h1>

          <p className="mt-2 text-gray-600">
            Scan attendee tickets to verify and check them into the conference.
          </p>
        </div>

        {/* Statistics */}

        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <p className="text-sm text-gray-500">
              Total Registered
            </p>

            <p className="mt-2 text-4xl font-bold text-green-700">
              {total ?? 0}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <p className="text-sm text-gray-500">
              Paid
            </p>

            <p className="mt-2 text-4xl font-bold text-green-700">
              {paid ?? 0}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <p className="text-sm text-gray-500">
              Checked In
            </p>

            <p className="mt-2 text-4xl font-bold text-green-700">
              {checkedIn ?? 0}
            </p>
          </div>

        </div>

        <CheckInClient />
        <AttendeeSearch />

      </div>
    </main>
  );
}