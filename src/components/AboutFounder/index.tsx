import Image from "next/image";

export default function AboutFounder() {
  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Portrait */}
          <div className="w-full lg:w-[38%] shrink-0" data-reveal>
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dmlijbube/image/upload/q_auto,f_auto/v1776708653/theowner-profile_huzaza.webp"
                alt="Tim Retic — Founder of Forever Faded Barbershop"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center" data-reveal data-delay="1">
            <p className="font-subheading text-xs tracking-widest uppercase text-gold mb-3">
              Meet the Founder
            </p>
            <h2 className="font-heading text-6xl sm:text-7xl lg:text-8xl text-white leading-none mb-1">
              Tim Retic
            </h2>
            <div className="h-px bg-gold w-12 mb-8" />

            <blockquote className="border-l-4 border-gold pl-6 mb-8">
              <p className="font-body text-lg sm:text-xl text-white/90 leading-relaxed italic">
                &ldquo;I wanted to create a place where people could not only get an exceptional
                haircut but also feel like they belong to something special. At Forever Faded,
                we are not just cutting hair — we are building confidence and community.&rdquo;
              </p>
            </blockquote>

            <div className="space-y-4 font-body text-base text-white/75 leading-relaxed">
              <p>
                Tim started his journey in barbering over 17 years ago. After training under some
                of the best barbers in the Midwest, he decided to bring his skills and vision back
                to his hometown of Waukesha.
              </p>
              <p>
                Tim&apos;s dedication to quality and customer service has been the driving force
                behind Forever Faded&apos;s success and reputation as Waukesha&apos;s premier
                barbershop.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
