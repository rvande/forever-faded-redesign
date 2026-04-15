"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Our Team", href: "#team" },
  { label: "About", href: "#about" },
  { label: "Podcast", href: "#podcast" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ── Top Info Bar ── */}
      <div className="bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 gap-4">
            {/* Location */}
            <a
              href="#locations"
              className="flex items-center gap-1.5 text-black/70 hover:text-gold transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 shrink-0 text-gold"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="font-subheading text-[11px] tracking-widest uppercase">
                Locations
              </span>
            </a>

            {/* Hours */}
            <div className="flex items-center gap-1.5 text-black/70">
              <svg
                className="w-3.5 h-3.5 shrink-0 text-gold"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 11H11V7h1.5v5.25l4.5 2.67-.75 1.23L12.5 13z" />
              </svg>
              <span className="font-subheading text-[11px] tracking-wide uppercase text-black/60 hidden sm:inline">
                Mon–Sat: 8am – 8pm
              </span>
              <span className="font-subheading text-[11px] tracking-wide uppercase text-black/60 sm:hidden">
                8am – 8pm
              </span>
            </div>

            {/* Phone */}
            <a
              href="tel:+12625486188"
              className="flex items-center gap-1.5 text-black/70 hover:text-gold transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 shrink-0 text-gold"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="font-subheading text-[12px] tracking-wide">
                (262) 548-6188
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <nav className="bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center">
              <Image
                src="/logo-light.png"
                alt="Forever Faded"
                width={150}
                height={120}
                className="rounded-full object-cover"
                priority
              />
            </Link>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-subheading text-[13px] tracking-widest uppercase text-black hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Book Now + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="#booking"
                className="hidden sm:inline-flex items-center bg-gold text-black font-subheading text-[13px] tracking-widest uppercase px-6 py-2.5 shadow-[4px_4px_0px_0px_#000000] hover:bg-gold/90 transition-colors"
              >
                Book Now
              </Link>

              {/* Hamburger — mobile only */}
              <button
                className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                <span
                  className={`block h-0.5 bg-black transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-black transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-black transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col border-t border-black/10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-6 py-4 font-subheading text-[13px] tracking-widest uppercase text-black hover:text-gold hover:bg-black/5 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-6 py-4">
              <Link
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center bg-gold text-black font-subheading text-[13px] tracking-widest uppercase py-3 hover:bg-gold/90 transition-colors"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
