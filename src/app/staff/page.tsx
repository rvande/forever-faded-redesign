import TeamHero from "@/components/TeamHero";
import TeamIntro from "@/components/TeamIntro";
import TeamMember, { type TeamMemberData } from "@/components/TeamMember";

export const metadata = {
  title: "Meet the Team | Forever Faded Barber Shop",
  description:
    "Meet the skilled barbers at Forever Faded — passionate professionals dedicated to precision cuts, fades, and grooming in Waukesha and Oconomowoc, WI.",
};

const PLACEHOLDER = (name: string) =>
  `Bio coming soon — check back for ${name}'s full story.`;

const TEAM: TeamMemberData[] = [
  {
    name: "Angel",
    slug: "angel",
    role: "Barber",
    publicId: "Angel_1996c92994_1_x37hwz",
    bio: PLACEHOLDER("Angel"),
  },
  {
    name: "Juan",
    slug: "juan",
    role: "Barber",
    publicId: "IMG_20250422_130312_67e66a64fd_1_icbizv_pbq7vi",
    bio: PLACEHOLDER("Juan"),
  },
  {
    name: "Bryan",
    slug: "bryan",
    role: "Barber",
    publicId: "DSC_09834_Enhanced_NR_d3de03f948_1_servz5",
    bio: PLACEHOLDER("Bryan"),
  },
  {
    name: "Davy",
    slug: "davy",
    role: "Barber",
    publicId: "thumbnail_IMG_20250502_064651_217ca107b0_1_aw3awf",
    bio: PLACEHOLDER("Davy"),
  },
  {
    name: "Cristian",
    slug: "cristian",
    role: "Barber",
    publicId: "Staff_6_2ee1235f98_1_ccjps2",
    bio: PLACEHOLDER("Cristian"),
    isOwner: true,
  },
  {
    name: "Tim",
    slug: "tim",
    role: "Owner",
    publicId: "DSC_09829_Enhanced_NR_52880fb2fe_1_j65c0d",
    bio: PLACEHOLDER("Tim"),
  },
  {
    name: "Chelsea",
    slug: "chelsea",
    role: "Barber",
    publicId: "thumbnail_image1_2d7a788be4_1_anpiza",
    bio: PLACEHOLDER("Chelsea"),
  },
  {
    name: "Megan",
    slug: "megan",
    role: "Barber",
    publicId: "IMG_3315_91e21665f4_1_sgilqi",
    bio: PLACEHOLDER("Megan"),
  },
];

export default function StaffPage() {
  return (
    <main>
      <TeamHero />
      <div className="h-px bg-gold" />
      <TeamIntro />
      {TEAM.map((member, i) => (
        <div key={member.slug}>
          {i === 0 && <div className="h-px bg-gold" />}
          <TeamMember
            member={member}
            flip={i % 2 !== 0}
            index={i}
          />
          <div className="h-px bg-gold" />
        </div>
      ))}
    </main>
  );
}
