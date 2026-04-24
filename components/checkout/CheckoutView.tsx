"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ChevronDown,
  CreditCard,
  Bitcoin,
  Lock,
  ShieldCheck,
  Tag,
} from "lucide-react";
import {
  ALL_SIZES,
  type AccountSize,
  type ChallengeType,
  getChallenge,
  getPrice,
  sizeLabel,
} from "@/components/data/challenges";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Step = "instant" | "1-step" | "2-step";
type Variant = "bnpl" | "rapid" | "classic";

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

function resolveType(step: Step, variant: Variant): ChallengeType | undefined {
  if (step === "instant" && variant === "rapid") return "rapid-runway";
  if (step === "1-step" && variant === "classic") return "1-step";
  if (step === "2-step" && variant === "classic") return "2-step";
  if (step === "1-step" && variant === "bnpl") return "bnpl-1-step";
  if (step === "2-step" && variant === "bnpl") return "bnpl-2-step";
  return undefined;
}

const STEPS: Step[] = ["instant", "1-step", "2-step"];
const VARIANTS: Variant[] = ["bnpl", "rapid", "classic"];

function parseStep(v: string | null): Step {
  return v && (STEPS as string[]).includes(v) ? (v as Step) : "1-step";
}

function parseVariant(v: string | null): Variant {
  return v && (VARIANTS as string[]).includes(v) ? (v as Variant) : "classic";
}

function parseSize(v: string | null): AccountSize {
  return v && (ALL_SIZES as string[]).includes(v)
    ? (v as AccountSize)
    : "100k";
}

type PaymentId = "card" | "crypto" | "wire";

const paymentOptions: {
  id: PaymentId;
  label: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}[] = [
  {
    id: "card",
    label: "Credit / Debit Card",
    desc: "Visa, Mastercard, and Amex. Processed securely by Stripe.",
    icon: CreditCard,
  },
  {
    id: "crypto",
    label: "Pay with Crypto",
    desc: "USDT, USDC, BTC, and ETH. Settlement within 10 minutes.",
    icon: Bitcoin,
  },
  {
    id: "wire",
    label: "Bank Wire Transfer",
    desc: "Ideal for larger accounts. Funds clear within 1–3 business days.",
    icon: Lock,
  },
];

