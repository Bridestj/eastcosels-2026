import Image from "next/image";
import Countdown from "@/components/Countdown";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-green-950/57"></div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-16 text-center text-white sm:px-6 md:py-20">

        {/* Logos */}
        <div className="mb-8 flex items-center justify-center gap-4 sm:mb-10 sm:gap-8">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl sm:h-24 sm:w-24">
            <Image
              src="/logos/eastcosels-logo.jpeg"
              alt="EASTCOSELS Logo"
              width={70}
              height={70}
              className="h-auto w-14 object-contain sm:w-[70px]"
            />
          </div>

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl sm:h-24 sm:w-24">
            <Image
              src="/logos/nasels-logo.jpeg"
              alt="NASELS Logo"
              width={70}
              height={70}
              className="h-auto w-14 object-contain sm:w-[70px]"
            />
          </div>

        </div>

        {/* Conference Label */}
        <div className="mb-5 rounded-full border border-green-300 bg-white/10 px-4 py-2 backdrop-blur-sm sm:mb-6 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-green-100 sm:text-sm sm:tracking-[4px]">
            International Conference
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-full text-4xl font-extrabold leading-tight tracking-wide text-white sm:text-5xl md:text-7xl lg:text-8xl">
          EASTCOSELS 2026
        </h1>

        {/* Conference Description */}
        <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-green-100 sm:text-xl sm:leading-8 md:text-2xl">
          International Conference for South East Students of English and
          Literary Studies
        </p>

        {/* Theme */}
        <div className="mt-7 max-w-4xl">
          <p className="text-sm uppercase tracking-[3px] text-green-200 sm:text-lg sm:tracking-widest">
            Theme
          </p>

          <h2 className="mt-2 text-xl font-bold italic leading-8 text-yellow-300 sm:text-2xl sm:leading-9 md:text-3xl md:leading-10">
            FROM CREATIVE ENERGY TO KNOWLEDGE ECONOMY: POSITIONING LITERARY
            AND LINGUISTIC MINDS FOR LEADERSHIP AND ECONOMIC COMPETITIVENESS
          </h2>
        </div>

        {/* Divider */}
        <div className="mt-7 h-1 w-24 rounded-full bg-yellow-400 sm:mt-8 sm:w-28"></div>

        {/* Description */}
        <p className="mt-7 max-w-3xl text-base leading-7 text-green-50 sm:mt-8 sm:text-lg sm:leading-8">
          Bringing together scholars, researchers and students to explore
          literature, language and innovation while strengthening academic
          collaboration across the South East.
        </p>

        {/* Venue / Date */}
        <div className="mt-8 w-full max-w-md rounded-2xl border border-green-200 bg-white p-5 shadow-lg sm:mt-10 sm:p-6">
          <p className="text-base font-semibold text-green-700 sm:text-lg">
            📍 University of Nigeria, Nsukka (UNN)
          </p>

          <p className="mt-2 text-sm text-gray-700 sm:text-base">
            📅 August 30, 2026
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">

          <a
            href="#registration"
            className="w-full rounded-full bg-green-600 px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-green-700 sm:w-auto"
          >
            Register Now
          </a>

          <a
            href="#about"
            className="w-full rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-green-700 sm:w-auto"
          >
            Learn More
          </a>

        </div>

        {/* Countdown */}
        <div className="mt-12 w-full max-w-2xl rounded-3xl bg-white p-5 shadow-2xl sm:mt-16 sm:p-8">
          <Countdown />
        </div>

      </div>
    </section>
  );
}