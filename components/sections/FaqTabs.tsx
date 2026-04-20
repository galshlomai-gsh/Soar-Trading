"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  faqCategories,
  faqItems,
  type FaqCategory,
} from "@/components/data/faq";
import { cn } from "@/lib/cn";

export function FaqTabs() {
  const [category, setCategory] = useState<FaqCategory>("general");
  const [open, setOpen] = useState<number | null>(0);

  const items = useMemo(
    () => faqItems.filter((f) => f.category === category),
    [category],
  );

  return (
    <section className="pt-6 pb-24">
      <Container size="narrow">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {faqCategories.map((c) => {
            const active = c.id === category;
            return (
              <button
                key={c.id}
                onClick={() => {
                  setCategory(c.id);
                  setOpen(0);
                }}
                aria-pressed={active}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-semibold transition-all",
                  active
                    ? "border-accent/50 bg-accent/15 text-ink"
                    : "border-white/10 bg-surface/60 text-ink-muted hover:border-white/20 hover:text-ink",
                )}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {items.length === 0 ? (
          <p className="text-center text-sm text-ink-muted">
            No FAQs in this category yet.
          </p>
        ) : (
          <ul className="flex flex-col gap-3">
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
        )}
      </Container>
    </section>
  );
}
