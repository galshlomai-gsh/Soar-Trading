import { BarChart3, CheckCircle2, Star, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  trustpilotCount,
  trustpilotScore,
  trustpilotUrl,
} from "@/components/data/reviews";

const platforms = [
  { label: "DX Trade", icon: TrendingUp },
  { label: "Match Trader", icon: BarChart3 },
];

export function TrustedByStrip() {
  return (
    <section className="border-y border-white/5 bg-base/80">
      <Container size="wide" className="py-6">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[auto_1fr_auto]">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Trading platforms
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {platforms.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-4 py-2"
              >
                <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} />
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                  {label}
                </span>
              </div>
            ))}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-4 py-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-ok" strokeWidth={2.5} />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                More platforms to be announced
              </span>
            </span>
          </div>
          <a
            href={trustpilotUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-accent/40"
          >
            <span className="flex items-center gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-ok text-ok"
                  strokeWidth={0}
                />
              ))}
            </span>
            {trustpilotScore !== undefined ? (
              <span>
                <span className="tabular-nums">
                  {trustpilotScore.toFixed(1)}
                </span>
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
              <span className="text-ink-muted">
                Read reviews on Trustpilot
              </span>
            )}
          </a>
        </div>
      </Container>
    </section>
  );
}
