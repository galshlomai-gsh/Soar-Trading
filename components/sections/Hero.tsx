import { Container } from "@/components/ui/Container";
import { HeroBackdrop } from "@/components/brand/HeroBackdrop";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/brand/Avatar";
import { Star } from "lucide-react";

const SOCIAL_PROOF = ["Jonas Hall", "Priya Shah", "Markus Weber"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <HeroBackdrop />
      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <Badge tone="accent">Pay After You Pass</Badge>
            <h1 className="mt-6 text-[44px] font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-[72px]">
              Scale Your Trading
              <br />
              to <span className="text-gradient">$200,000</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted sm:text-[17px]">
              Access institutional-grade capital and trade with industry-leading
              conditions. Keep up to{" "}
              <span className="font-semibold text-ink">90% of your profits.</span>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/challenges" size="lg">
                Select Your Challenge
              </Button>
              <Button href="/rules" size="lg" variant="ghost">
                View Rules
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {SOCIAL_PROOF.map((n) => (
                  <Avatar key={n} name={n} size={36} />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-accent text-accent"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-ink">4.9</span>
                </div>
                <span className="text-xs text-ink-muted">
                  Join 15,000+ Traders · Trustpilot Rating 4.9/5
                </span>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <TradingDeskMock />
          </div>
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

function Screen({ symbol, direction }: { symbol: string; direction: "up" | "down" }) {
  const up = direction === "up";
  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-base/90 p-3">
      <div className="flex items-center justify-between text-[10px] font-semibold">
        <span className="text-ink/80">{symbol}</span>
        <span className={up ? "text-ok" : "text-warn"}>{up ? "▲ 1.82%" : "▼ 0.43%"}</span>
      </div>
      <svg viewBox="0 0 120 60" className="mt-2 h-full w-full">
        <defs>
          <linearGradient id={`g-${symbol}`} x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor={up ? "#6FE3A5" : "#F37F6A"} stopOpacity="0.4" />
            <stop offset="1" stopColor={up ? "#6FE3A5" : "#F37F6A"} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={up ? "M0 45 L20 38 L35 42 L55 30 L75 33 L95 20 L120 14 L120 60 L0 60 Z" : "M0 25 L20 32 L35 28 L55 40 L75 36 L95 48 L120 52 L120 60 L0 60 Z"}
          fill={`url(#g-${symbol})`}
        />
        <path
          d={up ? "M0 45 L20 38 L35 42 L55 30 L75 33 L95 20 L120 14" : "M0 25 L20 32 L35 28 L55 40 L75 36 L95 48 L120 52"}
          stroke={up ? "#6FE3A5" : "#F37F6A"}
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}
