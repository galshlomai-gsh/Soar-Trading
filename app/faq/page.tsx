import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FaqTabs } from "@/components/sections/FaqTabs";

export const metadata: Metadata = {
  title: "Soar Funding FAQ | Challenges, Rules, Payouts & Accounts",
  description:
    "Answers to common questions about Soar Funding challenges, simulated funded accounts, rules, payouts, platforms, and support.",
};

export default function Page() {
  return (
    <>
      <section className="pt-20">
        <Container size="narrow" className="text-center">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Clear answers about challenges, rules, payouts and compliance. Where an authoritative answer isn't confirmed, we point you to the Terms of Service."
          />
        </Container>
      </section>
      <FaqTabs />
    </>
  );
}
