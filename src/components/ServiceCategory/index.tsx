import Link from "next/link";

type Service = {
  name: string;
  price: string;
  duration: string;
};

type Props = {
  categoryNumber: string;
  name: string;
  services: Service[];
  theme: "light" | "dark";
};

export default function ServiceCategory({ categoryNumber, name, services, theme }: Props) {
  const isDark = theme === "dark";

  return (
    <section className={isDark ? "bg-black" : "bg-white"}>
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24">

        {/* Category heading */}
        <div className="mb-10" data-reveal>
          <p className={`font-subheading text-xs tracking-[0.3em] uppercase mb-2 ${isDark ? "text-white/40" : "text-black/40"}`}>
            {categoryNumber}
          </p>
          <h2 className="font-heading leading-none">
            <span className={`block text-6xl sm:text-7xl lg:text-8xl ${isDark ? "text-white" : "text-black"}`}>
              {name}
            </span>
          </h2>
          <div className="mt-4 h-px bg-gold w-16" />
        </div>

        {/* Service list */}
        <ul className="divide-y divide-gold/40" data-reveal data-delay="1">
          {services.map((svc) => (
            <li key={svc.name} className="flex items-center gap-4 py-4 sm:py-5">
              {/* Name */}
              <span className={`font-subheading text-sm sm:text-base tracking-widest uppercase flex-1 ${isDark ? "text-white" : "text-black"}`}>
                {svc.name}
              </span>
              {/* Price + Duration */}
              <div className="flex flex-col items-end shrink-0">
                <span className="font-heading text-3xl sm:text-4xl text-gold leading-none">
                  {svc.price}
                </span>
                <span className={`font-body text-xs mt-0.5 ${isDark ? "text-white/40" : "text-black/40"}`}>
                  {svc.duration}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-10" data-reveal data-delay="2">
          <Link
            href="#booking"
            className={`inline-flex items-center bg-gold text-black font-subheading text-base tracking-widest uppercase px-8 py-3 hover:bg-gold/90 transition-colors ${
              isDark
                ? "shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                : "shadow-[4px_4px_0px_0px_#000000]"
            }`}
          >
            Book Now
          </Link>
        </div>

      </div>
    </section>
  );
}
