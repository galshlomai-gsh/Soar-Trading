import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/layout/LegalPage";
import { company } from "@/components/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Soar Funding",
  description:
    "How Soar Funding collects, uses, stores and protects your personal data under UK GDPR.",
};

const sections: LegalSection[] = [
  {
    heading: "1. Who we are",
    body: [
      `${company.legalName} (trading as ${company.tradingName})`,
      `Company number: ${company.companyNumber}, ${company.jurisdiction}`,
      `Registered office: ${company.registeredOffice}`,
      `Contact: ${company.supportEmail}`,
    ],
  },
  {
    heading: "2. Data we collect",
    body: [
      "Account information: name, email, password (hashed), account preferences.",
      "KYC documents: identity verification documents and proof of payout account ownership where applicable.",
      "Support queries: messages, attachments and any information you provide to support.",
      "Technical data: browser type, IP address, device identifiers, clickstream, referring URLs and error logs.",
    ],
  },
  {
    heading: "3. How we use data",
    body: [
      "To operate the Soar Funding services and simulated trading challenges.",
      "To verify identity, prevent fraud and enforce the Terms of Service.",
      "To process payments, payouts, refunds and related tax obligations.",
      "To respond to support enquiries.",
      "To analyse usage and improve the service.",
    ],
  },
  {
    heading: "4. Legal basis under UK GDPR",
    body: "We process personal data on the basis of contract (to provide the services), legitimate interests (to protect the platform and improve the service), legal obligation (for KYC, anti-fraud and tax), and consent (for optional communications).",
  },
  {
    heading: "5. Data sharing",
    body: [
      "Trusted service providers (hosting, analytics, payment processors, KYC providers) under contract.",
      "Regulators, law enforcement or courts where legally required.",
      "Professional advisers (legal, accounting, audit) under confidentiality.",
    ],
  },
  {
    heading: "6. Data retention",
    body: "We retain personal data only as long as necessary to provide the services, comply with legal obligations, resolve disputes and enforce agreements. Retention periods may vary by data category.",
  },
  {
    heading: "7. Your rights",
    body: [
      "Access the personal data we hold about you.",
      "Request correction of inaccurate data.",
      "Request erasure where there is no overriding legal basis to retain.",
      "Restrict or object to processing in specified circumstances.",
      "Data portability where applicable.",
      "Withdraw consent where processing relies on consent.",
    ],
  },
  {
    heading: "8. Cookies",
    body: "We use cookies and similar technologies to operate and improve the service. See our Cookie Policy for details.",
  },
  {
    heading: "9. Security",
    body: "We use industry-standard technical and organisational measures to protect personal data. No system is perfectly secure; notify us immediately if you suspect a breach.",
  },
  {
    heading: "10. Account deletion",
    body: `You can request deletion of your account by writing to ${company.supportEmail}. Some records may be retained where required by law or to enforce the Terms.`,
  },
  {
    heading: "11. Children's privacy",
    body: "Soar Funding services are not directed at children under the age of majority in their jurisdiction. We do not knowingly collect data from minors.",
  },
  {
    heading: "12. Currency",
    body: `All amounts are denominated in ${company.currency} unless otherwise stated.`,
  },
  {
    heading: "13. Contact",
    body: [
      `Email: ${company.supportEmail}`,
      `Mailing address: ${company.legalName}, ${company.registeredOffice}`,
    ],
  },
];

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use, store and protect your personal data."
      sections={sections}
    />
  );
}
