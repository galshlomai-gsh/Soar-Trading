"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const DEFAULT_SIZES = ["10k", "25k", "50k", "100k", "200k"] as const;
type Size = (typeof DEFAULT_SIZES)[number];

const DISPLAY: Record<Size, string> = {
  "10k": "$10k",
  "25k": "$25k",
  "50k": "$50k",
  "100k": "$100k",
  "200k": "$200k",
};

export function SizePicker({
  sizes = [...DEFAULT_SIZES],
  columns = 3,
}: {
  sizes?: Size[];
  columns?: 2 | 3;
}) {
  const [active, setActive] = useState<Size>(sizes[0]);
  return (
    <div className="flex flex-col gap-3">
      <div
        className={cn(
          "grid gap-2.5",
          columns === 2 ? "grid-cols-2" : "grid-cols-3",
        )}
      >
        {sizes.map((s) => {
          const on = active === s;
          return (
            <button
              key={s}
              type="button"
              onClick={() => setActive(s)}
              aria-pressed={on}
              className={cn(
                "rounded-card border py-3 text-sm font-semibold transition-all",
                on
                  ? "border-accent/60 bg-accent/8 text-ink ring-accent-soft"
                  : "border-white/10 bg-surface/60 text-ink-muted hover:border-white/20 hover:text-ink",
              )}
            >
              {DISPLAY[s]}
            </button>
          );
        })}
      </div>
      <p className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted/70">
        Account size options to be connected to live pricing data
      </p>
    </div>
  );
}
