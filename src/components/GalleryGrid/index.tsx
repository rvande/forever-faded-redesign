"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { CloudinaryImage } from "@/lib/cloudinary";

type Props = {
  images: CloudinaryImage[];
};

export default function GalleryGrid({ images }: Props) {
  const [active, setActive] = useState<CloudinaryImage | null>(null);

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
              const src = img.secure_url.replace("/upload/", "/upload/q_auto,f_auto,w_800/");
              const aspectRatio = img.width && img.height ? img.width / img.height : 1;

              return (
                <button
                  key={img.public_id}
                  onClick={() => setActive(img)}
                  className="relative overflow-hidden break-inside-avoid group w-full cursor-zoom-in"
                  style={{ aspectRatio }}
                  aria-label="View image fullscreen"
                >
                  <Image
                    src={src}
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
          {/* Close button */}
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.secure_url.replace("/upload/", "/upload/q_auto,f_auto,w_1600/")}
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
