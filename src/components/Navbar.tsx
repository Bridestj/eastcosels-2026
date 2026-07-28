"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
  className={`sticky top-0 z-50 transition-all duration-300 ${
    scrolled
      ? "border-b border-gray-200 bg-white/95 shadow-lg backdrop-blur"
      : "bg-transparent"
  }`}
>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logos/eastcosels-logo.jpeg"
            alt="EASTCOSELS Logo"
            width={50}
            height={50}
          />

          <div>
            <h1 className="text-xl font-extrabold text-green-900">
              EASTCOSELS
            </h1>

            <p className="text-xs tracking-[4px] text-gray-500">
              2026
            </p>
          </div>
        </div>

        {/* Navigation */}

        <ul className="hidden gap-8 font-medium text-gray-700 lg:flex">

  <li>
    <a href="#home" className="transition hover:text-green-700">
      Home
    </a>
  </li>

  <li>
    <a href="#about" className="transition hover:text-green-700">
      About
    </a>
  </li>

  <li>
    <a href="#speakers" className="transition hover:text-green-700">
      Speakers
    </a>
  </li>

  <li>
    <a href="#schedule" className="transition hover:text-green-700">
      Schedule
    </a>
  </li>

  <li>
    <a href="#registration" className="transition hover:text-green-700">
      Registration
    </a>
  </li>

  <li>
    <a href="#gallery" className="transition hover:text-green-700">
      Gallery
    </a>
  </li>

  <li>
    <a href="#contact" className="transition hover:text-green-700">
      Contact
    </a>
  </li>

</ul>

        {/* Button */}

        <a
           href="#registration"
           className="rounded-lg bg-green-900 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
>
  Register Now
</a>

      </div>
    </nav>
  );
}