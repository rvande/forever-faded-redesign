import CareersForm from "@/components/CareersForm";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Barber Jobs & Careers in Waukesha, WI",
  description:
    "Join the Forever Faded team — we're looking for talented barbers and professionals in Waukesha and Oconomowoc, WI.",
  alternates: { canonical: `${SITE_URL}/careers` },
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Licensed Barber",
  description:
    "Forever Faded Barber Shop is hiring licensed barbers for our Waukesha and Oconomowoc, WI locations. Join a team with 50+ years of combined experience, a loyal client base, and a welcoming shop culture.",
  datePosted: "2025-01-01",
  validThrough: "2025-12-31",
  employmentType: "FULL_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: "Forever Faded Barber Shop",
    sameAs: SITE_URL,
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1427 E Racine Ave #H",
      addressLocality: "Waukesha",
      addressRegion: "WI",
      postalCode: "53186",
      addressCountry: "US",
    },
  },
  qualifications: "Valid Wisconsin barber or cosmetology license",
  skills: "Haircuts, fades, beard trims, grooming",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Careers", item: `${SITE_URL}/careers` },
  ],
};

export default function CareersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-black py-16 lg:py-24 text-center">
        <div className="px-6" data-reveal>
          <h1 className="font-heading leading-none mb-4">
            <span className="block text-6xl sm:text-7xl lg:text-9xl text-white">Join</span>
            <span className="block text-6xl sm:text-7xl lg:text-9xl text-gold">Our Team</span>
          </h1>
          <p className="font-subheading text-sm sm:text-base text-white/70 tracking-widest uppercase max-w-xl mx-auto">
            We&apos;re looking for talented individuals to join Forever Faded Barbershop
          </p>
        </div>
      </section>

      <div className="h-px bg-gold" />

      <CareersForm />
      <JsonLd data={jobPostingSchema} />
      <JsonLd data={breadcrumbSchema} />
    </main>
  );
}
