import { FaqSection } from "@/components/sections/FaqSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

export default function Page() {
  return (
    <>
      <section className="pt-20">
        <Container size="narrow" className="text-center">
          <SectionHeading
            title="Answers before you ask."
            subtitle="Quick answers to the most common questions about our evaluations, rules and payouts."
          />
        </Container>
      </section>
      <FaqSection />
    </>
  );
}
