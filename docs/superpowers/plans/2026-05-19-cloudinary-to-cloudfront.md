# Cloudinary → AWS S3 + CloudFront Migration Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all Cloudinary image/video delivery with AWS S3 + CloudFront, using Next.js `next/image` for optimization.

**Architecture:** S3 stores originals organized into `staff/`, `heroes/`, `gallery/`, and `videos/` prefixes. CloudFront serves them via a single `NEXT_PUBLIC_CF_DOMAIN` env var. `next/image` handles all resizing, format conversion, and quality (replacing Cloudinary's `q_auto,f_auto,w_X` URL transforms). Gallery listing moves from Cloudinary search API to a hardcoded manifest in `src/lib/gallery.ts`.

**Tech Stack:** AWS S3, AWS CloudFront, Next.js `next/image`, TypeScript

---

## Chunk 1: AWS Setup + Gallery Manifest Export

### Task 1: Create S3 Bucket (AWS Console — you do this)

- [ ] **Step 1: Create bucket**
  - Go to S3 → Create bucket
  - Name: `forever-faded-media` (or your preference)
  - Region: `us-east-1` (closest to Vercel's default edge)
  - **Block all public access: ON** (CloudFront will be the only public entry point)
  - Versioning: off
  - Click Create

- [ ] **Step 2: Create folder structure**
  - In the bucket, create these four folders (click Create folder for each):
    - `staff/`
    - `heroes/`
    - `gallery/`
    - `videos/`

---

### Task 2: Create CloudFront Distribution (AWS Console — you do this)

- [ ] **Step 1: Create distribution**
  - Go to CloudFront → Create distribution
  - **Origin domain:** select your S3 bucket from the dropdown
  - **Origin access:** select "Origin access control settings (recommended)"
  - Click "Create new OAC" → use defaults → Create
  - **Copy the bucket policy** CloudFront shows you — you'll need it in the next step

- [ ] **Step 2: Update S3 bucket policy**
  - CloudFront will show a banner: "The S3 bucket policy needs to be updated"
  - Click "Copy policy"
  - Go to your S3 bucket → Permissions → Bucket policy → Edit → Paste → Save

- [ ] **Step 3: Distribution settings**
  - Viewer protocol policy: **Redirect HTTP to HTTPS**
  - Cache policy: **CachingOptimized** (AWS managed)
  - Leave everything else as defaults
  - Click Create distribution

- [ ] **Step 4: Note your CloudFront domain**
  - Wait ~5 minutes for deployment
  - Your domain will look like: `https://d1abc2def3gh.cloudfront.net`
  - Save this — you'll need it for `.env.local` and `next.config.ts`

---

### Task 3: Export Gallery Manifest from Cloudinary

We'll call Cloudinary's API one final time to get all gallery image data (public_ids + dimensions), then output a TypeScript manifest.

- [ ] **Step 1: Create the export script**

Create `scripts/export-gallery-manifest.mjs`:

```js
// Run with: node scripts/export-gallery-manifest.mjs
// Requires: NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET in .env.local

import { readFileSync } from "fs";

// Parse .env.local manually (no dotenv dependency needed)
const env = Object.fromEntries(
  readFileSync(".env.local", "utf8")
    .split("\n")
    .filter((l) => l.includes("=") && !l.startsWith("#"))
    .map((l) => {
      const idx = l.indexOf("=");
      return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()];
    })
);

const cloud = env["NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME"];
const key = env["CLOUDINARY_API_KEY"];
const secret = env["CLOUDINARY_API_SECRET"];
const credentials = Buffer.from(`${key}:${secret}`).toString("base64");

let allResources = [];
let nextCursor = null;

do {
  const body = {
    expression: 'folder="Image Gallery"',
    sort_by: [{ created_at: "desc" }],
    max_results: 200,
    ...(nextCursor ? { next_cursor: nextCursor } : {}),
  };

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud}/resources/search`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const data = await res.json();
  allResources = allResources.concat(data.resources);
  nextCursor = data.next_cursor ?? null;
} while (nextCursor);

// Output TypeScript manifest
const lines = allResources.map(
  (r) =>
    `  { key: "gallery/${r.public_id.replace("Image Gallery/", "")}.jpg", width: ${r.width}, height: ${r.height} },`
);

console.log(`// Auto-generated from Cloudinary on ${new Date().toISOString()}`);
console.log(`// ${allResources.length} images`);
console.log(`export type GalleryImage = { key: string; width: number; height: number };`);
console.log(`\nexport const GALLERY_IMAGES: GalleryImage[] = [`);
lines.forEach((l) => console.log(l));
console.log(`];`);
```

- [ ] **Step 2: Run the script**

```bash
node scripts/export-gallery-manifest.mjs > src/lib/gallery.ts
```

- [ ] **Step 3: Review the output**

Open `src/lib/gallery.ts` and verify:
- It has the correct number of images
- Keys look like `gallery/DSC_1234_abc.jpg`
- Width/height values are present and non-zero
- No `Image Gallery/` prefix remains in the keys

> **Note:** If some `public_id` values already include a subfolder path like `Image Gallery/DSC_1234_abc`, the script strips it. Double-check the first few entries manually.

- [ ] **Step 4: Verify gallery image filenames match what you'll upload**

The manifest keys (e.g. `gallery/DSC_1234_abc.jpg`) tell you exactly what each file must be named in S3. Keep this file open while uploading in Task 4.

---

### Task 4: Upload All Media to S3 (AWS Console — you do this)

Download originals from Cloudinary (or use your local copies) and upload to S3 with the exact names below.

#### `heroes/` — 3 files
Upload these to the `heroes/` folder in S3:

| Cloudinary URL fragment | S3 key |
|---|---|
| `v1778275430/DSC_6460-Enhanced-NR_1_1_fphzjs.jpg` | `heroes/DSC_6460-Enhanced-NR_1_1_fphzjs.jpg` |
| `v1776708653/theowner-profile_huzaza.webp` | `heroes/theowner-profile_huzaza.webp` |
| `v1776190321/BTS_FOOTAGE__wqzwzg.jpg` | `heroes/BTS_FOOTAGE__wqzwzg.jpg` |

#### `staff/` — 9 files
Upload to `staff/` folder. Filename = `<publicId>.<ext>`:

| Person | S3 key |
|---|---|
| Angel | `staff/DSC_6478-2_h6cmqg.jpg` |
| Juan | `staff/DSC_6493-2_tvpfvy.jpg` |
| Chelsea | `staff/DSC_6624-Enhanced-NR_qcgiey.jpg` |
| Bryan | `staff/DSC_6568_cpkpru.jpg` |
| Davy | `staff/DSC_6583-2_vtcdtx.jpg` |
| Cristian | `staff/DSC_6628_1_nqbfor.jpg` |
| Megan | `staff/DSC_6553-2_fw0m56.jpg` |
| Alexis | `staff/DSC_6607-Enhanced-NR_xvnh4c.jpg` |
| Tim | `staff/copy_of_dsc_6505-2_1_mtnk0z_c68843.jpg` |

The same 9 images are used by `TeamMember` — **no need to duplicate them**. We'll point both `Staff` and `TeamMember` at the `staff/` prefix.

#### `videos/` — 2 files
Upload to `videos/` folder:

| Cloudinary URL fragment | S3 key |
|---|---|
| `video/upload/herovideo_bnt6ye` | `videos/herovideo_bnt6ye.mp4` |
| `video/upload/mobile-hero_mp9pjk` | `videos/mobile-hero_mp9pjk.mp4` |

> To download videos from Cloudinary: visit `https://res.cloudinary.com/dmlijbube/video/upload/herovideo_bnt6ye.mp4` in a browser and save.

#### `gallery/` — all gallery images
Upload all gallery images to the `gallery/` folder. Use the keys from `src/lib/gallery.ts` as the exact filenames (e.g., `gallery/DSC_1234_abc.jpg`).

> **Tip:** Use the AWS CLI for bulk upload if you have many gallery images:
> ```bash
> aws s3 cp ./gallery-images/ s3://forever-faded-media/gallery/ --recursive
> ```

- [ ] **Step 5: Spot-check an image in the browser**

Once uploaded, test that CloudFront can serve a file:
```
https://<your-cf-domain>/heroes/DSC_6460-Enhanced-NR_1_1_fphzjs.jpg
```
You should see the image. If you get an access denied error, the bucket policy from Task 2 Step 2 may not have been saved correctly.

---

## Chunk 2: Code Changes

### Task 5: Add env var + update next.config.ts

- [ ] **Step 1: Add CloudFront domain to `.env.local`**

Open `.env.local` and add:
```
NEXT_PUBLIC_CF_DOMAIN=https://d1abc2def3gh.cloudfront.net
```
Replace with your actual CloudFront domain from Task 2.

- [ ] **Step 2: Update `next.config.ts`**

Open `next.config.ts`. Replace the `res.cloudinary.com` entry in `remotePatterns`:

```ts
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "d1abc2def3gh.cloudfront.net", // your actual CF domain
    },
    {
      protocol: "https",
      hostname: "lh3.googleusercontent.com",
    },
  ],
},
```

---

### Task 6: Create `src/lib/aws.ts`

- [ ] **Step 1: Create the file**

Create `src/lib/aws.ts`:

```ts
/** Build a CloudFront URL for a given S3 key. */
export const cf = (key: string) =>
  `${process.env.NEXT_PUBLIC_CF_DOMAIN}/${key}`;
```

That's it. `next/image` handles all width/format/quality from here.

- [ ] **Step 2: Verify `src/lib/gallery.ts` exists and is correct**

It should have been created by the export script in Task 3. Confirm it exports `GalleryImage` type and `GALLERY_IMAGES` array.

- [ ] **Step 3: Commit**

```bash
git add src/lib/aws.ts src/lib/gallery.ts next.config.ts
git commit -m "feat: add CloudFront URL builder, gallery manifest, update next.config"
```

---

### Task 7: Update GalleryGrid + gallery page

- [ ] **Step 1: Update `src/components/GalleryGrid/index.tsx`**

Replace the entire file content:

```tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/lib/gallery";
import { cf } from "@/lib/aws";

type Props = {
  images: GalleryImage[];
};

export default function GalleryGrid({ images }: Props) {
  const [active, setActive] = useState<GalleryImage | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  if (images.length === 0) {
    return (
      <section className="bg-black py-24 text-center">
        <p className="font-subheading text-sm tracking-widest uppercase text-white/40">
          No images found
        </p>
      </section>
    );
  }

  return (
    <>
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 lg:gap-4 space-y-3 lg:space-y-4">
            {images.map((img) => {
              const aspectRatio = img.width / img.height;

              return (
                <button
                  key={img.key}
                  onClick={() => setActive(img)}
                  className="relative overflow-hidden break-inside-avoid group w-full cursor-zoom-in"
                  style={{ aspectRatio }}
                  aria-label="View image fullscreen"
                >
                  <Image
                    src={cf(img.key)}
                    alt="Forever Faded Barbershop"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-300"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={cf(active.key)}
              alt="Forever Faded Barbershop"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
```

- [ ] **Step 2: Update `src/app/gallery/page.tsx`**

Replace the import and usage:

```tsx
import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";
import { GALLERY_IMAGES } from "@/lib/gallery";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Barbershop Gallery — Fades, Cuts & Styles",
  description:
    "Browse our work — precision fades, haircuts, and grooming by the Forever Faded team in Waukesha and Oconomowoc, WI.",
  alternates: { canonical: `${SITE_URL}/gallery` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Gallery", item: `${SITE_URL}/gallery` },
  ],
};

// Fisher-Yates shuffle
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function GalleryPage() {
  const images = shuffle(GALLERY_IMAGES);

  return (
    <main>
      <GalleryHero />
      <div className="h-px bg-gold" />
      <GalleryGrid images={images} />
      <JsonLd data={breadcrumbSchema} />
    </main>
  );
}
```

> Note: The page is now a regular (non-async) Server Component — no API call needed.

- [ ] **Step 3: Commit**

```bash
git add src/components/GalleryGrid/index.tsx src/app/gallery/page.tsx
git commit -m "feat: migrate gallery to CloudFront manifest"
```

---

### Task 8: Update static hero images

- [ ] **Step 1: Update `src/components/AboutHero/index.tsx`**

Change line 8:
```tsx
// Before
src="https://res.cloudinary.com/dmlijbube/image/upload/v1778275430/DSC_6460-Enhanced-NR_1_1_fphzjs.jpg"

// After
src={cf("heroes/DSC_6460-Enhanced-NR_1_1_fphzjs.jpg")}
```

Add the import at the top of the file (after existing imports):
```tsx
import { cf } from "@/lib/aws";
```

- [ ] **Step 2: Update `src/components/AboutFounder/index.tsx`**

Add import:
```tsx
import { cf } from "@/lib/aws";
```

Change line 13:
```tsx
// Before
src="https://res.cloudinary.com/dmlijbube/image/upload/q_auto,f_auto/v1776708653/theowner-profile_huzaza.webp"

// After
src={cf("heroes/theowner-profile_huzaza.webp")}
```

- [ ] **Step 3: Update `src/components/ServicesHero/index.tsx`**

Add import:
```tsx
import { cf } from "@/lib/aws";
```

Change line 9:
```tsx
// Before
src="https://res.cloudinary.com/dmlijbube/image/upload/v1776190321/BTS_FOOTAGE__wqzwzg.jpg"

// After
src={cf("heroes/BTS_FOOTAGE__wqzwzg.jpg")}
```

- [ ] **Step 4: Update `src/components/ServicesSEO/index.tsx`**

Add import:
```tsx
import { cf } from "@/lib/aws";
```

Change line 75:
```tsx
// Before
src="https://res.cloudinary.com/dmlijbube/image/upload/v1778275430/DSC_6460-Enhanced-NR_1_1_fphzjs.jpg"

// After
src={cf("heroes/DSC_6460-Enhanced-NR_1_1_fphzjs.jpg")}
```

- [ ] **Step 5: Commit**

```bash
git add src/components/AboutHero/index.tsx src/components/AboutFounder/index.tsx src/components/ServicesHero/index.tsx src/components/ServicesSEO/index.tsx
git commit -m "feat: migrate hero images to CloudFront"
```

---

### Task 9: Update dynamic image components

- [ ] **Step 1: Update `src/components/Staff/index.tsx`**

Replace lines 1–5:
```tsx
import Image from "next/image";
import Link from "next/link";
import { cf } from "@/lib/aws";

const CLD = (id: string) => cf(`staff/${id}.jpg`);
```

No other changes needed — `CLD(member.publicId)` still works.

- [ ] **Step 2: Update `src/components/TeamMember/index.tsx`**

Replace lines 1–5:
```tsx
import Image from "next/image";
import Link from "next/link";
import { cf } from "@/lib/aws";

const CLD = (id: string) => cf(`staff/${id}.jpg`);
```

No other changes needed.

- [ ] **Step 3: Update `src/components/ExploreStyles/index.tsx`**

Replace lines 1–13 (the Cloudinary config block):
```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cf } from "@/lib/aws";

/** Build a CloudFront URL for a gallery image */
function cld(publicId: string) {
  return cf(`gallery/${publicId}.jpg`);
}
```

> The `w` parameter is removed — `next/image` handles sizing via the `sizes` prop already on the `<Image>` component.

- [ ] **Step 4: Commit**

```bash
git add src/components/Staff/index.tsx src/components/TeamMember/index.tsx src/components/ExploreStyles/index.tsx
git commit -m "feat: migrate staff and explore-styles images to CloudFront"
```

---

### Task 10: Update Hero videos

- [ ] **Step 1: Update `src/components/Hero/index.tsx`**

Add import after existing imports:
```tsx
import { cf } from "@/lib/aws";
```

Replace line 9:
```tsx
// Before
src="https://res.cloudinary.com/dmlijbube/video/upload/q_auto,f_auto/herovideo_bnt6ye"

// After
src={cf("videos/herovideo_bnt6ye.mp4")}
```

Replace line 21:
```tsx
// Before
src="https://res.cloudinary.com/dmlijbube/video/upload/q_auto,f_auto,w_800/mobile-hero_mp9pjk"

// After
src={cf("videos/mobile-hero_mp9pjk.mp4")}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero/index.tsx
git commit -m "feat: migrate hero videos to CloudFront"
```

---

### Task 11: Remove Cloudinary

- [ ] **Step 1: Delete `src/lib/cloudinary.ts`**

```bash
git rm src/lib/cloudinary.ts
```

- [ ] **Step 2: Remove Cloudinary env vars from `.env.local`**

Delete these three lines from `.env.local`:
```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

- [ ] **Step 3: Confirm no remaining Cloudinary references**

```bash
grep -r "cloudinary" src/ --include="*.ts" --include="*.tsx" -i
```

Expected: no output.

- [ ] **Step 4: Delete the export script (optional cleanup)**

```bash
rm scripts/export-gallery-manifest.mjs
```

- [ ] **Step 5: Commit**

```bash
git add -u
git commit -m "chore: remove Cloudinary lib and env vars"
```

---

### Task 12: Run dev server and verify

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

- [ ] **Step 2: Work through verification checklist**

Open browser devtools → Network tab → filter by `Img` and `Media`.

| Page | What to check |
|---|---|
| `/` | Hero videos autoplay (desktop + mobile), ExploreStyles images cycle, Staff cards load |
| `/about-us` | AboutHero background loads, AboutFounder portrait loads |
| `/services` | ServicesHero background loads, ServicesSEO image loads |
| `/gallery` | All gallery images load with correct aspect ratios, lightbox opens |
| `/staff` | All TeamMember portraits load |

- [ ] **Step 3: Confirm zero Cloudinary requests**

In Network tab, search for `cloudinary` — zero results expected.

- [ ] **Step 4: Confirm `next/image` optimization is working**

In Network tab, click any image request. The URL should go through `/_next/image?url=...` (Next.js optimization proxy) with a `w=` and `q=` parameter. This confirms resizing and quality optimization are active.

- [ ] **Step 5: Final commit if anything was adjusted**

```bash
git add -A
git commit -m "fix: post-migration adjustments"
```
