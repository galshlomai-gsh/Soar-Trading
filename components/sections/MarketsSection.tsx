import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const markets = [
  { label: "Forex — majors", body: "EUR/USD, GBP/USD, USD/JPY and more." },
  { label: "Forex — minors", body: "Cross pairs including AUD/CAD, EUR/GBP and others." },
  { label: "Metals", body: "Gold and silver spot pairs." },
  { label: "Indices", body: "Global index CFDs including SPX500, NAS100, DAX40." },
  { label: "Crypto", body: "Major cryptocurrency pairs available during market hours." },
  { label: "Oil", body: "WTI and Brent crude oil CFDs." },
];

export function MarketsSection() {
  return (
    <section className="py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow="Markets"
          title="100+ assets in one account."
          subtitle="Forex, metals, indices, crypto and oil — trade the markets you know best."
        />
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {markets.map((m) => (
            <div
              key={m.label}
              className="rounded-card border border-white/10 bg-surface/60 p-5"
            >
              <div className="text-sm font-bold text-ink">{m.label}</div>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
