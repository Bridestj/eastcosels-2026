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
    title: "Alumini",
    price: "₦20,000",
    badge: "Premium",
    features: [
      "Everything in Student",
      "Eastcosel polo",
      "Special Conference Souvenir",
    ],
  },
  {
    title: "International Delegate",
    price: "$199",
    badge: "International",
    features: [
      "Everything in Alumini",
      "Airport Welcome Guide",
      "International Delegate Kit",
      "Priority Conference Support",
    ],
  },
];

export default function Registration() {
  return (
    <section
      id="registration"
      className="bg-white py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-16">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600 sm:text-base sm:tracking-[0.3em]">
            Registration
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:mt-4 sm:text-4xl">
            Secure Your Seat at EASTCOSELS 2026
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Choose the registration package that best suits you.
          </p>

        </div>

        {/* Registration Cards */}
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">

          {packages.map((pkg) => (

            <div
              key={pkg.title}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl sm:p-8 lg:p-10"
            >

              {/* Badge */}
              <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                {pkg.badge}
              </span>

              {/* Package Name */}
              <h3 className="mt-5 text-2xl font-bold text-gray-900 sm:mt-6 sm:text-3xl">
                {pkg.title}
              </h3>

              {/* Price */}
              <p className="mt-3 text-4xl font-extrabold text-green-700 sm:mt-4 sm:text-5xl">
                {pkg.price}
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-4 sm:mt-8">

                {pkg.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-start gap-3 text-base leading-6 text-gray-700"
                  >
                    <span className="mt-0.5 shrink-0 text-green-600">
                      ✔
                    </span>

                    <span>{feature}</span>
                  </li>

                ))}

              </ul>

              {/* Register Button */}
              <Link
                href={`/register?package=${encodeURIComponent(pkg.title)}`}
                className="mt-8 block w-full rounded-full bg-green-600 py-3.5 text-center font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-green-700 sm:mt-10 sm:py-4"
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