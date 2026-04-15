"use client";

import { useEffect } from "react";

// Chrome blocks CSS animations on scrollbar pseudo-elements, but it DOES
// read CSS custom properties set on :root. We update --barber-offset on a
// rAF loop so the scrollbar thumb background-position shifts each frame.
export default function BarberPole() {
  useEffect(() => {
    const PERIOD = 34; // px — 24px stripe repeat × √2 for -45° diagonal
    let offset = 0;
    let raf: number;

    const tick = () => {
      offset = (offset + 0.4) % PERIOD;
      document.documentElement.style.setProperty("--barber-offset", `${offset}px`);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return null;
}
