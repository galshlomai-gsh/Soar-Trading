import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Risk Disclosure | Soar Funding",
  description:
    "Soar Funding risk disclosure: simulated trading only, no brokerage services, no deposits accepted.",
};

const sections: LegalSection[] = [
  {
    heading: "Educational purpose",
    body: "All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve as a specific investment recommendation, business recommendation, investment opportunity analysis, or similar general recommendation regarding trading investment instruments. Soar Funding only provides services of simulated trading and educational tools for traders.",
  },
  {
    heading: "No brokerage services",
    body: "Soar Funding companies do not act as a broker and do not accept deposits. All accounts are simulated demo accounts. All balances, profits, losses, and performance metrics are virtual.",
  },
  {
    heading: "Simulated performance",
    body: "Performance on a simulated account does not reflect the outcome of real trading under live market conditions. Slippage, liquidity, execution latency and emotional factors differ. Past simulated performance is not an indicator of future results.",
  },
  {
    heading: "Jurisdiction",
    body: "The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. You are responsible for ensuring that your use of the service complies with your local laws.",
  },
  {
    heading: "Tax responsibility",
    body: "Traders assume full tax responsibility for any payouts received. Soar Funding does not provide tax advice.",
  },
];

export default function Page() {
  return (
    <LegalPage
      title="Risk Disclosure"
      subtitle="Simulated trading only. No deposits. No brokerage services."
      sections={sections}
    />
  );
}
