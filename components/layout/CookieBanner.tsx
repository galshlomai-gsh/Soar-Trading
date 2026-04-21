"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { cn } from "@/lib/cn";

const STORAGE_KEY = "soar:cookie-consent";

type Consent = "accepted" | "rejected";

function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

function writeConsent(v: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, v);
  } catch {
    // Storage blocked — banner will just reappear next visit.
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent() === null) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = (v: Consent) => {
    writeConsent(v);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-body"
      className={cn(
        "fixed inset-x-3 bottom-3 z-50 md:inset-x-auto md:bottom-5 md:left-5 md:max-w-sm",
        "rounded-[16px] border border-white/10 bg-base/95 p-5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl",
      )}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
          <Cookie className="h-4 w-4" strokeWidth={2.2} />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <h2
              id="cookie-banner-title"
              className="text-sm font-bold text-ink"
            >
              We use cookies
            </h2>
            <button
              type="button"
              aria-label="Close"
              onClick={() => dismiss("rejected")}
              className="text-ink-muted transition-colors hover:text-ink"
            >
              <X className="h-4 w-4" strokeWidth={2.2} />
            </button>
          </div>
          <p
            id="cookie-banner-body"
            className="mt-1 text-xs leading-relaxed text-ink-muted"
          >
            Essential cookies keep the site working. We also use performance
            and functional cookies to improve your experience. See our{" "}
            <Link
              href="/cookie-policy"
              className="text-accent hover:text-accent-soft"
            >
              Cookie Policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => dismiss("accepted")}
              className="inline-flex h-9 items-center rounded-[10px] bg-accent-gradient px-4 text-xs font-semibold text-[#0B1220] hover:brightness-110"
            >
              Accept all
            </button>
            <button
              type="button"
              onClick={() => dismiss("rejected")}
              className="inline-flex h-9 items-center rounded-[10px] border border-white/10 bg-surface/60 px-4 text-xs font-semibold text-ink-muted hover:border-white/20 hover:text-ink"
            >
              Reject non-essential
            </button>
            <Link
              href="/cookie-policy"
              className="inline-flex h-9 items-center rounded-[10px] px-2 text-xs font-semibold text-ink-muted hover:text-ink"
            >
              Manage preferences
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
