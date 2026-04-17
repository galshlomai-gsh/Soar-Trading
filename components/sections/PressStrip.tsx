import { Container } from "@/components/ui/Container";
import {
  BrandBloomberg,
  BrandMT5,
  BrandReuters,
  BrandTradingView,
} from "@/components/brand/BrandMarks";

export function PressStrip() {
  return (
    <section className="border-y border-white/5 bg-surface/40 py-6">
      <Container size="wide">
        <div className="flex flex-wrap items-center justify-between gap-6 md:flex-nowrap">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <BrandBloomberg />
            <BrandTradingView />
            <BrandMT5 />
            <BrandReuters />
          </div>
          <div className="ml-auto flex items-center gap-2 rounded-full border border-ok/30 bg-ok/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ok">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-ok/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
            </span>
            Verified Payouts Active
          </div>
        </div>
      </Container>
    </section>
  );
}
