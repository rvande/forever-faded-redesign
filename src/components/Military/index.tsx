import Image from "next/image";

export default function Military() {
  return (
    /*
      Split background: white top half / gold bottom half.
      The black card is vertically centered across the split,
      with a gold offset box peeking out right + bottom.
    */
    <section
      className="relative"
      style={{ background: "linear-gradient(to bottom, #ffffff 50%, #DBA94B 50%)" }}
    >
      <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 py-14">
        {/* Offset wrapper — right + bottom bleed */}
        <div className="relative pr-4 pb-4" data-reveal>
          {/* Gold offset box */}
          <div className="absolute top-[-15px] left-4 right-0 bottom-10 border-2 border-gold bg-transparent z-0" />

          {/* Black card */}
          <div className="relative z-10 bg-black flex flex-col sm:flex-row items-center gap-8 px-8 sm:px-12 py-8 sm:py-10">
            {/* Flag */}
            <div className="shrink-0 w-36 sm:w-44 opacity-90">
              <Image
                src="/homepage/flag.png"
                alt="American Flag"
                width={176}
                height={104}
                className="object-contain w-full"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl text-white leading-none tracking-wide mb-3">
                Military, Senior &amp; First<br />Responder Discount
              </h2>
              <p className="font-body text-sm sm:text-base text-white/60 leading-relaxed">
                Special pricing for our service members, first responders, and Seniors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
