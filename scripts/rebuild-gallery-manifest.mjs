// Rebuilds gallery.ts with smart deduplication:
//   - If both original + _d9d7cd exist → use _d9d7cd, delete original
//   - If only original exists → use original (no _d9d7cd counterpart)
//   - If only _d9d7cd exists → use it
//
// Run: node scripts/rebuild-gallery-manifest.mjs
// Add --dry-run to preview without writing or deleting

import { writeFileSync } from "fs";
import { execSync } from "child_process";

const DRY_RUN = process.argv.includes("--dry-run");
const BUCKET = "forever-faded-620969609593-us-east-2-an";

// ExploreStyles images — keep in S3 but exclude from gallery manifest
const EXPLORE_FILENAMES = new Set([
  "caiden_front_ivhsq6.jpg",
  "20260228_095446_exiq55_d9d7cd.jpg",
  "Cristian__55_v3wbhd_d9d7cd.jpg",
  "IMG_5927_gkmxnr_d9d7cd.jpg",
  "Cristian__28_zwtj1s_d9d7cd.jpg",
  "Cut_by_Chelsea_10_tse5en_d9d7cd.jpg",
  "Juan_5_sl1umq_d9d7cd.jpg",
  "Cristian__52_ccxrf5_d9d7cd.jpg",
  "Cut_by_megan_1_jtbdwo_d9d7cd.jpg",
  "Cut_by_megan_2_oyox5r_d9d7cd.jpg",
  "Cristian__39_faplli_d9d7cd.jpg",
  "Cut_by_megan_1_bpf79p_d9d7cd.jpg",
  "Cut_by_megan_ubhsmb_d9d7cd.jpg",
  "Cristian__56_uwfxvn_d9d7cd.jpg",
  "Cut_by_megan_8_evj4qh_d9d7cd.jpg",
  "Cristian__47_tcl3de_d9d7cd.jpg",
  "Cut_by_megan_2_q1tpdp_d9d7cd.jpg",
  "IMG_6058_uzpcxv_d9d7cd.jpg",
]);

// List all files in gallery/
console.log("Listing S3 gallery/...");
const listing = execSync(`aws s3 ls s3://${BUCKET}/gallery/`).toString();

const allFiles = listing
  .split("\n")
  .filter(Boolean)
  .map((line) => line.trim().split(/\s+/).pop())
  .filter((f) => f && /\.(jpg|jpeg|webp|png)$/i.test(f)) // skip non-image entries like "0"
  .filter((f) => !EXPLORE_FILENAMES.has(f));

// Separate into _d9d7cd and originals
const d9Map = new Map(); // base → d9d7cd filename
const origMap = new Map(); // base → original filename

// Strip both known suffixes + extension to get the true base name
function getBase(filename) {
  return filename
    .replace(/_d9d7cd\.(jpg|jpeg|webp|png)$/i, "")
    .replace(/_5e9c4b\.(jpg|jpeg|webp|png)$/i, "")
    .replace(/\.(jpg|jpeg|webp|png)$/i, "");
}

for (const f of allFiles) {
  const base = getBase(f);
  if (f.includes("_d9d7cd")) {
    d9Map.set(base, f);
  } else {
    origMap.set(base, f);
  }
}

// Build final manifest: prefer _d9d7cd, fallback to original
const allBases = new Set([...d9Map.keys(), ...origMap.keys()]);
const manifestFiles = [];
const originalsToDelete = [];

for (const base of allBases) {
  if (d9Map.has(base)) {
    manifestFiles.push(d9Map.get(base));
    if (origMap.has(base)) {
      originalsToDelete.push(origMap.get(base)); // has both → delete original
    }
  } else {
    manifestFiles.push(origMap.get(base)); // only original → keep it
  }
}

console.log(`Total gallery files (excl. ExploreStyles): ${allFiles.length}`);
console.log(`Manifest entries:    ${manifestFiles.length}`);
console.log(`Originals to delete: ${originalsToDelete.length} (have _d9d7cd counterpart)`);
console.log(`Originals to keep:   ${origMap.size - originalsToDelete.length} (no _d9d7cd counterpart)`);

// Build gallery.ts content
const lines = manifestFiles.sort().map(
  (f) => `  { key: "gallery/${f}", width: 1000, height: 1000 },`
);

const newGalleryTs = `// Rebuilt — ${new Date().toISOString()}
// ${manifestFiles.length} images (prefers _d9d7cd resized versions where available)

export type GalleryImage = { key: string; width: number; height: number };

export const GALLERY_IMAGES: GalleryImage[] = [
${lines.join("\n")}
];
`;

if (DRY_RUN) {
  console.log("\n-- DRY RUN --");
  console.log("\nManifest preview (first 5):");
  lines.slice(0, 5).forEach((l) => console.log(l));
  console.log("\nOriginals that would be deleted (first 5):");
  originalsToDelete.slice(0, 5).forEach((f) => console.log(`  gallery/${f}`));
  console.log("\nOriginals kept (no _d9d7cd, first 5):");
  [...origMap.entries()]
    .filter(([base]) => !d9Map.has(base))
    .slice(0, 5)
    .forEach(([, f]) => console.log(`  gallery/${f}`));
  console.log("\nRun without --dry-run to apply.");
  process.exit(0);
}

// Write gallery.ts
writeFileSync("src/lib/gallery.ts", newGalleryTs);
console.log("\nWrote src/lib/gallery.ts");

// Delete originals that have _d9d7cd counterparts
if (originalsToDelete.length > 0) {
  console.log(`\nDeleting ${originalsToDelete.length} superseded originals from S3...`);
  let deleted = 0;
  for (const f of originalsToDelete) {
    execSync(`aws s3 rm s3://${BUCKET}/gallery/${f}`);
    deleted++;
    process.stdout.write(`\r${deleted}/${originalsToDelete.length}`);
  }
  console.log(`\nDeleted ${deleted} files.`);
}

console.log("\nDone. Run: rm -rf .next && npm run dev");
