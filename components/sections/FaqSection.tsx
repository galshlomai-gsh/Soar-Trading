"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/components/data/faq";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="pt-24">
      <Container size="narrow">
        <SectionHeading title="Frequently Asked Questions" />
        <ul className="mt-12 flex flex-col gap-3">
          {faqItems.map((item, i) => {
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
