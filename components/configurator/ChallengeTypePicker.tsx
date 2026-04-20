"use client";

import { useChallenge } from "./ChallengeProvider";
import { challenges } from "@/components/data/challenges";
import { cn } from "@/lib/cn";

export function ChallengeTypePicker() {
  const { type, setType } = useChallenge();
  return (
    <div className="grid gap-2.5">
      {challenges.map((c) => {
        const active = type === c.type;
        return (
          <button
            key={c.type}
            onClick={() => setType(c.type)}
            aria-pressed={active}
            className={cn(
              "rounded-card border px-4 py-3 text-left transition-all",
              active
                ? "border-accent/60 bg-accent/8 ring-accent-soft"
                : "border-white/10 bg-surface/60 hover:border-white/20",
            )}
          >
            <div className="text-sm font-bold text-ink">{c.label}</div>
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
