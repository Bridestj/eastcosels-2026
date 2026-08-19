import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import StatsCard from "@/components/admin/StatsCard";
import AttendeesTable from "@/components/admin/AttendeesTable";
import ExportButton from "@/components/admin/ExportButton";
import AdminNav from "@/components/admin/AdminNav";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const [
    { count: total },
    { count: paid },
    { count: pending },
    { count: checkedIn },
    { count: notCheckedIn },
    paymentsResult,
    attendeesResult,
  ] = await Promise.all([
    supabaseAdmin
      .from("registrations")
      .select("*", {
        count: "exact",
        head: true,
      }),

    supabaseAdmin
      .from("registrations")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("payment_status", "Paid"),

    supabaseAdmin
      .from("registrations")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("payment_status", "Pending"),

    supabaseAdmin
      .from("registrations")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("checked_in", true),

    supabaseAdmin
      .from("registrations")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("checked_in", false),

    supabaseAdmin
      .from("registrations")
      .select("amount_paid")
      .eq("payment_status", "Paid"),

    supabaseAdmin
      .from("registrations")
      .select(
       "id, registration_id, full_name, institution, registration_category, payment_status, checked_in, checked_in_at"
       )
      .order("created_at", {
        ascending: false,
      }),
  ]);

  const revenue =
    paymentsResult.data?.reduce(
      (sum, row) =>
        sum + Number(row.amount_paid ?? 0),
      0
    ) ?? 0;

  const attendees =
    attendeesResult.data ?? [];

  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">

      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div>
          <h1 className="text-3xl font-bold text-green-700 md:text-4xl">
            EASTCOSELS Admin Dashboard
          </h1>

          <p className="mt-2 text-gray-600">
            Registration and conference check-in overview.
          </p>
          <AdminNav />
        </div>

        {/* Statistics */}

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">

          <StatsCard
            title="Total Registrations"
            value={total ?? 0}
            icon="👥"
          />

          <StatsCard
            title="Paid"
            value={paid ?? 0}
            icon="💳"
          />

          <StatsCard
            title="Pending"
            value={pending ?? 0}
            icon="⏳"
          />

          <StatsCard
            title="Checked In"
            value={checkedIn ?? 0}
            icon="✅"
          />

          <StatsCard
            title="Not Checked In"
            value={notCheckedIn ?? 0}
            icon="🎟️"
          />

        </div>

        {/* Revenue */}

        <div className="mt-6 max-w-sm">

          <StatsCard
            title="Total Revenue"
            value={`₦${revenue.toLocaleString()}`}
            icon="💰"
          />

        </div>

        {/* Attendees */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold text-gray-900">
            Attendees
          </h2>

          <p className="mt-1 text-gray-500">
            Live registration and check-in status.
          </p>

          <div className="mt-6 flex justify-end">
  <ExportButton attendees={attendees} />
</div>

<AttendeesTable attendees={attendees} />

        </div>

      </div>

    </main>
  );
}