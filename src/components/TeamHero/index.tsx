import Link from "next/link";

export default function TeamHero() {
  return (
    <section className="relative w-full min-h-[320px] bg-black flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-6 py-16" data-reveal>
        <h1 className="font-heading leading-none mb-4">
          <span className="block text-6xl sm:text-7xl lg:text-9xl text-white">
            Meet
          </span>
          <span className="block text-6xl sm:text-7xl lg:text-9xl text-gold">
            The Team
          </span>
        </h1>

        <p className="font-subheading text-sm sm:text-base text-white/80 tracking-widest uppercase mb-10">
          Waukesha &amp; Oconomowoc
        </p>

        <Link
          href="https://getsquire.com/booking/brands/forever-faded-llc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gold text-black font-subheading text-base tracking-widest uppercase px-10 py-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:bg-gold/90 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
