import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Source_Sans_3 } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleTag from "@/components/GoogleTag";
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://foreverfadedbarbershop.com";

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
  alternates: { canonical: SITE_URL },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Forever Faded Barber Shop",
  description:
    "Waukesha County's premier barbershop offering expert haircuts, fades, beard trims, color, and grooming services.",
  url: SITE_URL,
  telephone: "+12623499289",
  foundingDate: "2008",
  founder: { "@type": "Person", name: "Tim Retic" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1427 E Racine Ave #H",
    addressLocality: "Waukesha",
    addressRegion: "WI",
    postalCode: "53186",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "10:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "00:00", closes: "00:00" },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "350" },
  sameAs: [
    "https://www.facebook.com/foreverFadedwi",
    "https://www.instagram.com/foreverfadedwi/",
    "https://www.tiktok.com/@foreverfadedwi",
    "https://www.linkedin.com/in/tretic/",
    "https://www.youtube.com/user/tretic13",
  ],
};

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
      <body className="min-h-full flex flex-col">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          />
          <GoogleAnalytics />
          <GoogleTag />
          <ScrollObserver />
          <Nav />
          {children}
          <Footer />
        </body>
    </html>
  );
}
