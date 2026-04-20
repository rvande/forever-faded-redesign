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
    bookHref: "https://getsquire.com/booking/book/forever-faded-waukesha-waukesha/barber/angel-rafael/services",
  },
  {
    name: "Juan",
    slug: "juan",
    role: "Barber",
    publicId: "IMG_20250422_130312_67e66a64fd_1_icbizv_pbq7vi",
    bio: "My name is Juan. I attended barber school at MATC and graduated in October 2024. I've had a passion for barbering since high school and finally decided to take it to the next level. I'm excited to learn and perfect my craft being here at Forever Faded Barbershop.",
    bookHref: "https://getsquire.com/booking/book/forever-faded-waukesha-waukesha/barber/juan-lazcano/services",
  },
  {
    name: "Bryan",
    slug: "bryan",
    role: "Barber",
    publicId: "DSC_09834_Enhanced_NR_d3de03f948_1_servz5",
    bio: PLACEHOLDER("Bryan"),
    bookHref: "https://getsquire.com/booking/book/forever-faded-waukesha-waukesha/barber/bryan-lembrino/services",
  },
  {
    name: "Davy",
    slug: "davy",
    role: "Barber",
    publicId: "thumbnail_IMG_20250502_064651_217ca107b0_1_aw3awf",
    bio: "Hello, my name is Davy. I am a barber at Forever Faded Barbershop with an ambition and motivation to master this craft. Barbering has honestly helped me in so many ways since I started 2½ years ago. I had a vivid dream of myself cutting hair and being really good at it and passionate about it — which is ironic because I was thinking of a career change, and this felt like the right one.\n\nIt has taught me to be more confident in myself and to share that energy and passion with my clients and the people around me. It is all about connecting, building relationships, and making our people feel good about themselves when they leave.\n\nI am excited to learn and soak up all the knowledge — to become the best barber, friend, and mentor to those I cut and bring into the shop. Because there is nothing more than feeling welcomed somewhere and leaving looking and feeling great. Being part of that atmosphere and team is a blessing.",
    bookHref: "https://getsquire.com/booking/book/forever-faded-waukesha-waukesha/barber/davy-obrien-2/services",
  },
  {
    name: "Cristian",
    slug: "cristian",
    role: "Barber",
    publicId: "Staff_6_2ee1235f98_1_ccjps2",
    bio: PLACEHOLDER("Cristian"),
    bookHref: "https://getsquire.com/booking/book/forever-faded-waukesha-waukesha/barber/cristian-nellis/services",
  },
  {
    name: "Tim",
    slug: "tim",
    role: "Owner",
    publicId: "DSC_09829_Enhanced_NR_52880fb2fe_1_j65c0d",
    bio: "Timothy L Retic SR is the visionary owner behind Forever Faded Barbershop. While Tim's expertise as a Master Barber is unquestionable, he no longer cuts hair at Forever Faded. Instead, he focuses on the strategic direction of the business and mentoring his talented team of barbers who deliver exceptional service daily.\n\nFor those interested in SMP services, Tim welcomes consultations through his specialized booking system. While you won't find him behind the chair at Forever Faded, his influence and standards of excellence permeate every aspect of the barbershop experience.",
    bookHref: "mailto:tim.retic@retici.com",
    ctaLabel: "Contact Tim",
  },
  {
    name: "Chelsea",
    slug: "chelsea",
    role: "Barber",
    publicId: "thumbnail_image1_2d7a788be4_1_anpiza",
    bio: "Hey, I'm Chelsea! My journey as a barber started in 2019 when I began as an apprentice, but it really began back when I worked as a receptionist at a barbershop. It didn't take long for me to fall in love with the craft, and my coworkers noticed my natural talent and pushed me to take it further. I honestly never thought I'd find a job I love this much — barbering is my passion, and I love helping people look and feel their best with a fresh cut and great conversation.\n\nIn 2020, I joined the Forever Faded team after a sudden career change, and I quickly found more than just a job — I found a new home and a supportive family in both my coworkers and clients. The encouragement from everyone has been incredible, and it's helped my love for barbering, and my skills, to grow even more. When I'm not at the shop, you can find me chasing around my two young sons, but I'm beyond grateful to be part of the Forever Faded family.\n\nI'm all about cutting hair, and I plan to keep doing it for as long as I can.",
    bookHref: "https://getsquire.com/booking/book/forever-faded-waukesha-waukesha/barber/chelsea-kuehl/services",
  },
  {
    name: "Megan",
    slug: "megan",
    role: "Barber",
    publicId: "IMG_3315_91e21665f4_1_sgilqi",
    bio: "Hi, my name is Megan! I am a proud barber at Forever Faded — where if you can grow it, we can cut it. When I'm not at work I love spending time with my three dogs, being outside enjoying the nice weather, or curling up inside for really long naps.\n\nI have been in the industry for five, almost six years now and couldn't see myself doing anything else. I've been with Forever Faded my entire career, fresh out of school, where I originally started with intentions of becoming a makeup artist. Inevitably I fell in love with barbering and was brought under the wing of the experienced barbers at Forever Faded and learned everything I know.\n\nMy ultimate goal is becoming a shop owner as well as opening suite rentals for anyone in the beauty industry to do what they love.",
    bookHref: "https://getsquire.com/booking/book/forever-faded-waukesha-waukesha/barber/megan-ewing/services",
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
