import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Client Portal | Soar Funding",
  description:
    "The Soar Funding client portal is coming soon. Contact support for account assistance in the meantime.",
};

export default function Page() {
  return (
    <ComingSoon
      title="Client Portal"
      subtitle="The trader dashboard and account management portal are coming soon. For account assistance, email support@soar-funding.com."
    />
  );
}
