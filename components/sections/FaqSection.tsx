"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

const items = [
  {
    q: "What is the drawdown limit?",
    a: "Each challenge publishes its own daily and overall drawdown — typically 4% daily and 8% maximum on the 2 Step, calculated from end-of-day equity or balance, whichever is higher. Specific limits for every challenge are listed on the Rules page.",
  },
  {
    q: "Can I trade news events?",
    a: "News trading is only allowed where your challenge or add-on permits it. Trading within 5 minutes before or after a high-impact release may lead to profit deductions or a breach, depending on your account rules.",
  },
  {
    q: "How often can I request a payout?",
    a: "Standard funded accounts unlock the first payout after 30 calendar days, then move to bi-weekly payouts at an 80% profit split. Minimum payout request threshold is 1% profit, subject to KYC and rule checks.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="pt-24">
      <Container size="narrow">
        <SectionHeading title="Frequently Asked Questions" />
        <ul className="mt-12 flex flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={cn(
                    "group flex w-full items-center justify-between rounded-card border px-5 py-4 text-left transition-all",
                    isOpen
                      ? "border-accent/40 bg-surface/80"
                      : "border-white/10 bg-surface/60 hover:border-white/20",
                  )}
                >
                  <span className="text-sm font-semibold text-ink">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-ink-muted transition-transform",
                      isOpen && "rotate-180 text-accent",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300",
                    isOpen
                      ? "mt-2 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-ink-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
