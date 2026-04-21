import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TrustChips } from "@/components/ui/TrustChips";

export function FinalCta() {
  return (
    <section className="pb-24">
      <Container size="wide">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-surface/80 p-12 text-center shadow-soft">
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(600px 300px at 50% -30%, rgba(91,142,240,0.25), transparent 60%), radial-gradient(600px 400px at 50% 130%, rgba(185,208,255,0.12), transparent 60%)",
            }}
          />
          <div className="relative">
            <h3 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-[44px]">
              Ready to take the challenge?
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">
              Get funded with up to $300k in simulated trading capital. Clear
              rules, no time limits, and a straightforward payout structure.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/challenges" size="lg">
                Choose Your Challenge
              </Button>
            </div>
            <div className="mt-6 flex justify-center">
              <TrustChips align="center" />
            </div>
            <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink-muted/70">
              Simulated trading only · No deposits
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
