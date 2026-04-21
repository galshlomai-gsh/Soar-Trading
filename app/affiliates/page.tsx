import type { Metadata } from "next";
import {
  ArrowRight,
  ClipboardCheck,
  Gift,
  Link2,
  Mail,
  Megaphone,
  MessageCircle,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Partner With Soar Funding | Affiliates",
  description:
    "Promote Soar Funding to traders and grow with the brand. Commission terms and affiliate portal to be confirmed.",
};

const howItWorks = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Apply to partner",
    body:
      "Email support to register interest. We'll onboard approved partners when the affiliate portal launches.",
  },
  {
    icon: Link2,
    step: "02",
    title: "Share your link",
    body:
      "Send traders to the homepage challenge selector or straight to the challenges page with your tracked link.",
  },
  {
    icon: Users,
    step: "03",
    title: "Track referrals",
    body:
      "The affiliate portal will show referrals, activations, and lifecycle status once it's live.",
  },
  {
    icon: Gift,
    step: "04",
    title: "Earn on activation",
    body:
      "Commission structure will be published by Soar Funding. Exact terms to be confirmed.",
  },
];

const benefits = [
  {
    icon: Megaphone,
    title: "Promote five challenge types",
    body:
      "1 Step, 2 Step, BNPL 1 Step, BNPL 2 Step and Rapid Runway — something for every style.",
  },
  {
    icon: MessageCircle,
    title: "Direct support channel",
    body:
      "Reach our team on support@soar-funding.com for partner-only questions.",
  },
  {
    icon: Users,
    title: "Community-backed brand",
    body:
      "Active Discord community and public Trustpilot presence — content you can point traders at.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Affiliates"
        title="Partner With Soar Funding"
        subtitle="Promote Soar Funding to traders and grow with the brand. Full affiliate details, tracking, and commission terms will be confirmed before launch."
      />

      <section className="pt-12">
        <Container size="wide">
          <div className="rounded-[20px] border border-white/10 bg-surface/60 p-6 md:p-8">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  How partnering works
                </div>
                <h2 className="mt-1 text-xl font-bold tracking-tight text-ink">
                  Four steps, end to end.
                </h2>
              </div>
            </div>
            <ol className="mt-8 relative grid grid-cols-1 gap-5 md:grid-cols-4">
              <div
                aria-hidden
                className="pointer-events-none absolute left-5 top-5 hidden h-[2px] w-[calc(100%-2.5rem)] bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 md:block"
              />
              {howItWorks.map((s) => {
                const Icon = s.icon;
                return (
                  <li
                    key={s.step}
                    className="relative rounded-card border border-white/10 bg-base/40 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                        <Icon className="h-4 w-4" strokeWidth={2.2} />
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent tabular-nums">
                        {s.step}
                      </div>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                      {s.body}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </Container>
      </section>

      <section className="pt-14">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-card border border-white/10 bg-surface/60 p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <Icon className="h-4 w-4" strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-ink">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {b.body}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="pt-14 pb-24">
        <Container size="narrow">
          <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-surface/80 p-8 text-center shadow-soft">
            <div
              aria-hidden
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(600px 240px at 50% 0%, rgba(91,142,240,0.2), transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Mail className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="mt-4 text-2xl font-extrabold text-ink">
                Interested in partnering?
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm text-ink-muted">
                Email support@soar-funding.com with a brief about your
                audience. We'll reach out when the partner programme opens.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button href="mailto:support@soar-funding.com" size="lg">
                  Contact Support
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={2.5} />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
