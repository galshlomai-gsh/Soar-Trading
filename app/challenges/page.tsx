import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { StepNumber } from "@/components/ui/StepNumber";
import { ChallengeProvider } from "@/components/configurator/ChallengeProvider";
import { ChallengeTypePicker } from "@/components/configurator/ChallengeTypePicker";
import { SizePicker } from "@/components/configurator/SizePicker";
import { PlatformPicker } from "@/components/configurator/PlatformPicker";
import { ChallengeSummary } from "@/components/configurator/ChallengeSummary";
import { FeaturedChallengeCard } from "@/components/configurator/FeaturedChallengeCard";
import { ChallengeCompareTable } from "@/components/sections/ChallengeCompareTable";

export const metadata: Metadata = {
  title: "Soar Funding Challenges | 1 Step, 2 Step, BNPL & Rapid Runway",
  description:
    "Compare Soar Funding challenge types, profit targets, drawdown limits, payout terms, and funded account rules.",
};

export default function ChallengesPage() {
  return (
    <Suspense fallback={null}>
      <ChallengeProvider>
        <PageHero
          eyebrow="Challenges"
          title="Choose Your Soar Funding Challenge"
          subtitle="Pick the challenge that matches your trading style. Every account is simulated, rule-based, and built to assess consistency before access to a simulated funded account."
          breadcrumbs={[{ label: "Challenges" }]}
        />
        <section className="pt-12 pb-20">
          <Container size="wide">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.1fr_1fr_1fr]">
              <Panel>
                <StepNumber n={1} label="Challenge" active />
                <div className="mt-5">
                  <ChallengeTypePicker />
                </div>
              </Panel>
              <div className="flex flex-col gap-5">
                <Panel>
                  <StepNumber n={2} label="Account Size" active />
                  <div className="mt-5">
                    <SizePicker
                      sizes={["10k", "25k", "50k", "100k", "200k"]}
                      columns={3}
                    />
                  </div>
                </Panel>
                <Panel>
                  <StepNumber n={3} label="Platform" active />
                  <div className="mt-5">
                    <PlatformPicker />
                  </div>
                </Panel>
              </div>
              <div>
                <ChallengeSummary title="START CHALLENGE" />
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-24">
          <Container size="wide">
            <FeaturedChallengeCard />
          </Container>
        </section>

        <ChallengeCompareTable />
      </ChallengeProvider>
    </Suspense>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-card border border-white/10 bg-surface/60 p-6">
      <span className="pointer-events-none absolute inset-y-6 left-0 w-[3px] rounded-full bg-accent" />
      {children}
    </div>
  );
}
