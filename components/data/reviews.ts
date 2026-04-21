// Review themes sourced from public search of the Trustpilot page for
// soar-funding.com (https://www.trustpilot.com/review/soar-funding.com).
//
// Trustpilot blocks direct fetch (Cloudflare 403), so these are
// paraphrased themes built from search-result summaries that quote
// actual reviewers. Short verbatim phrases ("amazing", "lightning-
// fast", "no hidden rules") are kept inside quotes; surrounding
// sentences are paraphrased. Attribution is generic ("Trustpilot
// reviewer · Verified") so we never put a full sentence in a specific
// named individual's mouth. Swap for verbatim excerpts in this file
// once you can copy them from the live Trustpilot page.

export interface ReviewItem {
  headline: string;
  body: string;
  stars: 1 | 2 | 3 | 4 | 5;
  attribution: string;
}

export const reviews: ReviewItem[] = [
  {
    headline: "Payout in 32 working hours",
    body: "Soar Funding is a legit firm. Got my payout within 32 working hours and the support team was \"amazing and supportive\" the whole way through.",
    stars: 5,
    attribution: "Trustpilot reviewer · Verified",
  },
  {
    headline: "Seamless, transparent, lightning-fast",
    body: "Initial setup was \"seamless, transparent, and lightning-fast\". No hidden rules, tight spreads, and good support from the start.",
    stars: 5,
    attribution: "Trustpilot reviewer · Verified",
  },
  {
    headline: "Customer service is excellent",
    body: "The CEO is very responsive and customer service is \"excellent\". Quick to find solutions through the chat platform.",
    stars: 5,
    attribution: "Trustpilot reviewer · Verified",
  },
  {
    headline: "Listens to what traders want",
    body: "Stands out from other prop firms. Clear attention to detail and customer experience — Soar Funding listens to what traders actually want.",
    stars: 5,
    attribution: "Trustpilot reviewer · Verified",
  },
];

/**
 * Live Trustpilot score and review count.
 *
 * `trustpilotScore` defaults to 4.5 based on the most consistent value
 * across public search results. `trustpilotCount` is left undefined
 * because the two sources I found gave conflicting numbers (14 vs 48,
 * likely a date difference). Set both to the exact values from
 * https://www.trustpilot.com/review/soar-funding.com before launch.
 *
 * Setting either to undefined hides that part of the chip and falls
 * back to the "Read reviews on Trustpilot" label.
 */
export const trustpilotScore: number | undefined = 4.5;
export const trustpilotCount: number | undefined = undefined;
export const trustpilotUrl = "https://www.trustpilot.com/review/soar-funding.com";
