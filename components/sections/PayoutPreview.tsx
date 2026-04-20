import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const items = [
  {
    title: "First payout after 30 days",
    body:
      "Your first payout becomes available after 30 calendar days, subject to KYC, rule checks and payout approval.",
  },
  {
    title: "100% first, 80% ongoing",
    body:
      "Standard challenge profit split: 100% on the first payout, 80% on ongoing payouts.",
  },
  {
    title: "Bi-weekly thereafter",
    body:
      "Eligible payouts are available bi-weekly. Minimum payout request threshold is 1% profit.",
  },
];

export function PayoutPreview() {
  return (
    <section className="relative overflow-hidden bg-sectionLight py-24">
      <Container size="wide" className="relative">
        <SectionHeading
          theme="light"
          eyebrow="Payouts"
          title="A simple payout structure."
          subtitle="Pay only after approval. No opaque thresholds, no hidden gates."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((i) => (
            <div
              key={i.title}
              className="rounded-[18px] border border-sectionLightInk/8 bg-white p-7"
            >
              <h3 className="text-lg font-bold text-accent-deep">{i.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-sectionLightInk/70">
                {i.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/payouts" size="md">
            Full payout policy
          </Button>
        </div>
      </Container>
    </section>
  );
}
