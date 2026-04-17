import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LogoSoar } from "@/components/brand/LogoSoar";
import { footerNav } from "@/components/data/nav";
import { Share2, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-base">
      <Container size="wide" className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="flex flex-col gap-5">
            <LogoSoar />
            <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
              Empowering sovereign traders with institutional capital and elite
              technology. Trade with confidence, scale with precision.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                aria-label="Share"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-colors hover:text-ink"
              >
                <Share2 className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-colors hover:text-ink"
              >
                <Twitter className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          {footerNav.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.items.map((i) => (
                  <li key={i.label}>
                    <Link
                      href={i.href}
                      className="text-sm text-ink/90 transition-colors hover:text-accent"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-[11px] uppercase tracking-[0.16em] text-ink-muted/70 md:flex-row">
          <span>© 2026 Soar Funding. Precision trading for sovereign professionals.</span>
          <span>Secured by SSL · 256-Bit Encryption</span>
        </div>
      </Container>
    </footer>
  );
}
