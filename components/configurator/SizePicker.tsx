"use client";

import { useChallenge } from "./ChallengeProvider";
import {
  type AccountSize,
  getPrice,
  sizeShortLabel,
} from "@/components/data/challenges";
import { cn } from "@/lib/cn";

export function SizePicker({
  sizes,
  columns = 3,
}: {
  sizes?: AccountSize[];
  columns?: 2 | 3;
}) {
  const { spec, size, setSize } = useChallenge();
  const visible = sizes ?? spec.sizes;
  const anyPriced = visible.some((s) => getPrice(spec, s) !== undefined);

  return (
    <div className="flex flex-col gap-3">
      <div
        className={cn(
          "grid gap-2.5",
          columns === 2 ? "grid-cols-2" : "grid-cols-3",
        )}
      >
        {visible.map((s) => {
          const active = size === s;
          const price = getPrice(spec, s);
          return (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              aria-pressed={active}
              className={cn(
                "flex flex-col items-center justify-center rounded-card border px-2 py-2.5 transition-all",
                active
                  ? "border-accent/70 bg-accent/8 text-ink ring-accent-soft"
                  : "border-white/10 bg-surface/60 text-ink-muted hover:border-white/20 hover:text-ink",
              )}
            >
              <span className="text-sm font-semibold tabular-nums">
                {sizeShortLabel[s]}
              </span>
              <span
                className={cn(
                  "mt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] tabular-nums",
                  active ? "text-accent" : "text-ink-muted/70",
                )}
              >
                {price !== undefined ? `$${price}` : "TBC"}
              </span>
            </button>
          );
        })}
      </div>
      {!anyPriced && (
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted/70">
          Pricing to be confirmed
        </p>
      )}
    </div>
  );
}
