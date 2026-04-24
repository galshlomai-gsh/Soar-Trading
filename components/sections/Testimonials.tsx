import Image from "next/image";
import { Container } from "@/components/ui/Container";

const testimonials = [
  {
    name: "Markus Weber",
    role: "Forex Scalper",
    avatar: "/Profile Images/Icon4.png",
    quote:
      "The speed of execution and the transparency of the dashboard are unmatched. I received my first payout of $12k within 6 hours of requesting it.",
  },
  {
    name: "Sarah Jenkins",
    role: "Indices Specialist",
    avatar: "/Profile Images/Icon5.png",
    quote:
      "Soar Funding actually understands traders. No hidden rules, no crazy drawdown traps. Just clean, professional funding.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:items-center lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.024em] text-ink sm:text-5xl">
              Trusted by
              <br />
              Professional
              <br />
              Traders Worldwide.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-muted">
              Our community is growing rapidly because we prioritize trader
              success above all else.
            </p>

            <dl className="mt-10 flex flex-col gap-5">
              <Stat value="98%" label="Satisfaction Rate" />
              <Stat value="24/7" label="Premium Support" />
            </dl>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <dt className="font-display text-3xl font-extrabold text-accent sm:text-4xl">
        {value}
      </dt>
      <dd className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
        {label}
      </dd>
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <figure className="relative flex h-full flex-col rounded-card border border-white/10 bg-surface/60 p-6 sm:p-7">
      <Image
        src="/testimonials/quote.png"
        alt=""
        width={48}
        height={34}
        className="absolute right-6 top-6 h-8 w-auto opacity-90 sm:right-7 sm:top-7"
      />
      <div className="flex items-center gap-4 pr-12">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={56}
          height={56}
          className="h-12 w-12 shrink-0 rounded-xl object-cover"
        />
        <figcaption>
          <div className="text-sm font-bold text-ink">{testimonial.name}</div>
          <div className="mt-0.5 text-[12px] text-ink-muted">
            {testimonial.role}
          </div>
        </figcaption>
      </div>
      <blockquote className="mt-6 text-[14px] italic leading-relaxed text-ink-muted sm:text-[15px]">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </figure>
  );
}
