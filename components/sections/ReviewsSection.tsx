import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  reviews,
  trustpilotCount,
  trustpilotScore,
  trustpilotUrl,
  type ReviewItem,
} from "@/components/data/reviews";

function ScoreBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-surface/60 px-4 py-2">
      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ok">
        Trustpilot
      </span>
      <span className="flex items-center gap-0.5" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 fill-ok text-ok"
            strokeWidth={0}
          />
        ))}
      </span>
      {trustpilotScore !== undefined ? (
        <span className="text-xs font-semibold text-ink">
          <span className="tabular-nums">{trustpilotScore.toFixed(1)}</span>
          <span className="text-ink-muted"> / 5</span>
          {trustpilotCount !== undefined && (
            <span className="text-ink-muted">
              {" · "}
              <span className="tabular-nums">
                {trustpilotCount.toLocaleString("en-US")}
              </span>{" "}
              reviews
            </span>
          )}
        </span>
      ) : (
        <span className="text-xs font-semibold text-ink-muted">
          Rated on Trustpilot
        </span>
      )}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-24">
      <Container size="wide">
        <div className="flex flex-col items-center gap-5 text-center">
          <ScoreBadge />
          <SectionHeading
            title="What traders are saying."
            subtitle="Review themes from verified Trustpilot reviewers. Read every review on the live Trustpilot page."
          />
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <ReviewCard key={r.headline} review={r} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href={trustpilotUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-5 py-2.5 text-xs font-semibold text-ink transition-colors hover:border-accent/40"
          >
            Read all reviews on Trustpilot →
          </a>
        </div>
      </Container>
    </section>
  );
}

function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <div className="flex h-full flex-col rounded-card border border-white/10 bg-surface/60 p-6">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < review.stars
                ? "h-3.5 w-3.5 fill-ok text-ok"
                : "h-3.5 w-3.5 fill-white/10 text-white/10"
            }
            strokeWidth={0}
          />
        ))}
      </div>
      <h3 className="mt-4 text-sm font-bold text-ink">{review.headline}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        &ldquo;{review.body}&rdquo;
      </p>
      <div className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted/80">
        {review.attribution}
      </div>
    </div>
  );
}
