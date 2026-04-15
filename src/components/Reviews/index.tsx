import Link from "next/link";
import ReviewsCarousel from "./Carousel";
import type { Review } from "./Carousel";

const LEAVE_REVIEW_URL = "https://g.page/r/CclCTZfShsdHEAE/review";
const ALL_REVIEWS_URL = "https://search.google.com/local/reviews?placeid=ChIJa5PIEy2mBYgRyUJNl9KGx0c";

export const REVIEWS: Review[] = [
  {
    author: "John Mclane",
    time: "a year ago",
    text: "My brother and I have been Forever Faded customers for… well… forever lol. (Best Barbershop in Waukesha) We've been gettin cut exclusively by Megan for the past 5 years or so and are beyond satisfied every time we leave the chair.",
  },
  {
    author: "Kobe Jex",
    time: "a month ago",
    text: "Been going here for over a year and Megan has been my go-to the whole time! She does an amazing job every visit and I'll be hard pressed to find someone who always gets my hair just how I want it if I ever move away. Absolutely would recommend!",
  },
  {
    author: "Shelbie Bertolasi",
    time: "a month ago",
    text: "Best place to take my son for a great fade and haircut. Staff is friendly and professional. I highly recommend them. Tim the owner loves to give back to others in the community and is such a nice guy.",
  },
  {
    author: "C T",
    time: "9 months ago",
    text: "Great vibe. Juan was our barber who gave my kid a savage fade. I saw other stylists giving cornrows and braids so there is a variety of styles that can be done. Price is very reasonable for a styled haircut. Definitely going back.",
  },
  {
    author: "Zach Nelson",
    time: "a month ago",
    text: "I've been here three times, and three times I've left satisfied with the cleanliness, service, and quality of my cut for a very affordable price. This is a great place to go, you can't go wrong.",
  },
  {
    author: "Tim Rutkowski",
    time: "a month ago",
    text: "I've been going here for several years. Great service and conversation. Modernized approach to the classic barbershop experience.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-3" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gold" aria-hidden="true">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function Initials({ name }: { name: string }) {
  const letters = name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center shrink-0">
      <span className="font-subheading text-xs text-black">{letters}</span>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-black border border-white/10 rounded-sm px-6 py-6 flex flex-col h-full shadow-[4px_4px_0px_0px_#DBA94B]">
      <Stars />
      <p className="font-body text-sm text-white/85 leading-relaxed flex-1 mb-4">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
        <Initials name={review.author} />
        <div>
          <p className="font-subheading text-sm text-white tracking-wide">{review.author}</p>
          <p className="font-body text-xs text-white/50">{review.time} · Google Review</p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section aria-labelledby="reviews-heading" className="bg-white py-16 px-8 sm:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10" data-reveal>
          <h2 id="reviews-heading" className="font-heading leading-none">
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-black">What Our</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-gold">Clients Say</span>
          </h2>
        </div>

        {/* Mobile — carousel */}
        <div className="lg:hidden">
          <ReviewsCarousel reviews={REVIEWS} />
        </div>

        {/* Desktop — static 3-up grid, 2 rows */}
        <div className="hidden lg:grid grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={r.author} data-reveal data-delay={String((i % 3) + 1)}>
              <ReviewCard review={r} />
            </div>
          ))}
        </div>

        {/* CTAs — always visible */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            href={LEAVE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gold text-black font-subheading text-[13px] tracking-widest uppercase px-7 py-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:bg-gold/90 transition-colors"
          >
            Leave a Review
          </Link>
          <Link
            href={ALL_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border-2 border-black text-black font-subheading text-[13px] tracking-widest uppercase px-7 py-3 hover:bg-black hover:text-white transition-colors"
          >
            Read All Reviews
          </Link>
        </div>

      </div>
    </section>
  );
}
