"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LogoSoar } from "@/components/brand/LogoSoar";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/components/data/nav";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

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
            <Button href="/challenges" size="sm" className="hidden md:inline-flex">
              Start Trading
            </Button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/10 bg-surface/60 text-ink md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-4 w-4" strokeWidth={2.5} />
              ) : (
                <Menu className="h-4 w-4" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-30 transform overflow-y-auto bg-base/95 backdrop-blur-xl transition-all duration-200 md:hidden",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <Container size="wide" className="py-8">
          <ul className="flex flex-col gap-1.5">
            {primaryNav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-card border border-white/10 bg-surface/60 px-5 py-4 text-base font-semibold text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/client-portal"
                onClick={() => setOpen(false)}
                className="block rounded-card border border-white/10 bg-surface/60 px-5 py-4 text-base font-semibold text-ink-muted"
              >
                Client Portal
              </Link>
            </li>
          </ul>
          <Button
            href="/challenges"
            size="lg"
            fullWidth
            className="mt-6"
          >
            Choose Your Challenge
          </Button>
        </Container>
      </div>
    </header>
  );
}
