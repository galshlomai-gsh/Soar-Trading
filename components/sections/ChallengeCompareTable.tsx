import {
  AlertTriangle,
  Calendar,
  Coins,
  Gauge,
  Repeat,
  ShieldAlert,
  Target,
  TimerReset,
  TrendingDown,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Meter } from "@/components/ui/Meter";
import { TierChip } from "@/components/ui/TierChip";
import {
  challenges,
  fundedPhase,
  sizeShortLabel,
  type ChallengeSpec,
} from "@/components/data/challenges";
import { cn } from "@/lib/cn";

function pct(value: string | undefined): number {
  if (!value) return 0;
  const m = value.match(/(\d+(?:\.\d+)?)\s*%/);
  return m ? parseFloat(m[1]) : 0;
}

const METER_SCALE = 15;

function priceRange(spec: ChallengeSpec): string {
  if (!spec.pricing) return "To be confirmed";
  const values = Object.values(spec.pricing).filter(
    (v): v is number => v !== undefined,
  );
  if (values.length === 0) return "To be confirmed";
  const min = Math.min(...values);
  const max = Math.max(...values);
  return min === max ? `$${min}` : `From $${min}`;
}

function firstEval(spec: ChallengeSpec) {
  return spec.phases.find((p) => p.name !== "Funded");
}

function metricsFor(spec: ChallengeSpec) {
  const ev = firstEval(spec);
  const fd = fundedPhase(spec);
  return [
    {
      icon: Target,
      label: "Profit target",
      value: spec.phases
        .filter((p) => p.name !== "Funded")
        .map((p) => (p.profitTarget ? `${p.name} ${p.profitTarget}` : p.name))
        .join(" · "),
      note: undefined,
    },
    {
      icon: TrendingDown,
      label: "Daily loss",
      value: ev?.dailyLoss ?? "—",
      note: ev?.dailyLossNote,
      tone: "warn" as const,
    },
    {
      icon: AlertTriangle,
      label: "Max loss",
      value: ev?.maxLoss ?? "—",
      tone: "warn" as const,
    },
    {
      icon: Gauge,
      label: "Drawdown type",
      value: ev?.drawdownType === "trailing" ? "Trailing" : "Fixed",
    },
    {
      icon: Coins,
      label: "Profit split",
      value: fd?.profitSplit ?? "—",
    },
    {
      icon: Calendar,
      label: "Payouts",
      value: fd?.payoutTiming ?? "—",
    },
    {
      icon: Repeat,
      label: "Consistency",
      value: fd?.consistencyRule ?? "—",
    },
    {
      icon: TimerReset,
      label: "Inactivity",
      value: ev?.inactivityRule ?? fd?.inactivityRule ?? "—",
    },
    {
      icon: ShieldAlert,
      label: "Activation fee",
      value: ev?.activationFee ?? "Not required",
    },
  ];
}

export function ChallengeCompareTable() {
  return (
    <section className="pb-24">
      <Container size="wide">
        <SectionHeading
          eyebrow="Compare side by side"
          title="All Five Challenges at a Glance"
          subtitle="Price, profit target, drawdown type, payout timing and consistency — grouped so you can pick the path that fits your style."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {challenges.map((spec) => (
            <ChallengeCard key={spec.type} spec={spec} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink-muted">
          All accounts are simulated demo accounts. Full rules live in the{" "}
          <a
            className="text-accent hover:text-accent-soft"
            href="/terms-of-service"
          >
            Terms of Service
          </a>
          .
        </p>
      </Container>
    </section>
  );
}

function ChallengeCard({ spec }: { spec: ChallengeSpec }) {
  const metrics = metricsFor(spec);
  const price = priceRange(spec);
  const hasPrice = spec.pricing !== undefined;
  const firstEval = spec.phases.find((p) => p.name !== "Funded");
  const targetPct = pct(firstEval?.profitTarget);
  const dailyPct = pct(firstEval?.dailyLoss);
  const maxPct = pct(firstEval?.maxLoss);

  return (
    <div className="relative flex flex-col overflow-hidden rounded-[20px] border border-white/10 bg-surface/60">
      <div className="relative p-6 pb-5">
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(360px 200px at 100% 0%, rgba(91,142,240,0.18), transparent 60%)",
          }}
        />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <TierChip tier={spec.tier} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                {spec.shortLabel}
              </span>
            </div>
            <h3 className="mt-3 text-xl font-extrabold tracking-tight text-ink">
              {spec.label}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
              {spec.tagline}
            </p>
          </div>
          <div className="text-right">
            <div
              className={cn(
                "text-2xl font-extrabold tabular-nums",
                hasPrice ? "text-ink" : "text-ink-muted",
              )}
            >
              {price}
            </div>
            <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              {hasPrice ? "One-time fee" : "Pricing TBC"}
            </div>
          </div>
        </div>

        <div className="relative mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Meter
            label="Target"
            value={firstEval?.profitTarget ?? "—"}
            percent={(targetPct / METER_SCALE) * 100}
            tone="accent"
          />
          <Meter
            label="Daily"
            value={firstEval?.dailyLoss ?? "—"}
            percent={(dailyPct / METER_SCALE) * 100}
            tone="warn"
          />
          <Meter
            label="Max loss"
            value={firstEval?.maxLoss ?? "—"}
            percent={(maxPct / METER_SCALE) * 100}
            tone="warn"
          />
        </div>

        <div className="relative mt-5 flex flex-wrap items-center gap-1.5">
          {spec.sizes.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-base/60 px-2.5 py-1 text-[10px] font-bold text-ink-muted"
            >
              {sizeShortLabel[s]}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 divide-y divide-white/5 border-t border-white/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
        {metrics.map(({ icon: Icon, label, value, note, tone }) => (
          <div key={label} className="flex items-start gap-3 p-4">
            <div
              className={cn(
                "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                tone === "warn"
                  ? "bg-warn/15 text-warn"
                  : "bg-accent/15 text-accent",
              )}
            >
              <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                {label}
              </div>
              <div className="mt-0.5 break-words text-xs font-semibold leading-snug text-ink">
                {value}
              </div>
              {note && (
                <div className="mt-1 text-[11px] leading-snug text-ink-muted">
                  {note}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 bg-base/40 p-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Best for
        </div>
        <p className="mt-1 text-xs leading-relaxed text-ink/90">
          {spec.bestFor}
        </p>
      </div>
    </div>
  );
}
