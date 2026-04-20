"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepNumber } from "@/components/ui/StepNumber";
import { ChallengeTypePicker } from "@/components/configurator/ChallengeTypePicker";
import { SizePicker } from "@/components/configurator/SizePicker";
import { ChallengeSummary } from "@/components/configurator/ChallengeSummary";

export function FundingPathBuilder() {
  return (
    <section className="py-24" id="challenge-selector">
      <Container size="wide">
        <SectionHeading
          title="Choose Your Funding Path"
          subtitle="Pick the challenge that matches your trading style. Every account is simulated, rule-based, and built to assess consistency before access to a simulated funded account."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Panel>
            <StepNumber n={1} label="Select Challenge" active />
            <div className="mt-5">
              <ChallengeTypePicker />
            </div>
          </Panel>
          <Panel>
            <StepNumber n={2} label="Account Size" active />
            <div className="mt-5">
              <SizePicker sizes={["10k", "25k", "50k", "100k", "200k"]} columns={2} />
            </div>
          </Panel>
          <div className="flex flex-col">
            <StepNumber n={3} label="Get Funded" active className="mb-4" />
            <ChallengeSummary title="START CHALLENGE" />
          </div>
        </div>
      </Container>
    </section>
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
