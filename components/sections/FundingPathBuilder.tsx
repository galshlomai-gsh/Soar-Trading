"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useChallenge } from "@/components/configurator/ChallengeProvider";
import {
  ALL_SIZES,
  type AccountSize,
  type ChallengeType,
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

function stepOf(t: ChallengeType): Step {
  if (t === "rapid-runway") return "instant";
  if (t === "1-step" || t === "bnpl-1-step") return "1-step";
  return "2-step";
}

function variantOf(t: ChallengeType): Variant {
  if (t === "rapid-runway") return "rapid";
  if (t === "bnpl-1-step" || t === "bnpl-2-step") return "bnpl";
  return "classic";
}

function toType(step: Step, variant: Variant): ChallengeType {
  if (variant === "rapid") return "rapid-runway";
  if (step === "instant") return "rapid-runway";
  if (step === "1-step") return variant === "bnpl" ? "bnpl-1-step" : "1-step";
  return variant === "bnpl" ? "bnpl-2-step" : "2-step";
}

export function FundingPathBuilder() {
  return (
    <section className="py-24" id="challenge-selector">
      <Container size="wide">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Choose Your Funding Path
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Select the evaluation model that fits your trading strategy.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <SelectModelColumn />
          <AccountSizeColumn />
          <GetFundedColumn />
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
    <div className="rounded-[20px] border border-white/10 bg-surface/60 p-6 md:p-7">
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

function SelectModelColumn() {
  const { type, setType } = useChallenge();
  const currentStep = stepOf(type);
  const currentVariant = variantOf(type);

  return (
    <Column step={1} label="Select Model">
      <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-base/60 p-1">
        {steps.map((s) => {
          const active = currentStep === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setType(toType(s.id, currentVariant))}
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
          const active = currentVariant === v.id;
          return (
            <button
              key={v.id}
              type="button"
              onClick={() => setType(toType(currentStep, v.id))}
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
  const { size, setSize, spec } = useChallenge();
  return (
    <Column step={2} label="Account Size">
      <div className="grid grid-cols-2 gap-3">
        {ALL_SIZES.map((s, i) => {
          const active = size === s;
          const price = getPrice(spec, s);
          const isLast = i === ALL_SIZES.length - 1;
          const isOdd = ALL_SIZES.length % 2 === 1;
          return (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s as AccountSize)}
              aria-pressed={active}
              title={price !== undefined ? `$${price}` : "Price TBC"}
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

function GetFundedColumn() {
  const { spec, size, price } = useChallenge();
  const modelLabel = shortModelLabel(spec.type);
  return (
    <Column step={3} label="Get Funded">
      <div className="flex flex-col divide-y divide-white/5">
        <Row label="Model" value={modelLabel} />
        <Row label="Account Size" value={sizeLabel[size]} />
        <Row label="Platform" value="DX Trade" />
        <Row
          label="Challenge Fee"
          value={
            price !== undefined ? (
              <span className="text-xl font-extrabold text-accent tabular-nums">
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

function shortModelLabel(t: ChallengeType): string {
  switch (t) {
    case "1-step":
      return "1 Step · Classic";
    case "2-step":
      return "2 Step · Classic";
    case "bnpl-1-step":
      return "1 Step · BNPL";
    case "bnpl-2-step":
      return "2 Step · BNPL";
    case "rapid-runway":
      return "Instant · Rapid";
  }
}
