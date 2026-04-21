"use client";

import { Check } from "lucide-react";
import { useChallenge } from "./ChallengeProvider";
import { Button } from "@/components/ui/Button";
import { MetricTile } from "@/components/ui/MetricTile";
import { fundedPhase, sizeLabel } from "@/components/data/challenges";

export function FeaturedChallengeCard() {
  const { spec, size, price } = useChallenge();
  const funded = fundedPhase(spec);
  const firstEval = spec.phases.find((p) => p.name !== "Funded");

  return (
    <div className="relative rounded-[24px] border border-white/10 bg-surface/80 p-8 shadow-soft">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight text-ink md:text-[32px]">
            {spec.label} · {sizeLabel[size]}
          </h3>
          <p className="mt-2 text-sm text-ink-muted">{spec.tagline}</p>
        </div>
        <div className="text-right">
          {price !== undefined ? (
            <>
              <div className="text-4xl font-extrabold text-accent tabular-nums md:text-5xl">
                ${price}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                One-time fee
              </div>
            </>
          ) : (
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Price to be confirmed
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4">
        <MetricTile
          label="Profit Target"
          value={firstEval?.profitTarget ?? "—"}
        />
        <MetricTile
          label="Daily Loss Limit"
          value={firstEval?.dailyLoss ?? "—"}
          note={firstEval?.dailyLossNote}
          tone="warn"
        />
        <MetricTile
          label="Maximum Loss"
          value={firstEval?.maxLoss ?? "—"}
          tone="warn"
        />
        <MetricTile
          label="Drawdown Type"
          value={firstEval?.drawdownType === "trailing" ? "Trailing" : "Fixed"}
        />
      </div>

      {funded && (
        <div className="mt-6 rounded-card border border-white/10 bg-base/40 p-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Funded Stage
          </div>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-ink/90">
            {funded.profitSplit && (
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
                <span>Profit split: {funded.profitSplit}</span>
              </li>
            )}
            {funded.payoutTiming && (
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
                <span>Payouts: {funded.payoutTiming}</span>
              </li>
            )}
            {funded.consistencyRule && (
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
                <span>Consistency: {funded.consistencyRule}</span>
              </li>
            )}
            {funded.inactivityRule && (
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
                <span>Inactivity: {funded.inactivityRule}</span>
              </li>
            )}
          </ul>
        </div>
      )}

      <Button size="lg" fullWidth className="mt-6">
        Select Challenge
      </Button>
      {price === undefined && (
        <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted/70">
          Final pricing to be confirmed
        </p>
      )}
    </div>
  );
}
