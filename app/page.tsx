import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { PressStrip } from "@/components/sections/PressStrip";
import { PayoutMarquee } from "@/components/sections/PayoutMarquee";
import { AdvantageGrid } from "@/components/sections/AdvantageGrid";
import { FundingPathBuilder } from "@/components/sections/FundingPathBuilder";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { ChallengeProvider } from "@/components/configurator/ChallengeProvider";

export default function Home() {
  return (
    <>
      <Hero />
      <PressStrip />
      <PayoutMarquee />
      <AdvantageGrid />
      <Suspense fallback={null}>
        <ChallengeProvider>
          <FundingPathBuilder />
        </ChallengeProvider>
      </Suspense>
      <ProcessSteps />
      <Testimonials />
      <FaqSection />
      <FinalCta />
    </>
  );
}
