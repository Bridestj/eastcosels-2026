import Image from "next/image";
import Countdown from "@/components/Countdown";
export default function Hero() {
  return (
    <section  id="home"
  className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/hero.jpg')",
  }}
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-green-950/57"></div>

  {/* Hero Content */}
  <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center text-white">
    <div className="mb-10 flex items-center justify-center gap-8">

  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl">
    <Image
      src="/logos/eastcosels-logo.jpeg"
      alt="EASTCOSELS Logo"
      width={70}
      height={70}
      className="object-contain"
    />
  </div>

  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl">
    <Image
      src="/logos/nasels-logo.jpeg"
      alt="NASELS Logo"
      width={70}
      height={70}
      className="object-contain"
    />
  </div>

</div>

    <div className="mb-6 rounded-full border border-green-300 bg-white/10 px-6 py-2 backdrop-blur-sm">
  <p className="text-sm font-semibold uppercase tracking-[4px] text-green-100">
    International Conference
  </p>
</div>

        <h1 className="text-6xl font-extrabold text-white md:text-8xl tracking-wide">
          EASTCOSELS 2026
        </h1>

        <p className="mt-3 text-2xl font-semibold text-green-100">
          International Conference for South East Students of English and Literary Studies
        </p>
        <div className="mt-6">
  <p className="text-green-200 text-lg uppercase tracking-widest">
    Theme
  </p>

  <h2 className="mt-2 text-3xl font-bold italic text-yellow-300">
    “FROM CREATIVE ENERGY TO KNOWLEDGE ECONOMY: POSITIONING LITERARY AND LINGUISTIC MINDS FOR ECONOMIC COMPETITIVENESS”
  </h2>
</div>

        <div className="mt-8 h-1 w-28 rounded-full bg-yellow-400"></div>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-green-50">
          Bringing together scholars, researchers and students to explore
          literature, language and innovation while strengthening academic
          collaboration across the South East.
        </p>

        <div className="mt-10 rounded-2xl border border-green-200 bg-white p-6 shadow-lg">
          <p className="text-lg font-semibold text-green-700">
            📍 University of Nigeria, Nsukka (UNN)
          </p>

          <p className="mt-2 text-gray-700">
            📅 August 30, 2026
          </p>
        </div>

        <div className="mt-10 flex gap-4">
          <button className="rounded-full bg-green-600 px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-green-700">
            Register Now
          </button>

          <button className="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:hover:bg-white
            hover:text-green-700">
            Learn More
          </button>
        </div>
        <div className="mt-16 rounded-3xl bg-white p-8 shadow-2xl">
  <Countdown />
</div>
        

      </div>
    </section>
  );
}