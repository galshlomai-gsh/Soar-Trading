import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Mail } from "lucide-react";

const SUPPORT_EMAIL = "support@soar-funding.com";

export const metadata: Metadata = {
  title: "Contact Soar Funding | Support",
  description:
    "Get in touch with Soar Funding support. Email support@soar-funding.com for challenges, rules, payouts, and billing questions.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        subtitle="One inbox, one team. We answer every message — account questions, rules, payouts, or billing — typically within a business day."
      />
      <section className="pb-24 pt-6">
        <Container size="narrow">
          <div className="mx-auto flex max-w-xl flex-col items-center rounded-[20px] border border-white/10 bg-raised p-8 text-center md:p-12">
            <span className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-accent/15 text-accent">
              <Mail className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
              Email support
            </div>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink transition-colors hover:text-accent sm:text-3xl"
            >
              {SUPPORT_EMAIL}
            </a>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted">
              Please include your order number or account email when you write
              in — it helps us pull your file and respond faster. For rule or
              compliance questions, reference the relevant section of the{" "}
              <a
                href="/terms-of-service"
                className="text-accent hover:text-accent-soft"
              >
                Terms of Service
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
