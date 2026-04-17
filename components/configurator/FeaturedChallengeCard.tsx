"use client";

import { Check } from "lucide-react";
import { useChallenge } from "./ChallengeProvider";
import { Button } from "@/components/ui/Button";
import { MetricTile } from "@/components/ui/MetricTile";
import {
  accountSizeAmount,
  modelLabels,
  stepsLabels,
} from "@/components/data/challenges";

export function FeaturedChallengeCard() {
  const { model, steps, size, price } = useChallenge();
  const fmt = new Intl.NumberFormat("en-US");
  return (
    <div className="relative rounded-[24px] border border-white/10 bg-surface/80 p-8 shadow-soft">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-3xl font-extrabold tracking-tight text-ink md:text-[40px]">
            THE ELITE {fmt.format(accountSizeAmount[size] / 1000)}K
          </h3>
          <p className="mt-2 text-sm text-ink-muted">
            {modelLabels[model]} · {stepsLabels[steps]} Evaluation
          </p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-extrabold text-accent md:text-5xl">
            {price ? `$${price.fee}` : "—"}
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            One-time fee
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4">
        <MetricTile label="Profit Target" value={price?.profitTarget ?? "—"} />
        <MetricTile label="Max Daily Drawdown" value={price?.dailyDD ?? "—"} tone="warn" />
        <MetricTile label="Max Overall Drawdown" value={price?.maxDD ?? "—"} tone="warn" />
        <MetricTile
          label="Minimum Trading Days"
          value={price ? `${price.minDays} Days` : "—"}
        />
      </div>

      <ul className="mt-8 flex flex-col gap-3">
        {(price
          ? [
              price.newsAllowed && "News trading allowed during and after evaluation",
              price.weekendHold && "Holding trades over the weekend permitted",
              price.easAllowed && "Expert Advisors (EAs) and Copy Trading enabled",
            ].filter(Boolean)
          : ["Pricing and rules available after pricing matrix is provided"]
        ).map((line, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-ink/90">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <Button size="lg" fullWidth className="mt-8">
        Select Challenge
      </Button>
    </div>
  );
}
