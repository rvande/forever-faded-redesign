# Services Page Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a `/services` page listing all Forever Faded services in three categories with a hero, stacked category sections, and SEO copy.

**Architecture:** Four new files — three leaf components (ServicesHero, ServiceCategory, ServicesSEO) plus the page entry at `src/app/services/page.tsx`. ServiceCategory is reusable and accepts a `theme` prop to toggle light/dark backgrounds. No client-side state required — pure Server Components.

**Tech Stack:** Next.js 15 App Router (Server Components), Tailwind CSS 4, Bebas Neue / Barlow / Source Sans 3 via existing `font-heading` / `font-subheading` / `font-body` CSS classes, `data-reveal` scroll animations via existing ScrollObserver.

**Spec:** `docs/superpowers/specs/2026-04-20-services-page-design.md`

---

## Chunk 1: ServicesHero component + page scaffold

### Task 1: ServicesHero component

**Files:**
- Create: `src/components/ServicesHero/index.tsx`

- [ ] **Step 1: Create the component**

```tsx
// src/components/ServicesHero/index.tsx
import Image from "next/image";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative w-full min-h-[480px] sm:min-h-[540px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://res.cloudinary.com/dmlijbube/image/upload/v1776190321/BTS_FOOTAGE__wqzwzg.jpg"
        alt="Forever Faded barber at work"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6" data-reveal>
        <h1 className="font-heading leading-none mb-4">
          <span className="block text-6xl sm:text-7xl lg:text-9xl text-white">
            Our
          </span>
          <span className="block text-6xl sm:text-7xl lg:text-9xl text-gold">
            Services
          </span>
        </h1>

        <p className="font-subheading text-sm sm:text-base text-white/80 tracking-widest uppercase mb-10">
          Waukesha &amp; Oconomowoc
        </p>

        <Link
          href="#booking"
          className="inline-flex items-center bg-gold text-black font-subheading text-base tracking-widest uppercase px-10 py-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:bg-gold/90 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify — no TypeScript errors**

```bash
cd D:/dev/ff-redesign && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors (or only pre-existing errors unrelated to this file).

---

### Task 2: Page scaffold (wires hero in, confirms route works)

**Files:**
- Create: `src/app/services/page.tsx`

- [ ] **Step 1: Create the page with just the hero**

```tsx
// src/app/services/page.tsx
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
```

- [ ] **Step 2: Run dev server and visually verify hero renders at `/services`**

```bash
cd D:/dev/ff-redesign && npm run dev
```

Open `http://localhost:3000/services` — confirm:
- Hero image loads with dark overlay
- "Our / Services" heading visible
- "Waukesha & Oconomowoc" subtitle present
- Book Now CTA renders

- [ ] **Step 3: Commit**

```bash
cd D:/dev/ff-redesign && git add src/components/ServicesHero/index.tsx src/app/services/page.tsx && git commit -m "feat: add /services page scaffold with hero"
```

---

## Chunk 2: ServiceCategory component + all three category sections

### Task 3: ServiceCategory component

**Files:**
- Create: `src/components/ServiceCategory/index.tsx`

- [ ] **Step 1: Create the component with services data**

