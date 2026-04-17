"use client";

import { useChallenge } from "./ChallengeProvider";
import { Button } from "@/components/ui/Button";
import {
  accountSizeAmount,
  modelLabels,
  platformLabels,
  stepsLabels,
} from "@/components/data/challenges";

export function ChallengeSummary({
  title = "Get Funded",
  footer = "Refundable on first payout",
}: {
  title?: string;
  footer?: string;
}) {
  const { model, steps, size, platform, price } = useChallenge();
  const fmtUsd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  return (
    <div className="rounded-card border border-white/10 bg-surface/80 p-6 shadow-soft">
      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
        Challenge Summary
      </div>
      <div className="mt-5 flex flex-col divide-y divide-white/5">
        <Row label="Model" value={`${modelLabels[model]} · ${stepsLabels[steps]}`} />
        <Row label="Account Size" value={fmtUsd.format(accountSizeAmount[size])} />
        <Row label="Platform" value={platformLabels[platform]} />
        <Row
          label="Challenge Fee"
          value={
            price ? (
              <span className="text-2xl font-extrabold text-accent">
                ${price.fee}
              </span>
            ) : (
              <span className="text-sm font-semibold text-ink-muted">
                Pricing coming soon
              </span>
            )
          }
          emphasize
        />
      </div>
      <Button
        href={`/challenges?model=${model}&steps=${steps}&size=${size}&platform=${platform}`}
        size="lg"
        fullWidth
        className="mt-6"
      >
        {title.toUpperCase() === title ? title : "Start Challenge"}
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
    <div className="flex items-center justify-between py-3.5">
      <span className="text-xs text-ink-muted">{label}</span>
      <span
        className={
          emphasize
            ? "text-right"
            : "text-right text-sm font-semibold text-ink"
        }
      >
        {value}
      </span>
    </div>
  );
}
