import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <section
      aria-label="Welcome to Forever Faded"
      className="relative overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center"
    >
      {/* ── Background image ── */}
      <Image
        src="/homepage/seo-img.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* ── Mobile gradient: black ── */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/20 lg:hidden" />
      {/* ── Desktop gradient: gold ── */}
      <div aria-hidden="true" className="absolute inset-0 hidden lg:block bg-gradient-to-r from-gold via-gold/90 via-40% to-gold/0" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
        <div className="max-w-lg">

          {/* Heading */}
          <h2 className="font-heading leading-none mb-8">
            <span className="block text-6xl sm:text-7xl lg:text-8xl text-white">
              Waukesha&apos;s
            </span>
            <span className="block text-6xl sm:text-7xl lg:text-8xl text-white">
              Premier Barbershop
            </span>
          </h2>

          {/* Body copy — SEO-rich description */}
          <div className="space-y-4 mb-10">
            <p className="font-body text-sm sm:text-base text-white/80 lg:text-black leading-relaxed">
              Welcome to Forever Faded Barber Shop—Waukesha County&apos;s go-to destination
              for top-quality haircuts, fades, beard trims, and grooming services.
            </p>
            <p className="font-body text-sm sm:text-base text-white/80 lg:text-black leading-relaxed">
              With over 50 years of combined barbering experience and a 99% customer
              satisfaction rate, our skilled and friendly team delivers sharp, modern styles
              alongside classic cuts for men, women, and kids of all ages. Whether you&apos;re
              looking for a fresh fade, a precision haircut, or a relaxing straight-razor
              shave, we take pride in providing professional service in a clean, upbeat, and
              welcoming environment.
            </p>
            <p className="font-body text-sm sm:text-base text-white/80 lg:text-black leading-relaxed">
              Located conveniently in Waukesha, Wisconsin, we&apos;re proud to serve clients from
              across Waukesha County and surrounding areas—including Brookfield, Pewaukee,
              and New Berlin. Don&apos;t settle for less—get faded by the best in Waukesha. Book
              your appointment today or stop by to experience the Forever Faded difference.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#booking"
              className="inline-flex items-center justify-center bg-gold text-black shadow-[4px_4px_0px_0px_#000000] lg:bg-black lg:text-white lg:shadow-none font-subheading text-[13px] tracking-widest uppercase px-8 py-3 hover:bg-gold/90 lg:hover:bg-black/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:focus-visible:outline-white"
            >
              Book Now
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center border-2 border-white text-white lg:border-black lg:text-black font-subheading text-[13px] tracking-widest uppercase px-8 py-3 hover:bg-white hover:text-black lg:hover:bg-black lg:hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:focus-visible:outline-black"
            >
              About Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
