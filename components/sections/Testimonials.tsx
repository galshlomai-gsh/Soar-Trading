import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote } from "@/components/ui/Quote";
import { stats, testimonials } from "@/components/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-24">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.4fr] md:items-start">
          <div>
            <SectionHeading
              align="left"
              title={
                <>
                  Trusted by
                  <br />
                  Professional
                  <br />
                  Traders Worldwide.
                </>
              }
              subtitle="Our community is growing rapidly because we prioritize trader success above all else."
            />
            <div className="mt-10 flex flex-col gap-6">
              {stats.map((s) => (
                <div key={s.label} className="flex items-baseline gap-4">
                  <span className="text-4xl font-extrabold text-gradient">
                    {s.value}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {testimonials.map((t) => (
              <Quote key={t.name} {...t} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
