import Image from "next/image";
import Link from "next/link";
import { cf } from "@/lib/aws";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[720px] lg:min-h-[860px] flex items-center justify-center overflow-hidden">
      <Image
        src={cf("general/DSC_6460-Enhanced-NR_1_1_fphzjs.jpg")}
        alt="Forever Faded Barbershop interior"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 z-10 text-center px-6 pb-10 sm:pb-14" data-reveal>
        <h1 className="font-heading leading-none mb-4">
          <span className="block text-6xl sm:text-7xl lg:text-9xl text-white">
            About
          </span>
          <span className="block text-6xl sm:text-7xl lg:text-9xl text-gold">
            Forever Faded
          </span>
        </h1>

        <p className="font-subheading text-sm sm:text-base text-white/80 tracking-widest uppercase mb-10">
          Discover the passion and expertise behind Forever Faded Barbershop
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
