import Image from "next/image";
import { Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface PayoutExample {
  name: string;
  country: string;
  amount: number;
}

const examples: PayoutExample[] = [
  { name: "Andrew", country: "Singapore", amount: 1253.42 },
  { name: "Ernest", country: "United Kingdom", amount: 1633.92 },
  { name: "Marcus", country: "United States", amount: 3480.15 },
  { name: "Hiro", country: "Japan", amount: 2104.8 },
  { name: "Chloé", country: "France", amount: 985.6 },
  { name: "Liam", country: "Australia", amount: 5120.0 },
  { name: "Sophie", country: "Canada", amount: 2750.25 },
  { name: "Priya", country: "Singapore", amount: 1840.5 },
];

function fmt(n: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function PayoutMarquee() {
  const track = [...examples, ...examples];
  return (
    <section className="border-y border-white/5 bg-base/80 py-12">
      <Container size="wide" className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
          Example Payout Certificates · Simulated demo accounts
        </p>
      </Container>
      <div className="marquee-mask mt-8 overflow-hidden">
        <div className="flex w-max gap-5 animate-marquee">
          {track.map((p, i) => (
            <PayoutCard key={i} {...p} />
          ))}
        </div>
      </div>
      <Container size="wide" className="mt-8 text-center">
        <p className="mx-auto max-w-xl text-[11px] leading-relaxed text-ink-muted/80">
          Illustrative examples only. All Soar Funding accounts are simulated
          demo accounts — profits, losses and payout values are virtual.
        </p>
      </Container>
    </section>
  );
}

function PayoutCard({ name, country, amount }: PayoutExample) {
  return (
    <article className="relative flex w-[420px] shrink-0 items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-surface/60 p-5 sm:w-[460px]">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink-muted">
          <Globe className="h-3.5 w-3.5" strokeWidth={2} />
          <span>{country}</span>
        </div>
        <div className="mt-3 text-2xl font-bold text-ink">{name}</div>
        <div className="mt-0.5 text-[13px] text-ink-muted">{country}</div>
        <div className="mt-4 text-[28px] font-extrabold leading-none tabular-nums text-accent">
          ${fmt(amount)}
        </div>
      </div>
      <div className="relative h-[132px] w-[112px] shrink-0">
        <Image
          src="/brand/payout-certificate.png"
          alt="Soar Funding payout certificate"
          fill
          sizes="112px"
          className="object-contain"
        />
      </div>
    </article>
  );
}
