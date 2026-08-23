export default function DP() {
  return (
    <section
      id="dp"
      className="relative overflow-hidden bg-green-950 py-24 text-white"
    >
      {/* Decorative background elements */}

      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-green-700/30 blur-3xl" />

      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-green-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-4xl text-center">

          {/* Label */}

          <p className="font-semibold uppercase tracking-[0.3em] text-green-300">
            I Will Be There
          </p>

          {/* Heading */}

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Show the World
            <span className="block text-green-300">
              You&apos;ll Be There!
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
            Create your official EASTCOSELS 2026 display picture
            and let everyone know that you&apos;ll be joining us at
            the University of Nigeria, Nsukka.
          </p>

          {/* Event details */}

          <div className="mx-auto mt-8 flex max-w-xl flex-col items-center justify-center gap-3 text-sm font-medium text-green-100 sm:flex-row sm:gap-6">

            <span>📅 August 30, 2026</span>

            <span className="hidden text-green-500 sm:block">
              •
            </span>

            <span>📍 University of Nigeria, Nsukka</span>

          </div>

          {/* CTA */}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="https://getdp.co/weK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-green-900 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-green-50 hover:shadow-2xl"
            >
              Create My EASTCOSELS DP
              <span className="ml-2 text-xl">
                →
              </span>
            </a>

            <a
              href="https://getdp.co/weK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-green-400/60 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:bg-green-900"
            >
              I&apos;ll Be There!
            </a>

          </div>

          {/* Hashtag */}

          <p className="mt-8 text-sm font-semibold tracking-widest text-green-300">
            #EASTCOSELS2026
          </p>

        </div>

        {/* Bottom encouragement card */}

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-green-700/50 bg-white/10 p-6 text-center backdrop-blur-sm sm:p-8">

          <p className="text-lg font-semibold text-white">
            Your DP is more than a picture.
          </p>

          <p className="mt-2 text-sm leading-6 text-green-100 sm:text-base">
            It&apos;s your way of saying:
            <span className="ml-1 font-bold text-white">
              &ldquo;I WILL BE THERE!&rdquo;
            </span>
          </p>

        </div>

      </div>
    </section>
  );
}