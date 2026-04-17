"use client";

import { useChallenge } from "./ChallengeProvider";
import type { Platform } from "@/components/data/challenges";
import { BrandDXTrade, BrandMatchTrader } from "@/components/brand/BrandMarks";
import { cn } from "@/lib/cn";

export function PlatformPicker() {
  const { platform, setPlatform } = useChallenge();
  const options: { v: Platform; node: (active: boolean) => React.ReactNode }[] = [
    { v: "dxtrade", node: (a) => <BrandDXTrade active={a} /> },
    { v: "matchtrader", node: (a) => <BrandMatchTrader active={a} /> },
  ];
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {options.map(({ v, node }) => {
        const active = platform === v;
        return (
          <button
            key={v}
            onClick={() => setPlatform(v)}
            aria-pressed={active}
            className={cn(
              "flex items-center justify-center rounded-card border py-3 text-xs transition-all",
              active
                ? "border-accent/60 bg-accent/10 text-[#0B1220] ring-accent-soft"
                : "border-white/10 bg-surface/60 text-ink-muted hover:border-white/20",
            )}
          >
            <span className={active ? "text-[#0B1220]" : undefined}>
              {node(active)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
