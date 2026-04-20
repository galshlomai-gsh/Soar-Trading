import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/layout/LegalPage";
import { company } from "@/components/data/company";

export const metadata: Metadata = {
  title: "Cookie Policy | Soar Funding",
  description:
    "How Soar Funding uses cookies and similar technologies, and how to manage your cookie preferences.",
};

const sections: LegalSection[] = [
  {
    heading: "1. Essential cookies",
    body: "Essential cookies are required for the site to function — for example, to keep you signed in, remember your session, and route requests securely. These cookies cannot be disabled without breaking core functionality.",
  },
  {
    heading: "2. Performance cookies",
    body: "Performance cookies help us understand how the site is used (page views, load times, error rates). They help us diagnose issues and improve performance.",
  },
  {
    heading: "3. Functional cookies",
    body: "Functional cookies remember your preferences, such as interface settings, so the site is more personalised on return visits.",
  },
  {
    heading: "4. Marketing cookies",
    body: "Marketing cookies are used to understand campaign performance and to personalise advertising on third-party platforms. You can opt out of these cookies.",
  },
  {
    heading: "5. Third-party services",
    body: [
      "Google Analytics — aggregated usage analytics.",
      "Facebook Pixel — campaign measurement.",
      "Twitter / X Analytics — campaign measurement.",
      "LinkedIn Insights — campaign measurement.",
      "Each third-party service has its own privacy policy and opt-out controls.",
    ],
  },
  {
    heading: "6. Managing cookie preferences",
    body: "You can manage cookie preferences through your browser settings or through any consent banner we display. Disabling certain cookies may reduce site functionality.",
  },
  {
    heading: "7. Cookie retention",
    body: "Cookie lifetimes vary by purpose. Session cookies are deleted when you close your browser. Persistent cookies may remain for weeks or months until they expire or you delete them.",
  },
  {
    heading: "8. Contact",
    body: `Questions about this Cookie Policy? Email ${company.supportEmail}.`,
  },
];

export default function Page() {
  return (
    <LegalPage
      title="Cookie Policy"
      subtitle="How we use cookies and similar technologies."
      sections={sections}
    />
  );
}
