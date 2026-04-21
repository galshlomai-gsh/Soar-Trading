import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FaqTabs } from "@/components/sections/FaqTabs";

export const metadata: Metadata = {
  title: "Soar Funding FAQ | Challenges, Rules, Payouts & Accounts",
  description:
    "Answers to common questions about Soar Funding challenges, simulated funded accounts, rules, payouts, platforms, and support.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Frequently asked"
        title="Answers before you ask."
        subtitle="Clear answers about challenges, rules, payouts and compliance. Where an authoritative answer isn't confirmed, we point you to the Terms of Service."
        breadcrumbs={[{ label: "FAQ" }]}
      />
      <FaqTabs />
    </>
  );
}
