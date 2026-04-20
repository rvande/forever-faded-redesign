export default function PodcastHero() {
  return (
    <section className="relative w-full min-h-[320px] bg-black flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-6 py-16" data-reveal>
        <h1 className="font-heading leading-none mb-4">
          <span className="block text-6xl sm:text-7xl lg:text-9xl text-white">
            Our
          </span>
          <span className="block text-6xl sm:text-7xl lg:text-9xl text-gold">
            Podcasts
          </span>
        </h1>
        <p className="font-subheading text-sm sm:text-base text-white/80 tracking-widest uppercase">
          Inspiring the next generation of barbers &amp; leaders
        </p>
      </div>
    </section>
  );
}
