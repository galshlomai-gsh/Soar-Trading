// Trading rules content sourced from the Soar Funding Terms of Service.

export interface RuleGroup {
  id: string;
  title: string;
  intro?: string;
  items: { label: string; body?: string }[];
}

export const coreRules: string[] = [
  "No copy trading or hedging across accounts",
  "No HFT, toxic trading, execution abuse, or latency arbitrage",
  "No news trading unless the correct add-on has been purchased",
  "Weekend holding is permitted",
  "VPNs and static IPs are allowed if consistent",
  "Minimum 2-minute hold required",
  "No trading within 5 minutes before or after high-impact news without the correct add-on",
  "At least one trade is required every 30 days",
  "EAs must be reviewed and approved",
  "Stop-loss is not mandatory but recommended",
  "All trades are monitored by the risk team",
];

export const ruleGroups: RuleGroup[] = [
  {
    id: "news-trading",
    title: "News Trading",
    items: [
      {
        label: "High-impact news window",
        body:
          "Trading within 5 minutes before or after high-impact news is not allowed unless the correct add-on is purchased. Profits made during the restricted window may be deducted and repeated breaches may close the account.",
      },
    ],
  },
  {
    id: "expert-advisors",
    title: "Expert Advisors",
    items: [
      {
        label: "Approval required",
        body:
          "Expert Advisors may be used where reviewed, approved, and compliant with Soar Funding's trading rules. Strategies that exploit demo conditions, pricing, execution, latency, or platform infrastructure are not allowed.",
      },
    ],
  },
  {
    id: "copy-trading",
    title: "Copy Trading & Hedging",
    items: [
      {
        label: "Not permitted",
        body:
          "Copy trading or hedging across accounts is not allowed. Each trader must trade independently and comply with the platform's risk rules.",
      },
    ],
  },
  {
    id: "toxic-trading",
    title: "Toxic Trading",
    items: [
      {
        label: "Definition",
        body:
          "Toxic trading includes strategies or behaviour that exploit demo conditions, pricing, execution, latency, or platform infrastructure. Toxic trading is a hard breach and can result in account termination, loss of profits, and no payout eligibility.",
      },
    ],
  },
  {
    id: "soft-breaches",
    title: "Soft Breaches",
    intro:
      "Soft breaches are behaviours that violate trading rules without triggering immediate account termination.",
    items: [
      {
        label: "Accumulation",
        body:
          "Soft breaches accumulate and do not reset until a successful payout is completed.",
      },
      {
        label: "Three strike rule",
        body: "Three soft breaches count as one hard breach.",
      },
      {
        label: "Retrospective enforcement",
        body:
          "Enforcement may occur retrospectively after phase completion or payout request.",
      },
    ],
  },
  {
    id: "hard-breaches",
    title: "Hard Breaches",
    intro:
      "Hard breaches are serious violations that can terminate the account outright.",
    items: [
      {
        label: "Consequences",
        body:
          "A hard breach can result in account termination, loss of profits, no payout eligibility, and no refund.",
      },
    ],
  },
  {
    id: "consistency",
    title: "Consistency Rules (funded stage)",
    intro:
      "Maximum share of total profits that can be made in a single trading day on a simulated funded account.",
    items: [
      { label: "2 Step funded", body: "40% max of total profits in one trading day." },
      { label: "1 Step funded", body: "35% max of total profits in one trading day." },
      { label: "BNPL 2 Step funded", body: "25% max of total profits in one trading day." },
      { label: "Rapid Runway funded", body: "20% max of total profits in one trading day." },
      { label: "BNPL 1 Step funded", body: "15% max of total profits in one trading day." },
    ],
  },
  {
    id: "ip-vpn",
    title: "IP, VPS & VPN",
    items: [
      {
        label: "Location consistency",
        body:
          "VPNs and static IPs are allowed where usage is consistent. VPS providers should also be used consistently. Unusual location changes may trigger a review.",
      },
    ],
  },
  {
    id: "reviews",
    title: "Reviews & Retrospective Action",
    items: [
      {
        label: "Account reviews",
        body:
          "All trades are monitored by the risk team. Accounts may be reviewed after phase completion or payout request.",
      },
      {
        label: "Retrospective enforcement",
        body:
          "Soar Funding may deduct profits, reclassify breaches, or terminate accounts based on historical activity where rules have been breached.",
      },
    ],
  },
];
