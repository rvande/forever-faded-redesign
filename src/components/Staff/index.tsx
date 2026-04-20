import Image from "next/image";
import Link from "next/link";

const CLD = (id: string) =>
  `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_auto,f_auto,w_600/${id}`;

type Member = {
  name: string;
  role: string;
  publicId: string;
  bookHref: string;
  isOwner?: boolean;
};

// Image assignments — Angel confirmed by filename, others mapped in URL-paste order.
// Reorder publicId values here if any are mismatched once you visually verify.
const STAFF: Member[] = [
  { name: "Angel",    role: "Barber", publicId: "Angel_1996c92994_1_x37hwz",                        bookHref: "https://getsquire.com/booking/book/forever-faded-waukesha-waukesha/barber/angel-rafael/services" },
  { name: "Juan",     role: "Barber", publicId: "IMG_20250422_130312_67e66a64fd_1_icbizv_pbq7vi",    bookHref: "https://getsquire.com/booking/book/forever-faded-waukesha-waukesha/barber/juan-lazcano/services" },
  { name: "Chelsea",  role: "Barber", publicId: "thumbnail_image1_2d7a788be4_1_anpiza",              bookHref: "https://getsquire.com/booking/book/forever-faded-waukesha-waukesha/barber/chelsea-kuehl/services" },
  { name: "Bryan",    role: "Barber", publicId: "DSC_09834_Enhanced_NR_d3de03f948_1_servz5",         bookHref: "https://getsquire.com/booking/book/forever-faded-waukesha-waukesha/barber/bryan-lembrino/services" },
  { name: "Davy",     role: "Barber", publicId: "thumbnail_IMG_20250502_064651_217ca107b0_1_aw3awf", bookHref: "https://getsquire.com/booking/book/forever-faded-waukesha-waukesha/barber/davy-obrien-2/services" },
  { name: "Cristian", role: "Barber", publicId: "Staff_6_2ee1235f98_1_ccjps2",                       bookHref: "https://getsquire.com/booking/book/forever-faded-waukesha-waukesha/barber/cristian-nellis/services" },
  { name: "Megan",    role: "Barber", publicId: "IMG_3315_91e21665f4_1_sgilqi",                      bookHref: "https://getsquire.com/booking/book/forever-faded-waukesha-waukesha/barber/megan-ewing/services" },
  { name: "Tim",      role: "Owner",  publicId: "DSC_09829_Enhanced_NR_52880fb2fe_1_j65c0d",         bookHref: "mailto:tim.retic@retici.com", isOwner: true },
];

function StaffCard({ member }: { member: Member }) {
  return (
    <div className="flex flex-col bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]">
      {/* Polaroid photo area */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <Image
          src={CLD(member.publicId)}
          alt={`${member.name} — ${member.role} at Forever Faded`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 50vw, 33vw"
        />
      </div>

      {/* Polaroid label strip */}
      <div className="px-3 pt-3 pb-1 text-center">
        <p className="font-heading text-xl sm:text-2xl text-black leading-none tracking-wide">
          {member.name}
        </p>
        <p className="font-body text-[11px] text-black/50 uppercase tracking-widest mt-0.5">
          {member.role}
        </p>
      </div>

      {/* CTAs */}
      <div className="flex gap-1.5 px-3 pb-3 mt-2">
        <a
          href={member.bookHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-black text-white font-subheading text-[10px] sm:text-[11px] tracking-widest uppercase py-2 hover:bg-gold hover:text-black transition-colors"
        >
          {member.isOwner ? "Contact" : "Book"}
        </a>
        <Link
          href={`/staff#${member.name.toLowerCase()}`}
          className="flex-1 text-center border border-black text-black font-subheading text-[10px] sm:text-[11px] tracking-widest uppercase py-2 hover:bg-black hover:text-white transition-colors"
        >
          Read Bio
        </Link>
      </div>
    </div>
  );
}

function HiringCard() {
  return (
    <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-4 sm:gap-0 bg-black px-6 py-6 sm:py-10 text-center sm:text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]">
      <div className="flex flex-col sm:items-center text-left sm:text-center">
        <p className="font-heading text-2xl sm:text-4xl text-gold leading-none sm:mb-3">
          We Are Hiring!
        </p>
        <p className="font-body text-[11px] text-white/70 uppercase tracking-widest leading-relaxed hidden sm:block sm:mb-6">
          Check out our open positions<br />and apply today
        </p>
      </div>
      <a
        href="#careers"
        className="shrink-0 font-subheading text-[11px] tracking-widest uppercase px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-black transition-colors"
      >
        Apply
      </a>
    </div>
  );
}

export default function Staff() {
  return (
    <section className="bg-gold py-16 sm:py-20 px-6 sm:px-12 lg:px-20" aria-labelledby="staff-heading">
      <h2
        id="staff-heading"
        data-reveal
        className="font-heading text-5xl sm:text-6xl lg:text-7xl text-black text-center mb-10 sm:mb-14"
      >
        Meet the Team
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {STAFF.map((m, i) => (
          <div key={m.name} data-reveal data-delay={String((i % 3) + 1)}>
            <StaffCard member={m} />
          </div>
        ))}
        <div data-reveal data-delay="1" className="col-span-2 sm:col-span-1">
          <HiringCard />
        </div>
      </div>
    </section>
  );
}
