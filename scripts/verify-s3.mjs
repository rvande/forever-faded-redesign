// Checks every image key used by the site against CloudFront.
// Reports missing files AND wrong content-type (which breaks next/image).
//
// Run: node scripts/verify-s3.mjs

import { readFileSync } from "fs";

const env = Object.fromEntries(
  readFileSync(".env.local", "utf8")
    .split("\n")
    .filter((l) => l.includes("=") && !l.startsWith("#"))
    .map((l) => {
      const idx = l.indexOf("=");
      return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()];
    })
);

const CF = env["NEXT_PUBLIC_CF_DOMAIN"];

const HERO_IMAGES = [
  "general/DSC_6460-Enhanced-NR_1_1_fphzjs.jpg",
  "general/theowner-profile_huzaza.webp",
  "general/BTS_FOOTAGE__wqzwzg.jpg",
];

const STAFF_IDS = [
  "DSC_6478-2_h6cmqg",
  "DSC_6493-2_tvpfvy",
  "DSC_6624-Enhanced-NR_qcgiey",
  "DSC_6568_cpkpru",
  "DSC_6583-2_vtcdtx",
  "DSC_6628_1_nqbfor",
  "DSC_6553-2_fw0m56",
  "DSC_6607-Enhanced-NR_xvnh4c",
  "copy_of_dsc_6505-2_1_mtnk0z_c68843",
];

const EXPLORE_IDS = [
  "caiden_front_ivhsq6",
  "20260228_095446_exiq55_d9d7cd",
  "Cristian__55_v3wbhd_d9d7cd",
  "IMG_5927_gkmxnr_d9d7cd",
  "Cristian__28_zwtj1s_d9d7cd",
  "Cut_by_Chelsea_10_tse5en_d9d7cd",
  "Juan_5_sl1umq_d9d7cd",
  "Cristian__52_ccxrf5_d9d7cd",
  "Cut_by_megan_1_jtbdwo_d9d7cd",
  "Cut_by_megan_2_oyox5r_d9d7cd",
  "Cristian__39_faplli_d9d7cd",
  "Cut_by_megan_1_bpf79p_d9d7cd",
  "Cut_by_megan_ubhsmb_d9d7cd",
  "Cristian__56_uwfxvn_d9d7cd",
  "Cut_by_megan_8_evj4qh_d9d7cd",
  "Cristian__47_tcl3de_d9d7cd",
  "Cut_by_megan_2_q1tpdp_d9d7cd",
  "IMG_6058_uzpcxv_d9d7cd",
];

// Read current gallery manifest keys
const galleryTs = readFileSync("src/lib/gallery.ts", "utf8");
const galleryKeys = [...galleryTs.matchAll(/key:\s*"([^"]+)"/g)].map((m) => m[1]);

const ALL_KEYS = [
  ...HERO_IMAGES,
  ...STAFF_IDS.map((id) => `staff/${id}.jpg`),
  ...EXPLORE_IDS.map((id) => `gallery/${id}.jpg`),
  ...galleryKeys,
];

const keys = [...new Set(ALL_KEYS)];
console.log(`Checking ${keys.length} keys against ${CF}...\n`);

const BATCH = 20;
const missing = [];
const badType = [];
const ok = [];

for (let i = 0; i < keys.length; i += BATCH) {
  const batch = keys.slice(i, i + BATCH);
  await Promise.all(
    batch.map(async (key) => {
      try {
        const res = await fetch(`${CF}/${key}`, { method: "HEAD" });
        if (!res.ok) {
          missing.push({ key, status: res.status });
          return;
        }
        const ct = res.headers.get("content-type") ?? "";
        if (!ct.startsWith("image/")) {
          badType.push({ key, contentType: ct });
          return;
        }
        ok.push(key);
      } catch (err) {
        missing.push({ key, status: err.message });
      }
    })
  );
  process.stdout.write(`\r${Math.min(i + BATCH, keys.length)}/${keys.length}`);
}

console.log(`\n\n✓ OK: ${ok.length}`);

if (missing.length > 0) {
  console.log(`\n✗ Missing (${missing.length}):`);
  missing.forEach(({ key, status }) => console.log(`  [${status}] ${key}`));
}

if (badType.length > 0) {
  console.log(`\n⚠ Wrong content-type — next/image will reject these (${badType.length}):`);
  badType.forEach(({ key, contentType }) => console.log(`  [${contentType || "none"}] ${key}`));
  console.log(`
Fix: re-upload these files with the correct content-type:
  aws s3 cp <file> s3://forever-faded-620969609593-us-east-2-an/<key> --content-type image/jpeg
`);
}

if (missing.length === 0 && badType.length === 0) {
  console.log("All files present with correct content-type — ready!");
}
