import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";
import { getGalleryImages } from "@/lib/cloudinary";

export const metadata = {
  title: "Gallery | Forever Faded Barber Shop",
  description:
    "Browse our work — precision fades, haircuts, and grooming by the Forever Faded team in Waukesha and Oconomowoc, WI.",
};

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <main>
      <GalleryHero />
      <div className="h-px bg-gold" />
      <GalleryGrid images={images} />
    </main>
  );
}
