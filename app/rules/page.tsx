import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Check } from "lucide-react";
import { coreRules, ruleGroups } from "@/components/data/rules";

export const metadata: Metadata = {
  title: "Soar Funding Trading Rules | Drawdown, News, EAs & Breaches",
  description:
    "Read Soar Funding's trading rules, including drawdown limits, news trading, EA use, soft breaches, hard breaches, and consistency rules.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Rules"
        title="Trading Rules"
        subtitle="Clear rules before you start. Trade your strategy, avoid restricted behaviour, and stay compliant through every stage."
      />
      <section className="pt-12 pb-24">
        <Container size="narrow">
          <div className="rounded-card border border-white/10 bg-surface/60 p-7">
            <h2 className="text-xl font-bold text-ink">Core rules</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {coreRules.map((rule) => (
                <li
                  key={rule}
                  className="flex items-start gap-3 text-sm text-ink/90"
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

          <div className="mt-6 flex flex-col gap-6">
            {ruleGroups.map((group) => (
              <section
                key={group.id}
                id={group.id}
                className="rounded-card border border-white/10 bg-surface/60 p-7"
              >
                <h2 className="text-xl font-bold text-ink">{group.title}</h2>
                {group.intro && (
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
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
            ))}
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
