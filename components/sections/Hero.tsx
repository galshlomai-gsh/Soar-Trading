import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { trustpilotScore } from "@/components/data/reviews";

const partners = ["Bloomberg", "TradingView", "Platform 5", "REUTERS"];

const avatars = [
  { src: "/avatars/icon-1.png", alt: "Funded Soar trader" },
  { src: "/avatars/icon-5.png", alt: "Funded Soar trader" },
  { src: "/avatars/icon-9.png", alt: "Funded Soar trader" },
];

export function Hero() {
  const rating = trustpilotScore?.toFixed(1) ?? "4.8";
  return (
    <section className="relative -mt-16 overflow-hidden bg-elevated">
      <HeroMonitorsBackdrop />
      <Container size="wide" className="relative">
        <div className="relative pt-28 pb-12 md:pt-36 md:pb-20">
          <Badge tone="accent" className="gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            PAY AFTER YOU PASS
          </Badge>
          <h1 className="mt-6 font-display text-[44px] font-extrabold leading-[1.05] tracking-[-0.024em] text-ink sm:text-6xl md:text-[88px] lg:text-[96px]">
            Scale Your Trading
            <br />
            to <span className="text-gradient">$300,000</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-[17px]">
            Access institutional-grade capital and trade with industry-leading
            conditions. Keep up to{" "}
            <span className="font-semibold text-accent-soft">
              100% of your profits.
            </span>
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/#challenge-selector" size="lg">
              Select Your Challenge
            </Button>
            <Button href="/faq#rules" size="lg" variant="outline">
              View Rules
            </Button>
            <SocialProofCluster rating={rating} />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-40 hidden text-right font-display text-[12px] font-bold uppercase leading-[1.45] tracking-[0.32em] text-accent-soft/80 md:block"
          >
            <div>Clarity.</div>
            <div>Discipline.</div>
            <div>Freedom.</div>
          </div>
        </div>
      </Container>
      <PartnersStrip />
    </section>
  );
}

function SocialProofCluster({ rating }: { rating: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {avatars.map((a) => (
          <span
            key={a.src}
            className="relative inline-block h-10 w-10 overflow-hidden rounded-full ring-2 ring-elevated"
          >
            <Image src={a.src} alt={a.alt} fill sizes="40px" className="object-cover" />
          </span>
        ))}
        <span className="relative inline-flex h-10 items-center justify-center rounded-[10px] bg-[#1A2233] px-2 ring-2 ring-elevated">
          <Image
            src="/brand/traders-pill.png"
            alt="4.9k+ traders"
            width={40}
            height={40}
            className="h-6 w-auto"
          />
        </span>
      </div>
      <div className="text-[11px] leading-tight">
        <div className="font-semibold text-ink">Join 15,000+ Traders</div>
        <div className="mt-0.5 font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Trustpilot rating {rating}/5
        </div>
      </div>
    </div>
  );
}

function PartnersStrip() {
  return (
    <div className="relative border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <Container size="wide">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-6 sm:py-7 md:py-8">
          <div className="flex flex-wrap items-center gap-x-12 gap-y-3 sm:gap-x-16 md:gap-x-20">
            {partners.map((p) => (
              <span
                key={p}
                className="text-base font-medium tracking-wide text-ink sm:text-lg"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-5 sm:gap-6">
            <span aria-hidden className="hidden h-6 w-px bg-white/15 sm:block" />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              <CheckCircle2 className="h-3.5 w-3.5 text-ok" strokeWidth={2.5} />
              Verified Payouts Active
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

function HeroMonitorsBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
      <Image
        src="/brand/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(11,18,32,0.85) 0%, rgba(11,18,32,0.55) 45%, rgba(11,18,32,0.25) 100%)",
        }}
      />
    </div>
  );
}
