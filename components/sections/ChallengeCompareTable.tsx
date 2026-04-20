import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  challenges,
  fundedPhase,
  sizeShortLabel,
  type ChallengeSpec,
} from "@/components/data/challenges";

const columns = [
  "Account sizes",
  "Price",
  "Profit target",
  "Daily loss",
  "Max loss",
  "Drawdown type",
  "Payout timing",
  "Profit split",
  "Consistency rule",
  "Inactivity rule",
  "Activation fee",
] as const;

function priceSummary(spec: ChallengeSpec): string {
  if (!spec.pricing) return "To be confirmed";
  const entries = Object.entries(spec.pricing)
    .filter(([, v]) => v !== undefined)
    .sort(([a], [b]) => Number(a.replace("k", "")) - Number(b.replace("k", "")));
  if (entries.length === 0) return "To be confirmed";
  return entries
    .map(([size, fee]) => `${sizeShortLabel[size as keyof typeof sizeShortLabel]}: $${fee}`)
    .join(" · ");
}

function rowFor(spec: ChallengeSpec): string[] {
  const evalPhases = spec.phases.filter((p) => p.name !== "Funded");
  const funded = fundedPhase(spec);

  const sizesCell = spec.sizes.map((s) => sizeShortLabel[s]).join(", ");
  const priceCell = priceSummary(spec);
  const profitTarget = evalPhases
    .map((p) => (p.profitTarget ? `${p.name}: ${p.profitTarget}` : p.name))
    .join(" · ");
  const dailyLoss = evalPhases[0]?.dailyLoss ?? "—";
  const maxLoss = evalPhases[0]?.maxLoss ?? "—";
  const drawdownType =
    evalPhases[0]?.drawdownType === "trailing" ? "Trailing" : "Fixed";
  const payoutTiming = funded?.payoutTiming ?? "—";
  const profitSplit = funded?.profitSplit ?? "—";
  const consistency = funded?.consistencyRule ?? "—";
  const inactivity =
    evalPhases.find((p) => p.inactivityRule)?.inactivityRule ??
    funded?.inactivityRule ??
    "—";
  const activationFee =
    evalPhases.find((p) => p.activationFee)?.activationFee ?? "Not required";

  return [
    sizesCell,
    priceCell,
    profitTarget,
    dailyLoss,
    maxLoss,
    drawdownType,
    payoutTiming,
    profitSplit,
    consistency,
    inactivity,
    activationFee,
  ];
}

export function ChallengeCompareTable() {
  return (
    <section className="pb-24">
      <Container size="wide">
        <SectionHeading
          title="Compare Challenges"
          subtitle="Full side-by-side comparison of sizes, prices, rules and payout terms. Numbers are sourced from the Terms of Service."
        />

        <div className="mt-12 hidden overflow-x-auto rounded-card border border-white/10 bg-surface/60 md:block">
          <table className="w-full min-w-[1100px] text-left text-xs">
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
          before purchasing. Prices marked &ldquo;to be confirmed&rdquo; are
          not yet public.
        </p>
      </Container>
    </section>
  );
}
