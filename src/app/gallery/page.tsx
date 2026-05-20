import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";
import { GALLERY_IMAGES } from "@/lib/gallery";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Barbershop Gallery — Fades, Cuts & Styles",
  description:
    "Browse our work — precision fades, haircuts, and grooming by the Forever Faded team in Waukesha and Oconomowoc, WI.",
  alternates: { canonical: `${SITE_URL}/gallery` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Gallery", item: `${SITE_URL}/gallery` },
  ],
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function GalleryPage() {
  const images = shuffle(GALLERY_IMAGES);

  return (
    <main>
      <GalleryHero />
      <div className="h-px bg-gold" />
      <GalleryGrid images={images} />
      <JsonLd data={breadcrumbSchema} />
    </main>
  );
}
