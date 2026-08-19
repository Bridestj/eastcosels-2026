"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminNav() {
  const pathname = usePathname();

  const links = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: "📊",
    },
    {
      name: "Check-in",
      href: "/admin/check-in",
      icon: "📷",
    },
  ];

  return (
    <nav className="mb-8 rounded-2xl bg-white p-3 shadow-lg">
      <div className="flex flex-col gap-2 sm:flex-row">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition ${
                active
                  ? "bg-green-700 text-white"
                  : "text-gray-600 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}