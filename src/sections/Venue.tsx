export default function Venue() {
  return (
    <section
      id="venue"
      className="bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
            Venue & Accommodation
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Plan Your Journey to EASTCOSELS 2026
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Everything you need to know about the conference venue,
            accommodation and travel information.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Venue */}

          <div className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="mb-5 text-5xl">
              📍
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Conference Venue
            </h3>

            <p className="mt-5 leading-8 text-gray-600">
              University of Nigeria, Nsukka (UNN),
              Enugu State, Nigeria.
            </p>

            <p className="mt-4 text-gray-600">
              The conference will hold within the beautiful
              University of Nigeria campus.
            </p>

            <a
              href="https://maps.google.com/?q=University+of+Nigeria+Nsukka"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              📍 Get Directions
            </a>

          </div>

          {/* Accommodation */}

          <div className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="mb-5 text-5xl">
              🛏️
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Accommodation
            </h3>

            <ul className="mt-6 space-y-4 text-gray-600 leading-7">

              <li>✅Accommodation is included in the registration package for all delegates.</li>

            </ul>

          </div>

          {/* Travel */}

          <div className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="mb-5 text-5xl">
              ✈️
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Travel Information
            </h3>

            <ul className="mt-6 space-y-4 text-gray-600 leading-7">

              <li>🛬 Nearest Airport: Akanu Ibiam International Airport, Enugu.</li>

              <li>🚕 Taxis and ride-hailing services are available from the airport.</li>

              <li>📞 Additional travel guidance will be shared before the conference.</li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}