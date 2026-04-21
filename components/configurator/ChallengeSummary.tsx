"use client";

import { useChallenge } from "./ChallengeProvider";
import { Button } from "@/components/ui/Button";
import { TrustChips } from "@/components/ui/TrustChips";
import { fundedPhase, sizeLabel } from "@/components/data/challenges";

export function ChallengeSummary({
  title = "START CHALLENGE",
}: {
  title?: string;
}) {
  const { spec, size, price } = useChallenge();
  const funded = fundedPhase(spec);
  const firstEval = spec.phases.find((p) => p.name !== "Funded");

  return (
    <div className="rounded-card border border-white/10 bg-surface/80 p-6 shadow-soft">
      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
        Challenge Summary
      </div>
      <div className="mt-5 flex flex-col divide-y divide-white/5">
        <Row label="Challenge" value={spec.label} />
        <Row label="Account Size" value={sizeLabel[size]} />
        {firstEval?.profitTarget && (
          <Row label="Profit Target" value={firstEval.profitTarget} />
        )}
        {firstEval?.dailyLoss && (
          <Row label="Daily Loss" value={firstEval.dailyLoss} />
        )}
        {firstEval?.maxLoss && (
          <Row label="Maximum Loss" value={firstEval.maxLoss} />
        )}
        {funded?.profitSplit && (
          <Row label="Profit Split" value={funded.profitSplit} />
        )}
        <Row
          label="Challenge Fee"
          emphasize
          value={
            price !== undefined ? (
              <span className="text-2xl font-extrabold text-accent tabular-nums">
                ${price}
              </span>
            ) : (
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                Price to be confirmed
              </span>
            )
          }
        />
      </div>
      <Button size="lg" fullWidth className="mt-6">
        {title}
      </Button>
      <div className="mt-4">
        <TrustChips align="center" />
      </div>
      <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted/70">
        {price !== undefined
          ? "Refundable on first payout"
          : "Final pricing to be confirmed"}
      </p>
    </div>
  );
}

function Row({
  label,
  value,
  emphasize,
}: {
  label: string;
  value: React.ReactNode;
  emphasize?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-3.5">
      <span className="text-xs text-ink-muted">{label}</span>
      <span
        className={
          emphasize
            ? "text-right"
            : "text-right text-xs font-semibold text-ink"
        }
      >
        {value}
      </span>
    </div>
  );
}
