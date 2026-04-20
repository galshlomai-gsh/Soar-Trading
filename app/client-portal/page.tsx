import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Client Portal | Soar Funding",
  description:
    "Access your Soar Funding client account, manage challenges and request payouts.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Portal"
        title="Client Portal"
        subtitle="Manage your Soar Funding account, view active challenges and track payouts."
      />
      <section className="pt-12 pb-24">
        <Container size="narrow">
          <div className="rounded-card border border-white/10 bg-surface/60 p-7 text-sm leading-relaxed text-ink/90">
            <p>
              The client portal is operated on a separate subdomain. If you
              have a Soar Funding account, sign in on the live trading portal.
              If you need help accessing your account, contact support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="https://trade.soar-funding.com" size="md">
                Go to Trading Portal
              </Button>
              <Button
                href="mailto:support@soar-funding.com"
                size="md"
                variant="ghost"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
