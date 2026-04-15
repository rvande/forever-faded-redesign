import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">

      {/* ── Full-bleed video ── */}
      <video
        src="/hero-drone.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* ── Gradient overlay: dark left, fades right ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10"
      />

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex items-center px-8 sm:px-12 lg:px-20">
        <div className="max-w-2xl" data-reveal>

          <h1 className="font-heading leading-none mb-4">
            <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white">
              Welcome to
            </span>
            <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-gold">
              Forever Faded
            </span>
          </h1>

          <p className="font-subheading text-base sm:text-lg text-white/80 tracking-widest uppercase mb-10">
            Expert Barber Services in Waukesha & Oconomowoc
          </p>

          <Link
            href="#booking"
            className="inline-flex items-center bg-gold text-black font-subheading text-[13px] tracking-widest uppercase px-10 py-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:bg-gold/90 transition-colors"
          >
            Book Now
          </Link>

        </div>
      </div>

    </section>
  );
}
