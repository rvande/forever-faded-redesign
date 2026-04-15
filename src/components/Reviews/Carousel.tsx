"use client";

import { useEffect, useRef, useState } from "react";

export type Review = {
  author: string;
  time: string;
  text: string;
};
const INTERVAL_MS = 4000;

function Stars() {
  return (
    <div className="flex justify-center gap-1 mb-4" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gold" aria-hidden="true">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function Initials({ name }: { name: string }) {
  const letters = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shrink-0 ring-2 ring-gold/40">
      <span className="font-subheading text-xs text-black">{letters}</span>
    </div>
  );
}

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const paused = useRef(false);
  const pointerStart = useRef<number | null>(null);

  const goTo = (next: number, dir: "next" | "prev" = "next") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setIdx(next);
      setAnimating(false);
    }, 300);
  };

  const advance = (dir: "next" | "prev") => {
    const next =
      dir === "next"
        ? (idx + 1) % reviews.length
        : (idx - 1 + reviews.length) % reviews.length;
    goTo(next, dir);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused.current) advance("next");
    }, INTERVAL_MS);
    return () => clearInterval(interval);
  }, [idx, animating]);

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStart.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (pointerStart.current === null) return;
    const delta = e.clientX - pointerStart.current;
    if (Math.abs(delta) > 40) advance(delta < 0 ? "next" : "prev");
    pointerStart.current = null;
  };

  if (!reviews.length) return null;

  const review = reviews[idx];
  const slideClass = animating
    ? direction === "next" ? "opacity-0 translate-x-4" : "opacity-0 -translate-x-4"
    : "opacity-100 translate-x-0";

  return (
    <div
      className="flex flex-col items-center"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
    >
      {/* ── Card — fixed height so section never shifts ── */}
      <div
        className="w-full max-w-2xl bg-black border border-white/10 rounded-sm px-8 py-8 h-72 sm:h-64 flex flex-col overflow-hidden cursor-default shadow-[4px_4px_0px_0px_#DBA94B]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <div className={`flex flex-col h-full transition-all duration-300 ease-in-out ${slideClass}`}>
          <Stars />

          {/* Quote */}
          <p className="font-body text-sm sm:text-base text-white/85 leading-relaxed flex-1 overflow-hidden line-clamp-[6] mb-4 text-left">
            &ldquo;{review.text}&rdquo;
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 shrink-0">
            <Initials name={review.author} />
            <div className="text-left">
              <p className="font-subheading text-sm text-white tracking-wide">{review.author}</p>
              <p className="font-body text-xs text-white/50">{review.time} · Google Review</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Dot nav ── */}
      <div className="flex items-center gap-2 mt-6" role="tablist" aria-label="Review navigation">
        {reviews.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === idx}
            aria-label={`Review ${i + 1}`}
            onClick={() => goTo(i, i > idx ? "next" : "prev")}
            className={`rounded-full transition-all duration-300 ${
              i === idx ? "w-6 h-2 bg-gold" : "w-2 h-2 bg-black/20 hover:bg-black/40"
            }`}
          />
        ))}
      </div>

    </div>
  );
}
