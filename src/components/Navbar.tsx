"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200 bg-white/95 shadow-lg backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-2 sm:gap-3"
        >
          <Image
            src="/logos/eastcosels-logo.jpeg"
            alt="EASTCOSELS Logo"
            width={50}
            height={50}
            className="h-10 w-10 rounded-lg object-cover sm:h-[50px] sm:w-[50px]"
          />

          <div>
            <h1 className="text-lg font-extrabold text-green-900 sm:text-xl">
              EASTCOSELS
            </h1>

            <p className="text-[10px] tracking-[3px] text-gray-500 sm:text-xs sm:tracking-[4px]">
              2026
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 font-medium text-gray-700 lg:flex xl:gap-8">
          <li>
            <a
              href="#home"
              className="transition hover:text-green-700"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="transition hover:text-green-700"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#speakers"
              className="transition hover:text-green-700"
            >
              Speakers
            </a>
          </li>

          <li>
            <a
              href="#schedule"
              className="transition hover:text-green-700"
            >
              Schedule
            </a>
          </li>

          <li>
            <a
              href="#registration"
              className="transition hover:text-green-700"
            >
              Registration
            </a>
          </li>

          <li>
            <a
              href="#gallery"
              className="transition hover:text-green-700"
            >
              Gallery
            </a>
          </li>

          {/* Create Your DP */}
          <li>
            <a
              href="https://getdp.co/weK"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-green-700 transition hover:text-green-900"
            >
              Create Your DP
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="transition hover:text-green-700"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Register Button */}
        <a
          href="#registration"
          className="hidden rounded-lg bg-green-900 px-5 py-3 font-semibold text-white transition hover:bg-green-800 lg:block"
        >
          Register Now
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-green-900 transition hover:bg-green-100 lg:hidden"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-5 shadow-lg lg:hidden">
          <ul className="space-y-1 font-medium text-gray-700">

            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 transition hover:bg-green-50 hover:text-green-700"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 transition hover:bg-green-50 hover:text-green-700"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#speakers"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 transition hover:bg-green-50 hover:text-green-700"
              >
                Speakers
              </a>
            </li>

            <li>
              <a
                href="#schedule"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 transition hover:bg-green-50 hover:text-green-700"
              >
                Schedule
              </a>
            </li>

            <li>
              <a
                href="#registration"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 transition hover:bg-green-50 hover:text-green-700"
              >
                Registration
              </a>
            </li>

            <li>
              <a
                href="#gallery"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 transition hover:bg-green-50 hover:text-green-700"
              >
                Gallery
              </a>
            </li>

            {/* Create Your DP */}
            <li>
              <a
                href="https://getdp.co/weK"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 font-semibold text-green-700 transition hover:bg-green-50 hover:text-green-900"
              >
                Create Your DP
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 transition hover:bg-green-50 hover:text-green-700"
              >
                Contact
              </a>
            </li>

            {/* Mobile Register Button */}
            <li className="pt-3">
              <a
                href="#registration"
                onClick={closeMenu}
                className="block rounded-xl bg-green-900 px-5 py-3 text-center font-bold text-white transition hover:bg-green-800"
              >
                Register Now
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}