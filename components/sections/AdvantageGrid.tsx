import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Infinity as InfinityIcon, Wallet, Zap } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "90% Profit Split",
    body:
      "Earn the industry's highest profit share. Scale up to a 90% split as you achieve your growth targets.",
  },
  {
    icon: Zap,
    title: "Fast Payouts",
    body:
      "Requested. Approved. Sent. Receive your profits in under 24 hours via crypto or wire transfer.",
  },
  {
    icon: InfinityIcon,
    title: "No Time Limits",
    body:
      "Trade at your own pace. There are no minimum or maximum trading days on our evaluations.",
  },
];

export function AdvantageGrid() {
  return (
    <section className="relative overflow-hidden bg-sectionLight py-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(700px 400px at 10% 10%, rgba(91,142,240,0.12), transparent 60%), radial-gradient(600px 400px at 90% 90%, rgba(91,142,240,0.08), transparent 60%)",
        }}
      />
      <Container size="wide" className="relative">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            theme="light"
            align="left"
            eyebrow="Precision Trading"
            title="The Soar Advantage."
            emphasize="Advantage."
          />
          <p className="max-w-md text-sm leading-relaxed text-sectionLightInk/60">
            We&apos;ve eliminated the friction found in traditional prop firms.
            No arbitrary rules. No slow payouts. Just raw performance tools.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-[18px] border border-sectionLightInk/8 bg-white p-7 shadow-[0_10px_40px_-24px_rgba(11,18,32,0.3)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-deep">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-accent-deep">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-sectionLightInk/70">
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
