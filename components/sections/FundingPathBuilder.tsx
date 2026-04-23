"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useChallenge } from "@/components/configurator/ChallengeProvider";
import {
  ALL_SIZES,
  type AccountSize,
  type ChallengeType,
  getChallenge,
  getPrice,
  sizeLabel,
  sizeShortLabel,
} from "@/components/data/challenges";
import { cn } from "@/lib/cn";

type Step = "instant" | "1-step" | "2-step";
type Variant = "bnpl" | "rapid" | "classic";

const steps: { id: Step; label: string }[] = [
  { id: "instant", label: "Instant" },
  { id: "1-step", label: "1-Step" },
  { id: "2-step", label: "2-Step" },
];

const variants: { id: Variant; label: string; sub: string }[] = [
  {
    id: "bnpl",
    label: "Buy Now, Pay later",
    sub: "Pay the evaluation fee after you pass.",
  },
  { id: "rapid", label: "Rapid", sub: "Low targets" },
  { id: "classic", label: "Classic", sub: "Standard account." },
];

const stepLabel: Record<Step, string> = {
  instant: "Instant",
  "1-step": "1 Step",
  "2-step": "2 Step",
};

const variantLabel: Record<Variant, string> = {
  bnpl: "BNPL",
  rapid: "Rapid",
  classic: "Classic",
};

/**
 * Best-effort mapping from the 2-axis UI selection to an existing
 * ChallengeSpec. Returns undefined when no real spec covers the combo —
 * the UI still accepts every click; we just show TBC pricing.
 */
function resolveType(step: Step, variant: Variant): ChallengeType | undefined {
  if (step === "instant" && variant === "rapid") return "rapid-runway";
  if (step === "1-step" && variant === "classic") return "1-step";
  if (step === "2-step" && variant === "classic") return "2-step";
  if (step === "1-step" && variant === "bnpl") return "bnpl-1-step";
  if (step === "2-step" && variant === "bnpl") return "bnpl-2-step";
  return undefined;
}

export function FundingPathBuilder() {
  const [step, setStep] = useState<Step>("1-step");
  const [variant, setVariant] = useState<Variant>("classic");

  return (
    <section className="py-24" id="challenge-selector">
      <Container size="wide">
        <div className="text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Choose Your Funding Path
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-[1rem]">
            Select the evaluation model that fits your trading strategy.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <SelectModelColumn
            step={step}
            variant={variant}
            onStep={setStep}
            onVariant={setVariant}
          />
          <AccountSizeColumn />
          <GetFundedColumn step={step} variant={variant} />
        </div>
      </Container>
    </section>
  );
}

function Column({
  step,
  label,
  children,
}: {
  step: number;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[20px] border border-white/10 bg-raised p-6 md:p-7">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-accent text-xs font-extrabold text-[#0B1220]">
          {step}
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
          {label}
        </span>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function SelectModelColumn({
  step,
  variant,
  onStep,
  onVariant,
}: {
  step: Step;
  variant: Variant;
  onStep: (s: Step) => void;
  onVariant: (v: Variant) => void;
}) {
  return (
    <Column step={1} label="Select Model">
      <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-base/60 p-1">
        {steps.map((s) => {
          const active = step === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onStep(s.id)}
              aria-pressed={active}
              className={cn(
                "rounded-full px-4 py-1.5 text-[13px] font-semibold transition-colors",
                active
                  ? "bg-white/10 text-ink"
                  : "text-ink-muted hover:text-ink",
              )}
            >
              {s.label}
            </button>
          );
        })}
      </div>
      <div className="mt-5 flex flex-col gap-3">
        {variants.map((v) => {
          const active = variant === v.id;
          return (
            <button
              key={v.id}
              type="button"
              onClick={() => onVariant(v.id)}
              aria-pressed={active}
              className={cn(
                "rounded-[14px] border px-4 py-4 text-left transition-all",
                active
                  ? "border-accent bg-accent/[0.08] ring-1 ring-accent/40"
                  : "border-white/10 bg-base/40 hover:border-white/20",
              )}
            >
              <div className="text-sm font-bold text-ink">{v.label}</div>
              <div className="mt-1 text-[12px] text-ink-muted">{v.sub}</div>
            </button>
          );
        })}
      </div>
    </Column>
  );
}

function AccountSizeColumn() {
  const { size, setSize } = useChallenge();
  return (
    <Column step={2} label="Account Size">
      <div className="grid grid-cols-2 gap-3">
        {ALL_SIZES.map((s, i) => {
          const active = size === s;
          const isLast = i === ALL_SIZES.length - 1;
          const isOdd = ALL_SIZES.length % 2 === 1;
          return (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s as AccountSize)}
              aria-pressed={active}
              className={cn(
                "flex flex-col items-center justify-center rounded-[14px] border py-5 transition-all",
                active
                  ? "border-accent bg-accent/[0.08] ring-1 ring-accent/40"
                  : "border-white/10 bg-base/40 hover:border-white/20",
                isLast && isOdd && "col-span-2 md:col-span-1",
              )}
            >
              <span className="text-lg font-extrabold text-ink tabular-nums">
                {sizeShortLabel[s]}
              </span>
            </button>
          );
        })}
      </div>
    </Column>
  );
}

function GetFundedColumn({
  step,
  variant,
}: {
  step: Step;
  variant: Variant;
}) {
  const { size } = useChallenge();
  const resolvedType = resolveType(step, variant);
  const spec = resolvedType ? getChallenge(resolvedType) : undefined;
  const price = spec ? getPrice(spec, size) : undefined;
  return (
    <Column step={3} label="Get Funded">
      <div className="flex flex-col divide-y divide-white/5">
        <Row
          label="Model"
          value={`${stepLabel[step]} · ${variantLabel[variant]}`}
        />
        <Row label="Account Size" value={sizeLabel[size]} />
        <Row label="Platform" value="DX Trade" />
        <Row
          label="Challenge Fee"
          value={
            price !== undefined ? (
              <span className="font-display text-xl font-extrabold text-accent tabular-nums">
                ${price}
              </span>
            ) : (
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Price TBC
              </span>
            )
          }
        />
      </div>
      <Button size="lg" fullWidth className="mt-6">
        START CHALLENGE
      </Button>
    </Column>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <span className="text-[13px] text-ink-muted">{label}</span>
      <span className="text-right text-sm font-semibold text-ink">
        {value}
      </span>
    </div>
  );
}
