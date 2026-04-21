"use client";

import { Check } from "lucide-react";
import { useChallenge } from "./ChallengeProvider";
import { Button } from "@/components/ui/Button";
import { Meter } from "@/components/ui/Meter";
import { TierChip } from "@/components/ui/TierChip";
import { TrustChips } from "@/components/ui/TrustChips";
import { fundedPhase, sizeLabel } from "@/components/data/challenges";

/**
 * Extract the first numeric percent from a rule string (e.g. "8% trailing" → 8).
 * Returns 0 if no percent is found.
 */
function pct(value: string | undefined): number {
  if (!value) return 0;
  const m = value.match(/(\d+(?:\.\d+)?)\s*%/);
  return m ? parseFloat(m[1]) : 0;
}

// Meter bars are scaled relative to a reasonable max — 15% — so that the
// bars stay readable across the whole matrix (profit targets go up to 10%;
// max losses up to 10%; daily losses up to 5%).
const METER_SCALE = 15;

export function FeaturedChallengeCard() {
  const { spec, size, price } = useChallenge();
  const funded = fundedPhase(spec);
  const firstEval = spec.phases.find((p) => p.name !== "Funded");

  const targetPct = pct(firstEval?.profitTarget);
  const dailyPct = pct(firstEval?.dailyLoss);
  const maxPct = pct(firstEval?.maxLoss);

  return (
    <div className="relative rounded-[24px] border border-white/10 bg-surface/80 p-8 shadow-soft">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <TierChip tier={spec.tier} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              {firstEval?.drawdownType === "trailing" ? "Trailing DD" : "Fixed DD"}
            </span>
          </div>
          <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-ink md:text-[32px]">
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

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        <Meter
          label="Profit Target"
          value={firstEval?.profitTarget ?? "—"}
          percent={(targetPct / METER_SCALE) * 100}
          tone="accent"
        />
        <Meter
          label="Daily Loss"
          value={firstEval?.dailyLoss ?? "—"}
          percent={(dailyPct / METER_SCALE) * 100}
          tone="warn"
        />
        <Meter
          label="Maximum Loss"
          value={firstEval?.maxLoss ?? "—"}
          percent={(maxPct / METER_SCALE) * 100}
          tone="warn"
        />
      </div>

      {firstEval?.dailyLossNote && (
        <p className="mt-3 text-[11px] leading-snug text-ink-muted">
          Daily loss: {firstEval.dailyLossNote}
        </p>
      )}

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
      <div className="mt-4">
        <TrustChips align="center" />
      </div>
      {price === undefined && (
        <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted/70">
          Final pricing to be confirmed
        </p>
      )}
    </div>
  );
}
