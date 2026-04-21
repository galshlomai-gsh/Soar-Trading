import Link from "next/link";
import {
  Banknote,
  CalendarCheck,
  Check,
  Coins,
  Repeat,
  ScrollText,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const rules = [
  "Minimum 2-minute hold on every trade",
  "No copy trading or hedging across accounts",
  "News trading only with the correct add-on",
  "Weekend holding is permitted",
  "EAs may be used where reviewed and approved",
  "At least one trade every 30 days",
];

const payouts = [
  { icon: CalendarCheck, label: "First payout", value: "After 30 days" },
  { icon: Coins, label: "First split", value: "100%" },
  { icon: Repeat, label: "Ongoing", value: "80% bi-weekly" },
  { icon: Banknote, label: "Minimum", value: "1% profit" },
];

export function RulesAndPayoutPreviews() {
  return (
    <section className="py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow="Rules & payouts at a glance"
          title="Clear before you start."
          subtitle="Two things every trader should read before purchasing — the rules they'll trade by, and the structure they'll be paid by."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <PreviewCard
            icon={ScrollText}
            kicker="Trading rules"
            title="Trade your strategy."
            href="/rules"
            cta="Read the full rules"
          >
            <ul className="flex flex-col gap-2.5">
              {rules.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 text-sm text-ink/90"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    strokeWidth={3}
                  />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </PreviewCard>

          <PreviewCard
            icon={ShieldCheck}
            kicker="Payout policy"
            title="Get paid on schedule."
            href="/payouts"
            cta="Full payout policy"
          >
            <div className="grid grid-cols-2 gap-3">
              {payouts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-card border border-white/10 bg-base/40 p-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </div>
                  <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    {label}
                  </div>
                  <div className="mt-0.5 text-sm font-bold text-ink">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </PreviewCard>
        </div>
      </Container>
    </section>
  );
}

function PreviewCard({
  icon: Icon,
  kicker,
  title,
  href,
  cta,
  children,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  kicker: string;
  title: string;
  href: string;
  cta: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-[20px] border border-white/10 bg-surface/60 p-7">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(360px 200px at 100% 0%, rgba(91,142,240,0.18), transparent 60%)",
        }}
      />
      <div className="relative flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
          <Icon className="h-4 w-4" strokeWidth={2.2} />
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
            {kicker}
          </div>
          <h3 className="text-xl font-bold tracking-tight text-ink">
            {title}
          </h3>
        </div>
      </div>
      <div className="relative mt-6 flex-1">{children}</div>
      <div className="relative mt-6">
        <Link
          href={href}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-accent hover:text-accent-soft"
        >
          {cta} →
        </Link>
      </div>
    </div>
  );
}
