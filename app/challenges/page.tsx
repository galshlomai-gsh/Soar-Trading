import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepNumber } from "@/components/ui/StepNumber";
import { ChallengeProvider } from "@/components/configurator/ChallengeProvider";
import { ModelPicker } from "@/components/configurator/ModelPicker";
import { AccountSizePicker } from "@/components/configurator/AccountSizePicker";
import { ChallengeSummary } from "@/components/configurator/ChallengeSummary";

export default function ChallengesPage() {
  return (
    <Suspense fallback={null}>
      <ChallengeProvider>
        <section className="pt-14 pb-24 md:pt-20">
          <Container size="wide">
            <SectionHeading
              title="Choose Your CHALLENGE"
              emphasize="CHALLENGE"
              subtitle="Select the parameters that fit your trading style and start your journey to becoming a funded professional."
            />
            <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-[1fr_1.2fr_1fr]">
              <Panel>
                <StepNumber n={1} label="Challenge" active />
                <div className="mt-5">
                  <ModelPicker />
                </div>
              </Panel>
              <Panel>
                <StepNumber n={2} label="Steps" active />
                <div className="mt-5">
                  <ModelStepsInline />
                </div>
              </Panel>
              <div className="md:row-span-2">
                <ChallengeSummary title="Start Challenge" />
              </div>
              <div className="md:col-span-2">
                <Panel>
                  <StepNumber n={3} label="Account Size" active />
                  <div className="mt-5">
                    <AccountSizePicker
                      sizes={["10k", "25k", "50k", "100k", "200k"]}
                      columns={3}
                    />
                  </div>
                </Panel>
              </div>
            </div>
          </Container>
        </section>
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

function ModelStepsInline() {
  return <ModelPicker variant="inline" />;
}
