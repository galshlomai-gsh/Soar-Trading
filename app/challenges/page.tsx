import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  challenges,
  fundedPhase,
  type ChallengeSpec,
} from "@/components/data/challenges";

export const metadata: Metadata = {
  title: "Soar Funding Challenges | 1 Step, 2 Step, BNPL & Rapid Runway",
  description:
    "Compare Soar Funding challenge types, profit targets, drawdown limits, payout terms, and funded account rules.",
};

const columns = [
  "Profit target",
  "Daily loss limit",
  "Maximum loss",
  "Drawdown type",
  "Inactivity rule",
  "Activation fee",
  "Funded profit split",
  "Payout timing",
  "Best for",
] as const;

function rowFor(spec: ChallengeSpec): string[] {
  const evalPhases = spec.phases.filter((p) => p.name !== "Funded");
  const funded = fundedPhase(spec);

  const profitTarget = evalPhases
    .map((p) => (p.profitTarget ? `${p.name}: ${p.profitTarget}` : p.name))
    .join(" · ");
  const dailyLoss = evalPhases[0]?.dailyLoss ?? "—";
  const maxLoss = evalPhases[0]?.maxLoss ?? "—";
  const drawdownType =
    evalPhases[0]?.drawdownType === "trailing" ? "Trailing" : "Fixed";
  const inactivity =
    evalPhases.find((p) => p.inactivityRule)?.inactivityRule ??
    funded?.inactivityRule ??
    "—";
  const activationFee =
    evalPhases.find((p) => p.activationFee)?.activationFee ?? "Not required";
  const profitSplit = funded?.profitSplit ?? "—";
  const payoutTiming = funded?.payoutTiming ?? "—";

  return [
    profitTarget,
    dailyLoss,
    maxLoss,
    drawdownType,
    inactivity,
    activationFee,
    profitSplit,
    payoutTiming,
    spec.bestFor,
  ];
}

export default function ChallengesPage() {
  return (
    <section className="pt-14 pb-24 md:pt-20">
      <Container size="wide">
        <SectionHeading
          title="Choose Your Soar Funding Challenge"
          subtitle="Pick the challenge that matches your trading style. Every account is simulated, rule-based, and built to assess consistency before access to a simulated funded account."
        />

        <div className="mt-12 hidden overflow-x-auto rounded-card border border-white/10 bg-surface/60 md:block">
          <table className="w-full min-w-[900px] text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 bg-base/40 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink-muted">
                <th className="sticky left-0 z-10 bg-base/60 px-4 py-4">
                  Challenge
                </th>
                {columns.map((c) => (
                  <th key={c} className="px-4 py-4">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {challenges.map((spec) => {
                const row = rowFor(spec);
                return (
                  <tr
                    key={spec.type}
                    className="border-b border-white/5 align-top last:border-0"
                  >
                    <th
                      scope="row"
                      className="sticky left-0 z-10 bg-surface/80 px-4 py-4 text-sm font-bold text-ink"
                    >
                      {spec.label}
                    </th>
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className="px-4 py-4 text-xs leading-relaxed text-ink/90"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-col gap-4 md:hidden">
          {challenges.map((spec) => {
            const row = rowFor(spec);
            return (
              <div
                key={spec.type}
                className="rounded-card border border-white/10 bg-surface/60 p-5"
              >
                <h3 className="text-base font-bold text-ink">{spec.label}</h3>
                <p className="mt-1 text-xs text-ink-muted">{spec.tagline}</p>
                <dl className="mt-4 grid grid-cols-1 gap-y-3 text-xs">
                  {columns.map((c, i) => (
                    <div
                      key={c}
                      className="flex flex-col border-t border-white/5 pt-3 first:border-0 first:pt-0"
                    >
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.15em] text-ink-muted">
                        {c}
                      </dt>
                      <dd className="mt-1 text-ink/90">{row[i]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-ink-muted">
          All accounts are simulated demo accounts. Rules may vary by challenge
          type. Please read the full{" "}
          <a
            className="text-accent hover:text-accent-soft"
            href="/terms-of-service"
          >
            Terms of Service
          </a>{" "}
          before purchasing.
        </p>

        <div className="mt-10 flex justify-center">
          <Button href="/" size="lg">
            Select Your Challenge
          </Button>
        </div>
      </Container>
    </section>
  );
}
