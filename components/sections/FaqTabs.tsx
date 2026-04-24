"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  faqCategories,
  faqItems,
  type FaqCategory,
} from "@/components/data/faq";
import { cn } from "@/lib/cn";

export function FaqTabs() {
  const [category, setCategory] = useState<FaqCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;
      const match = faqCategories.find((c) => c.id === hash);
      if (match) setCategory(match.id);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqItems.filter((f) => {
      if (category !== "all" && f.category !== category) return false;
      if (!q) return true;
      return (
        f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
      );
    });
  }, [category, query]);

  const counts = useMemo(() => {
    const byCat: Record<string, number> = { all: faqItems.length };
    for (const item of faqItems) {
      byCat[item.category] = (byCat[item.category] ?? 0) + 1;
    }
    return byCat;
  }, []);

  return (
    <section className="pt-8 pb-24">
      <Container size="narrow">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
            strokeWidth={2.2}
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions"
            aria-label="Search FAQ"
            className="h-12 w-full rounded-[14px] border border-white/10 bg-surface/60 pl-11 pr-4 text-sm text-ink placeholder:text-ink-dim focus:border-accent/60 focus:outline-none"
          />
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <CategoryChip
            active={category === "all"}
            count={counts.all}
            label="All"
            onClick={() => setCategory("all")}
          />
          {faqCategories.map((c) => {
            const Icon = c.icon;
            return (
              <CategoryChip
                key={c.id}
                active={category === c.id}
                count={counts[c.id] ?? 0}
                label={c.label}
                icon={Icon}
                onClick={() => setCategory(c.id)}
              />
            );
          })}
        </div>

        <div className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
          {items.length} {items.length === 1 ? "question" : "questions"}
        </div>

        {items.length === 0 ? (
          <p className="mt-10 text-center text-sm text-ink-muted">
            No questions match that search.
          </p>
        ) : (
          <ul className="mt-6 flex flex-col gap-3">
            {items.map((item) => {
              const key = `${item.category}-${item.q}`;
              const isOpen = open === key;
              return (
                <li key={key}>
                  <button
                    onClick={() => setOpen(isOpen ? null : key)}
                    aria-expanded={isOpen}
                    className={cn(
                      "group flex w-full items-start justify-between gap-4 rounded-card border px-5 py-4 text-left transition-all",
                      isOpen
                        ? "border-accent/40 bg-surface/80"
                        : "border-white/10 bg-surface/60 hover:border-white/20",
                    )}
                  >
                    <div className="flex flex-1 flex-col">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                        {
                          faqCategories.find((c) => c.id === item.category)
                            ?.label
                        }
                      </span>
                      <span className="mt-1 text-sm font-semibold text-ink">
                        {item.q}
                      </span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "mt-1 h-4 w-4 shrink-0 text-ink-muted transition-transform",
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

function CategoryChip({
  active,
  count,
  label,
  icon: Icon,
  onClick,
}: {
  active: boolean;
  count: number;
  label: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition-all",
        active
          ? "border-accent/50 bg-accent/15 text-ink"
          : "border-white/10 bg-surface/60 text-ink-muted hover:border-white/20 hover:text-ink",
      )}
    >
      {Icon && (
        <Icon
          className={cn("h-3.5 w-3.5", active ? "text-accent" : "")}
          strokeWidth={2.2}
        />
      )}
      <span>{label}</span>
      <span
        className={cn(
          "rounded-full px-2 text-[10px] font-bold tabular-nums",
          active ? "bg-accent/20 text-accent" : "bg-white/5 text-ink-muted/80",
        )}
      >
        {count}
      </span>
    </button>
  );
}
