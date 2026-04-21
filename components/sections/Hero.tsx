import { Container } from "@/components/ui/Container";
import { HeroBackdrop } from "@/components/brand/HeroBackdrop";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SoarMark } from "@/components/brand/LogoSoar";
import { TrustChips } from "@/components/ui/TrustChips";
import { Sparkles } from "lucide-react";
import { challenges } from "@/components/data/challenges";

const stats = [
  { label: "Up to $300k", sub: "Simulated funded capital" },
  { label: "100%", sub: "First payout" },
  { label: "80%", sub: "Ongoing payouts" },
  { label: "No limits", sub: "No time pressure" },
  { label: "100+", sub: "Assets available" },
  { label: "24/7", sub: "Support" },
];

function lowestPublicPrice(): number | undefined {
  const prices: number[] = [];
  for (const c of challenges) {
    if (!c.pricing) continue;
    for (const v of Object.values(c.pricing)) {
      if (typeof v === "number") prices.push(v);
    }
  }
  return prices.length ? Math.min(...prices) : undefined;
}

export function Hero() {
  const fromPrice = lowestPublicPrice();
  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-28">
      <HeroBackdrop />
      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <Badge tone="accent">Pay After You Pass</Badge>
            <h1 className="mt-6 text-[44px] font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-[72px]">
              Get Funded With Up To{" "}
              <span className="text-gradient">$300k</span> in Simulated Trading
              Capital
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted sm:text-[17px]">
              Take on a Soar Funding challenge with clear targets, no time
              limits, and straightforward rules. Pass the evaluation, complete
              the required checks, and trade a simulated funded account.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/challenges" size="lg">
                Choose Your Challenge
              </Button>
              <Button href="/rules" size="lg" variant="ghost">
                View Rules
              </Button>
              {fromPrice !== undefined && (
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold text-ink">
                  <Sparkles
                    className="h-3.5 w-3.5 text-accent"
                    strokeWidth={2.5}
                  />
                  From{" "}
                  <span className="tabular-nums text-accent-soft">
                    ${fromPrice}
                  </span>
                  <span className="text-ink-muted">· 1 Step</span>
                </span>
              )}
            </div>
            <div className="mt-6">
              <TrustChips align="left" />
            </div>
            <p className="mt-6 text-xs text-ink-muted">
              Simulated trading only. No deposits. No brokerage services. No
              investment advice.
            </p>
          </div>

          <div className="relative hidden md:block">
            <TradingDeskMock />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-card border border-white/10 bg-surface/60 px-4 py-4 text-center"
            >
              <div className="text-lg font-extrabold text-ink sm:text-xl">
                {s.label}
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TradingDeskMock() {
  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[28px] border border-white/10 bg-elevated shadow-soft">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(500px 280px at 30% 10%, rgba(91,142,240,0.25), transparent 65%), radial-gradient(420px 260px at 80% 90%, rgba(243,127,106,0.18), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.07]"
      >
        <SoarMark size={360} />
      </div>
      <div className="absolute inset-6 grid grid-cols-2 gap-3">
        <Screen symbol="EUR/USD" direction="up" />
        <Screen symbol="BTC/USD" direction="up" />
        <Screen symbol="SPX500" direction="down" />
        <Screen symbol="XAU/USD" direction="up" />
      </div>
      <div className="absolute inset-0 bg-grid mask-radial-fade opacity-30" />
    </div>
  );
}

function Screen({
  symbol,
  direction,
}: {
  symbol: string;
  direction: "up" | "down";
}) {
  const up = direction === "up";
  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-base/90 p-3">
      <div className="flex items-center justify-between text-[10px] font-semibold">
        <span className="text-ink/80">{symbol}</span>
        <span className={up ? "text-ok" : "text-warn"}>
          {up ? "▲ 1.82%" : "▼ 0.43%"}
        </span>
      </div>
      <svg viewBox="0 0 120 60" className="mt-2 h-full w-full">
        <defs>
          <linearGradient
            id={`g-${symbol}`}
            x1="0"
            y1="0"
            x2="0"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={up ? "#6FE3A5" : "#F37F6A"} stopOpacity="0.4" />
            <stop offset="1" stopColor={up ? "#6FE3A5" : "#F37F6A"} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={
            up
              ? "M0 45 L20 38 L35 42 L55 30 L75 33 L95 20 L120 14 L120 60 L0 60 Z"
              : "M0 25 L20 32 L35 28 L55 40 L75 36 L95 48 L120 52 L120 60 L0 60 Z"
          }
          fill={`url(#g-${symbol})`}
        />
        <path
          d={
            up
              ? "M0 45 L20 38 L35 42 L55 30 L75 33 L95 20 L120 14"
              : "M0 25 L20 32 L35 28 L55 40 L75 36 L95 48 L120 52"
          }
          stroke={up ? "#6FE3A5" : "#F37F6A"}
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}
