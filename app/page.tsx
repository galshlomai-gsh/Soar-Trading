import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { AdvantageGrid } from "@/components/sections/AdvantageGrid";
import { MarketsSection } from "@/components/sections/MarketsSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FundingPathBuilder } from "@/components/sections/FundingPathBuilder";
import { RulesPreview } from "@/components/sections/RulesPreview";
import { PayoutPreview } from "@/components/sections/PayoutPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { ChallengeProvider } from "@/components/configurator/ChallengeProvider";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketsSection />
      <AdvantageGrid />
      <ProcessSteps />
      <Suspense fallback={null}>
        <ChallengeProvider>
          <FundingPathBuilder />
        </ChallengeProvider>
      </Suspense>
      <RulesPreview />
      <PayoutPreview />
      <FaqSection />
      <FinalCta />
    </>
  );
}
