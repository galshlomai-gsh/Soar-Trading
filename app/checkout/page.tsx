import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { CheckoutView } from "@/components/checkout/CheckoutView";

export const metadata: Metadata = {
  title: "Checkout | Soar Funding",
  description:
    "Complete your Soar Funding challenge purchase. Secure checkout with card, crypto, or wire transfer.",
};

export default function CheckoutPage() {
  return (
    <section className="py-16 md:py-20">
      <Container size="wide">
        <div className="mb-8 md:mb-12">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Checkout
          </div>
          <h1 className="mt-3 text-balance font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Secure your challenge
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-[1rem]">
            Review your selection and complete your details. All purchases are
            protected by our 14-day satisfaction guarantee.
          </p>
        </div>
        <Suspense fallback={<CheckoutSkeleton />}>
          <CheckoutView />
        </Suspense>
      </Container>
    </section>
  );
}

function CheckoutSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
      <div className="h-[640px] animate-pulse rounded-[20px] border border-white/10 bg-raised" />
      <div className="h-[560px] animate-pulse rounded-[20px] border border-white/10 bg-raised" />
    </div>
  );
}
