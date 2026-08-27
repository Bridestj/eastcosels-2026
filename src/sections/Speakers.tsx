const speakers = [
  {
    name: "Comr. Egbo Caleb Somtochukwu",
    title: "Host",
    image: "/images/speaker1.jpeg",
  },
    {
    name: "Racheal Okonkwo",
    title: "Guest speaker",
    image: "/images/speaker10.jpeg",
  },
  {
    name: "Vanessa Haripersad",
    title: "Founder/ CEO OF Shankara People Solutions Leadership and Resilience Coach and Mentor",
    image: "/images/speaker12.jpeg",
  },
  {
    name: "Eze Nnaemeka Eze",
    title: "Head, Department of English and literary Studies, UNN",
    image: "/images/speaker13.png",
  },
  {
    name: "Prof. C.F. Ononye",
    title: "Head, Department of English and literary Studies, UNN",
    image: "/images/speaker2.jpg",
  },
  {
    name: "Rev. Sis. Dr. Mary Janepatrick",
    title: "Staff Adviser,  Department of English and literary Studies, UNN",
    image: "/images/speaker3.jpg",
  },
  {
    name: "Prof Aderemi Raji–Oyelade",
    title: "NASELS Nigeria grand patron",
    image: "/images/speaker11.jpeg",
  },

  {
    name: "Ogbonna Angela Onyedikachukwu",
    title: "President, Department of English and literary Studies, UNN",
    image: "/images/speaker4.jpeg",
  },

  {
    name: "Ven. Prof. John Ikechukwu Obasikene",
    title: "Dean, Faculty of Arts and Humanities, ESUT",
    image: "/images/speaker5.jpeg",
  },
  {
    name: "Beauty Onyenyiri",
    title: "Writer | Educator | Public Speaker",
    image: "/images/speaker6.jpeg",
  },
  {
    name: "Ikenna Ezenwa",
    title: "Panelist",
    image: "/images/speaker7.jpeg",
  },
  
  {
    name: "Stephen Chima",
    title: "Speaker",
    image: "/images/speaker8.jpeg",
  },
  {
    name: "Michael Chiedoziem Chukwudera",
    title: "Guest Author",
    image: "/images/speaker9.jpeg",
  },
];

export default function Speakers() {
  return (
    <section
      id="speakers"
      className="bg-white py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-16">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-600 sm:text-base sm:tracking-[0.4em]">
            Host and Speakers
          </p>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:mt-4 sm:text-4xl md:text-5xl">
            Meet Our Distinguished Host and Speakers
          </h2>

        </div>

        {/* Speakers */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 md:gap-10">

          {speakers.map((speaker) => (

            <div
              key={speaker.name}
              className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl sm:p-8"
            >

              {/* Speaker Image */}
              <img
                src={speaker.image}
                alt={speaker.name}
                className="mx-auto mb-5 h-32 w-32 rounded-full object-cover sm:mb-6 sm:h-40 sm:w-40"
              />

              {/* Name */}
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                {speaker.name}
              </h3>

              {/* Role */}
              <p className="mt-2 font-semibold text-green-700">
                {speaker.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}