export default function About() {
  return (
    <section
  id="about"
  className="bg-white py-24"
>
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">

        {/* Left Side */}
        <div>

          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-green-600">
            About EASTCOSELS
          </p>

          <h2 className="mb-6 text-5xl font-bold text-gray-900">
            Welcome to EASTCOSELS 2026
          </h2>

          <p className="mb-6 text-lg leading-8 text-gray-600">
             EASTCOSELS 2026 is the premier International Conference for South East
             Students of English and Literary Studies, bringing together scholars,
             researchers, lecturers, students, and professionals from across Nigeria
             and beyond.
         </p>

<p className="mb-10 text-lg leading-8 text-gray-600">
  Through keynote presentations, research sessions, networking opportunities,
  and collaborative discussions, the conference promotes academic excellence,
  innovation, leadership, and meaningful professional connections.
</p>
          <button className="rounded-full bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-2xl">
            About The Conference →
          </button>

        </div>

        {/* Right Side */}

        <div>

          <img
            src="/images/about.jpg"
            alt="Conference"
            className="rounded-3xl object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
          />

        </div>

      </div>
    </section>
  );
}