import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-16">

        {/* Left Side */}
        <div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-600 sm:text-base sm:tracking-[0.3em]">
            About EASTCOSELS
          </p>

          <h2 className="mb-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:mb-6 md:text-5xl">
            Welcome to EASTCOSELS 2026
          </h2>

          <p className="mb-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 md:mb-6">
            EASTCOSELS 2026 is the premier International Conference for South
            East Students of English and Literary Studies, bringing together
            scholars, researchers, lecturers, students, and professionals
            from across Nigeria and beyond.
          </p>

          <p className="mb-8 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 md:mb-10">
            Through keynote presentations, research sessions, networking
            opportunities, and collaborative discussions, the conference
            promotes academic excellence, innovation, leadership, and
            meaningful professional connections.
          </p>

          <a
            href="#registration"
            className="inline-flex rounded-full bg-green-600 px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-2xl sm:px-8 sm:py-4"
          >
            About The Conference →
          </a>

        </div>

        {/* Right Side */}
        <div className="overflow-hidden rounded-3xl shadow-2xl">

          <Image
            src="/images/about.jpg"
            alt="EASTCOSELS conference"
            width={1200}
            height={800}
            className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
          />

        </div>

      </div>
    </section>
  );
}