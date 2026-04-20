import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/layout/LegalPage";
import { company } from "@/components/data/company";

export const metadata: Metadata = {
  title: "Terms of Service | Soar Funding",
  description:
    "Soar Funding Terms of Service covering simulated trading challenges, funded-stage rules, payouts, toxic trading, breaches and governing law.",
};

const sections: LegalSection[] = [
  {
    heading: "1. Nature of service",
    body: "Soar Funding provides simulated trading challenges and educational tools for traders. Nothing on this site constitutes investment advice, financial advice, portfolio management, brokerage services, or an offer to trade real capital. Soar Funding does not act as a broker, does not accept deposits, and does not place customer funds at market risk.",
  },
  {
    heading: "2. Company details",
    body: [
      `Legal name: ${company.legalName}`,
      `Company number: ${company.companyNumber} (${company.jurisdiction})`,
      `Registered office: ${company.registeredOffice}`,
      `Contact: ${company.supportEmail}`,
    ],
  },
  {
    heading: "3. Eligibility and jurisdiction",
    body: "You must be of legal age in your jurisdiction and permitted by local law to access simulated trading services. Soar Funding is not directed at residents in any country where such distribution would be contrary to local laws or regulations.",
  },
  {
    heading: "4. No-refund policy",
    body: "Challenge fees are non-refundable. By purchasing a challenge, you acknowledge that fees have been paid for access to simulated evaluation services and educational materials.",
  },
  {
    heading: "5. Challenge structures",
    body: [
      "2 Step challenge: Phase 1 profit target 8%, Phase 2 profit target 6%, 8% fixed maximum loss, 4% fixed daily loss limit based on EOD equity or balance (whichever is higher).",
      "1 Step challenge: 10% profit target, 8% trailing maximum loss, 3% fixed daily loss limit.",
      "BNPL 2 Step: Phase 1 target 8%, Phase 2 target 5%, 10% trailing maximum loss, 5% fixed daily loss limit, activation fee due within 15 days of passing.",
      "BNPL 1 Step: 6% profit target, 10% trailing maximum loss, 5% fixed daily loss limit, activation fee due within 15 days of passing.",
      "Rapid Runway: Phase 1 skipped, Phase 2 target 5%, 8% trailing maximum loss, 5% fixed daily loss during challenge, 3% fixed daily loss on funded.",
    ],
  },
  {
    heading: "6. Funded-stage rules",
    body: [
      "2 Step funded: 8% fixed maximum loss, 4% fixed daily loss, 100% first payout then 80% bi-weekly, 40% consistency rule.",
      "1 Step funded: 8% trailing maximum loss, 3% fixed daily loss, 100% first payout then 80% bi-weekly, 35% consistency rule.",
      "BNPL 2 Step funded: 8% trailing maximum loss, 3% fixed daily loss, 80% bi-weekly, 25% consistency rule.",
      "BNPL 1 Step funded: 6% trailing maximum loss, 3% fixed daily loss, 80% bi-weekly, 15% consistency rule.",
      "Rapid Runway funded: 8% trailing maximum loss, 3% fixed daily loss, 80% bi-weekly, 20% consistency rule.",
      "All funded accounts require at least one trade every 30 days.",
    ],
  },
  {
    heading: "7. Trading rules",
    body: [
      "No copy trading or hedging across accounts.",
      "No HFT, toxic trading, execution abuse, or latency arbitrage.",
      "No news trading unless the correct add-on is purchased. Trading within 5 minutes before or after high-impact news may lead to profit deductions or a breach.",
      "Weekend holding is permitted.",
      "VPNs and static IPs are allowed where usage is consistent.",
      "Minimum 2-minute hold on every trade.",
      "Expert Advisors must be reviewed and approved.",
      "Stop-loss is not mandatory but is recommended.",
    ],
  },
  {
    heading: "8. Toxic trading",
    body: "Toxic trading includes strategies or behaviour that exploit demo conditions, pricing, execution, latency, or platform infrastructure. Toxic trading is a hard breach and can result in account termination, loss of profits, and no payout eligibility.",
  },
  {
    heading: "9. Soft and hard breaches",
    body: [
      "Soft breaches accumulate and do not reset until a successful payout is completed.",
      "Three soft breaches equal one hard breach.",
      "Enforcement may occur retrospectively after phase completion or payout request.",
      "A hard breach can result in account termination, loss of profits, no payout eligibility, and no refund.",
    ],
  },
  {
    heading: "10. Payout conditions",
    body: [
      "First payout available after 30 calendar days on standard challenges.",
      "Standard challenge first payout profit split: 100%. Ongoing payouts: 80% bi-weekly.",
      "BNPL and Rapid Runway funded payouts: 80% bi-weekly.",
      "Minimum payout request threshold: 1% profit.",
      "KYC, proof of payout account ownership, signed Funded Trader Agreement, and (where required) a contract with an approved Employer of Record are required before payout.",
      "Third-party payouts are prohibited. The trader assumes full tax responsibility.",
    ],
  },
  {
    heading: "11. Data, IP and device use",
    body: "Your account access, IP address, device fingerprint and trading activity may be logged and reviewed. VPN and VPS use is permitted where consistent. Unusual location changes may trigger a review.",
  },
  {
    heading: "12. Liability",
    body: "Soar Funding's liability is limited to the fees paid for the affected challenge. Soar Funding is not liable for indirect, consequential, or speculative losses. Simulated performance is not a guarantee of future outcomes.",
  },
  {
    heading: "13. Governing law and arbitration",
    body: `These Terms are governed by the laws of ${company.jurisdiction}. Any dispute arising out of or in connection with these Terms shall be finally resolved by arbitration in London under the London Court of International Arbitration (LCIA) Rules.`,
  },
];

export default function Page() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="The contract between you and Soar Funding for access to simulated trading challenges and educational tools."
      sections={sections}
      note="These Terms reflect the policies of the Soar Funding live site. Where marketing copy on this site conflicts with the Terms, the Terms apply."
    />
  );
}
