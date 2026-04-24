// Cookie-consent state management for GTM Consent Mode v2.
//
// Default state (set in app/layout.tsx inline script before GTM loads)
// denies every ad/analytics/personalization bucket. The banner persists a
// choice into localStorage and calls `applyConsent()` to push the matching
// `gtag('consent', 'update', ...)` call so GTM respects the update.

export type ConsentCategory = "analytics" | "marketing" | "preferences";

export interface ConsentState {
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  // Timestamp of the most recent explicit choice.
  updatedAt: number;
  // Version bump lets us invalidate stored consents if the policy changes.
  version: number;
}

export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "soar_cookie_consent_v1";
export const CONSENT_CHANGED_EVENT = "soar:consent-changed";
export const CONSENT_OPEN_EVENT = "soar:consent-open";

export const ALL_GRANTED: ConsentState = {
  analytics: true,
  marketing: true,
  preferences: true,
  updatedAt: 0,
  version: CONSENT_VERSION,
};

export const ALL_DENIED: ConsentState = {
  analytics: false,
  marketing: false,
  preferences: false,
  updatedAt: 0,
  version: CONSENT_VERSION,
};

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (parsed.version !== CONSENT_VERSION) return null;
    return {
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      preferences: Boolean(parsed.preferences),
      updatedAt: Number(parsed.updatedAt ?? 0),
      version: CONSENT_VERSION,
    };
  } catch {
    return null;
  }
}

export function writeConsent(state: Omit<ConsentState, "version" | "updatedAt">) {
  if (typeof window === "undefined") return;
  const next: ConsentState = {
    ...state,
    updatedAt: Date.now(),
    version: CONSENT_VERSION,
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next));
  applyConsent(next);
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: next }));
}

type GtagWindow = Window & {
  dataLayer?: unknown[];
  // Matches the shim installed inline in app/layout.tsx; GTM's consent
  // machinery only recognises consent commands when the dataLayer push
  // carries the native `arguments` object this shim uses.
  gtag?: (...args: unknown[]) => void;
};

function ensureGtag(): NonNullable<GtagWindow["gtag"]> {
  const w = window as GtagWindow;
  w.dataLayer = w.dataLayer ?? [];
  if (typeof w.gtag !== "function") {
    w.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      (w.dataLayer as unknown[]).push(arguments);
    };
  }
  return w.gtag;
}

export function applyConsent(state: ConsentState) {
  if (typeof window === "undefined") return;
  const analytics = state.analytics ? "granted" : "denied";
  const marketing = state.marketing ? "granted" : "denied";
  const preferences = state.preferences ? "granted" : "denied";
  const gtag = ensureGtag();
  gtag("consent", "update", {
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
    personalization_storage: preferences,
  });
  // Surface a plain dataLayer event for GTM triggers that want to react to
  // the choice itself, separate from Google's consent machinery.
  const w = window as GtagWindow;
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({
    event: "consent_update",
    consent_analytics: analytics,
    consent_marketing: marketing,
    consent_preferences: preferences,
  });
}
