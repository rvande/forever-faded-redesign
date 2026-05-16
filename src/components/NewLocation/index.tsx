import Link from "next/link";

const FEATURES = [
  "Expert cuts, fades & beard trims",
  "As featured in the Waukesha Freeman",
  "Opening May 25, 2026 — book your first appointment now",
];

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

export default function NewLocation() {
  return (
    <section
      aria-label="New Oconomowoc location announcement"
      className="relative w-full bg-black overflow-hidden py-14 md:py-20"
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(219,169,75,0.07),transparent)]"
      />
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14" data-reveal>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            <span className="font-subheading text-gold text-xs tracking-[0.3em] uppercase">Now Expanding</span>
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
          </div>

          <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl text-white leading-none mb-4">
            New Location Coming Soon
          </h2>

          <div className="w-20 h-px bg-gold mx-auto mb-5" />

          <p className="font-body text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Forever Faded is bringing its premium barber experience to Oconomowoc. Same expert cuts&nbsp;— closer to home.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: text content */}
          <div className="flex flex-col gap-6" data-reveal data-delay="1">
            <div className="inline-flex items-center gap-2 self-start bg-white/5 border border-gold/30 px-4 py-2">
              <MapPinIcon />
              <span className="font-subheading text-gold text-sm tracking-wide">888 Thackeray Trail, Oconomowoc, WI 53066</span>
            </div>

            <div className="border-l-2 border-gold/60 pl-5 space-y-2">
              <p className="font-subheading text-white text-lg leading-snug">The fade is spreading west.</p>
              <p className="font-body text-white/70 text-sm sm:text-base leading-relaxed">
                After years of building a loyal following in Waukesha, Forever Faded is opening a second shop in
                Oconomowoc. The same talented barbers, the same attention to detail&nbsp;— now serving the lake
                country community.
              </p>
            </div>

            <ul className="space-y-3" aria-label="What to expect">
              {FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                  <span className="font-body text-white/70 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link
                href="https://getsquire.com/booking/book/forever-faded-oconomowoc-oconomowoc"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-2 px-6 py-3 bg-gold text-black font-subheading text-sm tracking-widest uppercase shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] hover:bg-gold/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Book Oconomowoc
                <ArrowUpRightIcon />
              </Link>
              <Link
                href="https://www.facebook.com/foreverFadedwi"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-2 px-6 py-3 border border-gold/50 text-gold font-subheading text-sm tracking-widest uppercase hover:border-gold hover:text-gold/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Follow on Facebook
                <ArrowUpRightIcon />
              </Link>
            </div>
          </div>

          {/* Right: press card */}
          <div className="flex justify-center lg:justify-end" data-reveal data-delay="2">
            <Link
              href="https://www.facebook.com/100063636517194/posts/1633402388790963/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full max-w-sm lg:max-w-none border border-gold/30 bg-white/5 overflow-hidden hover:border-gold/60 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              aria-label="View the Forever Faded expansion announcement on Facebook"
            >
              {/* Photo */}
              <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://bloximages.newyork1.vip.townnews.com/gmtoday.com/content/tncms/assets/v3/editorial/f/fd/ffdbff66-0048-4c17-940c-ab419a4fc4ff/69f1ee434068e.image.jpg"
                  alt="Forever Faded owner Tim Retic inside his Waukesha barbershop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 bg-black/70 border border-gold/40 px-2 py-1">
                  <p className="font-subheading text-gold text-[10px] uppercase tracking-widest">
                    As seen in the Waukesha Freeman
                  </p>
                </div>
              </div>

              {/* Card footer */}
              <div className="p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center shrink-0" aria-hidden="true">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-subheading text-white text-sm">View Announcement Post</p>
                    <p className="font-body text-white/50 text-xs">facebook.com · Forever Faded</p>
                  </div>
                </div>
                <ArrowUpRightIcon className="w-4 h-4 text-gold/60 shrink-0" />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
