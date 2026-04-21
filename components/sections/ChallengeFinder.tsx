"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  Compass,
  Flame,
  Gauge,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Trophy,
  Wallet,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TierChip } from "@/components/ui/TierChip";
import {
  challenges,
  getChallenge,
  sizeShortLabel,
  type ChallengeSpec,
  type ChallengeType,
  type RiskTier,
} from "@/components/data/challenges";
import { cn } from "@/lib/cn";

type Goal = "speed" | "size" | "low-upfront";
type Phase = "one-phase" | "two-phase" | "no-pref";

interface Answers {
  goal: Goal | null;
  risk: RiskTier | null;
  phase: Phase | null;
}

function recommend(a: Answers): ChallengeType {
  // Deliberately small decision table — prioritised by goal then risk/phase.
  if (a.goal === "low-upfront") {
    return a.phase === "one-phase" ? "bnpl-1-step" : "bnpl-2-step";
  }
  if (a.goal === "speed") {
    if (a.phase === "two-phase") return "2-step";
    return a.risk === "aggressive" ? "rapid-runway" : "1-step";
  }
  // "size" / default
  if (a.risk === "conservative") return "2-step";
  if (a.risk === "aggressive") return "rapid-runway";
  return a.phase === "two-phase" ? "2-step" : "1-step";
}

function priceRange(spec: ChallengeSpec): string {
  if (!spec.pricing) return "Pricing TBC";
  const vals = Object.values(spec.pricing).filter(
    (v): v is number => typeof v === "number",
  );
  if (!vals.length) return "Pricing TBC";
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  return min === max ? `$${min}` : `From $${min}`;
}

