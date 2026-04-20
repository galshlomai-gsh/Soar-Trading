"use client";

import { useChallenge } from "./ChallengeProvider";
import { Button } from "@/components/ui/Button";
import { fundedPhase } from "@/components/data/challenges";

export function ChallengeSummary({
  title = "START CHALLENGE",
  footer = "Refundable on first payout",
}: {
  title?: string;
  footer?: string;
}) {
  const { spec } = useChallenge();
  const funded = fundedPhase(spec);
  const firstEval = spec.phases.find((p) => p.name !== "Funded");

  return (
    <div className="rounded-card border border-white/10 bg-surface/80 p-6 shadow-soft">
      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
        Challenge Summary
      </div>
      <div className="mt-5 flex flex-col divide-y divide-white/5">
        <Row label="Challenge" value={spec.label} />
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
          value={
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
              To be connected
            </span>
          }
          emphasize
        />
      </div>
      <Button size="lg" fullWidth className="mt-6">
        {title}
      </Button>
      <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted/70">
        {footer}
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
            ? "text-right text-sm font-semibold text-ink"
            : "text-right text-xs font-semibold text-ink"
        }
      >
        {value}
      </span>
    </div>
  );
}