export function CheckoutView() {
  const params = useSearchParams();
  const step = parseStep(params.get("step"));
  const variant = parseVariant(params.get("variant"));
  const size = parseSize(params.get("size"));

  const spec = useMemo(() => {
    const type = resolveType(step, variant);
    return type ? getChallenge(type) : undefined;
  }, [step, variant]);
  const unitPrice = spec ? getPrice(spec, size) : undefined;

  const [coupon, setCoupon] = useState("");
  const [couponOpen, setCouponOpen] = useState(false);
  const [couponApplied, setCouponApplied] = useState<number>(0);
  const [payment, setPayment] = useState<PaymentId>("card");
  const [terms, setTerms] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);

  const subtotal = unitPrice ?? 0;
  const discount = Math.min(couponApplied, subtotal);
  const total = Math.max(subtotal - discount, 0);

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (!code) {
      setCouponApplied(0);
      return;
    }
    if (code === "SOAR10") setCouponApplied(Math.round(subtotal * 0.1));
    else if (code === "SOAR20") setCouponApplied(Math.round(subtotal * 0.2));
    else setCouponApplied(0);
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
      <div className="order-2 lg:order-1">
        <div className="rounded-[20px] border border-white/10 bg-raised p-6 md:p-8">
          <button
            type="button"
            onClick={() => setCouponOpen((v) => !v)}
            className="flex w-full items-center justify-between gap-3 rounded-[12px] border border-dashed border-accent/40 bg-accent/[0.05] px-5 py-3 text-left transition-colors hover:bg-accent/10"
          >
            <span className="flex items-center gap-3 text-sm font-semibold text-ink">
              <Tag className="h-4 w-4 text-accent" />
              Have a coupon? Click to enter your code
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-ink-muted transition-transform",
                couponOpen && "rotate-180 text-accent",
              )}
            />
          </button>
          {couponOpen && (
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Coupon code"
                className="h-12 flex-1 rounded-[12px] border border-white/10 bg-elevated px-4 text-sm text-ink placeholder:text-ink-dim focus:border-accent/60 focus:outline-none"
              />
              <Button type="button" variant="outline" onClick={applyCoupon}>
                Apply coupon
              </Button>
            </div>
          )}

          <h2 className="mt-10 font-display text-2xl font-extrabold tracking-tight text-ink">
            Billing details
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Used for your invoice and identity verification. Matches the name on
            your payment method.
          </p>

          <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="First name" required>
              <input
                required
                autoComplete="given-name"
                className={inputClass}
              />
            </Field>
            <Field label="Last name" required>
              <input
                required
                autoComplete="family-name"
                className={inputClass}
              />
            </Field>
            <Field label="Country / Region" required className="sm:col-span-2">
              <select
                required
                defaultValue=""
                className={cn(inputClass, "appearance-none pr-10")}
              >
                <option value="" disabled>
                  Select a country…
                </option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Street address" required className="sm:col-span-2">
              <input
                required
                autoComplete="address-line1"
                placeholder="House number and street name"
                className={inputClass}
              />
              <input
                autoComplete="address-line2"
                placeholder="Apartment, suite, unit, etc. (optional)"
                className={cn(inputClass, "mt-3")}
              />
            </Field>
            <Field label="Town / City" required>
              <input
                required
                autoComplete="address-level2"
                className={inputClass}
              />
            </Field>
            <Field label="State / County">
              <input
                autoComplete="address-level1"
                className={inputClass}
              />
            </Field>
            <Field label="Postcode / ZIP" required>
              <input
                required
                autoComplete="postal-code"
                className={inputClass}
              />
            </Field>
            <Field label="Phone" required>
              <input
                required
                type="tel"
                autoComplete="tel"
                className={inputClass}
              />
            </Field>
            <Field
              label="Email address"
              required
              className="sm:col-span-2"
            >
              <input
                required
                type="email"
                autoComplete="email"
                className={inputClass}
              />
            </Field>
            <label className="flex cursor-pointer items-start gap-3 sm:col-span-2">
              <input
                type="checkbox"
                checked={createAccount}
                onChange={(e) => setCreateAccount(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-white/20 bg-elevated text-accent focus:ring-accent"
              />
              <span className="text-sm text-ink-muted">
                Create a Soar Funding account for easier checkout, progress
                tracking, and payout requests.
              </span>
            </label>
            {createAccount && (
              <Field
                label="Account password"
                required
                className="sm:col-span-2"
              >
                <input
                  required
                  type="password"
                  autoComplete="new-password"
                  className={inputClass}
                />
              </Field>
            )}

            <div className="sm:col-span-2">
              <button
                type="button"
                onClick={() => setNotesOpen((v) => !v)}
                className="text-sm font-semibold text-accent hover:text-accent-soft"
              >
                {notesOpen ? "Hide order notes" : "Add order notes (optional)"}
              </button>
              {notesOpen && (
                <textarea
                  rows={3}
                  placeholder="Notes about your order, e.g. special instructions for our onboarding team."
                  className={cn(inputClass, "mt-3 h-auto resize-y py-3")}
                />
              )}
            </div>
          </form>
        </div>
      </div>

      <aside className="order-1 lg:order-2">
        <div className="rounded-[20px] border border-white/10 bg-raised p-6 md:p-7 lg:sticky lg:top-24">
          <h2 className="font-display text-xl font-extrabold tracking-tight text-ink">
            Your order
          </h2>

          <div className="mt-5 flex items-start justify-between gap-4 rounded-[14px] border border-white/10 bg-elevated p-4">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                Soar Funding Challenge
              </div>
              <div className="mt-1 text-base font-bold text-ink">
                {sizeLabel[size]} · {stepLabel[step]}
              </div>
              <div className="mt-0.5 text-xs text-ink-muted">
                {variantLabel[variant]} · DX Trade platform
              </div>
            </div>
            <div className="text-right font-display text-lg font-extrabold tabular-nums text-ink">
              {unitPrice !== undefined ? `$${unitPrice}` : "—"}
            </div>
          </div>

          <dl className="mt-5 flex flex-col divide-y divide-white/5 text-sm">
            <Line label="Subtotal" value={formatAmount(subtotal)} />
            {discount > 0 && (
              <Line
                label="Coupon discount"
                value={`− ${formatAmount(discount)}`}
                tone="ok"
              />
            )}
            <Line label="VAT / Tax" value="$0.00" muted />
            <div className="flex items-center justify-between py-4">
              <dt className="text-[13px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                Total
              </dt>
              <dd className="font-display text-2xl font-extrabold tabular-nums text-accent">
                {unitPrice !== undefined ? formatAmount(total) : "Price TBC"}
              </dd>
            </div>
          </dl>

          <h3 className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
            Payment method
          </h3>
          <div className="mt-3 flex flex-col gap-2.5">
            {paymentOptions.map((p) => {
              const active = payment === p.id;
              const Icon = p.icon;
              return (
                <label
                  key={p.id}
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-[14px] border px-4 py-3 transition-all",
                    active
                      ? "border-accent bg-accent/[0.08] ring-1 ring-accent/40"
                      : "border-white/10 bg-elevated hover:border-white/20",
                  )}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={active}
                    onChange={() => setPayment(p.id)}
                    className="mt-1 h-4 w-4 accent-[color:var(--tw-color-accent,#8FB8FF)]"
                  />
                  <span className="flex-1">
                    <span className="flex items-center gap-2 text-sm font-bold text-ink">
                      <Icon className="h-4 w-4 text-accent" strokeWidth={2.2} />
                      {p.label}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-ink-muted">
                      {p.desc}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>

          <label className="mt-5 flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-white/20 bg-elevated text-accent focus:ring-accent"
            />
            <span className="text-xs leading-relaxed text-ink-muted">
              I have read and agree to the Soar Funding{" "}
              <Link href="/terms-of-service" className="text-accent hover:underline">
                Terms of Service
              </Link>
              ,{" "}
              <Link href="/privacy-policy" className="text-accent hover:underline">
                Privacy Policy
              </Link>
              , and{" "}
              <Link href="/risk-disclosure" className="text-accent hover:underline">
                Risk Disclosure
              </Link>
              .
            </span>
          </label>

          <Button
            type="submit"
            size="lg"
            fullWidth
            className="mt-5"
            disabled={!terms || unitPrice === undefined}
          >
            Place order · {unitPrice !== undefined ? formatAmount(total) : "TBC"}
          </Button>

          <div className="mt-5 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
            <ShieldCheck className="h-3.5 w-3.5 text-ok" strokeWidth={2.4} />
            Secure SSL · 256-bit encryption
          </div>
        </div>
      </aside>
    </div>
  );
}

const inputClass =
  "h-12 w-full rounded-[12px] border border-white/10 bg-elevated px-4 text-sm text-ink placeholder:text-ink-dim focus:border-accent/60 focus:outline-none";

function Field({
  label,
  required,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("flex flex-col gap-2", className)}>
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
        {label}
        {required && <span className="ml-1 text-warn">*</span>}
      </span>
      {children}
    </label>
  );
}

function Line({
  label,
  value,
  tone,
  muted,
}: {
  label: string;
  value: string;
  tone?: "ok";
  muted?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <dt className={cn("text-sm", muted ? "text-ink-dim" : "text-ink-muted")}>
        {label}
      </dt>
      <dd
        className={cn(
          "text-sm font-semibold tabular-nums",
          tone === "ok" ? "text-ok" : "text-ink",
        )}
      >
        {value}
      </dd>
    </div>
  );
}

function formatAmount(n: number): string {
  return `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

const countries = [
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Ireland",
  "Portugal",
  "Switzerland",
  "Austria",
  "Belgium",
  "Poland",
  "Czech Republic",
  "Hungary",
  "Greece",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Singapore",
  "Japan",
  "South Korea",
  "Hong Kong",
  "New Zealand",
  "South Africa",
  "India",
  "Brazil",
  "Mexico",
  "Argentina",
  "Chile",
];
