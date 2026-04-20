"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepNumber } from "@/components/ui/StepNumber";
import { ModelPicker } from "@/components/configurator/ModelPicker";
import { AccountSizePicker } from "@/components/configurator/AccountSizePicker";
import { ChallengeSummary } from "@/components/configurator/ChallengeSummary";

export function FundingPathBuilder() {
  return (
    <section className="py-24">
      <Container size="wide">
        <SectionHeading
          title="Choose Your Funding Path"
          subtitle="Select the evaluation model that fits your trading strategy."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-card border border-white/10 bg-surface/60 p-6">
            <StepNumber n={1} label="Select Model" active />
            <div className="mt-5">
              <ModelPicker />
            </div>
          </div>
          <div className="rounded-card border border-white/10 bg-surface/60 p-6">
            <StepNumber n={2} label="Account Size" active />
            <div className="mt-5">
              <AccountSizePicker sizes={["10k", "25k", "50k", "100k", "200k"]} />
            </div>
          </div>
          <div className="flex flex-col">
            <StepNumber n={3} label="Get Funded" active className="mb-4" />
            <ChallengeSummary title="START CHALLENGE" />
          </div>
        </div>
      </Container>
    </section>
  );
}
