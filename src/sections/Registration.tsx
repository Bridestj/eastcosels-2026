import Link from "next/link";
const packages = [
  {
    title: "Student",
    price: "₦12,000",
    badge: "Most Popular",
    features: [
      "Conference Materials",
      "Conference Badge",
      "Certificate of Participation",
      "Refreshments",
    ],
  },
  {
    title: "Regular Delegate",
    price: "₦35,000",
    badge: "Premium",
    features: [
      "Everything in Student",
      "VIP Seating",
      "Networking Dinner",
      "Special Conference Souvenir",
    ],
  },
  {
    title: "International Delegate",
    price: "$199",
    badge: "International",
    features: [
      "Everything in Non-students",
      "Airport Welcome Guide",
      "International Delegate Kit",
      "Priority Conference Support",
    ],
  },
];

export default function Registration() {
  return (
    <section id="registration" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
            Registration
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Secure Your Seat at EASTCOSELS 2026
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Choose the registration package that best suits you.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {packages.map((pkg) => (

            <div
              key={pkg.title}
              className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                {pkg.badge}
              </span>

              <h3 className="mt-6 text-3xl font-bold text-gray-900">
                {pkg.title}
              </h3>

              <p className="mt-4 text-5xl font-extrabold text-green-700">
                {pkg.price}
              </p>

              <ul className="mt-8 space-y-4">

                {pkg.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="text-green-600">✔</span>

                    {feature}

                  </li>

                ))}

              </ul>

              <Link
                href={`/register?package=${pkg.title}`}
                className="mt-10 block w-full rounded-full bg-green-600 py-4 text-center font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-green-700"
                >
                Register Now
</Link>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}