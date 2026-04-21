import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Check } from "lucide-react";
import { coreRules, ruleGroups, type RuleGroup } from "@/components/data/rules";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Soar Funding Trading Rules | Drawdown, News, EAs & Breaches",
  description:
    "Read Soar Funding's trading rules, including drawdown limits, news trading, EA use, soft breaches, hard breaches, and consistency rules.",
};

const toneClasses: Record<
  RuleGroup["tone"],
  { border: string; tint: string; text: string; dot: string; label: string }
> = {
  accent: {
    border: "border-white/10",
    tint: "bg-accent/15 text-accent",
    text: "text-ink",
    dot: "bg-accent",
    label: "Rule",
  },
  warn: {
    border: "border-warn/30",
    tint: "bg-warn/15 text-warn",
    text: "text-ink",
    dot: "bg-warn",
    label: "Warning",
  },
  danger: {
    border: "border-warn/50",
    tint: "bg-warn/20 text-warn",
    text: "text-ink",
    dot: "bg-warn",
    label: "Critical",
  },
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Rules"
        title="Trading Rules"
        subtitle="Clear rules before you start. Trade your strategy, avoid restricted behaviour, and stay compliant through every stage."
        breadcrumbs={[{ label: "Trading Rules" }]}
      />

      <section className="pt-10 pb-4">
        <Container size="narrow">
          <nav
            aria-label="Jump to section"
            className="flex flex-wrap gap-2 rounded-card border border-white/10 bg-surface/60 p-3"
          >
            <span className="inline-flex items-center px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Jump to
            </span>
            {ruleGroups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-base/40 px-3 py-1.5 text-[11px] font-semibold text-ink-muted transition-colors hover:border-accent/40 hover:text-ink"
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    toneClasses[g.tone].dot,
                  )}
                />
                {g.title}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <section className="pt-6 pb-24">
        <Container size="narrow">
          <div className="rounded-card border border-white/10 bg-surface/60 p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Check className="h-4 w-4" strokeWidth={3} />
              </div>
              <h2 className="text-xl font-bold text-ink">Core rules</h2>
            </div>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 md:grid-cols-2">
              {coreRules.map((rule) => (
                <li
                  key={rule}
                  className="flex items-start gap-3 rounded-[10px] border border-white/5 bg-base/40 p-3 text-sm text-ink/90"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    strokeWidth={3}
                  />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            {ruleGroups.map((group) => {
              const tone = toneClasses[group.tone];
              const Icon = group.icon;
              return (
                <section
                  key={group.id}
                  id={group.id}
                  className={cn(
                    "scroll-mt-24 rounded-card border bg-surface/60 p-7",
                    tone.border,
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-xl",
                        tone.tint,
                      )}
                    >
                      <Icon className="h-4 w-4" strokeWidth={2.2} />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                        {tone.label}
                      </div>
                      <h2 className={cn("text-xl font-bold", tone.text)}>
                        {group.title}
                      </h2>
                    </div>
                  </div>
                  {group.intro && (
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {group.intro}
                    </p>
                  )}
                  <ul className="mt-5 flex flex-col gap-3">
                    {group.items.map((item) => (
                      <li
                        key={item.label}
                        className="rounded-[10px] border border-white/5 bg-base/40 p-4"
                      >
                        <div className="text-sm font-semibold text-ink">
                          {item.label}
                        </div>
                        {item.body && (
                          <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                            {item.body}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>

          <p className="mt-10 text-xs leading-relaxed text-ink-muted">
            Full rules are governed by the{" "}
            <a
              className="text-accent hover:text-accent-soft"
              href="/terms-of-service"
            >
              Terms of Service
            </a>
            . Where there is any conflict between marketing copy and the Terms,
            the Terms apply.
          </p>
        </Container>
      </section>
    </>
  );
}
