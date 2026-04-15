import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Source_Sans_3 } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
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

export const metadata: Metadata = {
  title: "Forever Faded",
  description: "Forever Faded Barber Shop",
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
          <Nav />
          {children}
          <Footer />
        </body>
    </html>
  );
}
