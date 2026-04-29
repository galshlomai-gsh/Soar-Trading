import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    label: "01",
    title: "Choose your trading challenge",
    body:
      "Pick the challenge that matches your trading experience and reach a clear, achievable profit target.",
  },
  {
    label: "02",
    title: "Let's trade",
    body:
      "Keep trading and prove your skills by hitting the profit target and following our straightforward rules.",
  },
  {
    label: "03",
    title: "Get funded",
    body:
      "Pass the evaluation and our team will verify your trading performance and approve your funded account within 24–48 hours.",
  },
  {
    label: "04",
    title: "Get paid",
    body:
      "Trade with our simulated capital, keep up to 100% of the profits you generate, and request payouts weekly or monthly.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24">
      <Container size="wide">
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.024em] text-ink sm:text-5xl">
            Simple Process, <span className="text-gradient">Elevated Capital</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10" style={{ aspectRatio: "1 / 1" }}>
            <Image
              src="/process/steps.png"
              alt="Soar trading process — Choose, Trade, Capital, Paid"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <ol className="flex flex-col gap-6">
              {steps.map((s) => (
                <li
                  key={s.label}
                  className="flex items-start gap-5 rounded-[16px] border border-white/10 bg-surface/60 p-5"
                >
                  <span
                    aria-hidden
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-accent/15 font-display text-sm font-extrabold tracking-wider text-accent"
                  >
                    {s.label}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink sm:text-lg">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex justify-center lg:justify-start">
              <Button href="/#challenge-selector" size="lg">
                Start Your Evaluation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

