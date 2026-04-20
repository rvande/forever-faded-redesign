import Image from "next/image";
import Link from "next/link";

const CLD = (id: string) =>
  `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_auto,f_auto,w_800/${id}`;

export type TeamMemberData = {
  name: string;
  slug: string;
  role: string;
  publicId: string;
  bio: string;
  isOwner?: boolean;
};

type Props = {
  member: TeamMemberData;
  flip: boolean;
  index: number;
};

export default function TeamMember({ member, flip, index }: Props) {
  const isDark = index % 2 !== 0;

  const portrait = (
    <div className="w-full lg:w-[40%] shrink-0">
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <Image
          src={CLD(member.publicId)}
          alt={`${member.name} — ${member.role} at Forever Faded`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
    </div>
  );

  const content = (
    <div className="flex-1 flex flex-col justify-center py-8 lg:py-0" data-reveal>
      <p className={`font-subheading text-xs tracking-[0.3em] uppercase mb-2 ${isDark ? "text-white/30" : "text-black/30"}`}>
        {String(index + 1).padStart(2, "0")}
      </p>
      <h2 className={`font-heading text-5xl sm:text-6xl lg:text-7xl leading-none mb-1 ${isDark ? "text-white" : "text-black"}`}>
        {member.name}
      </h2>
      <p className="font-subheading text-xs tracking-widest uppercase text-gold mb-4">
        {member.role}
      </p>
      <div className="h-px bg-gold w-12 mb-6" />
      <div className={`space-y-4 mb-8 font-body text-sm leading-relaxed ${isDark ? "text-white/80" : "text-black/80"}`}>
        {member.bio.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      <Link
        href="https://getsquire.com/booking/brands/forever-faded-llc"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex self-start items-center bg-gold text-black font-subheading text-base tracking-widest uppercase px-8 py-3 hover:bg-gold/90 transition-colors ${
          isDark
            ? "shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
            : "shadow-[4px_4px_0px_0px_#000000]"
        }`}
      >
        {member.isOwner ? "Contact" : "Book Now"}
      </Link>
    </div>
  );

  return (
    <section
      id={member.slug}
      className={`scroll-mt-28 ${isDark ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
        <div className={`flex flex-col ${flip ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-16 items-start`}>
          {portrait}
          {content}
        </div>
      </div>
    </section>
  );
}
