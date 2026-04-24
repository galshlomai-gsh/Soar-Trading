"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import {
  ALL_DENIED,
  ALL_GRANTED,
  CONSENT_OPEN_EVENT,
  CONSENT_STORAGE_KEY,
  applyConsent,
  readConsent,
  writeConsent,
} from "@/lib/consent";
import { cn } from "@/lib/cn";

type Mode = "hidden" | "banner" | "preferences";

export function CookieConsent() {
  const [mode, setMode] = useState<Mode>("hidden");
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [preferences, setPreferences] = useState(false);

  // On mount: replay stored consent to GTM, or open the banner if there's no
  // record yet. We intentionally run after interactive so the GTM default
  // (denied) has already been pushed into dataLayer.
  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      applyConsent(stored);
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
      setPreferences(stored.preferences);
      return;
    }
    setMode("banner");
  }, []);

  // Allow other surfaces (footer link, help center) to re-open the modal.
  useEffect(() => {
    const open = () => {
      const stored = readConsent() ?? ALL_DENIED;
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
      setPreferences(stored.preferences);
      setMode("preferences");
    };
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, open);
  }, []);

  const acceptAll = () => {
    writeConsent({
      analytics: true,
      marketing: true,
      preferences: true,
    });
    setMode("hidden");
  };

  const rejectAll = () => {
    writeConsent({
      analytics: false,
      marketing: false,
      preferences: false,
    });
    setMode("hidden");
  };

  const savePreferences = () => {
    writeConsent({ analytics, marketing, preferences });
    setMode("hidden");
  };

  if (mode === "hidden") return null;

  if (mode === "preferences") {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-prefs-title"
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) setMode("banner");
        }}
      >
        <div className="relative w-full max-w-lg overflow-hidden rounded-[20px] border border-white/10 bg-raised shadow-soft">
          <button
            type="button"
            aria-label="Close"
            onClick={() => setMode("banner")}
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 bg-surface/60 text-ink-muted transition-colors hover:border-white/20 hover:text-ink"
          >
            <X className="h-4 w-4" strokeWidth={2.5} />
          </button>
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-accent/15 text-accent">
                <Cookie className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h2
                id="cookie-prefs-title"
                className="font-display text-xl font-extrabold tracking-tight text-ink"
              >
                Cookie preferences
              </h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Choose which cookies Soar Funding can set. Strictly necessary
              cookies are always on — without them the site can't function.
              Read our{" "}
              <Link
                href="/cookie-policy"
                className="text-accent hover:text-accent-soft"
              >
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="text-accent hover:text-accent-soft"
              >
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Toggle
                label="Strictly necessary"
                description="Required for authentication, security, and the site to load. Always on."
                checked
                disabled
                onChange={() => {}}
              />
              <Toggle
                label="Analytics"
                description="Helps us understand how the site is used (aggregated and anonymous)."
                checked={analytics}
                onChange={setAnalytics}
              />
              <Toggle
                label="Marketing"
                description="Lets us measure campaign performance and show relevant ads."
                checked={marketing}
                onChange={setMarketing}
              />
              <Toggle
                label="Preferences"
                description="Remembers UI choices (like layout or pricing-table filters) across visits."
                checked={preferences}
                onChange={setPreferences}
              />
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={rejectAll}
                className="inline-flex h-11 items-center justify-center rounded-[12px] border border-white/10 bg-surface/60 px-5 text-sm font-semibold text-ink transition-colors hover:border-accent/40"
              >
                Reject all
              </button>
              <button
                type="button"
                onClick={savePreferences}
                className="inline-flex h-11 items-center justify-center rounded-[12px] bg-accent-gradient px-5 text-sm font-semibold text-[#0B1220] shadow-[0_10px_30px_-10px_rgba(91,142,240,0.8)] transition-all hover:brightness-110"
              >
                Save preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Banner
  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-50 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md"
    >
      <div className="rounded-[18px] border border-white/10 bg-raised/95 p-5 shadow-soft backdrop-blur-xl md:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-accent/15 text-accent">
            <Cookie className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <div className="flex-1">
            <h2 className="font-display text-base font-extrabold tracking-tight text-ink">
              We use cookies
            </h2>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
              We use cookies to run the site, remember preferences, and measure
              how it's used. Review our{" "}
              <Link
                href="/cookie-policy"
                className="text-accent hover:text-accent-soft"
              >
                Cookie Policy
              </Link>{" "}
              to learn more.
            </p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
          <button
            type="button"
            onClick={rejectAll}
            className="inline-flex h-10 items-center justify-center rounded-[10px] border border-white/10 bg-surface/60 px-3 text-xs font-semibold text-ink transition-colors hover:border-accent/40"
          >
            Reject all
          </button>
          <button
            type="button"
            onClick={() => setMode("preferences")}
            className="inline-flex h-10 items-center justify-center rounded-[10px] border border-white/10 bg-surface/60 px-3 text-xs font-semibold text-ink transition-colors hover:border-accent/40"
          >
            Customize
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="inline-flex h-10 items-center justify-center rounded-[10px] bg-accent-gradient px-3 text-xs font-semibold text-[#0B1220] shadow-[0_10px_30px_-10px_rgba(91,142,240,0.8)] transition-all hover:brightness-110"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

function Toggle({
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label
      className={cn(
        "flex items-start gap-3 rounded-[12px] border border-white/10 bg-elevated p-4",
        disabled && "opacity-80",
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 rounded border-white/20 bg-elevated text-accent focus:ring-accent"
      />
      <span className="flex-1">
        <span className="block text-sm font-semibold text-ink">{label}</span>
        <span className="mt-1 block text-xs leading-relaxed text-ink-muted">
          {description}
        </span>
      </span>
    </label>
  );
}

export function openCookiePreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

// Re-export the storage key so tests / admin tooling can inspect it.
export { CONSENT_STORAGE_KEY };
