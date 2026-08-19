"use client";

import { useState } from "react";

type Attendee = {
  registration_id: string;
  full_name: string;
  institution: string;
  registration_category: string;
  payment_status: string;
  checked_in: boolean;
  checked_in_at: string | null;
};

export default function AttendeeSearch() {
  const [query, setQuery] = useState("");
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const searchAttendees = async () => {
    if (!query.trim()) {
      setAttendees([]);
      setMessage("Enter a name or registration ID.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        `/api/check-in/search?q=${encodeURIComponent(query.trim())}`
      );

      const result = await response.json();

      if (!response.ok) {
        setAttendees([]);
        setMessage(result.message || "Unable to search attendees.");
        return;
      }

      setAttendees(result.attendees || []);

      if (!result.attendees?.length) {
        setMessage("No attendee found.");
      }
    } catch (error) {
      console.error("Search error:", error);
      setAttendees([]);
      setMessage("Unable to connect to the search system.");
    } finally {
      setLoading(false);
    }
  };

  const checkInAttendee = async (registrationId: string) => {
    try {
      const response = await fetch("/api/check-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          registrationId,
        }),
      });

      const result = await response.json();

      if (result.attendee) {
        setAttendees((current) =>
          current.map((attendee) =>
            attendee.registration_id === registrationId
              ? result.attendee
              : attendee
          )
        );
      }

      if (!result.success) {
        alert(result.message || "Unable to check in attendee.");
        return;
      }

      alert("Check-in successful!");
    } catch (error) {
      console.error("Manual check-in error:", error);
      alert("Unable to connect to the check-in system.");
    }
  };

  return (
    <div className="mt-8 rounded-3xl bg-white p-6 shadow-xl">

      <div className="text-center">
        <h2 className="text-2xl font-bold text-green-700">
          Search Attendee
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Search by name or registration ID if the QR code cannot be scanned.
        </p>
      </div>

      <div className="mx-auto mt-6 flex max-w-2xl gap-3">

        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              searchAttendees();
            }
          }}
          placeholder="Name or registration ID..."
          className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />

        <button
          type="button"
          onClick={searchAttendees}
          disabled={loading}
          className="rounded-xl bg-green-700 px-6 py-3 font-bold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Searching..." : "Search"}
        </button>

      </div>

      {message && (
        <p className="mt-5 text-center text-sm text-gray-500">
          {message}
        </p>
      )}

      {attendees.length > 0 && (
        <div className="mx-auto mt-6 max-w-3xl space-y-4">

          {attendees.map((attendee) => (
            <div
              key={attendee.registration_id}
              className="rounded-2xl border border-gray-200 p-5"
            >

              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {attendee.full_name}
                  </h3>

                  <p className="mt-1 font-mono text-sm text-green-700">
                    {attendee.registration_id}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {attendee.institution}
                  </p>

                  <p className="text-sm text-gray-500">
                    {attendee.registration_category}
                  </p>
                </div>

                <div className="text-left md:text-right">

                  <p
                    className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                      attendee.payment_status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {attendee.payment_status}
                  </p>

                  {attendee.checked_in ? (
                    <div className="mt-3">
                      <p className="font-bold text-yellow-700">
                        ⚠️ Already Checked In
                      </p>

                      {attendee.checked_in_at && (
                        <p className="mt-1 text-xs text-gray-500">
                          {new Date(
                            attendee.checked_in_at
                          ).toLocaleString()}
                        </p>
                      )}
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        checkInAttendee(
                          attendee.registration_id
                        )
                      }
                      className="mt-3 rounded-xl bg-green-700 px-5 py-2 font-bold text-white transition hover:bg-green-800"
                    >
                      Check In
                    </button>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}