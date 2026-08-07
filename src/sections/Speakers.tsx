const speakers = [
  {
    name: "Eric Gugua",
    title: "Keynote Speaker",
    institution: "Social Media Influencer",
    image: "/images/speaker1.jpeg",
  },
  {
    name: "Prof. C.F. Ononye",
    title: "HOD UNN",
    image: "/images/speaker2.jpg",
  },
  {
    name: "Sis. Dr. Mary Janepatrick",
    title: "Staff Adviser",
    image: "images/speaker3.jpg",
  },
];

export default function Speakers() {
  return (
    <section  id="speakers" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-bold uppercase tracking-[0.4em] text-green-600">
            Featured Speakers
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-gray-900">
            Meet Our Distinguished Speakers
          </h2>

        </div>

        <div className="grid gap-10 md:grid-cols-3">

          {speakers.map((speaker) => (

            <div
              key={speaker.name}
              className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <img
                src={speaker.image}
                alt={speaker.name}
                className="mx-auto mb-6 h-40 w-40 rounded-full object-cover"
              />

              <h3 className="text-2xl font-bold text-gray-900">
                {speaker.name}
              </h3>

              <p className="mt-2 font-semibold text-green-700">
                {speaker.title}
              </p>

              <p className="mt-2 text-gray-600">
                {speaker.institution}
              </p>

              <button className="mt-8 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-700">
                View Profile
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}