export function ChallengeFinder() {
  const [answers, setAnswers] = useState<Answers>({
    goal: null,
    risk: null,
    phase: null,
  });

  const complete = answers.goal && answers.risk && answers.phase;
  const recommended = useMemo<ChallengeSpec | null>(() => {
    if (!complete) return null;
    return getChallenge(recommend(answers as Required<Answers>)) ?? null;
  }, [answers, complete]);

  const reset = () =>
    setAnswers({ goal: null, risk: null, phase: null });

  return (
    <section className="py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow="Find your challenge"
          title="Not sure which to pick?"
          subtitle="Three quick questions — we'll recommend the challenge that best fits your goal, risk tolerance and evaluation style."
        />

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4">
          <Question
            step={1}
            icon={Trophy}
            label="Your primary goal"
            value={answers.goal}
            options={[
              {
                id: "speed",
                label: "Reach funded fastest",
                body: "Skip phases where possible.",
              },
              {
                id: "size",
                label: "Largest account",
                body: "Scale up to $300k simulated.",
              },
              {
                id: "low-upfront",
                label: "Lowest upfront cost",
                body: "Pay activation fee after passing.",
              },
            ]}
            onChange={(v) =>
              setAnswers((p) => ({ ...p, goal: v as Goal }))
            }
          />
          <Question
            step={2}
            icon={Gauge}
            label="Your risk tolerance"
            value={answers.risk}
            options={[
              {
                id: "conservative",
                label: "Conservative",
                icon: ShieldCheck,
                body: "Fixed drawdown. Prefer structure.",
              },
              {
                id: "moderate",
                label: "Moderate",
                icon: Gauge,
                body: "Balanced target and loss limits.",
              },
              {
                id: "aggressive",
                label: "Aggressive",
                icon: Flame,
                body: "Trailing drawdown. Tighter rules.",
              },
            ]}
            onChange={(v) =>
              setAnswers((p) => ({ ...p, risk: v as RiskTier }))
            }
          />
          <Question
            step={3}
            icon={Compass}
            label="Preferred evaluation style"
            value={answers.phase}
            options={[
              {
                id: "one-phase",
                label: "One phase",
                body: "Hit the target once. Fastest path.",
              },
              {
                id: "two-phase",
                label: "Two phase",
                body: "Prove consistency across phases.",
              },
              {
                id: "no-pref",
                label: "Don't mind",
                body: "Recommend the best fit.",
              },
            ]}
            onChange={(v) =>
              setAnswers((p) => ({ ...p, phase: v as Phase }))
            }
          />

          {recommended && (
            <div className="relative mt-2 overflow-hidden rounded-[20px] border border-accent/40 bg-surface/80 p-7 shadow-[0_24px_60px_-30px_rgba(91,142,240,0.45)]">
              <div
                aria-hidden
                className="absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(500px 260px at 100% 0%, rgba(125,191,255,0.25), transparent 60%)",
                }}
              />
              <div className="relative flex flex-wrap items-start justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles
                      className="h-4 w-4 text-accent"
                      strokeWidth={2.5}
                    />
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                      We recommend
                    </span>
                  </div>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                    {recommended.label}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm text-ink-muted">
                    {recommended.tagline}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <TierChip tier={recommended.tier} />
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-base/40 px-3 py-1 text-[11px] font-semibold text-ink">
                      <Wallet
                        className="h-3 w-3 text-accent"
                        strokeWidth={2.5}
                      />
                      {priceRange(recommended)}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-base/40 px-3 py-1 text-[11px] font-semibold text-ink-muted">
                      {recommended.sizes
                        .map((s) => sizeShortLabel[s])
                        .join(" · ")}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-stretch gap-2">
                  <Link
                    href={`/?type=${recommended.type}#challenge-selector`}
                    scroll
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-[12px] bg-accent-gradient px-5 text-sm font-semibold text-[#0B1220] hover:brightness-110"
                  >
                    Configure this challenge
                    <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                  </Link>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex h-9 items-center justify-center gap-1.5 rounded-[12px] border border-white/10 bg-surface/60 px-4 text-[11px] font-semibold text-ink-muted hover:text-ink"
                  >
                    <RotateCcw className="h-3 w-3" strokeWidth={2.5} />
                    Reset quiz
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

interface OptionDef {
  id: string;
  label: string;
  body: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

function Question({
  step,
  icon: Icon,
  label,
  value,
  options,
  onChange,
}: {
  step: number;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string | null;
  options: OptionDef[];
  onChange: (v: string) => void;
}) {
  const padded = String(step).padStart(2, "0");
  return (
    <fieldset className="rounded-card border border-white/10 bg-surface/60 p-5">
      <legend className="px-1">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
            <Icon className="h-4 w-4" strokeWidth={2.2} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent tabular-nums">
            {padded}
          </span>
          <span className="text-sm font-bold text-ink">{label}</span>
        </div>
      </legend>
      <div className="mt-4 grid grid-cols-1 gap-2.5 md:grid-cols-3">
        {options.map((o) => {
          const active = value === o.id;
          const OptionIcon = o.icon;
          return (
            <button
              type="button"
              key={o.id}
              onClick={() => onChange(o.id)}
              aria-pressed={active}
              className={cn(
                "flex items-start gap-3 rounded-[12px] border px-4 py-3 text-left transition-all",
                active
                  ? "border-accent/70 bg-accent/10 text-ink ring-accent-soft"
                  : "border-white/10 bg-base/40 text-ink-muted hover:border-white/20 hover:text-ink",
              )}
            >
              {OptionIcon ? (
                <div
                  className={cn(
                    "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
                    active
                      ? "bg-accent/20 text-accent"
                      : "bg-white/5 text-ink-muted",
                  )}
                >
                  <OptionIcon className="h-3.5 w-3.5" strokeWidth={2.2} />
                </div>
              ) : (
                <div
                  className={cn(
                    "mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
                    active
                      ? "border-accent bg-accent/20"
                      : "border-white/15 bg-transparent",
                  )}
                >
                  {active && (
                    <Check
                      className="h-2.5 w-2.5 text-accent"
                      strokeWidth={3}
                    />
                  )}
                </div>
              )}
              <div>
                <div
                  className={cn(
                    "text-sm font-bold tracking-tight",
                    active ? "text-ink" : "text-ink/90",
                  )}
                >
                  {o.label}
                </div>
                <div className="mt-0.5 text-[11px] leading-snug text-ink-muted">
                  {o.body}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
