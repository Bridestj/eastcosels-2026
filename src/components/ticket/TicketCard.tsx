"use client";

import Image from "next/image";
import Link from "next/link";
import TicketQRCode from "./QRCode";

type TicketProps = {
  attendee: {
    full_name: string;
    registration_id: string;
    registration_category: string;
    institution: string;
    payment_status: string;
  };
};

export default function TicketCard({ attendee }: TicketProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-md">
      <div
        id="ticket"
        className="relative w-full overflow-hidden rounded-3xl border border-green-200 bg-white shadow-2xl"
      >
        {/* Left Accent */}
        <div className="absolute left-0 top-0 h-full w-3 bg-gradient-to-b from-green-900 via-green-700 to-green-500"></div>

        {/* Watermark */}
        <Image
          src="/logos/eastcosels-logo.jpeg"
          alt="Watermark"
          width={260}
          height={260}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.04]"
          loading="eager"
        />

        {/* Header */}
        <div className="bg-gradient-to-r from-green-900 via-green-700 to-green-600 px-6 py-5">
          <div className="flex items-center justify-between gap-3">
            <Image
              src="/logos/nasels-logo.jpeg"
              alt="NASELS"
              width={55}
              height={55}
              className="h-auto rounded-full bg-white p-1"
            />

            <div className="text-center text-white">
              <h1 className="text-2xl font-black tracking-wide">
                EASTCOSELS 2026
              </h1>

              <p className="text-xs opacity-90">
                International Conference Pass
              </p>

              <div className="mt-3 flex justify-center">
                <div className="rounded-full bg-white/20 px-4 py-1 text-xs font-bold tracking-wide">
                  OFFICIAL ADMISSION PASS
                </div>
              </div>
            </div>

            <Image
              src="/logos/eastcosels-logo.jpeg"
              alt="EASTCOSELS"
              width={55}
              height={55}
              className="rounded-full bg-white p-1"
            />
          </div>
        </div>

        {/* Conference */}
        <div className="border-b bg-green-50 px-6 py-4 text-center">
          <p className="font-bold text-green-700">
            📅 30 August 2026
          </p>

          <p className="text-sm text-gray-600">
            📍 University of Nigeria, Nsukka
          </p>
        </div>

        {/* Body */}
        <div className="relative space-y-6 p-6 pl-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Attendee
            </p>

            <h2 className="mt-1 text-3xl font-black text-green-900">
              {attendee.full_name}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-5 text-sm">
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
                Category
              </p>

              <p>{attendee.registration_category}</p>
            </div>

            <div>
              <p className="text-xs uppercase text-gray-500">
                Institution
              </p>

              <p>{attendee.institution}</p>
            </div>

            <div>
              <p className="text-xs uppercase text-gray-500">
                Payment
              </p>

              <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                {attendee.payment_status}
              </span>
            </div>
          </div>

          {/* QR Code */}
          <div className="border-t pt-6 text-center">
            <div className="mx-auto inline-block rounded-2xl border border-green-200 bg-green-50 p-5 shadow-sm">
              <TicketQRCode value={attendee.registration_id} />
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Scan this QR Code during conference check-in.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t bg-gray-50 px-6 py-4 text-center">
          <p className="text-xs font-semibold text-gray-600">
            Official EASTCOSELS 2026 Conference Pass
          </p>

          <p className="mt-1 text-[10px] text-gray-400">
            Powered by NASELS South-East Zone
          </p>
        </div>
      </div>

      {/* Ticket Actions */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        {/* Print / Save */}
        <button
          type="button"
          onClick={handlePrint}
          className="flex-1 rounded-xl bg-green-700 px-6 py-3 text-center font-bold text-white transition hover:bg-green-800"
        >
          🖨️ Print / Save Ticket
        </button>

        {/* Back Home */}
        <Link
          href="/"
          className="flex-1 rounded-xl border-2 border-green-700 bg-white px-6 py-3 text-center font-bold text-green-700 transition hover:bg-green-50"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}