import { Container } from "@/components/ui/Container";

interface PayoutExample {
  trader: string;
  country: string;
  flag: string;
  amount: number;
}

// Labelled examples for the marquee strip. These are illustrative only —
// a badge on every card and a footnote below make that explicit.
const examples: PayoutExample[] = [
  { trader: "Trader A.", country: "United Kingdom", flag: "🇬🇧", amount: 1253 },
  { trader: "Trader E.", country: "Germany", flag: "🇩🇪", amount: 1634 },
  { trader: "Trader M.", country: "United States", flag: "🇺🇸", amount: 3480 },
  { trader: "Trader H.", country: "Japan", flag: "🇯🇵", amount: 2104 },
  { trader: "Trader C.", country: "France", flag: "🇫🇷", amount: 985 },
  { trader: "Trader L.", country: "Australia", flag: "🇦🇺", amount: 5120 },
  { trader: "Trader S.", country: "Canada", flag: "🇨🇦", amount: 2750 },
  { trader: "Trader P.", country: "Singapore", flag: "🇸🇬", amount: 1840 },
];

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

export function PayoutMarquee() {
  const track = [...examples, ...examples];
  return (
    <section className="border-y border-white/5 bg-base/80 py-10">
      <Container size="wide" className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
          Example Payout Certificates · Simulated demo accounts
        </p>
      </Container>
      <div className="marquee-mask mt-8 overflow-hidden">
        <div className="flex w-max gap-4 animate-marquee">
          {track.map((p, i) => (
            <Certificate key={i} {...p} />
          ))}
        </div>
      </div>
      <Container size="wide" className="mt-6 text-center">
        <p className="mx-auto max-w-xl text-[11px] leading-relaxed text-ink-muted/80">
          Illustrative examples only. All Soar Funding accounts are simulated
          demo accounts — profits, losses and payout values are virtual.
        </p>
      </Container>
    </section>
  );
}

function Certificate({ trader, country, flag, amount }: PayoutExample) {
  return (
    <div className="relative flex w-[260px] shrink-0 overflow-hidden rounded-card border border-white/10 bg-surface/70">
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
          <span className="text-sm">{flag}</span>
          <span>{country}</span>
        </div>
        <div className="mt-3 text-sm font-bold text-ink">{trader}</div>
        <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
          Payout Certificate · Example
        </div>
      </div>
      <div className="relative w-[108px] shrink-0 overflow-hidden bg-accent-gradient p-4 text-[#0B1220]">
        <div className="text-[9px] font-bold uppercase tracking-[0.15em] opacity-80">
          Simulated
        </div>
        <div className="mt-4 text-lg font-extrabold tabular-nums">
          ${fmt(amount)}
        </div>
        <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] opacity-80">
          Demo
        </div>
      </div>
    </div>
  );
}
