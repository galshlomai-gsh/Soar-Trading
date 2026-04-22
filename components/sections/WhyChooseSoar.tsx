import { Container } from "@/components/ui/Container";
import { SoarMark } from "@/components/brand/LogoSoar";
import { Banknote, Infinity as InfinityIcon, Zap } from "lucide-react";

const features = [
  {
    icon: Banknote,
    title: "90% Profit Split",
    body:
      "Earn the industry's highest profit share. Scale up to a 90% split as you achieve your growth targets.",
  },
  {
    icon: Zap,
    title: "Fast Payouts",
    body:
      "Requested. Approved. Sent. Receive your profits in under 24 hours via Crypto or Wire Transfer.",
  },
  {
    icon: InfinityIcon,
    title: "No Time Limits",
    body:
      "Trade at your own pace. There are no minimum or maximum trading days on our evaluations.",
  },
];

export function WhyChooseSoar() {
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
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-40px] top-[-40px] opacity-[0.06]"
      >
        <SoarMark size={280} />
      </div>
      <Container size="wide" className="relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-deep">
              Precision Trading
            </div>
            <h2 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-accent-deep sm:text-5xl md:text-6xl">
              The Soar Advantage.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-sectionLightInk/70">
            We've eliminated the friction found in traditional prop firms. No
            arbitrary rules. No slow payouts. Just raw performance tools.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-[20px] border border-sectionLightInk/5 bg-white p-8 shadow-[0_10px_40px_-24px_rgba(11,18,32,0.25)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-deep">
                  <Icon className="h-5 w-5" strokeWidth={2.25} />
                </div>
                <h3 className="mt-8 text-xl font-bold text-accent-deep">
                  {f.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-sectionLightInk/70">
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
