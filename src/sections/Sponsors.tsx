export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
            Sponsors & Partners
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Proudly Supported By
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            EASTCOSELS 2026 welcomes organizations and institutions
            that share our passion for academic excellence,
            innovation and collaboration.
          </p>

        </div>

        {/* Logo Grid */}

        {/* Official Sponsors */}

<h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
  Official Sponsors
</h3>

<div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

  {/* NASELS */}
  <div className="flex h-32 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
    <img
      src="/images/sponsors/nasels.jpeg"
      alt="NASELS Logo"
      className="h-24 w-auto object-contain transition duration-300 hover:scale-110"
    />
  </div>

  {/* UNN */}
  <div className="flex h-32 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
    <img
      src="/images/sponsors/unn.jpg"
      alt="UNN Logo"
      className="h-24 w-auto object-contain transition duration-300 hover:scale-110"
    />
  </div>

  {/* Future Sponsor */}
  <div className="flex h-32 items-center justify-center rounded-2xl border border-dashed border-green-300 bg-gray-50 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
    <p className="text-lg font-semibold text-gray-400">
      Coming Soon
    </p>
  </div>

  {/* Future Sponsor */}
  <div className="flex h-32 items-center justify-center rounded-2xl border border-dashed border-green-300 bg-gray-50 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
    <p className="text-lg font-semibold text-gray-400">
      Coming Soon
    </p>
  </div>

</div>

{/* Digital Partners */}

<h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
  Digital Partners
</h3>

<div className="grid gap-8 md:grid-cols-2">

  {/* Your Card */}

  <div className="rounded-3xl border border-green-200 bg-green-50 p-8 shadow-lg">

    <div className="text-5xl">💻</div>

    <h4 className="mt-5 text-2xl font-bold">
      Caleb Mmesoma
    </h4>

    <p className="mt-3 text-gray-600">
      Lead Web Developer & Technical Support
    </p>

    <div className="mt-6 flex gap-4">

      <a
        href="mailto:mmesomacaleb8@gmail.com"
        className="rounded-full bg-green-600 px-5 py-2 text-white"
      >
        Email
      </a>

      <a
        href="https://wa.me/2349120201509"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-green-600 px-5 py-2 text-green-700"
      >
        WhatsApp
      </a>

    </div>

  </div>

  {/* Graphic Designer */}

  <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

    <div className="text-5xl">🎨</div>

    <h4 className="mt-5 text-2xl font-bold">
      Dwilliams Exchange
    </h4>

    <p className="mt-3 text-gray-600">
      Lead Graphic Designer & Brand Identity
    </p>

    <div className="mt-6">
        <a
        href="mailto:ugwokeoliver20@gmail.com"
        className="rounded-full bg-green-600 px-5 py-2 text-white"
      >
        Email
      </a>
        

      <a
        href="https://wa.me/2348141296026"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-green-600 px-5 py-2 text-green-700"
      >
        WhatsApp
      </a>

    </div>

  </div>

</div>

        {/* CTA */}

        <div className="mt-20 text-center">

          <h3 className="text-3xl font-bold text-gray-900">
            Interested in Partnering with EASTCOSELS?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            We welcome sponsorships and partnerships from
            organizations committed to education,
            research and innovation.
          </p>

          <a
          href="mailto:mmesomacaleb8@gmail.com?subject=EASTCOSELS%202026%20Sponsorship%20Inquiry"
          className="mt-8 inline-block rounded-full bg-green-600 px-10 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-green-700"
           >
           Become a Sponsor
          </a>

        </div>

      </div>
    </section>
  );
}