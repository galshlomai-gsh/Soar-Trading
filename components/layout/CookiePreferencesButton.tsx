"use client";

import { CONSENT_OPEN_EVENT } from "@/lib/consent";

export function CookiePreferencesButton({
  className,
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window === "undefined") return;
        window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
      }}
      className={
        className ??
        "text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted/70 transition-colors hover:text-ink"
      }
      data-event="cookie_preferences_open"
    >
      Cookie preferences
    </button>
  );
}
