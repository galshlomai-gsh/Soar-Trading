import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SoarMark } from "@/components/brand/LogoSoar";
import {
  Bot,
  Coins,
  Headphones,
  Infinity as InfinityIcon,
  LayoutGrid,
  Layers,
  Repeat,
  ScrollText,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Coins,
    title: "100% first payout",
    body:
      "Keep 100% of your first payout on standard challenges. Ongoing payouts are 80% bi-weekly.",
  },
  {
    icon: Repeat,
    title: "80% ongoing, bi-weekly",
    body:
      "Eligible payouts are available bi-weekly after the first 30 calendar days.",
  },
  {
    icon: InfinityIcon,
    title: "No time limits",
    body:
      "Trade at your own pace. There are no minimum or maximum trading days.",
  },
  {
    icon: ScrollText,
    title: "Clear, published rules",
    body:
      "Drawdown limits, profit targets and consistency rules — all in the Terms of Service.",
  },
  {
    icon: Layers,
    title: "5 challenge types",
    body:
      "1 Step, 2 Step, BNPL 1 Step, BNPL 2 Step and Rapid Runway. Pick what suits your style.",
  },
  {
    icon: LayoutGrid,
    title: "100+ markets",
    body:
      "Forex majors and minors, metals, indices, crypto and oil — all in one account.",
  },
  {
    icon: ShieldCheck,
    title: "Simulated funded accounts",
    body:
      "Every funded account is simulated. Clear legal positioning on every page.",
  },
  {
    icon: Bot,
    title: "EAs allowed, with approval",
    body:
      "Expert Advisors may be used where reviewed and compliant with the rules.",
  },
  {
    icon: Headphones,
    title: "Fast support",
    body:
      "Email support@soar-funding.com — we respond quickly to any account question.",
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
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            theme="light"
            align="left"
            eyebrow="Why Soar Funding"
            title="Built for serious traders."
            emphasize="serious traders."
          />
          <p className="max-w-md text-sm leading-relaxed text-sectionLightInk/60">
            Simulated trading challenges, straightforward rules, and a simple
            payout structure. No hidden gates and no inflated claims.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group rounded-[18px] border border-sectionLightInk/8 bg-white p-7 shadow-[0_10px_40px_-24px_rgba(11,18,32,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-22px_rgba(11,18,32,0.4)]"
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
