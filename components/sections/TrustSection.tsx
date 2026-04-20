import { Container } from "@/components/ui/Container";
import {
  Headphones,
  LayoutGrid,
  Layers,
  ScrollText,
  ShieldCheck,
} from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Simulated funded accounts",
    body:
      "Every funded account is a simulated demo account. Clear legal positioning on every page.",
  },
  {
    icon: ScrollText,
    title: "Clear rules",
    body:
      "Drawdown limits, profit targets and consistency rules are published in the Terms of Service.",
  },
  {
    icon: LayoutGrid,
    title: "100+ markets available",
    body:
      "Forex majors and minors, metals, indices, crypto and oil — trade what you know.",
  },
  {
    icon: Layers,
    title: "Multiple challenge types",
    body:
      "1 Step, 2 Step, BNPL 1 Step, BNPL 2 Step and Rapid Runway — pick what suits your style.",
  },
  {
    icon: Headphones,
    title: "Fast support",
    body:
      "Email support@soar-funding.com — we respond quickly to account, billing and rules questions.",
  },
];

export function TrustSection() {
  return (
    <section className="py-24">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-[44px]">
              Built for serious <span className="text-gradient">traders</span>.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              Simulated trading challenges, straightforward rules, and a simple
              payout structure. No hidden gates and no inflated claims.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-card border border-white/10 bg-surface/60 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                    {p.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
