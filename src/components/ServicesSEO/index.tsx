import Image from "next/image";
import Link from "next/link";

export default function ServicesSEO() {
  return (
    <section className="bg-black">
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24">

        {/* Logo */}
        <div className="flex justify-center mb-10" data-reveal>
          <Image
            src="/dark-logo.png"
            alt="Forever Faded"
            width={180}
            height={180}
          />
        </div>

        <div className="space-y-6 mb-12" data-reveal data-delay="1">
          <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
            Forever Faded Barber Shop is Waukesha County&apos;s premier destination for
            precision cuts, fresh fades, and expert grooming. Whether you&apos;re booking a
            beard trim at our Waukesha location or swinging by our Oconomowoc shop for a
            full-service haircut, our team of skilled barbers is ready to deliver a
            consistent, high-quality experience every visit.
          </p>

          <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
            Our Face &amp; Beard menu is built for the guy who demands the details — from a
            quick beard lining at our Waukesha barbershop to a full facial that leaves you
            looking sharp for the week. Eyebrow cleanup, full beard trims,
            adult cuts paired with beard work — we do it all under one roof.
          </p>

          <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
            Looking for braids in Oconomowoc or Waukesha? Our Specialty menu covers 1, 2,
            and 3-hour braid sessions, braid and haircut combos, waxing services, and
            discounted cuts for seniors, military, and first responders at both locations.
            Teen and child cuts are always welcome — we make sure every client, every age,
            leaves looking their best.
          </p>

          <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
            Need color? Our Hair menu includes men&apos;s full and quick color, female cut and
            color for long hair, and female undercut with design. With over 50 years of
            combined barbering experience across our Waukesha and Oconomowoc locations,
            we bring the skill and the care to every single chair.
          </p>

          <p className="font-subheading text-base sm:text-lg text-white tracking-widest uppercase font-bold">
            IF YOU CAN GROW IT! WE CAN CUT IT!
          </p>
        </div>

        <div data-reveal data-delay="2">
          <Link
            href="https://getsquire.com/booking/brands/forever-faded-llc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gold text-black font-subheading text-base tracking-widest uppercase px-10 py-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:bg-gold/90 transition-colors"
          >
            Book Now
          </Link>
        </div>

      </div>
    </section>
  );
}
