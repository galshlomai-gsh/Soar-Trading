import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BadgeCheck, Landmark, UserPlus } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Pass the Evaluation",
    body:
      "Demonstrate your trading skills on our evaluation accounts. Follow the rules and hit the profit target.",
  },
  {
    n: "02",
    title: "Verify Your Results",
    body:
      "Once the target is reached, our team performs a quick risk audit to ensure consistency and rule compliance.",
  },
  {
    n: "03",
    title: "Trade Institutional Funds",
    body:
      "Receive your master account details and start trading our capital. Scale your account as you withdraw profits.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="relative flex flex-col gap-5">
            <div className="flex items-center gap-3 rounded-card border border-white/10 bg-surface/60 p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <UserPlus className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                Step 1 · Registration
              </span>
            </div>
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
            <div className="flex items-center gap-3 self-end rounded-card border border-white/10 bg-surface/60 p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <Landmark className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                Step 3 · Get Funded
              </span>
            </div>
          </div>

          <div>
            <SectionHeading
              align="left"
              title={
                <>
                  Simple Process,
                  <br />
                  <span className="text-gradient">Global Capital.</span>
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
                      {s.n === "03" && <BadgeCheck className="h-4 w-4 text-accent" />}
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
                Start Your Evaluation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
