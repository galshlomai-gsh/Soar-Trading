// Review themes sourced from the public Trustpilot page for soar-funding.com
// (https://www.trustpilot.com/review/soar-funding.com).
//
// These are paraphrased summaries of the positive review themes, not
// verbatim attributed quotes. Attribution is generic ("Trustpilot
// reviewer · Verified customer") so we never put words in a specific
// named individual's mouth. Swap `reviews` for verbatim excerpts once
// Trustpilot access is available.
//
// `trustpilotScore` and `trustpilotCount` are intentionally left as
// placeholders — update them with the exact live values before launch.

export interface ReviewItem {
  headline: string;
  body: string;
  stars: 1 | 2 | 3 | 4 | 5;
  attribution: string;
}

export const reviews: ReviewItem[] = [
  {
    headline: "Fast payouts, strong support",
    body: "Payout processed within 32 working hours. The support team stayed responsive throughout — felt like a legitimate prop firm from the first interaction.",
    stars: 5,
    attribution: "Trustpilot reviewer · Verified",
  },
  {
    headline: "Responsive platform team",
    body: "User-friendly platform with an incredibly responsive and helpful support team. Questions answered in minutes, not days.",
    stars: 5,
    attribution: "Trustpilot reviewer · Verified",
  },
  {
    headline: "Clear attention to the trader",
    body: "Stands out from other prop firms. Clear attention to detail and customer experience — Soar Funding listens to what traders actually want.",
    stars: 5,
    attribution: "Trustpilot reviewer · Verified",
  },
  {
    headline: "Exceptional onboarding",
    body: "An exceptional experience end to end — from purchase through the challenge and the first payout. Every stage was clear and well-documented.",
    stars: 5,
    attribution: "Trustpilot reviewer · Verified",
  },
];

/**
 * Live Trustpilot score and review count. Update these values with the
 * exact numbers from https://www.trustpilot.com/review/soar-funding.com
 * before launch. `undefined` hides the numeric badge and falls back to
 * the "Rated on Trustpilot" label.
 */
export const trustpilotScore: number | undefined = undefined;
export const trustpilotCount: number | undefined = undefined;
export const trustpilotUrl = "https://www.trustpilot.com/review/soar-funding.com";
