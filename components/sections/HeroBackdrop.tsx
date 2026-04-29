"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const PARALLAX_FACTOR = 0.55;
const SMOOTHING = 0.12;

export function HeroBackdrop() {
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = imageWrapRef.current;
    const root = sectionRef.current;
    if (!wrap || !root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let target = 0;
    let current = 0;
    let rafId = 0;
    let running = false;

    const computeTarget = () => {
      const rect = root.getBoundingClientRect();
      const max = rect.height * 0.6;
      const drift = -rect.top * PARALLAX_FACTOR;
      target = Math.max(-max, Math.min(max, drift));
    };

    const tick = () => {
      const delta = target - current;
      if (Math.abs(delta) < 0.05) {
        current = target;
        wrap.style.transform = `translate3d(0, ${current.toFixed(2)}px, 0)`;
        running = false;
        return;
      }
      current += delta * SMOOTHING;
      wrap.style.transform = `translate3d(0, ${current.toFixed(2)}px, 0)`;
      rafId = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      rafId = window.requestAnimationFrame(tick);
    };

    const onScroll = () => {
      computeTarget();
      start();
    };

    const onResize = () => {
      computeTarget();
      current = target;
      wrap.style.transform = `translate3d(0, ${current.toFixed(2)}px, 0)`;
    };

    computeTarget();
    current = target;
    wrap.style.transform = `translate3d(0, ${current.toFixed(2)}px, 0)`;

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
    >
      <div
        ref={imageWrapRef}
        className="absolute inset-x-0 -top-[25%] h-[160%] will-change-transform"
      >
        <Image
          src="/brand/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,7,13,0.92) 0%, rgba(5,7,13,0.78) 40%, rgba(5,7,13,0.55) 75%, rgba(5,7,13,0.45) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,7,13,0.35) 0%, rgba(5,7,13,0) 35%, rgba(5,7,13,0) 65%, rgba(5,7,13,0.55) 100%)",
        }}
      />
    </div>
  );
}
