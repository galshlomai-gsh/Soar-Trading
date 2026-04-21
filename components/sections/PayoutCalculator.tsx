"use client";

import { useMemo, useState } from "react";
import { Banknote, Calendar, Coins, Info, Repeat } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ALL_SIZES,
  type AccountSize,
  challenges,
  type ChallengeType,
  sizeLabel,
  sizeShortLabel,
} from "@/components/data/challenges";
import { cn } from "@/lib/cn";

const sizeDollars: Record<AccountSize, number> = {
  "10k": 10000,
  "25k": 25000,
  "50k": 50000,
  "100k": 100000,
  "200k": 200000,
};

function fmtUsd(n: number) {
  return `$${Math.round(n).toLocaleString("en-US")}`;
}

const BNPL_OR_RAPID: ChallengeType[] = [
  "bnpl-1-step",
  "bnpl-2-step",
  "rapid-runway",
];

export function PayoutCalculator({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  const [type, setType] = useState<ChallengeType>("1-step");
  const [size, setSize] = useState<AccountSize>("100k");
  const [profitPct, setProfitPct] = useState(4);

  const balance = sizeDollars[size];
  const profit = (profitPct / 100) * balance;
  const isRolling = BNPL_OR_RAPID.includes(type);
  const firstPayout = isRolling ? profit * 0.8 : profit;
  const ongoingPayout = profit * 0.8;
  const annualised = firstPayout + ongoingPayout * 11;

  const tiles = useMemo(
    () => [
      {
        icon: Coins,
        label: isRolling ? "First payout" : "First payout",
        sub: isRolling ? "80% of profit" : "100% of profit",
        value: fmtUsd(firstPayout),
      },
      {
        icon: Repeat,
        label: "Next payout",
        sub: "80% bi-weekly",
        value: fmtUsd(ongoingPayout),
      },
      {
        icon: Calendar,
        label: "Year-one estimate",
        sub: "First + 11 ongoing",
        value: fmtUsd(annualised),
      },
    ],
    [firstPayout, ongoingPayout, annualised, isRolling],
  );

  return (
    <section className={variant === "full" ? "py-20" : "py-16"}>
      <Container size="wide">
        {variant === "full" && (
          <SectionHeading
            eyebrow="Payout calculator"
            title="See what your payouts could look like."
            subtitle="Illustrative only. Figures assume the selected challenge size, a hypothetical profit on your funded account, and standard challenge splits."
          />
        )}

        <div
          className={cn(
            "rounded-[20px] border border-white/10 bg-surface/60 p-6 md:p-8",
            variant === "full" && "mt-10",
          )}
        >
          {variant === "compact" && (
            <div className="mb-6 flex items-center gap-2">
              <Banknote className="h-4 w-4 text-accent" strokeWidth={2.5} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                Payout calculator
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto]">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                Challenge
              </span>
              <div className="flex flex-wrap gap-1.5">
                {challenges.map((c) => {
                  const active = type === c.type;
                  return (
                    <button
                      key={c.type}
                      type="button"
                      onClick={() => setType(c.type)}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all",
                        active
                          ? "border-accent/60 bg-accent/10 text-ink"
                          : "border-white/10 bg-base/40 text-ink-muted hover:border-white/20 hover:text-ink",
                      )}
                    >
                      {c.shortLabel}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                Account size
              </span>
              <div className="flex flex-wrap gap-1.5">
                {ALL_SIZES.map((s) => {
                  const active = size === s;
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all tabular-nums",
                        active
                          ? "border-accent/60 bg-accent/10 text-ink"
                          : "border-white/10 bg-base/40 text-ink-muted hover:border-white/20 hover:text-ink",
                      )}
                    >
                      {sizeShortLabel[s]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-baseline justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                Hypothetical profit on a {sizeLabel[size]} account
              </span>
              <span className="text-sm font-bold tabular-nums text-accent">
                {profitPct}% · {fmtUsd(profit)}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              step={0.5}
              value={profitPct}
              onChange={(e) => setProfitPct(parseFloat(e.target.value))}
              aria-label="Hypothetical profit percentage"
              className="mt-3 w-full accent-[#5B8EF0]"
            />
            <div className="mt-2 flex justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted/70 tabular-nums">
              <span>1%</span>
              <span>10%</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {tiles.map(({ icon: Icon, label, sub, value }) => (
              <div
                key={label}
                className="rounded-card border border-white/10 bg-base/40 p-5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Icon className="h-4 w-4" strokeWidth={2.2} />
                </div>
                <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  {label}
                </div>
                <div className="mt-1 text-2xl font-extrabold text-ink tabular-nums">
                  {value}
                </div>
                <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted/70">
                  {sub}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-start gap-2 rounded-[10px] border border-white/5 bg-base/40 p-3 text-[11px] leading-relaxed text-ink-muted">
            <Info
              className="mt-0.5 h-3 w-3 shrink-0 text-accent"
              strokeWidth={2.5}
            />
            <span>
              Illustrative. Simulated only. Subject to rules, consistency
              checks and payout approval. Standard 1 Step and 2 Step split
              100% on first payout then 80% bi-weekly; BNPL and Rapid Runway
              use 80% bi-weekly throughout.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
