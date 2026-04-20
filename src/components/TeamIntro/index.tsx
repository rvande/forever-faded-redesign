const PILLARS = [
  {
    number: "01",
    title: "Continuous Training",
    description:
      "Our barbers regularly attend workshops and training sessions to stay updated with the latest techniques and trends in the industry.",
  },
  {
    number: "02",
    title: "Client-Focused Approach",
    description:
      "We take the time to understand your needs and preferences, ensuring that every haircut is tailored to enhance your unique style and features.",
  },
  {
    number: "03",
    title: "Versatile Expertise",
    description:
      "From classic cuts to modern styles, our team excels in a wide range of techniques to serve clients of all ages and style preferences.",
  },
];

export default function TeamIntro() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Left: heading + copy */}
        <div className="flex-1" data-reveal>
          <h2 className="font-heading leading-none mb-8">
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-black">
              Skilled Professionals,
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-gold">
              Exceptional Results
            </span>
          </h2>
          <div className="space-y-4">
            <p className="font-body text-sm sm:text-base text-black/80 leading-relaxed">
              At Forever Faded, our team consists of passionate, highly-trained
              barbers who are dedicated to their craft. Each member brings their
              unique style and expertise, ensuring that every client receives
              the perfect cut.
            </p>
            <p className="font-body text-sm sm:text-base text-black/80 leading-relaxed">
              Whether you&apos;re looking for a classic cut, a modern style, or a
              complete transformation, our team has the skills and experience to
              exceed your expectations.
            </p>
          </div>
        </div>

        {/* Right: feature pillars */}
        <div className="lg:w-[42%] shrink-0" data-reveal data-delay="2">
          <p className="font-subheading text-xs tracking-[0.3em] uppercase text-black/40 mb-6">
            What Sets Our Team Apart
          </p>
          <ul>
            {PILLARS.map((p, i) => (
              <li key={p.number} className={`py-5 ${i > 0 ? "border-t border-gold" : ""}`}>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-heading text-4xl text-gold leading-none shrink-0">
                    {p.number}
                  </span>
                  <span className="font-subheading text-sm tracking-widest uppercase text-black">
                    {p.title}
                  </span>
                </div>
                <p className="font-body text-sm text-black/70 leading-relaxed pl-9">
                  {p.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
