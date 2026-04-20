const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    heading: "Quality",
    body: "We never compromise on the quality of our service. Every haircut, every shave, and every style is executed with precision and care.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
    heading: "Community",
    body: "We believe in creating a welcoming space where everyone feels valued. Our barbershop is more than a place for haircuts — it is a community hub.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z" />
      </svg>
    ),
    heading: "Craftsmanship",
    body: "We honor the tradition of barbering while embracing modern techniques. Our barbers are constantly honing their skills to provide the best service.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-gold">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24">

        <div className="mb-12 lg:mb-16" data-reveal>
          <h2 className="font-heading leading-none">
            <span className="block text-6xl sm:text-7xl lg:text-8xl text-black">Our</span>
            <span className="block text-6xl sm:text-7xl lg:text-8xl text-white">Values</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {VALUES.map((v, i) => (
            <div
              key={v.heading}
              className="flex flex-col gap-4"
              data-reveal
              data-delay={`${i + 1}`}
            >
              <div className="text-black">{v.icon}</div>
              <h3 className="font-subheading text-xl tracking-widest uppercase text-black">
                {v.heading}
              </h3>
              <div className="h-px bg-black/25 w-10" />
              <p className="font-body text-base text-black/80 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
