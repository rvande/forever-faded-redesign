import PodcastHero from "@/components/PodcastHero";
import PodcastSABS from "@/components/PodcastSABS";
import PodcastMentalShift from "@/components/PodcastMentalShift";
import PodcastBook from "@/components/PodcastBook";
import PodcastGuestForm from "@/components/PodcastGuestForm";
import PodcastConnectTim from "@/components/PodcastConnectTim";

export const metadata = {
  title: "Podcasts | Forever Faded Barber Shop",
  description:
    "Listen to Success After Barber School and The Mental Shift — two podcasts from the Forever Faded family covering the barbering industry, mindset, and building a legacy.",
};

export default function PodcastPage() {
  return (
    <main>
      <PodcastHero />
      <div className="h-px bg-gold" />
      <PodcastSABS />
      <div className="h-px bg-gold" />
      <PodcastMentalShift />
      <div className="h-px bg-gold" />
      <PodcastBook />
      <div className="h-px bg-gold" />
      <PodcastGuestForm />
      <div className="h-px bg-gold" />
      <PodcastConnectTim />
    </main>
  );
}
