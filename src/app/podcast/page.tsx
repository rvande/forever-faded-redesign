import PodcastHero from "@/components/PodcastHero";
import PodcastSABS from "@/components/PodcastSABS";
import PodcastMentalShift from "@/components/PodcastMentalShift";
import PodcastBook from "@/components/PodcastBook";
import PodcastGuestForm from "@/components/PodcastGuestForm";
import PodcastConnectTim from "@/components/PodcastConnectTim";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "Barbering Podcasts — Success After Barber School & The Mental Shift",
  description:
    "Listen to Success After Barber School and The Mental Shift — two podcasts from the Forever Faded family covering the barbering industry, mindset, and building a legacy.",
  alternates: { canonical: "https://foreverfadedbarbershop.com/podcast" },
};

const podcastSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "Success After Barber School",
    description:
      "Real and essential advice on how to build a legacy within the barbering industry and beyond. Each episode features a successful barber sharing their journey.",
    url: "https://open.spotify.com/show/2jdaRC7NB6rqDebVpGn8JD",
    webFeed: "https://open.spotify.com/show/2jdaRC7NB6rqDebVpGn8JD",
    author: { "@type": "Person", name: "Tim Retic" },
    publisher: { "@type": "Organization", name: "Forever Faded Barber Shop", url: "https://foreverfadedbarbershop.com" },
  },
  {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "The Mental Shift",
    description:
      "Sharing inspirational stories from the streets to the board room. Change your mind. Change your day.",
    author: { "@type": "Person", name: "Tim Retic" },
    publisher: { "@type": "Organization", name: "Forever Faded Barber Shop", url: "https://foreverfadedbarbershop.com" },
    sameAs: [
      "https://www.youtube.com/@ReticiGroup/videos",
      "https://www.facebook.com/InspiredtooInspire/",
      "https://www.tiktok.com/@mentalshift007",
    ],
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://foreverfadedbarbershop.com" },
    { "@type": "ListItem", position: 2, name: "Podcasts", item: "https://foreverfadedbarbershop.com/podcast" },
  ],
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
      <JsonLd data={podcastSchemas[0]} />
      <JsonLd data={podcastSchemas[1]} />
      <JsonLd data={breadcrumbSchema} />
    </main>
  );
}
