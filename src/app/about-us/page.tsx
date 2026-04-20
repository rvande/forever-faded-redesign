import AboutHero from "@/components/AboutHero";
import AboutHistory from "@/components/AboutHistory";
import AboutFounder from "@/components/AboutFounder";
import AboutValues from "@/components/AboutValues";
import AboutCTA from "@/components/AboutCTA";

export const metadata = {
  title: "About Us | Forever Faded Barber Shop",
  description:
    "Discover the passion and expertise behind Forever Faded Barbershop — Waukesha County's premier barbershop, founded by Tim Retic in 2008.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <div className="h-px bg-gold" />
      <AboutHistory />
      <div className="h-px bg-gold" />
      <AboutFounder />
      <div className="h-px bg-gold" />
      <AboutValues />
      <div className="h-px bg-gold" />
      <AboutCTA />
    </main>
  );
}
