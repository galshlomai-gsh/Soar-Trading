import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="pb-24 pt-16">
      <Container size="narrow">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-surface/80 px-8 py-14 text-center shadow-soft sm:px-12">
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
              Ready to Scale Your Career?
            </h3>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
              Join thousands of professional traders and get funded with up to
              $500,000 in institutional capital.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/challenges" size="lg">
                Start Your Evaluation
              </Button>
            </div>
            <div className="mt-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink-muted/70">
              No monthly subscription. One-time fee.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