```tsx
// src/components/ServiceCategory/index.tsx
import Link from "next/link";

type Service = {
  name: string;
  price: string;
  duration: string;
};

type Props = {
  categoryNumber: string;
  name: string;
  services: Service[];
  theme: "light" | "dark";
};

export default function ServiceCategory({ categoryNumber, name, services, theme }: Props) {
  const isDark = theme === "dark";

  return (
    <section className={isDark ? "bg-black" : "bg-white"}>
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24">

        {/* Category heading */}
        <div className="mb-10" data-reveal>
          <p className={`font-subheading text-xs tracking-[0.3em] uppercase mb-2 ${isDark ? "text-white/40" : "text-black/40"}`}>
            {categoryNumber}
          </p>
          <h2 className="font-heading leading-none">
            <span className={`block text-6xl sm:text-7xl lg:text-8xl ${isDark ? "text-white" : "text-black"}`}>
              {name}
            </span>
          </h2>
          <div className="mt-4 h-px bg-gold w-16" />
        </div>

        {/* Service list */}
        <ul className="divide-y divide-gold/40" data-reveal data-delay="1">
          {services.map((svc) => (
            <li key={svc.name} className="flex items-center gap-4 py-4 sm:py-5">
              {/* Name */}
              <span className={`font-subheading text-sm sm:text-base tracking-widest uppercase flex-1 ${isDark ? "text-white" : "text-black"}`}>
                {svc.name}
              </span>
              {/* Price + Duration */}
              <div className="flex flex-col items-end shrink-0">
                <span className="font-heading text-3xl sm:text-4xl text-gold leading-none">
                  {svc.price}
                </span>
                <span className={`font-body text-xs mt-0.5 ${isDark ? "text-white/40" : "text-black/40"}`}>
                  {svc.duration}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-10" data-reveal data-delay="2">
          <Link
            href="#booking"
            className={`inline-flex items-center bg-gold text-black font-subheading text-base tracking-widest uppercase px-8 py-3 hover:bg-gold/90 transition-colors ${
              isDark
                ? "shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                : "shadow-[4px_4px_0px_0px_#000000]"
            }`}
          >
            Book Now
          </Link>
        </div>

      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify — no TypeScript errors**

```bash
cd D:/dev/ff-redesign && npx tsc --noEmit 2>&1 | head -20
```

---

### Task 4: Wire all three categories into the page

**Files:**
- Modify: `src/app/services/page.tsx`

- [ ] **Step 1: Replace page content with full services data + all three sections**

```tsx
// src/app/services/page.tsx
import ServicesHero from "@/components/ServicesHero";
import ServiceCategory from "@/components/ServiceCategory";

export const metadata = {
  title: "Services | Forever Faded Barber Shop",
  description:
    "Browse all Forever Faded services — haircuts, fades, beard trims, braids, color, waxing and more. Two locations: Waukesha and Oconomowoc, WI.",
};

const FACE_AND_BEARD = [
  { name: "Beard & Head Lining",                    price: "$45", duration: "30 Minutes" },
  { name: "Full Service Beard Trim",                 price: "$20", duration: "20 Minutes" },
  { name: "Adult Cut and Beard Trim",                price: "$45", duration: "45 Minutes" },
  { name: "Taper, Lining, Beard Trim",               price: "$30", duration: "30 Minutes" },
  { name: "Full Facial",                             price: "$30", duration: "30 Minutes" },
  { name: "Full Facial and Hot Shave",               price: "$60", duration: "45 Minutes" },
  { name: "Eyebrows",                                price: "$10", duration: "10 Minutes" },
  { name: "Adult Cut with Beard Trim and Eyebrows",  price: "$50", duration: "40 Minutes" },
];

const HAIR = [
  { name: "Adult Cut",                                              price: "$40",  duration: "30 Minutes" },
  { name: "Adult Full Service",                                     price: "$60",  duration: "45 Minutes" },
  { name: "Lining Taper",                                           price: "$20",  duration: "15 Minutes" },
  { name: "Cut and Color",                                          price: "$120", duration: "2 Hours" },
  { name: "Men's Full Color",                                       price: "$75",  duration: "1 Hour 30 Minutes" },
  { name: "Men's Quick Color",                                      price: "$30",  duration: "1 Hour" },
  { name: "Female Cut and Color Long Hair",                         price: "$150", duration: "2 Hours 30 Minutes" },
  { name: "Female Undercut with Design",                            price: "$25",  duration: "30 Minutes" },
  { name: "Seniors, Military, First Responders Full Service",       price: "$45",  duration: "1 Hour" },
  { name: "Seniors, Military, First Responders Cut",                price: "$30",  duration: "30 Minutes" },
];

const SPECIALTY = [
  { name: "Teen/Child Cut",              price: "$30",  duration: "30 Minutes" },
  { name: "Teen Cut with Eyebrows",      price: "$35",  duration: "30 Minutes" },
  { name: "Nose Waxing",                 price: "$10",  duration: "10 Minutes" },
  { name: "Ear Waxing",                  price: "$10",  duration: "10 Minutes" },
  { name: "1 Hour Braids",               price: "$80",  duration: "1 Hour" },
  { name: "2 Hour Braids",               price: "$160", duration: "2 Hours" },
  { name: "1 Hour Braids with Haircut",  price: "$80",  duration: "1 Hour" },
  { name: "2 Hour Braids with Haircut",  price: "$160", duration: "2 Hours 30 Minutes" },
  { name: "3 Hour Braids",               price: "$200", duration: "3 Hours" },
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
    </main>
  );
}
```

- [ ] **Step 2: Visually verify all three category sections at `/services`**

Confirm:
- Face & Beard on white bg, Hair on black bg, Specialty on white bg
- Gold divider lines between sections
- Price in gold Bebas Neue, duration muted below it
- Book Now CTA present in each section
- Scroll reveal animations trigger as you scroll

- [ ] **Step 3: Commit**

```bash
cd D:/dev/ff-redesign && git add src/components/ServiceCategory/index.tsx src/app/services/page.tsx && git commit -m "feat: add service category sections to /services page"
```

---

## Chunk 3: SEO copy section + final wiring

### Task 5: ServicesSEO component

**Files:**
- Create: `src/components/ServicesSEO/index.tsx`

- [ ] **Step 1: Create the SEO copy component**

```tsx
// src/components/ServicesSEO/index.tsx
import Link from "next/link";

