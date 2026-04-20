import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BadgeCheck } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Choose your trading challenge",
    body:
      "Pick the challenge that matches your style. Rules, targets and drawdown limits are published on every page.",
  },
  {
    n: "02",
    title: "Pass the evaluation",
    body:
      "Hit the profit target while staying within the drawdown and daily loss limits for your challenge.",
  },
  {
    n: "03",
    title: "Complete review and verification",
    body:
      "Our team performs a risk audit, KYC check and rule review before funded-stage access is issued.",
  },
  {
    n: "04",
    title: "Trade a simulated funded account",
    body:
      "Access your simulated funded account and request eligible payouts after the 30-day window.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-white/10 bg-elevated">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(520px 320px at 30% 20%, rgba(91,142,240,0.25), transparent 65%)",
              }}
            />
            <svg viewBox="0 0 300 220" className="absolute inset-0 h-full w-full opacity-80">
              <defs>
                <linearGradient id="proc" x1="0" y1="0" x2="0" y2="220" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5B8EF0" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#5B8EF0" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 160 L40 130 L80 140 L120 90 L160 120 L200 70 L240 80 L300 40 L300 220 L0 220 Z" fill="url(#proc)" />
              <path d="M0 160 L40 130 L80 140 L120 90 L160 120 L200 70 L240 80 L300 40" stroke="#5B8EF0" strokeWidth="1.8" fill="none" />
              {[160, 130, 140, 90, 120, 70, 80, 40].map((y, i) => (
                <circle key={i} cx={i * 40} cy={y} r="2.5" fill="#B9D0FF" />
              ))}
            </svg>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="How it works"
              title={
                <>
                  Four steps from challenge
                  <br />
                  <span className="text-gradient">to simulated funded.</span>
                </>
              }
            />
            <ol className="mt-10 flex flex-col gap-6">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-sm font-bold text-accent tabular-nums">
                    {s.n}
                  </span>
                  <div>
                    <h4 className="flex items-center gap-2 text-base font-bold text-ink">
                      {s.title}
                      {s.n === "04" && <BadgeCheck className="h-4 w-4 text-accent" />}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <Button href="/challenges" size="md">
                Choose Your Challenge
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
