"use client";

import * as XLSX from "xlsx";

type Attendee = {
  registration_id: string;
  full_name: string;
  institution: string;
  registration_category: string;
  payment_status: string;
  amount_paid?: number;
  checked_in?: boolean;
  checked_in_at?: string | null;
};

type Props = {
  attendees: Attendee[];
};

export default function ExportButton({ attendees }: Props) {
  const handleExport = () => {
    const exportData = attendees.map((attendee) => ({
      "Registration ID": attendee.registration_id,
      "Full Name": attendee.full_name,
      Institution: attendee.institution,
      Category: attendee.registration_category,
      "Payment Status": attendee.payment_status,
      "Amount Paid": attendee.amount_paid ?? 0,
      "Checked In": attendee.checked_in ? "Yes" : "No",
      "Checked In At": attendee.checked_in_at
        ? new Date(attendee.checked_in_at).toLocaleString()
        : "",
    }));

    // Create worksheet
    const worksheet = XLSX.utils.json_to_sheet(exportData);

    // Set comfortable column widths
    worksheet["!cols"] = [
      { wch: 24 }, // Registration ID
      { wch: 28 }, // Full Name
      { wch: 30 }, // Institution
      { wch: 22 }, // Category
      { wch: 18 }, // Payment Status
      { wch: 16 }, // Amount Paid
      { wch: 14 }, // Checked In
      { wch: 28 }, // Checked In At
    ];

    // Create workbook
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Attendees"
    );

    // Download
    XLSX.writeFile(
      workbook,
      "EASTCOSELS_2026_Attendees.xlsx"
    );
  };

  return (
    <button
      onClick={handleExport}
      className="rounded-xl bg-green-700 px-5 py-3 font-bold text-white shadow-md transition hover:bg-green-800"
    >
      📊 Export Attendees
    </button>
  );
}