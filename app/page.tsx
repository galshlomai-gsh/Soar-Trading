import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { TrustedByStrip } from "@/components/sections/TrustedByStrip";
import { PayoutMarquee } from "@/components/sections/PayoutMarquee";
import { AdvantageGrid } from "@/components/sections/AdvantageGrid";
import { FundingPathBuilder } from "@/components/sections/FundingPathBuilder";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { MarketsSection } from "@/components/sections/MarketsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { RulesPreview } from "@/components/sections/RulesPreview";
import { PayoutPreview } from "@/components/sections/PayoutPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { ChallengeProvider } from "@/components/configurator/ChallengeProvider";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedByStrip />
      <PayoutMarquee />
      <AdvantageGrid />
      <Suspense fallback={null}>
        <ChallengeProvider>
          <FundingPathBuilder />
        </ChallengeProvider>
      </Suspense>
      <ProcessSteps />
      <MarketsSection />
      <RulesPreview />
      <PayoutPreview />
      <TrustSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
