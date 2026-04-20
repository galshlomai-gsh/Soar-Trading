"use client";

import { useChallenge } from "./ChallengeProvider";
import {
  type AccountSize,
  getPrice,
  sizeShortLabel,
} from "@/components/data/challenges";
import { cn } from "@/lib/cn";

export function PricingStrip() {
  const { spec, size, setSize } = useChallenge();
  if (spec.sizes.length === 0) return null;

  const anyPriced = spec.sizes.some((s) => getPrice(spec, s) !== undefined);

  return (
    <div className="rounded-card border border-white/10 bg-surface/40 p-4">
      <div className="flex items-baseline justify-between">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
          Pricing for {spec.shortLabel}
        </div>
        {!anyPriced && (
          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted/70">
            To be confirmed
          </div>
        )}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {spec.sizes.map((s: AccountSize) => {
          const price = getPrice(spec, s);
          const active = size === s;
          return (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              aria-pressed={active}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all tabular-nums",
                active
                  ? "border-accent/60 bg-accent/10 text-ink"
                  : "border-white/10 bg-base/40 text-ink-muted hover:border-white/20 hover:text-ink",
              )}
            >
              <span>{sizeShortLabel[s]}</span>
              <span
                className={cn(
                  "inline-flex h-5 items-center rounded-full px-2 text-[10px] font-bold",
                  active
                    ? "bg-accent/20 text-accent"
                    : "bg-white/5 text-ink-muted/80",
                )}
              >
                {price !== undefined ? `$${price}` : "TBC"}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
