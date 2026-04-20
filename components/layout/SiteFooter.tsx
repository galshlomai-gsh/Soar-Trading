import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LogoSoar } from "@/components/brand/LogoSoar";
import { footerNav } from "@/components/data/nav";
import {
  brandFooterCopy,
  company,
  externalLinks,
  riskWarning,
  riskWarningExtended,
} from "@/components/data/company";
import { MessageCircle, Mail, MapPin, ShieldCheck } from "lucide-react";

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-base">
      <Container size="wide" className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-5">
            <LogoSoar />
            <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
              {brandFooterCopy}
            </p>
            <div className="flex flex-col gap-2 text-xs text-ink-muted">
              <span className="inline-flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-accent" />
                <a
                  className="hover:text-ink"
                  href={`mailto:${company.supportEmail}`}
                >
                  {company.supportEmail}
                </a>
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {company.locationShort}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={externalLinks.discord}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-[11px] font-semibold text-ink hover:border-accent/60"
              >
                <MessageCircle className="h-3.5 w-3.5 text-accent" />
                Join Our Community
              </a>
              <a
                href={externalLinks.ttp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-3 py-1.5 text-[11px] font-semibold text-ink-muted hover:text-ink"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                Listed on TTP
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

        <NewsletterSignup />

        <div className="mt-10 rounded-card border border-white/5 bg-surface/40 p-5 text-[11px] leading-relaxed text-ink-muted/80">
          <p>{riskWarning}</p>
          <p className="mt-3">{riskWarningExtended}</p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-[11px] text-ink-muted/70 md:flex-row md:items-center">
          <span>
            © 2026 {company.legalName}. Company no. {company.companyNumber},{" "}
            {company.jurisdiction}.
          </span>
          <span>{company.registeredOffice}</span>
        </div>
      </Container>
    </footer>
  );
}

function NewsletterSignup() {
  return (
    <form
      className="mt-10 flex flex-col gap-3 rounded-card border border-white/10 bg-surface/60 p-5 sm:flex-row sm:items-center"
      action="mailto:support@soar-funding.com"
      method="post"
      encType="text/plain"
    >
      <div className="flex-1">
        <div className="text-sm font-semibold text-ink">Stay up to date</div>
        <p className="mt-1 text-xs text-ink-muted">
          Challenge updates, rule changes, and new releases. No spam.
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="h-11 rounded-[12px] border border-white/10 bg-base/80 px-4 text-sm text-ink placeholder:text-ink-dim focus:border-accent/60 focus:outline-none"
        />
        <button
          type="submit"
          className="h-11 rounded-[12px] bg-accent-gradient px-5 text-sm font-semibold text-[#0B1220] transition-all hover:brightness-110"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
