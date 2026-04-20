import Image from "next/image";

export default function PodcastSABS() {
  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Cover art */}
          <div className="shrink-0 w-full max-w-[280px] lg:max-w-[320px]" data-reveal>
            <div className="relative pb-5 pr-5">
              <div className="absolute top-5 left-5 right-0 bottom-0 bg-gold z-0" />
              <div className="relative z-10 overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src="/podcast.webp"
                    alt="Success After Barber School Podcast"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1" data-reveal data-delay="1">
            <p className="font-subheading text-xs tracking-widest uppercase text-gold mb-3">
              Podcast 01
            </p>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-6">
              Success After<br />Barber School
            </h2>
            <div className="h-px bg-gold w-12 mb-6" />

            <div className="space-y-4 font-body text-base text-white/75 leading-relaxed mb-8">
              <p>
                Join us as we explore the real and essential advice on how to build a legacy
                within the barbering industry and beyond.
              </p>
              <p>
                Each episode features a successful barber who shares their journey and insights
                on how to succeed in today&apos;s market. Subscribe on your favorite platform
                to get notified when new episodes drop and connect with other barbers committed
                to excellence.
              </p>
            </div>

            {/* Spotify embed */}
            <div className="mb-4">
              <iframe
                src="https://open.spotify.com/embed/show/2jdaRC7NB6rqDebVpGn8JD?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Success After Barber School on Spotify"
              />
            </div>

            {/* Apple Podcasts embed */}
            <div>
              <iframe
                src="https://embed.podcasts.apple.com/us/podcast/success-after-barber-school/id1652171092"
                height="180"
                frameBorder="0"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                style={{ width: "100%", overflow: "hidden", borderRadius: "10px" }}
                title="Success After Barber School on Apple Podcasts"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
