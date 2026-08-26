"use client";

import { useMemo, useState } from "react";

type Props = {
  attendees: any[];
};

export default function AttendeesTable({ attendees }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [payment, setPayment] = useState("All Payments");
  const [checkIn, setCheckIn] = useState("All Check-ins");

  const filteredAttendees = useMemo(() => {
    return attendees.filter((attendee) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        attendee.full_name?.toLowerCase().includes(searchValue) ||
        attendee.registration_id?.toLowerCase().includes(searchValue) ||
        attendee.institution?.toLowerCase().includes(searchValue);

      const matchesCategory =
        category === "All Categories" ||
        attendee.registration_category === category;

      const matchesPayment =
        payment === "All Payments" ||
        attendee.payment_status === payment;

      const matchesCheckIn =
        checkIn === "All Check-ins" ||
        (checkIn === "Checked In" && attendee.checked_in === true) ||
        (checkIn === "Not Checked In" && attendee.checked_in === false);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPayment &&
        matchesCheckIn
      );
    });
  }, [attendees, search, category, payment, checkIn]);

  return (
    <div className="mt-10">
      {/* Filters */}
      <div className="mb-6 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg md:flex-row">
        <input
          type="text"
          placeholder="🔍 Search attendee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-xl border p-3 outline-none focus:border-green-700"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border p-3"
        >
          <option>All Categories</option>
          <option>Student</option>
          <option>Alumni</option>
          <option>International Delegate</option>
        </select>

        <select
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          className="rounded-xl border p-3"
        >
          <option>All Payments</option>
          <option>Paid</option>
          <option>Pending</option>
        </select>

        <select
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="rounded-xl border p-3"
        >
          <option>All Check-ins</option>
          <option>Checked In</option>
          <option>Not Checked In</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl bg-white shadow-lg">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-bold text-green-700">
            Registered Attendees
          </h2>

          <span className="text-sm text-gray-500">
            {filteredAttendees.length} attendee(s)
          </span>
        </div>

        <table className="min-w-full">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="px-6 py-4 text-left">ID</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Institution</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Payment</th>
              <th className="px-6 py-4 text-left">Check-in</th>
              <th className="px-6 py-4 text-left">Ticket</th>
            </tr>
          </thead>

          <tbody>
            {filteredAttendees.map((attendee) => (
              <tr
                key={attendee.id}
                className="border-b hover:bg-green-50"
              >
                {/* ID */}
                <td className="whitespace-nowrap px-6 py-4 font-mono text-sm">
                  {attendee.registration_id ?? (
                    <span className="italic text-gray-400">
                      Pending
                    </span>
                  )}
                </td>

                {/* Name */}
                <td className="px-6 py-4 font-medium">
                  {attendee.full_name}
                </td>

                {/* Institution */}
                <td className="px-6 py-4">
                  {attendee.institution}
                </td>

                {/* Category */}
                <td className="px-6 py-4">
                  {attendee.registration_category}
                </td>

                {/* Payment */}
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      attendee.payment_status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {attendee.payment_status}
                  </span>
                </td>

                {/* Check-in */}
                <td className="px-6 py-4">
                  {attendee.checked_in ? (
                    <div>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                        ✅ Checked In
                      </span>

                      {attendee.checked_in_at && (
                        <p className="mt-2 text-xs text-gray-500">
                          {new Date(
                            attendee.checked_in_at
                          ).toLocaleString()}
                        </p>
                      )}
                    </div>
                  ) : (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
                      ⏳ Not Checked In
                    </span>
                  )}
                </td>

                {/* Ticket */}
                <td className="px-6 py-4">
                  {attendee.registration_id ? (
                    <a
                      href={`/ticket/${attendee.registration_id}`}
                      className="font-semibold text-green-700 hover:underline"
                    >
                      View
                    </a>
                  ) : (
                    <span className="text-gray-400">
                      —
                    </span>
                  )}
                </td>
              </tr>
            ))}

            {filteredAttendees.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="py-10 text-center text-gray-500"
                >
                  No attendees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}