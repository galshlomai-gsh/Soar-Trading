import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { PayoutMarquee } from "@/components/sections/PayoutMarquee";
import { WhyChooseSoar } from "@/components/sections/WhyChooseSoar";
import { FundingPathBuilder } from "@/components/sections/FundingPathBuilder";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { MarketsSection } from "@/components/sections/MarketsSection";
import { RulesAndPayoutPreviews } from "@/components/sections/RulesAndPayoutPreviews";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { ChallengeProvider } from "@/components/configurator/ChallengeProvider";
import { Reveal } from "@/components/ui/Reveal";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";

export default function Home() {
  return (
    <>
      <Hero />
      <PayoutMarquee />
      <Reveal>
        <WhyChooseSoar />
      </Reveal>
      <Reveal>
        <Suspense fallback={null}>
          <ChallengeProvider>
            <FundingPathBuilder />
          </ChallengeProvider>
        </Suspense>
      </Reveal>
      <Reveal>
        <ProcessSteps />
      </Reveal>
      <Reveal>
        <MarketsSection />
      </Reveal>
      <Reveal>
        <RulesAndPayoutPreviews />
      </Reveal>
      <Reveal>
        <ReviewsSection />
      </Reveal>
      <Reveal>
        <FaqSection />
      </Reveal>
      <Reveal>
        <FinalCta />
      </Reveal>
      <MobileStickyCta />
    </>
  );
}
