import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
        <div className="max-w-2xl" data-reveal>

          <p className="font-subheading text-xs tracking-widest uppercase text-gold mb-4">
            Our Commitment to You
          </p>

          <h2 className="font-heading leading-none mb-8">
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-white">
              Ready to Experience
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-gold">
              the Difference?
            </span>
          </h2>

          <p className="font-body text-base text-white/70 leading-relaxed mb-3">
            At Forever Faded, we promise to provide you with more than just a haircut. We are
            committed to delivering an experience that makes you look good, feel good, and want
            to come back.
          </p>
          <p className="font-body text-base text-white/70 leading-relaxed mb-10">
            Join our community of satisfied clients and discover why we are Waukesha&apos;s
            premier barbershop.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="https://getsquire.com/booking/brands/forever-faded-llc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gold text-black font-subheading text-base tracking-widest uppercase px-10 py-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:bg-gold/90 transition-colors"
            >
              Book Your Appointment
            </Link>
            <a
              href="tel:+12623499289"
              className="inline-flex items-center border-2 border-white text-white font-subheading text-[13px] tracking-widest uppercase px-8 py-3 hover:bg-white hover:text-black transition-colors"
            >
              Call Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
