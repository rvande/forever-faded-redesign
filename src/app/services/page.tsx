import ServicesHero from "@/components/ServicesHero";
import ServiceCategory from "@/components/ServiceCategory";
import ServicesSEO from "@/components/ServicesSEO";

export const metadata = {
  title: "Services | Forever Faded Barber Shop",
  description:
    "Browse all Forever Faded services — haircuts, fades, beard trims, braids, color, waxing and more. Two locations: Waukesha and Oconomowoc, WI.",
};

const FACE_AND_BEARD = [
  { name: "Beard & Head Lining",                   price: "$45", duration: "30 Minutes" },
  { name: "Full Service Beard Trim",                price: "$20", duration: "20 Minutes" },
  { name: "Adult Cut and Beard Trim",               price: "$45", duration: "45 Minutes" },
  { name: "Taper, Lining, Beard Trim",              price: "$30", duration: "30 Minutes" },
  { name: "Full Facial",                            price: "$30", duration: "30 Minutes" },
  { name: "Full Facial and Hot Shave",              price: "$60", duration: "45 Minutes" },
  { name: "Eyebrows",                               price: "$10", duration: "10 Minutes" },
  { name: "Adult Cut with Beard Trim and Eyebrows", price: "$50", duration: "40 Minutes" },
];

const HAIR = [
  { name: "Adult Cut",                                        price: "$40",  duration: "30 Minutes" },
  { name: "Adult Full Service",                               price: "$60",  duration: "45 Minutes" },
  { name: "Lining Taper",                                     price: "$20",  duration: "15 Minutes" },
  { name: "Cut and Color",                                    price: "$120", duration: "2 Hours" },
  { name: "Men's Full Color",                                 price: "$75",  duration: "1 Hour 30 Minutes" },
  { name: "Men's Quick Color",                                price: "$30",  duration: "1 Hour" },
  { name: "Female Cut and Color Long Hair",                   price: "$150", duration: "2 Hours 30 Minutes" },
  { name: "Female Undercut with Design",                      price: "$25",  duration: "30 Minutes" },
  { name: "Seniors, Military, First Responders Full Service", price: "$45",  duration: "1 Hour" },
  { name: "Seniors, Military, First Responders Cut",          price: "$30",  duration: "30 Minutes" },
];

const SPECIALTY = [
  { name: "Teen/Child Cut",             price: "$30",  duration: "30 Minutes" },
  { name: "Teen Cut with Eyebrows",     price: "$35",  duration: "30 Minutes" },
  { name: "Nose Waxing",                price: "$10",  duration: "10 Minutes" },
  { name: "Ear Waxing",                 price: "$10",  duration: "10 Minutes" },
  { name: "1 Hour Braids",              price: "$80",  duration: "1 Hour" },
  { name: "2 Hour Braids",              price: "$160", duration: "2 Hours" },
  { name: "1 Hour Braids with Haircut", price: "$80",  duration: "1 Hour" },
  { name: "2 Hour Braids with Haircut", price: "$160", duration: "2 Hours 30 Minutes" },
  { name: "3 Hour Braids",              price: "$200", duration: "3 Hours" },
];

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />

      <div className="h-px bg-gold" />
      <ServiceCategory
        categoryNumber="01"
        name="Face & Beard"
        services={FACE_AND_BEARD}
        theme="light"
      />

      <div className="h-px bg-gold" />
      <ServiceCategory
        categoryNumber="02"
        name="Hair"
        services={HAIR}
        theme="dark"
      />

      <div className="h-px bg-gold" />
      <ServiceCategory
        categoryNumber="03"
        name="Specialty"
        services={SPECIALTY}
        theme="light"
      />

      <div className="h-px bg-gold" />
      <ServicesSEO />
    </main>
  );
}
