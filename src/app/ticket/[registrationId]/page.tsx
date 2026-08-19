import TicketCard from "@/components/ticket/TicketCard";
import { supabaseAdmin } from "@/lib/supabase-admin";

type Props = {
  params: Promise<{
    registrationId: string;
  }>;
};

export default async function TicketPage({ params }: Props) {
  const { registrationId } = await params;

  const { data: attendee, error } = await supabaseAdmin
    .from("registrations")
    .select("*")
    .eq("registration_id", registrationId)
    .single();

  if (error || !attendee) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-red-600">
          Ticket Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center p-6">
      <TicketCard attendee={attendee} />
    </main>
  );
}