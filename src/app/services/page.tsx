import ServicesHero from "@/components/ServicesHero";

export const metadata = {
  title: "Services | Forever Faded Barber Shop",
  description:
    "Browse all Forever Faded services — haircuts, fades, beard trims, braids, color, waxing and more. Two locations: Waukesha and Oconomowoc, WI.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
    </main>
  );
}
