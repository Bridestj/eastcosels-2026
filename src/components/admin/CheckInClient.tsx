"use client";

import { useCallback, useState } from "react";
import QRScanner from "@/components/admin/QRScanner";

type Attendee = {
  registration_id: string;
  full_name: string;
  institution: string;
  registration_category: string;
  payment_status: string;
  checked_in: boolean;
  checked_in_at: string | null;
};

export default function CheckInClient() {
  const [attendee, setAttendee] = useState<Attendee | null>(null);

  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "already" | "pending"
  >("idle");

  const [scannerPaused, setScannerPaused] = useState(false);

  const handleScan = useCallback(async (registrationId: string) => {
    setScannerPaused(true);
    setStatus("pending");
    setMessage("Verifying ticket...");
    setAttendee(null);

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

      setAttendee(result.attendee ?? null);

      if (result.success) {
        setStatus("success");
        setMessage("Check-in successful!");
      } else if (result.alreadyCheckedIn) {
        setStatus("already");
        setMessage("This attendee has already checked in.");
      } else {
        setStatus("error");
        setMessage(
          result.message || "Unable to check in attendee."
        );
      }
    } catch (error) {
      console.error("Check-in request failed:", error);

      setStatus("error");
      setMessage(
        "Unable to connect to the check-in system."
      );
    }
  }, []);

  const handleNextAttendee = () => {
    setAttendee(null);
    setMessage("");
    setStatus("idle");
    setScannerPaused(false);
  };

  return (
    <div className="mt-10 rounded-3xl bg-white p-8 text-center shadow-xl">

      <h2 className="mb-6 text-2xl font-bold text-green-700">
        Scan Attendee Ticket
      </h2>

      <QRScanner
        onScan={handleScan}
        paused={scannerPaused}
      />

      {/* Verifying */}

      {status === "pending" && (
        <div className="mt-6 rounded-2xl bg-yellow-50 p-5">
          <p className="font-semibold text-yellow-700">
            ⏳ {message}
          </p>
        </div>
      )}

      {/* Successful check-in */}

      {status === "success" && attendee && (
        <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6 text-left">

          <p className="text-center text-2xl font-bold text-green-700">
            ✅ CHECK-IN SUCCESSFUL
          </p>

          <div className="mt-5 space-y-3">

            <div>
              <p className="text-xs uppercase text-gray-500">
                Attendee
              </p>

              <p className="text-xl font-bold">
                {attendee.full_name}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-gray-500">
                Registration ID
              </p>

              <p className="font-mono font-bold text-green-700">
                {attendee.registration_id}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-gray-500">
                Institution
              </p>

              <p>
                {attendee.institution}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-gray-500">
                Category
              </p>

              <p>
                {attendee.registration_category}
              </p>
            </div>

          </div>

        </div>
      )}

      {/* Already checked in */}

      {status === "already" && attendee && (
        <div className="mt-6 rounded-2xl border border-yellow-200 bg-yellow-50 p-6 text-left">

          <p className="text-center text-2xl font-bold text-yellow-700">
            ⚠️ ALREADY CHECKED IN
          </p>

          <p className="mt-2 text-center text-sm text-gray-600">
            This attendee has already been checked in.
          </p>

          <div className="mt-5 space-y-3">

            <div>
              <p className="text-xs uppercase text-gray-500">
                Attendee
              </p>

              <p className="text-xl font-bold">
                {attendee.full_name}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-gray-500">
                Registration ID
              </p>

              <p className="font-mono font-bold text-green-700">
                {attendee.registration_id}
              </p>
            </div>

            {attendee.checked_in_at && (
              <div>
                <p className="text-xs uppercase text-gray-500">
                  Checked In At
                </p>

                <p>
                  {new Date(
                    attendee.checked_in_at
                  ).toLocaleString()}
                </p>
              </div>
            )}

          </div>

        </div>
      )}

      {/* Error */}

      {status === "error" && (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6">

          <p className="text-xl font-bold text-red-700">
            ❌ CHECK-IN FAILED
          </p>

          <p className="mt-2 text-sm text-red-600">
            {message}
          </p>

        </div>
      )}

      {/* Scan next */}

      {scannerPaused && (
        <button
          type="button"
          onClick={handleNextAttendee}
          className="mt-8 rounded-xl bg-green-700 px-6 py-3 font-bold text-white shadow-md transition hover:bg-green-800"
        >
          📷 Scan Next Attendee
        </button>
      )}

    </div>
  );
}