import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Source_Sans_3 } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-subheading",
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-body",
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Forever Faded Barber Shop | Waukesha & Oconomowoc, WI",
    template: "%s | Forever Faded Barber Shop",
  },
  description:
    "Forever Faded Barbershop — Waukesha County's premier barbershop for expert haircuts, fades, beard trims, and grooming. 50+ years combined experience. Two locations in Waukesha & Oconomowoc, WI.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Forever Faded Barber Shop",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  verification: { google: "usNx3H5haVdrFjQ58S2oav_WIs4g4C32CUs_gHfvGhc" },
};

const HOURS_SPEC = [
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "10:00", closes: "18:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "00:00", closes: "00:00" },
];

const localBusinessSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "@id": `${SITE_URL}/#barbershop-waukesha`,
    name: "Forever Faded Barber Shop — Waukesha",
    description:
      "Waukesha County's premier barbershop offering expert haircuts, fades, beard trims, color, and grooming services.",
    url: SITE_URL,
    telephone: "+12623499289",
    priceRange: "$$",
    image: `${SITE_URL}/dark-logo.png`,
    foundingDate: "2008",
    founder: { "@type": "Person", name: "Tim Retic" },
    hasMap: "https://www.google.com/maps?cid=5172250936097981129",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1427 E Racine Ave #H",
      addressLocality: "Waukesha",
      addressRegion: "WI",
      postalCode: "53186",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.0117,
      longitude: -88.2315,
    },
    openingHoursSpecification: HOURS_SPEC,
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "350" },
    sameAs: [
      "https://www.facebook.com/foreverFadedwi",
      "https://www.instagram.com/foreverfadedwi/",
      "https://www.tiktok.com/@foreverfadedwi",
      "https://www.linkedin.com/in/tretic/",
      "https://www.youtube.com/user/tretic13",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "@id": `${SITE_URL}/#barbershop-oconomowoc`,
    name: "Forever Faded Barber Shop — Oconomowoc",
    description: "Forever Faded's second location coming soon to Oconomowoc, WI — expert haircuts, fades, and grooming.",
    url: SITE_URL,
    telephone: "+12623499289",
    priceRange: "$$",
    image: `${SITE_URL}/dark-logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oconomowoc",
      addressRegion: "WI",
      addressCountry: "US",
    },
    openingHoursSpecification: HOURS_SPEC,
    sameAs: [
      "https://www.facebook.com/foreverFadedwi",
      "https://www.instagram.com/foreverfadedwi/",
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlow.variable} ${sourceSans3.variable} h-full antialiased`}
    >
      <head>
        <link rel="preload" as="image" href="/logo-light.png" fetchPriority="high" />
      </head>
      <body className="min-h-full flex flex-col">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          />
          <GoogleAnalytics />
          <ScrollObserver />
          <Nav />
          {children}
          <Footer />
        </body>
    </html>
  );
}
