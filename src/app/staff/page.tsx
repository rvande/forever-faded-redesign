import TeamHero from "@/components/TeamHero";
import TeamIntro from "@/components/TeamIntro";

export const metadata = {
  title: "Meet the Team | Forever Faded Barber Shop",
  description:
    "Meet the skilled barbers at Forever Faded — passionate professionals dedicated to precision cuts, fades, and grooming in Waukesha and Oconomowoc, WI.",
};

export default function StaffPage() {
  return (
    <main>
      <TeamHero />
      <div className="h-px bg-gold" />
      <TeamIntro />
    </main>
  );
}
