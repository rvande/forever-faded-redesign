import AboutHero from "@/components/AboutHero";
import AboutHistory from "@/components/AboutHistory";
import AboutFounder from "@/components/AboutFounder";
import AboutValues from "@/components/AboutValues";
import AboutCTA from "@/components/AboutCTA";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "About Forever Faded Barbershop",
  description:
    "Discover the passion and expertise behind Forever Faded Barbershop — Waukesha County's premier barbershop, founded by Tim Retic in 2008.",
  alternates: { canonical: "https://foreverfadedbarbershop.com/about-us" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://foreverfadedbarbershop.com" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://foreverfadedbarbershop.com/about-us" },
  ],
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
      <JsonLd data={breadcrumbSchema} />
    </main>
  );
}