export default function ServicesSEO() {
  return (
    <section className="bg-black">
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24">

        <div className="space-y-6 mb-12" data-reveal>
          <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
            Forever Faded Barber Shop is Waukesha County&apos;s premier destination for
            precision cuts, fresh fades, and expert grooming. Whether you&apos;re booking a
            beard trim at our Waukesha location or swinging by our Oconomowoc shop for a
            full-service haircut, our team of skilled barbers is ready to deliver a
            consistent, high-quality experience every visit.
          </p>

          <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
            Our Face &amp; Beard menu is built for the guy who demands the details — from a
            quick beard lining at our Waukesha barbershop to a full facial and hot shave
            that leaves you looking sharp for the week. Eyebrow cleanup, full beard trims,
            adult cuts paired with beard work — we do it all under one roof.
          </p>

          <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
            Looking for braids in Oconomowoc or Waukesha? Our Specialty menu covers 1, 2,
            and 3-hour braid sessions, braid and haircut combos, waxing services, and
            discounted cuts for seniors, military, and first responders at both locations.
            Teen and child cuts are always welcome — we make sure every client, every age,
            leaves looking their best.
          </p>

          <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
            Need color? Our Hair menu includes men&apos;s full and quick color, female cut and
            color for long hair, and female undercut with design. With over 50 years of
            combined barbering experience across our Waukesha and Oconomowoc locations,
            we bring the skill and the care to every single chair.
          </p>

          <p className="font-subheading text-base sm:text-lg text-white tracking-widest uppercase font-bold">
            IF YOU CAN GROW IT! WE CAN CUT IT!
          </p>
        </div>

        <div data-reveal data-delay="1">
          <Link
            href="#booking"
            className="inline-flex items-center bg-gold text-black font-subheading text-base tracking-widest uppercase px-10 py-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:bg-gold/90 transition-colors"
          >
            Book Now
          </Link>
        </div>

      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add ServicesSEO to the page**

In `src/app/services/page.tsx`, add the import and render it after the last gold divider:

```tsx
import ServicesSEO from "@/components/ServicesSEO";

// ...at the bottom of the JSX, replacing the trailing <div className="h-px bg-gold" />:
      <div className="h-px bg-gold" />
      <ServicesSEO />
```

- [ ] **Step 3: Verify — TypeScript clean build**

```bash
cd D:/dev/ff-redesign && npx tsc --noEmit 2>&1 | head -20
```

Expected: no new errors.

- [ ] **Step 4: Full visual QA at `/services`**

Scroll the entire page and confirm:
- Hero: image + overlay + heading + CTA ✓
- Three category sections with correct bg colors ✓
- Gold dividers between every section ✓
- All services listed with correct prices and durations ✓
- SEO copy section: black bg, all 4 paragraphs, tagline in white ✓
- Book Now CTA in SEO section ✓
- Scroll reveal animations fire on all `data-reveal` elements ✓
- Mobile: resize to 375px — all rows readable, no overflow ✓

- [ ] **Step 5: Run lint**

```bash
cd D:/dev/ff-redesign && npm run lint 2>&1 | tail -10
```

Expected: no errors.

- [ ] **Step 6: Final commit**

```bash
cd D:/dev/ff-redesign && git add src/components/ServicesSEO/index.tsx src/app/services/page.tsx && git commit -m "feat: add SEO copy section to /services page — complete services page"
```
