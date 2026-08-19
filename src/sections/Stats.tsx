export default function Stats() {
  return (
    <section
      id="stats"
      className="bg-green-700 py-16 sm:py-20"
    >
      {/* Section Heading */}
      <div className="mx-auto mb-10 max-w-3xl px-4 text-center text-white sm:mb-12 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-green-200 sm:text-sm sm:tracking-[0.4em]">
          EASTCOSELS BY THE NUMBERS
        </p>

        <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:mt-4 sm:text-4xl">
          A Growing Community of Scholars
        </h2>
      </div>

      {/* Statistics */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-0 px-4 text-center text-white sm:px-6 md:grid-cols-4 md:gap-8">

        {/* Universities */}
        <div className="border-b border-r border-green-500 px-3 pb-7 pt-2 transition-transform duration-300 hover:-translate-y-2 sm:px-4 md:border-b-0 md:border-r md:pb-0 md:pt-0">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            10+
          </h2>

          <p className="mt-2 text-base sm:mt-3 sm:text-lg">
            Universities
          </p>
        </div>

        {/* Delegates */}
        <div className="border-b border-green-500 px-3 pb-7 pt-2 transition-transform duration-300 hover:-translate-y-2 sm:px-4 md:border-b-0 md:border-r md:pb-0 md:pt-0">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            1000+
          </h2>

          <p className="mt-2 text-base sm:mt-3 sm:text-lg">
            Delegates
          </p>
        </div>

        {/* Guest Speakers */}
        <div className="border-r border-green-500 px-3 pb-7 pt-7 transition-transform duration-300 hover:-translate-y-2 sm:px-4 md:border-r md:pb-0 md:pt-0">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            7+
          </h2>

          <p className="mt-2 text-base sm:mt-3 sm:text-lg">
            Guest Speakers
          </p>
        </div>

        {/* Sponsors */}
        <div className="px-3 pb-7 pt-7 transition-transform duration-300 hover:-translate-y-2 sm:px-4 md:pb-0 md:pt-0">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            5+
          </h2>

          <p className="mt-2 text-base sm:mt-3 sm:text-lg">
            Sponsors
          </p>
        </div>

      </div>
    </section>
  );
}