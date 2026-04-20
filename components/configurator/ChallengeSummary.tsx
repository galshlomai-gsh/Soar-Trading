"use client";

import { useChallenge } from "./ChallengeProvider";
import { Button } from "@/components/ui/Button";
import { fundedPhase } from "@/components/data/challenges";

export function ChallengeSummary({
  title = "Start Challenge",
  footer = "Pricing and account size will be connected here.",
}: {
  title?: string;
  footer?: string;
}) {
  const { spec } = useChallenge();
  const funded = fundedPhase(spec);
  const evalPhases = spec.phases.filter((p) => p.name !== "Funded");
  const evalTargets = evalPhases
    .map((p) => (p.profitTarget ? `${p.name} ${p.profitTarget}` : p.name))
    .join(" · ");

  return (
    <div className="rounded-card border border-white/10 bg-surface/80 p-6 shadow-soft">
      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
        Challenge Summary
      </div>
      <div className="mt-4">
        <div className="text-lg font-bold text-ink">{spec.label}</div>
        <div className="mt-1 text-xs text-ink-muted">{spec.tagline}</div>
      </div>
      <div className="mt-5 flex flex-col divide-y divide-white/5">
        {evalTargets && <Row label="Profit target" value={evalTargets} />}
        {evalPhases[0] && (
          <Row label="Max loss" value={evalPhases[0].maxLoss} />
        )}
        {evalPhases[0] && (
          <Row label="Daily loss" value={evalPhases[0].dailyLoss} />
        )}
        {funded?.profitSplit && (
          <Row label="Profit split" value={funded.profitSplit} />
        )}
        {funded?.payoutTiming && (
          <Row label="Payouts" value={funded.payoutTiming} />
        )}
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

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <span className="text-xs text-ink-muted">{label}</span>
      <span className="text-right text-xs font-semibold text-ink">{value}</span>
    </div>
  );
}
