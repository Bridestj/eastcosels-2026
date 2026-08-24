
export default function Contact() {
  const inputClassName =
    "w-full rounded-xl border border-gray-300 bg-white p-4 text-base text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100";

  return (
    <section
      id="contact"
      className="bg-gray-50 py-24"
    >
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

            {/* Contact Information */}

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
                  <a
                 href="https://wa.me/2349120201509"
                  target="_blank"
                 rel="noopener noreferrer"
                 className="rounded-full border border-green-600 px-5 py-2 text-green-700"
                 >
                 WhatsApp
      </a>
                </div>

                <div>
                  <h4 className="font-bold text-green-700">
                    📧 Email
                  </h4>

                  <p className="text-gray-600">
                    mmesomacaleb8@gmail.com
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

            {/* Google Map */}

            <div className="overflow-hidden rounded-3xl shadow-lg">

              <iframe
                src="https://www.google.com/maps?q=University+of+Nigeria+Nsukka&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                title="University of Nigeria, Nsukka map"
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

              {/* Full Name */}

              <input
                type="text"
                placeholder="Full Name"
                autoComplete="name"
                className={inputClassName}
              />

              {/* Email */}

              <input
                type="email"
                placeholder="Email Address"
                autoComplete="email"
                className={inputClassName}
              />

              {/* Subject */}

              <input
                type="text"
                placeholder="Subject"
                className={inputClassName}
              />

              {/* Message */}

              <textarea
                rows={6}
                placeholder="Your Message"
                className={inputClassName}
              />

              {/* Submit */}

              <button
                type="submit"
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

