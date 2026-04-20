# Services Page Design Spec
**Date:** 2026-04-20
**Status:** Approved

## Overview

A dedicated `/services` page listing all Forever Faded services organized into three categories: Face & Beard, Hair, and Specialty. Follows the existing section-based homepage rhythm with alternating backgrounds, the established typography/color system, and closes with SEO copy referencing both locations.

---

## Hero Section

- Component: `src/components/ServicesHero/index.tsx`
- Full-width banner, `min-h-[480px]`
- Background: Cloudinary image `https://res.cloudinary.com/dmlijbube/image/upload/v1776190321/BTS_FOOTAGE__wqzwzg.jpg` via Next.js `<Image fill object-cover>`
- Overlay: `bg-black/60` for text accessibility
- Content (centered):
  - `<h1>` in Bebas Neue — "Our" (white) / "Services" (gold), large responsive sizing
  - Subtitle: "Waukesha & Oconomowoc" in Barlow uppercase tracking-widest
  - Gold "Book Now" CTA with black shadow

---

## Service Category Sections

- Component: `src/components/ServiceCategory/index.tsx` (reusable)
- Props: `name: string`, `services: { name: string; price: string; duration: string }[]`, `theme: "light" | "dark"`
- Three instances in order:

| # | Category | Theme |
|---|----------|-------|
| 1 | Face & Beard | light (bg-white) |
| 2 | Hair | dark (bg-black) |
| 3 | Specialty | light (bg-white) |

### Row Layout
Each service is a `<li>` in a `<ul divide-y divide-gold>`:
- Left: service name — `font-subheading text-sm tracking-widest uppercase`
- Right: price in Bebas Neue gold (`text-2xl`), duration in muted body text (`text-xs`)
- `data-reveal` on the `<ul>`

### Services Data

**Face & Beard**
| Service | Price | Duration |
|---------|-------|----------|
| Beard & Head Lining | $45 | 30 min |
| Full Service Beard Trim | $20 | 20 min |
| Adult Cut and Beard Trim | $45 | 45 min |
| Taper, Lining, Beard Trim | $30 | 30 min |
| Full Facial | $30 | 30 min |
| Full Facial and Hot Shave | $60 | 45 min |
| Eyebrows | $10 | 10 min |
| Adult Cut with Beard Trim and Eyebrows | $50 | 40 min |

**Hair**
| Service | Price | Duration |
|---------|-------|----------|
| Adult Cut | $40 | 30 min |
| Adult Full Service | $60 | 45 min |
| Lining Taper | $20 | 15 min |
| Cut and Color | $120 | 2 hr |
| Men's Full Color | $75 | 1 hr 30 min |
| Men's Quick Color | $30 | 1 hr |
| Female Cut and Color Long Hair | $150 | 2 hr 30 min |
| Female Undercut with Design | $25 | 30 min |
| Seniors, Military, First Responders Full Service | $45 | 1 hr |
| Seniors, Military, First Responders Cut | $30 | 30 min |

**Specialty**
| Service | Price | Duration |
|---------|-------|----------|
| Teen/Child Cut | $30 | 30 min |
| Teen Cut with Eyebrows | $35 | 30 min |
| Nose Waxing | $10 | 10 min |
| Ear Waxing | $10 | 10 min |
| 1 Hour Braids | $80 | 1 hr |
| 2 Hour Braids | $160 | 2 hr |
| 1 Hour Braids with Haircut | $80 | 1 hr |
| 2 Hour Braids with Haircut | $160 | 2 hr 30 min |
| 3 Hour Braids | $200 | 3 hr |

---

## SEO Copy Section

- Component: `src/components/ServicesSEO/index.tsx`
- Background: `bg-black`, white/muted text
- 3–4 paragraphs covering:
  - General intro mentioning both Waukesha and Oconomowoc locations
  - Face & beard services with location context ("beard trim in Waukesha")
  - Specialty/braid services with location context ("braid appointment in Oconomowoc")
  - Closing tagline: "IF YOU CAN GROW IT! WE CAN CUT IT!" (bold, gold or white)
- Gold "Book Now" CTA below copy

---

## File Structure

```
src/
  app/
    services/
      page.tsx               ← page entry, imports all section components
  components/
    ServicesHero/
      index.tsx
    ServiceCategory/
      index.tsx              ← reusable, accepts name + services + theme
    ServicesSEO/
      index.tsx
```

---

## Styling Constraints

- Follow existing section container pattern: `max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-24`
- Typography: `.font-heading` (Bebas Neue), `.font-subheading` (Barlow), `.font-body` (Source Sans 3)
- Colors: `bg-gold` (#DBA94B), `text-gold`, `bg-black`, `bg-white`
- Scroll animations: `data-reveal` + `data-delay` attributes (handled by existing ScrollObserver)
- CTAs: gold button with `shadow-[4px_4px_0px_0px_#000000]` on light, `shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]` on dark
