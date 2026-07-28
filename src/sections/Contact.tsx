export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            We'd Love to Hear From You
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Have questions about registration, accommodation,
            sponsorship or paper submission? Reach out to us anytime.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Side */}

          <div className="space-y-8">

            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Contact Information
              </h3>

              <div className="space-y-5">

                <div>
                  <h4 className="font-bold text-green-700">
                    📍 Venue
                  </h4>

                  <p className="text-gray-600">
                    University of Nigeria, Nsukka (UNN)
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-green-700">
                    📞 Phone
                  </h4>

                  <p className="text-gray-600">
                    +234 9151271990
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-green-700">
                    📧 Email
                  </h4>

                  <p className="text-gray-600">
                    eastcosels2026@gmail.com
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-green-700">
                    🕒 Office Hours
                  </h4>

                  <p className="text-gray-600">
                    Monday – Friday
                    <br />
                    9:00 AM – 5:00 PM
                  </p>
                </div>

              </div>

            </div>

            {/* Google Map Placeholder */}

            <div className="overflow-hidden rounded-3xl shadow-lg">

              <iframe
                src="https://www.google.com/maps?q=University+of+Nigeria+Nsukka&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                className="border-0"
              />

            </div>

          </div>

          {/* Right Side */}

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              Send Us a Message
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-green-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-green-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-green-600"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-green-600"
              />

              <button
                className="rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-green-700"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}