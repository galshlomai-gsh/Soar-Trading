"use client";

import { useChallenge } from "./ChallengeProvider";
import { type AccountSize, availableSizes } from "@/components/data/challenges";
import { cn } from "@/lib/cn";

const SIZES: AccountSize[] = ["10k", "25k", "50k", "100k", "200k"];

const DISPLAY: Record<AccountSize, string> = {
  "10k": "$10k",
  "25k": "$25k",
  "50k": "$50k",
  "100k": "$100k",
  "200k": "$200k",
  "250k": "$250k",
  "500k": "$500k",
};

export function AccountSizePicker({
  sizes = SIZES,
  columns = 2,
}: {
  sizes?: AccountSize[];
  columns?: 2 | 3;
}) {
  const { model, steps, size, setSize } = useChallenge();
  const visible = availableSizes(model, steps, sizes);
  if (visible.length === 0) {
    return (
      <p className="text-xs text-ink-muted">
        No account sizes available for this configuration.
      </p>
    );
  }
  return (
    <div
      className={cn(
        "grid gap-2.5",
        columns === 2 ? "grid-cols-2" : "grid-cols-3",
      )}
    >
      {visible.map((s) => {
        const active = size === s;
        return (
          <button
            key={s}
            onClick={() => setSize(s)}
            aria-pressed={active}
            className={cn(
              "rounded-card border py-3 text-sm font-semibold transition-all",
              active
                ? "border-accent/60 bg-accent/8 text-ink ring-accent-soft"
                : "border-white/10 bg-surface/60 text-ink-muted hover:border-white/20 hover:text-ink",
            )}
          >
            {DISPLAY[s]}
          </button>
        );
      })}
    </div>
  );
}
