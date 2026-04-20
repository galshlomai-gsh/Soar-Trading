import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Affiliates | Soar Funding",
  description: "The Soar Funding affiliate programme is launching soon.",
};

export default function Page() {
  return (
    <ComingSoon
      title="Affiliates"
      subtitle="The Soar Funding affiliate programme is launching soon. Email support@soar-funding.com to be notified when sign-ups open."
    />
  );
}
