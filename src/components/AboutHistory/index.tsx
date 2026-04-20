import Link from "next/link";

export default function AboutHistory() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left: label + heading */}
          <div className="shrink-0 lg:w-72" data-reveal>
            <p className="font-subheading text-xs tracking-widest uppercase text-gold mb-3">
              Since 2008
            </p>
            <h2 className="font-heading leading-none">
              <span className="block text-6xl sm:text-7xl lg:text-8xl text-black">Our</span>
              <span className="block text-6xl sm:text-7xl lg:text-8xl text-black">History</span>
            </h2>
          </div>

          {/* Right: body copy */}
          <div className="flex-1 space-y-5" data-reveal data-delay="1">
            <p className="font-body text-base text-black/80 leading-relaxed">
              Founded in 2008 and rebranded in 2010 to Forever Faded, we began as an owner-operator
              barbershop with a big vision. Our founder, Tim Retic, had a passion for precision cuts
              and creating a community space where people could feel confident and comfortable. Over
              the years, we&apos;ve grown into Waukesha County&apos;s premier barbershop, known for
              our exceptional service, attention to detail, and welcoming atmosphere.
            </p>
            <p className="font-body text-base text-black/80 leading-relaxed">
              What started as one barber&apos;s dream has evolved into a team of skilled professionals
              dedicated to the craft of barbering. Today, Forever Faded continues to set the standard
              for quality haircuts and grooming services in Waukesha County, while maintaining the
              personal touch and community focus that has been our foundation since day one.
            </p>
            <p className="font-body text-base text-black/80 leading-relaxed">
              We are proud to announce we are now focusing our efforts on expansion — you never know
              where the next chapter may take us.
            </p>
            <Link
              href="/staff"
              className="inline-flex items-center border-2 border-black text-black font-subheading text-[13px] tracking-widest uppercase px-8 py-3 hover:bg-black hover:text-white transition-colors"
            >
              Meet the Team
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
