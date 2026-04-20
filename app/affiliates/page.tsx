import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import {
  LinkIcon,
  Megaphone,
  MessageCircle,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partner With Soar Funding | Affiliates",
  description:
    "Promote Soar Funding to traders and grow with the brand. Commission terms and affiliate portal to be confirmed.",
};

const cards = [
  {
    icon: Megaphone,
    title: "Promote Soar Funding challenges",
    body:
      "Share the 1 Step, 2 Step, BNPL and Rapid Runway challenges with your audience.",
  },
  {
    icon: LinkIcon,
    title: "Send traders to the challenge selector",
    body:
      "Direct traffic to the homepage challenge selector or straight to the challenges page.",
  },
  {
    icon: Users,
    title: "Track referrals once live",
    body:
      "The affiliate portal is on the roadmap. Referral tracking will be available once it ships.",
  },
  {
    icon: MessageCircle,
    title: "Commission terms to be confirmed",
    body:
      "Final commission structure and payout terms will be published by Soar Funding. Contact support for updates.",
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
      <section className="pt-12 pb-24">
        <Container size="wide">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="rounded-card border border-white/10 bg-surface/60 p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="mailto:support@soar-funding.com" size="lg">
            Contact Support
          </Button>
        </div>
        </Container>
      </section>
    </>
  );
}
