import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNav } from "@/components/data/nav";
import {
  brandFooterCopy,
  brandFooterTagline,
  company,
  externalLinks,
} from "@/components/data/company";
import { Globe, Share2 } from "lucide-react";

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-base">
      <Container size="wide" className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.6fr_repeat(4,1fr)]">
          <div className="flex max-w-sm flex-col gap-5">
            <h3 className="text-lg font-bold text-ink">{company.tradingName}</h3>
            <p className="text-sm leading-relaxed text-ink-muted">
              {brandFooterCopy}
            </p>
            <div className="flex items-center gap-2">
              <a
                href={externalLinks.discord}
                target="_blank"
                rel="noreferrer"
                aria-label="Join our community"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/10 bg-surface/60 text-ink-muted transition-colors hover:border-accent/40 hover:text-ink"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href={externalLinks.ttp}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit our partner site"
                className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/10 bg-surface/60 text-ink-muted transition-colors hover:border-accent/40 hover:text-ink"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>
          {footerNav.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.items.map((i) =>
                  isExternal(i.href) ? (
                    <li key={i.label}>
                      <a
                        href={i.href}
                        target={i.href.startsWith("http") ? "_blank" : undefined}
                        rel={i.href.startsWith("http") ? "noreferrer" : undefined}
                        className="text-sm text-ink/90 transition-colors hover:text-accent"
                      >
                        {i.label}
                      </a>
                    </li>
                  ) : (
                    <li key={i.label}>
                      <Link
                        href={i.href}
                        className="text-sm text-ink/90 transition-colors hover:text-accent"
                      >
                        {i.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted/70 md:flex-row md:items-center">
          <span>
            © 2026 {company.tradingName.toUpperCase()}. {brandFooterTagline}
          </span>
          <span className="flex items-center gap-8">
            <span>Secured by SSL</span>
            <span>256-bit Encryption</span>
          </span>
        </div>
      </Container>
    </footer>
  );
}
