const HOURS: [string, string][] = [
  ["Monday",    "8AM – 8PM"],
  ["Tuesday",   "8AM – 8PM"],
  ["Wednesday", "8AM – 8PM"],
  ["Thursday",  "8AM – 8PM"],
  ["Friday",    "8AM – 8PM"],
  ["Saturday",  "8AM – 8PM"],
  ["Sunday",    "Closed"],
];

type Location = {
  city: string;
  address: string[];
  mapsHref: string;
  bookHref: string;
  embedSrc?: string;
  comingSoon?: boolean;
};

const LOCATIONS: Location[] = [
  {
    city: "Waukesha",
    address: ["1427 E Racine Ave #H,", "Waukesha, WI 53186"],
    mapsHref: "https://www.google.com/maps?cid=5172250936097981129",
    bookHref: "#",
    embedSrc: "https://maps.google.com/maps?cid=5172250936097981129&output=embed",
  },
  {
    city: "Oconomowoc",
    address: ["Address Coming Soon,", "Oconomowoc, WI"],
    mapsHref: "#",
    bookHref: "#",
    comingSoon: true,
  },
];

function LocationCard({ loc }: { loc: Location }) {
  return (
    <div className="flex flex-col">
      {/* City */}
      <h3 className="font-heading text-3xl sm:text-4xl text-gold mb-5 tracking-wide">
        {loc.city}
      </h3>

      {/* Map */}
      <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 ring-2 ring-gold">
        {loc.comingSoon ? (
          <div className="absolute inset-0 bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-3">
            <p className="font-heading text-4xl text-gold/40">Coming Soon</p>
            <p className="font-body text-xs text-white/30 uppercase tracking-widest">Location TBA</p>
          </div>
        ) : (
          <iframe
            src={loc.embedSrc}
            title={`Map of Forever Faded ${loc.city}`}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </div>

      {/* Hours + address */}
      <div className="flex gap-8 sm:gap-12">
        {/* Hours */}
        <div className="min-w-0">
          <p className="font-subheading text-xs text-white tracking-[0.2em] uppercase mb-3">
            Hours
          </p>
          <ul className="space-y-1">
            {HOURS.map(([day, time]) => (
              <li key={day} className="font-body text-xs uppercase tracking-wide leading-none">
                <span className="text-white/40">{day}:</span>{" "}
                <span className={time === "Closed" ? "text-white/30" : "text-white/70"}>{time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Address + CTA */}
        <div className="flex flex-col justify-between">
          <address className="not-italic font-body text-sm text-white/80 leading-relaxed">
            {loc.address.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </address>

          {!loc.comingSoon ? (
            <a
              href={loc.bookHref}
              className="mt-5 inline-block font-subheading text-[11px] tracking-widest uppercase px-6 py-3 bg-gold text-black hover:bg-gold/90 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] transition-colors"
            >
              Book Here
            </a>
          ) : (
            <p className="mt-5 font-body text-xs text-white/30 uppercase tracking-widest">
              Booking opening soon
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Locations() {
  return (
    <section
      className="bg-black py-16 sm:py-20 px-6 sm:px-12 lg:px-20"
      aria-labelledby="locations-heading"
    >
      <h2
        id="locations-heading"
        data-reveal
        className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white text-center mb-12 sm:mb-16"
      >
        Our Locations
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {LOCATIONS.map((loc, i) => (
          <div key={loc.city} data-reveal data-delay={String(i + 1)}>
            <LocationCard loc={loc} />
          </div>
        ))}
      </div>
    </section>
  );
}
