import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    number: "01",
    name: "Adult Cut",
    description: "Precision tapering using multiple guard lengths for a seamless transition.",
    price: "$40+",
  },
  {
    number: "02",
    name: "Teen/Child Cut",
    description: "Fads with clean line up, styled to preference.",
    price: "$30+",
  },
  {
    number: "03",
    name: "Beard & Head Lining",
    description: "Precision tapering using multiple guard lengths for a seamless transition.",
    price: "$45+",
  },
];

export default function Classics() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

        {/* ── Left: Content ── */}
        <div className="flex-1 w-full">
          {/* Heading */}
          <h2 className="font-heading leading-none mb-8">
            <span className="block text-6xl sm:text-7xl lg:text-8xl text-black">
              Forever Faded
            </span>
            <span className="block text-6xl sm:text-7xl lg:text-8xl text-gold">
              Classics
            </span>
          </h2>

          {/* Service List */}
          <ul className="divide-y divide-gold">
            {SERVICES.map((svc) => (
              <li key={svc.number} className="py-4">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-body text-base text-black shrink-0">
                    {svc.number}
                  </span>
                  <span className="font-subheading text-xl tracking-widest uppercase text-black flex-1">
                    {svc.name}
                  </span>
                  <span className="font-heading text-4xl text-gold shrink-0">
                    {svc.price}
                  </span>
                </div>
                <p className="font-body text-base text-black leading-relaxed pl-5">
                  {svc.description}
                </p>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex items-center gap-4 mt-10">
            <Link
              href="#booking"
              className="inline-flex items-center bg-gold text-black font-subheading text-[13px] tracking-widest uppercase px-7 py-3 shadow-[4px_4px_0px_0px_#000000] hover:bg-gold/90 transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center border-2 border-black text-black font-subheading text-[13px] tracking-widest uppercase px-7 py-3 hover:bg-black hover:text-white transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>

        {/* ── Right: Offset Card ── */}
        <div className="w-full lg:w-[42%] shrink-0 flex justify-center lg:justify-end">
          {/*
            Wrapper has left + bottom padding to create bleed room.
            Gold box fills from left=0 and bottom=0 of the wrapper,
            stopping at the card's right and top edges — so it peeks
            out left and bottom behind the card.
          */}
          <div className="relative w-full max-w-sm lg:max-w-none pl-5 pb-5">
            {/* Gold offset — peeks left + bottom */}
            <div className="absolute top-5 left-0 right-5 bottom-0 border-2 border-gold bg-transparent z-0" />

            {/* Card */}
            <div className="relative z-10 border-4 border-black overflow-hidden">
              {/* Image */}
              <div className="relative aspect-[3/4]">
                <Image
                  src="/homepage/service-img.jpg"
                  alt="Forever Faded haircut"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Quote strip */}
              <div className="bg-black px-5 py-4">
                <p className="font-body text-[13px] text-white/80 leading-relaxed italic">
                  "At Forever Faded, we are not just cutting hair — we are
                  building confidence and community."
                </p>
                <p className="font-subheading text-[11px] tracking-widest uppercase text-gold mt-2">
                  Founder Timothy Retic
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
