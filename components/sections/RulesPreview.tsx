import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

const preview = [
  "Minimum 2-minute hold on every trade",
  "No copy trading or hedging across accounts",
  "No HFT, toxic trading, or latency arbitrage",
  "News trading only with the correct add-on",
  "Weekend holding is permitted",
  "At least one trade every 30 days",
];

export function RulesPreview() {
  return (
    <section className="py-24">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Rules at a glance"
              title="Clear rules before you start."
              subtitle="Every rule is documented. Soft breaches accumulate across three strikes; hard breaches can terminate an account."
            />
            <div className="mt-8">
              <Button href="/rules" size="md">
                Read the full rules
              </Button>
            </div>
          </div>
          <ul className="flex flex-col gap-2.5">
            {preview.map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 rounded-card border border-white/10 bg-surface/60 p-4"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
                <span className="text-sm text-ink/90">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
