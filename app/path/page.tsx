import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepNumber } from "@/components/ui/StepNumber";
import { ChallengeProvider } from "@/components/configurator/ChallengeProvider";
import { ModelPicker } from "@/components/configurator/ModelPicker";
import { AccountSizePicker } from "@/components/configurator/AccountSizePicker";
import { PlatformPicker } from "@/components/configurator/PlatformPicker";
import { FeaturedChallengeCard } from "@/components/configurator/FeaturedChallengeCard";

export default function PathPage() {
  return (
    <Suspense fallback={null}>
      <ChallengeProvider>
        <section className="pt-14 pb-24 md:pt-20">
          <Container size="wide">
            <SectionHeading
              title="CHOOSE YOUR PATH"
              subtitle="Follow our simplified 3-step configuration to launch your sovereign trading journey."
            />
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-[0.7fr_1.3fr]">
              <aside className="flex flex-col gap-5">
                <PanelWithBar>
                  <StepNumber n={1} label="Choose Challenge" active />
                  <div className="mt-5">
                    <ModelPicker />
                  </div>
                </PanelWithBar>
                <PanelWithBar>
                  <StepNumber n={2} label="Account Size" active />
                  <div className="mt-5">
                    <AccountSizePicker
                      sizes={["25k", "50k", "100k", "250k", "500k"]}
                      columns={3}
                    />
                  </div>
                </PanelWithBar>
                <PanelWithBar>
                  <StepNumber n={3} label="Platform" active />
                  <div className="mt-5">
                    <PlatformPicker />
                  </div>
                </PanelWithBar>
              </aside>
              <FeaturedChallengeCard />
            </div>
          </Container>
        </section>
      </ChallengeProvider>
    </Suspense>
  );
}

function PanelWithBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-card border border-white/10 bg-surface/60 p-6">
      <span className="pointer-events-none absolute inset-y-6 left-0 w-[3px] rounded-full bg-accent" />
      {children}
    </div>
  );
}
