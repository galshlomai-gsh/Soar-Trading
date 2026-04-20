"use client";

import { useState } from "react";
import { LineChart, TrendingUp } from "lucide-react";
import { cn } from "@/lib/cn";

const platforms = [
  { id: "dxtrade", label: "DXTRADE", icon: TrendingUp },
  { id: "matchtrader", label: "MATCHTRADER", icon: LineChart },
] as const;
type PlatformId = (typeof platforms)[number]["id"];

export function PlatformPicker() {
  const [active, setActive] = useState<PlatformId>("dxtrade");
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-2.5">
        {platforms.map((p) => {
          const on = active === p.id;
          const Icon = p.icon;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(p.id)}
              aria-pressed={on}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-card border py-3 text-xs font-bold uppercase tracking-[0.12em] transition-all",
                on
                  ? "border-accent/60 bg-accent/8 text-ink ring-accent-soft"
                  : "border-white/10 bg-surface/60 text-ink-muted hover:border-white/20 hover:text-ink",
              )}
            >
              <Icon
                className={cn("h-3.5 w-3.5", on ? "text-accent" : "")}
                strokeWidth={2.5}
              />
              {p.label}
            </button>
          );
        })}
      </div>
      <p className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted/70">
        Platform options to be connected
      </p>
    </div>
  );
}
