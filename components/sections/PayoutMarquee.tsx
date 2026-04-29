import Image from "next/image";
import { Container } from "@/components/ui/Container";

interface PayoutExample {
  name: string;
  amount: number;
  certificate: string;
}

const examples: PayoutExample[] = [
  { name: "Dayberd S.", amount: 13590.0, certificate: "/payouts/dayberd.png" },
  { name: "Pajor D.", amount: 9382.52, certificate: "/payouts/pajor.png" },
  { name: "Matthew B.", amount: 7877.83, certificate: "/payouts/matthew.png" },
  { name: "Stefan Buckland", amount: 7817.7, certificate: "/payouts/stefan.png" },
  { name: "Scott R.", amount: 4036.16, certificate: "/payouts/scott.png" },
  { name: "Liam V.", amount: 3132.6, certificate: "/payouts/liam.png" },
  { name: "Amine1980", amount: 2193.0, certificate: "/payouts/amine.png" },
  { name: "Ernest O.", amount: 1633.92, certificate: "/payouts/ernest.png" },
  { name: "Akano A.", amount: 764.3, certificate: "/payouts/akano.png" },
  { name: "Shivam P.", amount: 744.0, certificate: "/payouts/shivam.png" },
  { name: "Sanni K.", amount: 337.0, certificate: "/payouts/sanni.png" },
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

function PayoutCard({ name, amount, certificate }: PayoutExample) {
  return (
    <article className="relative flex w-[420px] shrink-0 items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#141C2E] p-5 shadow-soft sm:w-[460px]">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
          Payout Certificate
        </div>
        <div className="mt-3 truncate text-2xl font-bold text-ink">{name}</div>
        <div className="mt-4 text-[28px] font-extrabold leading-none tabular-nums text-accent">
          ${fmt(amount)}
        </div>
      </div>
      <div className="relative h-[140px] w-[120px] shrink-0 overflow-hidden rounded-lg">
        <Image
          src={certificate}
          alt={`${name} payout certificate`}
          fill
          sizes="120px"
          className="object-cover"
        />
      </div>
    </article>
  );
}
