import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LogoSoar } from "@/components/brand/LogoSoar";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/components/data/nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-base/80 backdrop-blur-xl">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between gap-6">
          <Link href="/" aria-label="Soar Funding home">
            <LogoSoar />
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {primaryNav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/client-portal"
              className="hidden text-[13px] font-medium text-ink-muted transition-colors hover:text-ink sm:inline"
            >
              Client Portal
            </Link>
            <Button href="/challenges" size="sm">
              Start Trading
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
