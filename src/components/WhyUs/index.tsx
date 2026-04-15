import Image from "next/image";

const REASONS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    heading: "99% Customer Satisfaction",
    sub: "350+ Google Reviews",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z" />
      </svg>
    ),
    heading: "Elite Grooming Standards",
    sub: "50 Years of Combined Experience",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
    heading: "Community Rooted",
    sub: "Clean, upbeat, and welcoming environment",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-gold">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 pt-8 pb-14 flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">

        {/* ── Content — first in DOM = first on mobile ── */}
        <div className="flex-1" data-reveal>
          <h2 className="font-heading leading-none mb-10">
            <span className="block text-7xl sm:text-8xl lg:text-9xl text-black">
              Why Choose
            </span>
            <span className="block text-7xl sm:text-8xl lg:text-9xl text-white">
              Us?
            </span>
          </h2>

          <ul className="space-y-8">
            {REASONS.map((r) => (
              <li key={r.heading} className="flex items-start gap-5">
                <div className="shrink-0 text-black mt-0.5">{r.icon}</div>
                <div>
                  <p className="font-subheading text-xl tracking-widest uppercase text-black leading-tight">
                    {r.heading}
                  </p>
                  <p className="font-body text-base text-black/70 mt-1 tracking-wide uppercase">
                    {r.sub}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Image — second in DOM = second on mobile, left on desktop via flex-row-reverse ── */}
        <div className="shrink-0 w-full max-w-[320px] lg:max-w-[380px]" data-reveal data-delay="2">
          <div className="relative pb-5 pr-5">
            <div className="absolute top-5 left-5 right-0 bottom-0 bg-black z-0" />
            <div className="relative z-10 overflow-hidden">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/homepage/why.jpg"
                  alt="Forever Faded barber"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
