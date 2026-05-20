# Design: Cloudinary → AWS S3 + CloudFront Migration

**Date:** 2026-05-19
**Status:** Approved

## Overview

Migrate all media (images and videos) from Cloudinary to AWS S3 + CloudFront. Replace Cloudinary URL transformations (`q_auto,f_auto,w_X`) with Next.js image optimization. Replace the Cloudinary search API gallery listing with a hardcoded manifest in the codebase.

## Architecture

### Storage & Delivery
- **S3**: origin storage for all media files
- **CloudFront**: CDN distribution in front of S3
- **Next.js `next/image`**: handles width, format, and quality optimization (replaces Cloudinary URL transforms)
- **Videos**: plain `<video src>` pointing to CloudFront (no Next.js optimization needed)

### Environment Variables
```
# Remove
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET

# Add
NEXT_PUBLIC_CF_DOMAIN=https://<your-distribution>.cloudfront.net
```

### S3 Bucket Structure
Files use same filenames as Cloudinary public IDs:
```
bucket/
├── staff/        <publicId>.jpg  (9 staff members)
├── team/         <publicId>.jpg  (TeamMember portraits + hero images)
├── heroes/       <filename>.jpg  (AboutHero, ServicesHero, AboutFounder, ServicesSEO)
├── gallery/      <publicId>.jpg  (all gallery images)
└── videos/       herovideo_bnt6ye.mp4, mobile-hero_mp9pjk.mp4
```

### URL Builder
`src/lib/aws.ts` replaces `src/lib/cloudinary.ts`:
```ts
export const cf = (key: string) =>
  `${process.env.NEXT_PUBLIC_CF_DOMAIN}/${key}`;
```

## Components Changed

| Component | Change |
|---|---|
| `src/lib/cloudinary.ts` | Replaced by `src/lib/aws.ts` + `src/lib/gallery.ts` |
| `Staff` | `CLD(id)` → `cf(\`staff/${id}.jpg\`)` |
| `TeamMember` | `CLD(id)` → `cf(\`team/${id}.jpg\`)` |
| `ExploreStyles` | `cld(publicId)` → `cf(\`gallery/${publicId}.jpg\`)` |
| `AboutHero` | hardcoded Cloudinary URL → `cf("heroes/...")` |
| `AboutFounder` | hardcoded Cloudinary URL → `cf("heroes/...")` |
| `ServicesHero` | hardcoded Cloudinary URL → `cf("heroes/...")` |
| `ServicesSEO` | hardcoded Cloudinary URL → `cf("heroes/...")` |
| `Hero` | both `<video src>` → `cf("videos/...")` |
| `GalleryGrid` | `CloudinaryImage` type → `GalleryImage` type, `secure_url` manipulation removed |
| `gallery/page.tsx` | `getGalleryImages()` call → import `GALLERY_IMAGES` manifest |

## Gallery Manifest
Hardcoded in `src/lib/gallery.ts`:
```ts
export type GalleryImage = { key: string; width: number; height: number };
export const GALLERY_IMAGES: GalleryImage[] = [ ... ];
```
Fisher-Yates shuffle stays in the gallery page component.

## next.config.ts
```ts
remotePatterns: [
  { protocol: "https", hostname: "<distribution-id>.cloudfront.net" },
  { protocol: "https", hostname: "lh3.googleusercontent.com" },
]
```

## Verification Checklist
- [ ] Staff cards load at correct size/quality
- [ ] TeamMember portraits load
- [ ] ExploreStyles cycling images load and animate
- [ ] Hero videos autoplay on desktop and mobile
- [ ] Gallery page shows all images with correct aspect ratios
- [ ] Gallery lightbox opens full-size image
- [ ] AboutHero, AboutFounder, ServicesHero, ServicesSEO images load
- [ ] No `res.cloudinary.com` domains remain in network tab
- [ ] Cloudinary env vars removed, nothing breaks
