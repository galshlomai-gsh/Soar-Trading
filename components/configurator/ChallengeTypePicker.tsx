"use client";

import { useChallenge } from "./ChallengeProvider";
import { challenges } from "@/components/data/challenges";
import { TierChip } from "@/components/ui/TierChip";
import { cn } from "@/lib/cn";

export function ChallengeTypePicker() {
  const { type, setType } = useChallenge();
  return (
    <div className="flex flex-col gap-2.5">
      {challenges.map((c) => {
        const active = type === c.type;
        return (
          <button
            key={c.type}
            type="button"
            onClick={() => setType(c.type)}
            aria-pressed={active}
            className={cn(
              "rounded-card border px-4 py-3.5 text-left transition-all",
              active
                ? "border-accent/70 bg-accent/8 text-ink ring-accent-soft"
                : "border-white/10 bg-surface/60 text-ink-muted hover:border-white/20 hover:text-ink",
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <div
                className={cn(
                  "text-sm font-bold tracking-tight",
                  active ? "text-ink" : "text-ink/90",
                )}
              >
                {c.label}
              </div>
              <TierChip tier={c.tier} />
            </div>
            <div
              className={cn(
                "mt-1 text-[11px] leading-snug",
                active ? "text-ink/70" : "text-ink-muted",
              )}
            >
              {c.tagline}
            </div>
          </button>
        );
      })}
    </div>
  );
}
