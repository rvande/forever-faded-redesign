import Image from "next/image";

export default function PodcastBook() {
  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Book cover */}
          <div className="shrink-0 w-full max-w-[260px] lg:max-w-[400px]" data-reveal>
            <div className="relative pb-5 pr-5">
              <div className="absolute top-5 left-5 right-0 bottom-0 bg-gold z-0" />
              <div className="relative z-10 overflow-hidden shadow-2xl">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/Book.webp"
                    alt="The Change — Insights Into Self Empowerment"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1" data-reveal data-delay="1">
            <p className="font-subheading text-xs tracking-widest uppercase text-gold mb-3">
              Free Download
            </p>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-2">
              The Change
            </h2>
            <p className="font-subheading text-base sm:text-lg tracking-widest uppercase text-gold/80 mb-6">
              Insights Into Self Empowerment
            </p>
            <div className="h-px bg-gold w-12 mb-8" />

            <div className="space-y-6 mb-10">
              <blockquote className="border-l-4 border-gold pl-6">
                <p className="font-body text-base sm:text-lg text-white/90 leading-relaxed italic">
                  &ldquo;Change is inevitable. Growth is optional.&rdquo;
                </p>
                <footer className="mt-2 font-subheading text-xs tracking-widest uppercase text-gold">
                  — John C. Maxwell
                </footer>
              </blockquote>

              <blockquote className="border-l-4 border-white/20 pl-6">
                <p className="font-body text-base sm:text-lg text-white/75 leading-relaxed italic">
                  &ldquo;You will have to Grow Through what you Go Through.&rdquo;
                </p>
              </blockquote>

              <p className="font-body text-base text-white/60 leading-relaxed">
                This statement is just as true today as the first day I heard it. Download
                your free copy and begin your journey of self-empowerment.
              </p>
            </div>

            <a
              href="/thechange.pdf"
              download
              className="inline-flex items-center gap-3 bg-gold text-black font-subheading text-base tracking-widest uppercase px-10 py-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:bg-gold/90 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              Download Free
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
