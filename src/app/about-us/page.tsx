import AboutHero from "@/components/AboutHero";
import AboutHistory from "@/components/AboutHistory";
import AboutFounder from "@/components/AboutFounder";
import AboutValues from "@/components/AboutValues";
import AboutCTA from "@/components/AboutCTA";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "About Forever Faded Barbershop",
  description:
    "Discover the passion and expertise behind Forever Faded Barbershop — Waukesha County's premier barbershop, founded by Tim Retic in 2008.",
  alternates: { canonical: `${SITE_URL}/about-us` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE_URL}/about-us` },
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
