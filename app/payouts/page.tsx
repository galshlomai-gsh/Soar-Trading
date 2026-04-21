import type { Metadata } from "next";
import {
  Banknote,
  CalendarCheck,
  Check,
  Coins,
  FileSignature,
  Flag,
  HandCoins,
  Hourglass,
  IdCard,
  Receipt,
  Repeat,
  ShieldCheck,
  UserCheck,
  XCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { TrustChips } from "@/components/ui/TrustChips";
import { PayoutCalculator } from "@/components/sections/PayoutCalculator";

export const metadata: Metadata = {
  title: "Soar Funding Payout Policy | Profit Split & Withdrawal Rules",
  description:
    "Learn when Soar Funding payouts become available, how profit split works, and what checks are required before approval.",
};

const highlights = [
  { icon: CalendarCheck, title: "First payout", body: "After 30 calendar days" },
  { icon: Coins, title: "First split", body: "100%" },
  { icon: Repeat, title: "Ongoing", body: "80% bi-weekly" },
  { icon: Banknote, title: "Minimum", body: "1% profit" },
  { icon: UserCheck, title: "KYC", body: "Required" },
  { icon: ShieldCheck, title: "Third-party", body: "Prohibited" },
];

const timeline = [
  {
    icon: Flag,
    label: "Day 0",
    title: "Funded stage begins",
    body:
      "Pass the evaluation, complete review, and start trading your simulated funded account.",
  },
  {
    icon: Hourglass,
    label: "Days 1–30",
    title: "Qualification window",
    body:
      "Trade within drawdown limits and consistency rules. Payouts are not yet available.",
  },
  {
    icon: HandCoins,
    label: "Day 30",
    title: "First payout unlocked",
    body:
      "Eligible for the first payout at 100% profit split, subject to KYC and rule review.",
  },
  {
    icon: Repeat,
    label: "Every 2 weeks",
    title: "Ongoing payouts",
    body:
      "Payouts available bi-weekly at 80% profit split. Minimum request is 1% profit.",
  },
];

const sections = [
  {
    id: "standard",
    title: "Standard challenge payouts",
    icon: Coins,
    items: [
      "First payout available after 30 calendar days.",
      "First payout profit split: 100%.",
      "Ongoing payouts: 80% bi-weekly.",
      "Minimum payout request threshold: 1% profit.",
    ],
  },
  {
    id: "bnpl",
    title: "BNPL payouts",
    icon: Receipt,
    items: [
      "Funded phase payouts available after 30 days, then bi-weekly.",
      "Profit split: 80%.",
      "Activation fee must be paid within 15 days of passing.",
    ],
  },
  {
    id: "rapid",
    title: "Rapid Runway payouts",
    icon: HandCoins,
    items: [
      "Profit split: 80% bi-weekly.",
      "Activation fee due within 15 days of passing.",
    ],
  },
];

const requirements = [
  { icon: IdCard, label: "Complete full KYC" },
  { icon: Check, label: "Provide proof of payout account ownership" },
  { icon: FileSignature, label: "Sign a Funded Trader Agreement" },
  {
    icon: UserCheck,
    label: "Contract with an approved Employer of Record where required",
  },
  { icon: Banknote, label: "Assume full tax responsibility" },
  { icon: ShieldCheck, label: "Use an account owned by the trader" },
  { icon: XCircle, label: "Third-party payouts are prohibited" },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Payouts"
        title="Payout Policy"
        subtitle="For standard funded accounts, the first payout is available after 30 calendar days, subject to KYC, account review, rule compliance, and payout approval."
        breadcrumbs={[{ label: "Payout Policy" }]}
      />

      <section className="pt-10">
        <Container size="wide">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {highlights.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-card border border-white/10 bg-surface/60 p-4 text-center"
              >
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Icon className="h-4 w-4" strokeWidth={2.2} />
                </div>
                <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  {title}
                </div>
                <div className="mt-1 text-sm font-bold text-ink">{body}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PayoutCalculator variant="compact" />

      <section className="pt-14">
        <Container size="wide">
          <div className="rounded-[20px] border border-white/10 bg-surface/60 p-6 md:p-8">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Standard challenge timeline
                </div>
                <h2 className="mt-1 text-xl font-bold tracking-tight text-ink">
                  From funded day-one to bi-weekly payouts.
                </h2>
              </div>
            </div>
            <ol className="mt-8 relative grid grid-cols-1 gap-5 md:grid-cols-4">
              <div
                aria-hidden
                className="pointer-events-none absolute left-5 top-5 hidden h-[2px] w-[calc(100%-2.5rem)] bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 md:block"
              />
              {timeline.map((step, i) => {
                const Icon = step.icon;
                return (
                  <li
                    key={step.label}
                    className="relative rounded-card border border-white/10 bg-base/40 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                        <Icon className="h-4 w-4" strokeWidth={2.2} />
                      </div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                        Step {i + 1}
                      </div>
                    </div>
                    <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                      {step.label}
                    </div>
                    <h3 className="mt-1 text-base font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                      {step.body}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </Container>
      </section>

      <section className="pt-14">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <section
                  key={s.id}
                  id={s.id}
                  className="rounded-card border border-white/10 bg-surface/60 p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <Icon className="h-4 w-4" strokeWidth={2.2} />
                    </div>
                    <h2 className="text-base font-bold text-ink">{s.title}</h2>
                  </div>
                  <ul className="mt-5 flex flex-col gap-2 text-xs leading-relaxed text-ink/90">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                          strokeWidth={3}
                        />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="pt-14">
        <Container size="wide">
          <div className="rounded-card border border-white/10 bg-surface/60 p-7">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              Checklist
            </div>
            <h2 className="mt-1 text-xl font-bold text-ink">
              Payout requirements
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              Complete these before requesting a payout. Items may be reviewed
              retrospectively.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              {requirements.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 rounded-[10px] border border-white/5 bg-base/40 p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </div>
                  <span className="text-sm text-ink/90">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="pt-10 pb-24">
        <Container size="wide">
          <div className="rounded-card border border-white/10 bg-surface/60 p-7">
            <h2 className="text-base font-bold text-ink">Payout review</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/90">
              Accounts may be reviewed after phase completion or payout
              request. The company may deduct profits, reclassify breaches, or
              terminate accounts based on historical activity where rules have
              been breached.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Button href="/challenges" size="lg">
              Start Your Challenge
            </Button>
            <TrustChips align="center" />
          </div>
        </Container>
      </section>
    </>
  );
}
