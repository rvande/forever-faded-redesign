"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ── Cloudinary config ──────────────────────────────────────────────────────
const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "YOUR_CLOUD_NAME";

/** Build an optimised Cloudinary URL from a root-level public ID */
function cld(publicId: string, w = 600) {
  return `https://res.cloudinary.com/${CLOUD}/image/upload/q_auto,f_auto,w_${w}/${publicId}`;
}

// ── Image pools per grid slot ─────────────────────────────────────────────
// Slots 0–4: top-left, top-center, top-right, bottom-left, bottom-right
// Each slot cycles through its list every 2.5 s in a wave pattern.
const SLOT_POOLS: string[][] = [
  // top-left
  ["caiden_front_ivhsq6", "20260228_095446_exiq55_d9d7cd", "Cristian__55_v3wbhd_d9d7cd", "IMG_5927_gkmxnr_d9d7cd"],
  // top-center
  ["Cristian__28_zwtj1s_d9d7cd", "Cut_by_Chelsea_10_tse5en_d9d7cd", "Juan_5_sl1umq_d9d7cd"],
  // top-right
  ["Cristian__52_ccxrf5_d9d7cd", "Cut_by_megan_1_jtbdwo_d9d7cd", "Cut_by_megan_2_oyox5r_d9d7cd"],
  // bottom-left
  ["Cristian__39_faplli_d9d7cd", "Cut_by_megan_1_bpf79p_d9d7cd", "Cut_by_megan_ubhsmb_d9d7cd"],
  // bottom-right
  ["Cristian__56_uwfxvn_d9d7cd", "Cut_by_megan_8_evj4qh_d9d7cd"],
  // bottom-far-right
  ["Cristian__47_tcl3de_d9d7cd", "Cut_by_megan_2_q1tpdp_d9d7cd", "IMG_6058_uzpcxv_d9d7cd"],
];

// Wave pattern: top-right → top-center → top-left → bottom-right → bottom-center → bottom-left
const CYCLE_ORDER = [2, 1, 0, 5, 4, 3];
const INTERVAL_MS = 2500;
const FADE_MS = 350;

// ── Single slot ────────────────────────────────────────────────────────────
function GallerySlot({
  pool,
  trigger,
}: {
  pool: string[];
  trigger: number; // increments every time this slot should advance
}) {
  const [imgIdx, setImgIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const prevTrigger = useRef(trigger);

  useEffect(() => {
    if (trigger === prevTrigger.current) return;
    prevTrigger.current = trigger;

    // Fade out → swap → fade in
    setVisible(false);
    const swap = setTimeout(() => {
      setImgIdx((i) => (i + 1) % pool.length);
      setVisible(true);
    }, FADE_MS);

    return () => clearTimeout(swap);
  }, [trigger, pool]);

  return (
    <div className="relative overflow-hidden rounded-lg aspect-square bg-gray/30">
      <Image
        src={cld(pool[imgIdx])}
        alt="Forever Faded haircut style"
        fill
        sizes="(max-width: 768px) 33vw, 280px"
        className="object-cover object-center"
        style={{
          opacity: visible ? 1 : 0,
          transition: `opacity ${FADE_MS}ms ease-in-out`,
        }}
      />
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function ExploreStyles() {
  // triggerCounts[slotIdx] increments each time that slot should cycle
  const [triggerCounts, setTriggerCounts] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      const slotIdx = CYCLE_ORDER[step % CYCLE_ORDER.length];
      setTriggerCounts((prev) => {
        const next = [...prev] as [number, number, number, number, number, number];
        next[slotIdx] = next[slotIdx] + 1;
        return next;
      });
      step++;
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-12 px-4 sm:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">

        {/* ── Heading ── */}
        <div className="mb-8">
          <h2 className="font-heading leading-none">
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-gold">
              Explore
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl text-white">
              Our Styles
            </span>
          </h2>
        </div>

        {/* ── Photo grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
          {[0, 1, 2, 3, 4, 5].map((slotIdx) => (
            <GallerySlot
              key={slotIdx}
              pool={SLOT_POOLS[slotIdx]}
              trigger={triggerCounts[slotIdx]}
            />
          ))}
        </div>

        {/* ── Full-width CTA bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-tan px-8 py-6 border-l-4 border-gold">
          <div>
            <p className="font-heading text-3xl sm:text-4xl leading-none text-black">
              View Full Gallery
            </p>
            <p className="font-body text-sm text-black/60 mt-1">
              Browse all styles from our team
            </p>
          </div>
          <Link
            href="/gallery"
            className="shrink-0 inline-flex items-center bg-gold text-black font-subheading text-[13px] tracking-widest uppercase px-8 py-3 shadow-[4px_4px_0px_0px_#000000] hover:bg-gold/90 transition-colors"
          >
            Browse All
          </Link>
        </div>
      </div>
    </section>
  );
}
