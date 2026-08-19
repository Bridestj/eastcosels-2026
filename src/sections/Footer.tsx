export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-extrabold">
              EASTCOSELS 2026
            </h2>

            <p className="mt-6 leading-8 text-green-100">
              International Conference for South East Students of English and
              Literary Studies, bringing together scholars, researchers and
              students across the globe.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-6 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-4 text-green-100">

              <li>
                <a
                  href="#home"
                  className="transition hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#why-attend"
                  className="transition hover:text-white"
                >
                  Why Attend
                </a>
              </li>

              <li>
                <a
                  href="#speakers"
                  className="transition hover:text-white"
                >
                  Speakers
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="transition hover:text-white"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="transition hover:text-white"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-white"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Conference */}

          <div>
            <h3 className="mb-6 text-xl font-bold">
              Conference
            </h3>

            <ul className="space-y-4 text-green-100">

              <li>
                <a
                  href="#registration"
                  className="transition hover:text-white"
                >
                  Registration
                </a>
              </li>

              <li>
                <a
                  href="#registration"
                  className="transition hover:text-white"
                >
                  Packages
                </a>
              </li>

              <li>
                <a
                  href="#schedule"
                  className="transition hover:text-white"
                >
                  Schedule
                </a>
              </li>

              <li>
                <a
                  href="#venue"
                  className="transition hover:text-white"
                >
                  Venue
                </a>
              </li>

              <li>
                <a
                  href="#venue"
                  className="transition hover:text-white"
                >
                  Accommodation
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-4 text-green-100">

              <p>
                📧 mmesomacaleb8@gmail.com
              </p>

              <p>
                📞 +234 9120201509
              </p>

              <p>
                📍 University of Nigeria,
                <br />
                Nsukka, Enugu State
              </p>

            </div>
          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-green-800"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-green-200">
            © 2026 EASTCOSELS. All Rights Reserved.
          </p>

          <p className="text-center text-green-200">

            Designed & Developed by{" "}

            <span className="font-semibold text-white">
              Caleb Mmesoma
            </span>

            {" • "}

            Digital Design by{" "}

            <span className="font-semibold text-white">
              Dwilliams Exchange
            </span>

          </p>

        </div>

      </div>
    </footer>
  );
}