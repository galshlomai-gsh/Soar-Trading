import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Soar Funding Payout Policy | Profit Split & Withdrawal Rules",
  description:
    "Learn when Soar Funding payouts become available, how profit split works, and what checks are required before approval.",
};

const sections = [
  {
    id: "standard",
    title: "Standard challenge payouts",
    items: [
      "First payout available after 30 calendar days.",
      "First payout profit split: 100%.",
      "Ongoing payouts: 80% bi-weekly.",
      "Minimum payout request threshold: 1% profit.",
    ],
  },
  {
    id: "bnpl",
    title: "BNPL payouts",
    items: [
      "Funded phase payouts available after 30 days, then bi-weekly.",
      "Profit split: 80%.",
      "Activation fee must be paid within 15 days of passing.",
    ],
  },
  {
    id: "rapid",
    title: "Rapid Runway payouts",
    items: [
      "Profit split: 80% bi-weekly.",
      "Activation fee due within 15 days of passing.",
    ],
  },
  {
    id: "requirements",
    title: "Payout requirements",
    items: [
      "Complete full KYC.",
      "Provide proof of payout account ownership.",
      "Sign a Funded Trader Agreement.",
      "Contract with an approved Employer of Record where required.",
      "The trader assumes full tax responsibility.",
      "Third-party payouts are prohibited.",
    ],
  },
];

export default function Page() {
  return (
    <section className="pt-14 pb-24 md:pt-20">
      <Container size="narrow">
        <SectionHeading
          title="Payout Policy"
          subtitle="Understand when payouts become available, how profit split works, and what checks are required before approval."
        />

        <div className="mt-12 flex flex-col gap-6">
          {sections.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="rounded-card border border-white/10 bg-surface/60 p-7"
            >
              <h2 className="text-xl font-bold text-ink">{s.title}</h2>
              <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-ink/90">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="before:mr-2 before:text-accent before:content-['•']"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section
            id="review"
            className="rounded-card border border-white/10 bg-surface/60 p-7"
          >
            <h2 className="text-xl font-bold text-ink">Payout review</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/90">
              Accounts may be reviewed after phase completion or payout request.
              The company may deduct profits, reclassify breaches, or terminate
              accounts based on historical activity where rules have been
              breached.
            </p>
          </section>
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/challenges" size="lg">
            Start Your Challenge
          </Button>
        </div>
      </Container>
    </section>
  );
}
