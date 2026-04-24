"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data/products";
import { cn } from "@/lib/cn";

function lowestPrice(): number | undefined {
  const all: number[] = [];
  for (const p of products) {
    for (const v of p.variations) {
      if (typeof v.price === "number") all.push(v.price);
    }
  }
  return all.length ? Math.min(...all) : undefined;
}

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);
  const fromPrice = lowestPrice();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      // Show after the user scrolls past roughly the hero height.
      setVisible(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "pointer-events-none fixed inset-x-3 bottom-3 z-40 md:hidden",
        "transition-all duration-300",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "translate-y-6 opacity-0",
      )}
    >
      <Link
        href="/checkout"
        className="flex items-center justify-between gap-3 rounded-[14px] border border-accent/40 bg-base/90 px-4 py-3 shadow-[0_18px_40px_-18px_rgba(91,142,240,0.6)] backdrop-blur-xl"
      >
        <div className="flex flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
            {fromPrice !== undefined
              ? `From $${fromPrice} · 1 Step`
              : "Pick a challenge"}
          </span>
          <span className="text-sm font-bold text-ink">
            Choose Your Challenge
          </span>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent-gradient text-[#0B1220]">
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </span>
      </Link>
    </div>
  );
}
