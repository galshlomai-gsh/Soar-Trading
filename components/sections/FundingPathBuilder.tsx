"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepNumber } from "@/components/ui/StepNumber";
import { ChallengeTypePicker } from "@/components/configurator/ChallengeTypePicker";
import { ChallengeSummary } from "@/components/configurator/ChallengeSummary";
import { ToBeConnected } from "@/components/configurator/ToBeConnected";

export function FundingPathBuilder() {
  return (
    <section className="py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow="Choose your challenge"
          title="Choose Your Trading Challenge"
          subtitle="Pick the challenge that matches your trading style. Every account is simulated, rule-based, and built to assess consistency before access to a simulated funded account."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-[0.8fr_0.6fr_0.6fr_1fr]">
          <div className="rounded-card border border-white/10 bg-surface/60 p-6">
            <StepNumber n={1} label="Select Challenge" active />
            <div className="mt-5">
              <ChallengeTypePicker />
            </div>
          </div>
          <div className="rounded-card border border-white/10 bg-surface/60 p-6">
            <StepNumber n={2} label="Account Size" active />
            <div className="mt-5">
              <ToBeConnected message="Account size options to be connected to live pricing data." />
            </div>
          </div>
          <div className="rounded-card border border-white/10 bg-surface/60 p-6">
            <StepNumber n={3} label="Platform" active />
            <div className="mt-5">
              <ToBeConnected message="Platform options to be connected." />
            </div>
          </div>
          <div className="flex flex-col">
            <StepNumber n={4} label="Challenge Details" active className="mb-4" />
            <ChallengeSummary title="START CHALLENGE" />
          </div>
        </div>
      </Container>
    </section>
  );
}
