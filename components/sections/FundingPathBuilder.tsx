"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useChallenge } from "@/components/configurator/ChallengeProvider";
import {
  ALL_SIZES,
  type AccountSize,
  type Product,
  checkoutHref,
  getProduct,
  getVariation,
  sizeLabel,
  sizeShortLabel,
} from "@/lib/data/products";
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
 * Map the 2-axis UI selection to a product slug from lib/data/products.ts.
 * Returns undefined when a combination isn't in the catalog — we never
 * land on those in practice because clicks auto-adjust the other axis.
 */
function resolveSlug(step: Step, variant: Variant): string | undefined {
  if (step === "instant" && variant === "rapid") return "rapid-runway";
  if (step === "instant" && variant === "classic") return "instant-funding";
  if (step === "1-step" && variant === "classic") return "1-step";
  if (step === "2-step" && variant === "classic") return "2-step";
  if (step === "1-step" && variant === "bnpl") return "bnpl-1-step";
  if (step === "2-step" && variant === "bnpl") return "bnpl-2-step";
  return undefined;
}

// Preference orders when auto-picking a compatible axis. Classic is our
// broadest variant (pairs with every step), so we default to it when
// forced to pick. 1 Step is the most common step so it's the step-side
// default.
const VARIANT_PREFERENCE: Variant[] = ["classic", "bnpl", "rapid"];
const STEP_PREFERENCE: Step[] = ["1-step", "2-step", "instant"];

function pickCompatibleVariant(step: Step, current: Variant): Variant {
  if (resolveSlug(step, current)) return current;
  for (const v of VARIANT_PREFERENCE) {
    if (resolveSlug(step, v)) return v;
  }
  return current;
}

function pickCompatibleStep(variant: Variant, current: Step): Step {
  if (resolveSlug(current, variant)) return current;
  for (const s of STEP_PREFERENCE) {
    if (resolveSlug(s, variant)) return s;
  }
  return current;
}

export function FundingPathBuilder() {
  const [step, setStep] = useState<Step>("1-step");
  const [variant, setVariant] = useState<Variant>("classic");
  const slug = resolveSlug(step, variant);
  const product = slug ? getProduct(slug) : undefined;

  const chooseStep = (next: Step) => {
    setStep(next);
    const safeVariant = pickCompatibleVariant(next, variant);
    if (safeVariant !== variant) setVariant(safeVariant);
  };

  const chooseVariant = (next: Variant) => {
    setVariant(next);
    const safeStep = pickCompatibleStep(next, step);
    if (safeStep !== step) setStep(safeStep);
  };

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
            onStep={chooseStep}
            onVariant={chooseVariant}
          />
          <AccountSizeColumn product={product} />
          <GetFundedColumn step={step} variant={variant} product={product} />
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
          const compatible = Boolean(resolveSlug(s.id, variant));
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onStep(s.id)}
              aria-pressed={active}
              title={
                compatible
                  ? undefined
                  : `We'll pair ${s.label} with a compatible variant`
              }
              className={cn(
                "rounded-full px-4 py-1.5 text-[13px] font-semibold transition-colors",
                active
                  ? "bg-white/10 text-ink"
                  : compatible
                    ? "text-ink-muted hover:text-ink"
                    : "text-ink-dim/70 hover:text-ink-dim",
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
          const compatible = Boolean(resolveSlug(step, v.id));
          return (
            <button
              key={v.id}
              type="button"
              onClick={() => onVariant(v.id)}
              aria-pressed={active}
              title={
                compatible
                  ? undefined
                  : `We'll pair ${v.label} with a compatible step`
              }
              className={cn(
                "rounded-[14px] border px-4 py-4 text-left transition-all",
                active
                  ? "border-accent bg-accent/[0.08] ring-1 ring-accent/40"
                  : compatible
                    ? "border-white/10 bg-base/40 hover:border-white/20"
                    : "border-white/5 bg-base/20 opacity-40 hover:opacity-60",
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

function AccountSizeColumn({ product }: { product: Product | undefined }) {
  const { size, setSize } = useChallenge();
  const offeredSizes = new Set<AccountSize>(
    product?.variations.map((v) => v.size) ?? [],
  );
  return (
    <Column step={2} label="Account Size">
      <div className="grid grid-cols-2 gap-3">
        {ALL_SIZES.map((s, i) => {
          const active = size === s;
          const isLast = i === ALL_SIZES.length - 1;
          const isOdd = ALL_SIZES.length % 2 === 1;
          const variation = product?.variations.find((v) => v.size === s);
          const offered = product ? offeredSizes.has(s) : true;
          const priced = variation?.price !== undefined;
          const muted = !offered || !priced;
          return (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s as AccountSize)}
              aria-pressed={active}
              title={
                offered
                  ? priced
                    ? undefined
                    : "Price TBC — still selectable"
                  : product
                    ? `Not available on ${product.name}`
                    : undefined
              }
              className={cn(
                "flex flex-col items-center justify-center rounded-[14px] border py-5 transition-all",
                active
                  ? "border-accent bg-accent/[0.08] ring-1 ring-accent/40"
                  : muted
                    ? "border-white/5 bg-base/20 opacity-40 hover:opacity-60"
                    : "border-white/10 bg-base/40 hover:border-white/20",
                isLast && isOdd && "col-span-2 md:col-span-1",
              )}
            >
              <span
                className={cn(
                  "text-lg font-extrabold tabular-nums",
                  active ? "text-ink" : muted ? "text-ink-dim" : "text-ink",
                )}
              >
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
  product,
}: {
  step: Step;
  variant: Variant;
  product: Product | undefined;
}) {
  const { size } = useChallenge();
  const variation = product ? getVariation(product, size) : undefined;
  const price = variation?.price;
  const sizeAvailable = Boolean(variation);
  const status = !product
    ? "combo-missing"
    : !sizeAvailable
      ? "size-missing"
      : price === undefined
        ? "price-tbc"
        : "ok";

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
            status === "ok" ? (
              <span className="font-display text-xl font-extrabold text-accent tabular-nums">
                ${price}
              </span>
            ) : status === "price-tbc" ? (
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Price TBC
              </span>
            ) : status === "size-missing" ? (
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-dim">
                {sizeLabel[size]} unavailable
              </span>
            ) : (
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-dim">
                Not in catalog
              </span>
            )
          }
        />
      </div>
      {variation ? (
        <Button
          size="lg"
          fullWidth
          className={cn("mt-6", status === "price-tbc" && "opacity-75")}
          href={checkoutHref(variation.variationId)}
        >
          START CHALLENGE
        </Button>
      ) : (
        <Button
          size="lg"
          fullWidth
          className="mt-6 opacity-50 hover:opacity-60"
          href="#challenge-selector"
        >
          {status === "size-missing" ? "Pick another size" : "Pick another combo"}
        </Button>
      )}
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
