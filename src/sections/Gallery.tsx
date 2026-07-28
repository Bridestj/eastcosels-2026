const gallery = [
  {
    title: "Keynote Session",
    image: "/images/gallery/keynote.jpg",
  },
  {
    title: "Research Presentations",
    image: "/images/gallery/presentation.jpg",
  },
  {
    title: "Cultural Day",
    image: "/images/gallery/cultural.jpg",
  },
  {
    title: "Sports Festival",
    image: "/images/gallery/sports.jpg",
  },
  {
    title: "Bonfire Night",
    image: "/images/gallery/bonfire.jpeg",
  },
  {
    title: "Networking",
    image: "/images/gallery/networking.jpeg",
  },
  {
    title: "Awards Ceremony",
    image: "/images/gallery/awards.jpg",
  },
  {
    title: "Group Photograph",
    image: "/images/gallery/group.jpg",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-green-600">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Experience EASTCOSELS
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            A glimpse into the inspiring moments, vibrant culture,
            academic excellence and unforgettable experiences that define
            EASTCOSELS.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {gallery.map((item) => (

            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl shadow-lg"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="bg-white p-5">

                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}