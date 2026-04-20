# Team Page Design Spec
**Date:** 2026-04-20
**Status:** Approved

## Overview

A `/staff` page showcasing Forever Faded's 8 barbers with alternating portrait + bio rows, anchor links per member, an intro section with "What Sets Our Team Apart" feature cards, and a simple hero banner. The existing homepage Staff component's "Read Bio" links are updated to anchor directly to each member's section.

---

## Route

`/staff` — matches existing "Read Bio" links on the homepage Staff component.

---

## Hero Section

- Component: `src/components/TeamHero/index.tsx`
- Black background, `min-h-[320px]`, flex items-center justify-center
- Content centered:
  - `<h1>` Bebas Neue — "Meet" (white) / "The Team" (gold), large responsive sizing (`text-6xl sm:text-7xl lg:text-9xl`)
  - Subtitle: "Waukesha & Oconomowoc" — Barlow `font-subheading tracking-widest uppercase text-white/80`
  - Gold Book Now CTA → `https://getsquire.com/booking/brands/forever-faded-llc`, `target="_blank"`
  - Shadow: `shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]`
- `data-reveal` on content div

---

## Intro Section

- Component: `src/components/TeamIntro/index.tsx`
- Background: `bg-white`
- Container: `max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24`
- Two-column layout on desktop (`lg:flex gap-16`), stacked on mobile

### Left column
- `<h2>` Bebas Neue:
  - "Skilled Professionals," (black, `text-5xl sm:text-6xl lg:text-7xl`)
  - "Exceptional Results" (gold, same size)
- Two body paragraphs (from provided copy)

### Right column — 3 feature cards
Each card: gold number (`font-heading text-4xl text-gold`), bold title (`font-subheading tracking-widest uppercase text-black text-sm`), description (`font-body text-sm text-black/70 leading-relaxed`). Separated by thin gold dividers.

| # | Title | Description |
|---|-------|-------------|
| 01 | Continuous Training | Our barbers regularly attend workshops and training sessions to stay updated with the latest techniques and trends in the industry. |
| 02 | Client-Focused Approach | We take the time to understand your needs and preferences, ensuring that every haircut is tailored to enhance your unique style and features. |
| 03 | Versatile Expertise | From classic cuts to modern styles, our team excels in a wide range of techniques to serve clients of all ages and style preferences. |

- `data-reveal` on both columns

---

## Team Member Rows

- Component: `src/components/TeamMember/index.tsx` (reusable)
- Props: `member: TeamMemberData`, `flip: boolean`, `index: number`
- Each section has `id={member.slug}` for anchor navigation

### Type
```ts
type TeamMemberData = {
  name: string;
  slug: string;         // lowercase, e.g. "angel"
  role: string;
  publicId: string;     // Cloudinary public ID
  bio: string;
  isOwner?: boolean;
}
```

### Row layout
- Alternating: `flip=false` → image left, content right; `flip=true` → image right, content left
- On mobile: always stacked (image on top, content below)
- Image: Next.js `<Image fill>`, `aspect-[3/4]`, `object-cover object-top`, ~40% width on desktop (`lg:w-[40%]`)
- Content side (~60% width):
  - Small muted number badge (`font-subheading text-xs text-black/30 lg:text-white/30`, depending on theme)
  - Name: `font-heading text-5xl sm:text-6xl text-black lg:text-white` (alternating theme)
  - Role: `font-subheading text-xs tracking-widest uppercase text-gold`
  - Gold accent line: `h-px bg-gold w-12 my-4`
  - Bio: `font-body text-sm leading-relaxed text-black/80 lg:text-white/80`
  - Book Now CTA → Squire URL, `target="_blank"`
- Alternating section bg: white (even index) → black (odd index)
- `data-reveal` on content div

### Staff Data (placeholder bios)
All 8 members from the existing STAFF array in `src/components/Staff/index.tsx`:

| Name | Slug | Role | publicId | isOwner |
|------|------|------|----------|---------|
| Angel | angel | Barber | Angel_1996c92994_1_x37hwz | — |
| Juan | juan | Barber | IMG_20250422_130312_67e66a64fd_1_icbizv_pbq7vi | — |
| Bryan | bryan | Barber | DSC_09834_Enhanced_NR_d3de03f948_1_servz5 | — |
| Davy | davy | Barber | thumbnail_IMG_20250502_064651_217ca107b0_1_aw3awf | — |
| Cristian | cristian | Barber | Staff_6_2ee1235f98_1_ccjps2 | true |
| Tim | tim | Owner | DSC_09829_Enhanced_NR_52880fb2fe_1_j65c0d | — |
| Chelsea | chelsea | Barber | thumbnail_image1_2d7a788be4_1_anpiza | — |
| Megan | megan | Barber | IMG_3315_91e21665f4_1_sgilqi | — |

Placeholder bio: "Bio coming soon — check back for [Name]'s full story."

---

## Homepage Staff Component Update

- Modify: `src/components/Staff/index.tsx`
- Update "Read Bio" `<Link href="/staff">` → `<Link href={`/staff#${member.name.toLowerCase()}`}>`
- Update `bookHref: "#"` → `"https://getsquire.com/booking/brands/forever-faded-llc"` for all members
- Add `target="_blank" rel="noopener noreferrer"` to the Book `<a>` tag

---

## File Structure

```
src/
  app/
    staff/
      page.tsx                 ← page entry
  components/
    TeamHero/
      index.tsx
    TeamIntro/
      index.tsx
    TeamMember/
      index.tsx                ← reusable, accepts member + flip + index
    Staff/
      index.tsx                ← modified: Read Bio anchor links + booking URL
```

---

## Styling Constraints

- Section container: `max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24`
- Typography: `.font-heading`, `.font-subheading`, `.font-body`
- Colors: `bg-gold`, `text-gold`, `bg-black`, `bg-white`
- CTA on dark bg: `shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]`
- CTA on light bg: `shadow-[4px_4px_0px_0px_#000000]`
- Scroll animations: `data-reveal` + `data-delay` via existing ScrollObserver
- Gold dividers between sections: `<div className="h-px bg-gold" />`
- Cloudinary URL pattern: `https://res.cloudinary.com/${NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_auto,f_auto,w_800/${publicId}`
