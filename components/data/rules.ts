// Trading rules content sourced from the Soar Funding Terms of Service.

export interface RuleGroup {
  id: string;
  title: string;
  intro?: string;
  items: { label: string; body?: string }[];
}

export const ruleGroups: RuleGroup[] = [
  {
    id: "core",
    title: "Core rules",
    items: [
      { label: "No copy trading or hedging across accounts." },
      { label: "No HFT, toxic trading, execution abuse, or latency arbitrage." },
      { label: "No news trading unless the correct add-on is purchased." },
      { label: "Weekend holding is permitted." },
      { label: "VPNs and static IPs are allowed if usage is consistent." },
      { label: "Minimum 2-minute hold required on every trade." },
      { label: "Inactivity rule: at least one trade every 30 days." },
      { label: "Expert Advisors must be reviewed and approved before use." },
      { label: "Stop-loss is not mandatory but is strongly recommended." },
    ],
  },
  {
    id: "soft-breaches",
    title: "Soft breaches",
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
    title: "Hard breaches",
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
    id: "toxic",
    title: "Toxic trading",
    items: [
      {
        label: "Definition",
        body:
          "Toxic trading includes strategies or behaviour that exploit demo conditions, pricing, execution, latency, or platform infrastructure.",
      },
    ],
  },
  {
    id: "news",
    title: "News trading",
    items: [
      {
        label: "High-impact news window",
        body:
          "Trading within 5 minutes before or after high-impact news is not allowed unless the correct add-on is purchased. Profits may be deducted where the rule is breached.",
      },
    ],
  },
  {
    id: "consistency",
    title: "Consistency rules (funded stage)",
    intro:
      "Maximum share of total profits that can be made in a single trading day on a funded account.",
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
    title: "IP, VPS and VPN",
    items: [
      {
        label: "Location consistency",
        body:
          "VPNs and static IPs are allowed where usage is consistent. Unusual location changes may require review.",
      },
    ],
  },
];
