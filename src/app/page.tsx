import Hero from "@/components/Hero";
import Classics from "@/components/Classics";
import Military from "@/components/Military";
import WhyUs from "@/components/WhyUs";
import ExploreStyles from "@/components/ExploreStyles";
import Welcome from "@/components/Welcome";
import Reviews from "@/components/Reviews";
import Staff from "@/components/Staff";
import Locations from "@/components/Locations";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <div className="h-px bg-gold" aria-hidden="true" />
      <Classics />
      <Military />
      <WhyUs />
      <div className="h-px bg-gold" aria-hidden="true" />
      <ExploreStyles />
      <div className="h-px bg-gold" aria-hidden="true" />
      <Welcome />
      <div className="h-px bg-gold" aria-hidden="true" />
      <Reviews />
      <div className="h-px bg-gold" aria-hidden="true" />
      <Staff />
      <div className="h-px bg-gold" aria-hidden="true" />
      <Locations />
    </main>
  );
}
