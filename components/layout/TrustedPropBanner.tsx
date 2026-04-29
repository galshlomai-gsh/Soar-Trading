import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { externalLinks } from "@/components/data/company";

export function TrustedPropBanner() {
  return (
    <section
      aria-label="Listed on The Trusted Prop"
      className="relative overflow-hidden border-y border-white/10 bg-[#0B1220]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 240px at 50% 50%, rgba(91,142,240,0.18), transparent 70%)",
        }}
      />
      <FloatingReviewCard className="left-[-32px] top-1/2 -translate-y-1/2 -rotate-[18deg] sm:left-6 md:left-12" />
      <FloatingReviewCard className="right-[-32px] top-1/2 -translate-y-1/2 rotate-[14deg] sm:right-6 md:right-12" />

      <Container size="wide" className="relative">
        <a
          href={externalLinks.ttp}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center gap-3 py-8 text-center sm:gap-5 sm:py-10"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted sm:text-xs">
            Listed on
          </span>
          <ArrowRight
            className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-0.5"
            strokeWidth={2.25}
          />
          <span
            aria-hidden
            className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#5B8EF0] to-[#3F6EDB] font-display text-[13px] font-extrabold tracking-[0.04em] text-white shadow-[0_8px_20px_-8px_rgba(91,142,240,0.65)] sm:h-12 sm:w-12 sm:text-[14px]"
          >
            TTP
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl md:text-[28px]">
            The Trusted Prop
          </span>
        </a>
      </Container>
    </section>
  );
}

function FloatingReviewCard({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute hidden h-[78px] w-[110px] rounded-[12px] bg-[#F4EFE3] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] sm:block ${className}`}
    >
      <div className="flex items-center gap-1 p-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 fill-[#C8B987] text-[#C8B987]"
            strokeWidth={0}
          />
        ))}
      </div>
      <div className="mx-3 h-1.5 w-12 rounded-full bg-[#D9CFB8]" />
      <div className="mx-3 mt-1.5 h-1.5 w-16 rounded-full bg-[#D9CFB8]" />
    </div>
  );
}
