// Challenge specifications sourced from the Soar Funding Terms of Service.
// Numbers here are authoritative; marketing copy must not contradict them.

export type ChallengeType =
  | "2-step"
  | "1-step"
  | "bnpl-2-step"
  | "bnpl-1-step"
  | "rapid-runway";

export type DrawdownType = "fixed" | "trailing";

export interface ChallengePhase {
  name: string;
  profitTarget?: string;
  maxLoss: string;
  dailyLoss: string;
  drawdownType: DrawdownType;
  profitSplit?: string;
  payoutTiming?: string;
  consistencyRule?: string;
  inactivityRule?: string;
  activationFee?: string;
  extra?: string[];
}

export interface ChallengeSpec {
  type: ChallengeType;
  label: string;
  shortLabel: string;
  tagline: string;
  phases: ChallengePhase[];
  bestFor: string;
}

export const challenges: ChallengeSpec[] = [
  {
    type: "2-step",
    label: "2 Step",
    shortLabel: "2 Step",
    tagline: "Standard two-phase evaluation with fixed drawdown.",
    bestFor: "Traders who prefer structured evaluation windows and fixed-equity drawdown.",
    phases: [
      {
        name: "Phase 1",
        profitTarget: "8%",
        maxLoss: "8% fixed",
        dailyLoss: "4% fixed (EOD equity or balance, whichever is higher)",
        drawdownType: "fixed",
      },
      {
        name: "Phase 2",
        profitTarget: "6%",
        maxLoss: "8% fixed",
        dailyLoss: "4% fixed (EOD equity or balance, whichever is higher)",
        drawdownType: "fixed",
      },
      {
        name: "Funded",
        maxLoss: "8% fixed",
        dailyLoss: "4% fixed",
        drawdownType: "fixed",
        profitSplit: "100% on first payout, 80% bi-weekly thereafter",
        payoutTiming: "First payout after 30 calendar days, then bi-weekly",
        consistencyRule: "Max 40% of total profits in one trading day",
        inactivityRule: "At least one trade every 30 days",
      },
    ],
  },
  {
    type: "1-step",
    label: "1 Step Instant Funding",
    shortLabel: "1 Step",
    tagline: "Single-phase evaluation with trailing drawdown.",
    bestFor: "Traders who want to reach the funded stage in one phase.",
    phases: [
      {
        name: "Evaluation",
        profitTarget: "10%",
        maxLoss: "8% trailing",
        dailyLoss: "3% fixed (EOD equity or balance, whichever is higher)",
        drawdownType: "trailing",
      },
      {
        name: "Funded",
        maxLoss: "8% trailing",
        dailyLoss: "3% fixed",
        drawdownType: "trailing",
        profitSplit: "100% on first payout, 80% bi-weekly thereafter",
        payoutTiming: "First payout after 30 calendar days, then bi-weekly",
        consistencyRule: "Max 35% of total profits in one trading day",
        inactivityRule: "At least one trade every 30 days",
      },
    ],
  },
  {
    type: "bnpl-2-step",
    label: "Buy Now Pay Later — 2 Step",
    shortLabel: "BNPL 2 Step",
    tagline: "Two-phase challenge with activation fee due after passing.",
    bestFor: "Traders who want to start with reduced upfront cost.",
    phases: [
      {
        name: "Phase 1",
        profitTarget: "8%",
        maxLoss: "10% trailing",
        dailyLoss: "5% fixed",
        drawdownType: "trailing",
        inactivityRule: "At least one trade every 30 days",
        activationFee: "Activation fee must be paid within 15 days of passing",
      },
      {
        name: "Phase 2",
        profitTarget: "5%",
        maxLoss: "10% trailing",
        dailyLoss: "5% fixed",
        drawdownType: "trailing",
        inactivityRule: "At least one trade every 30 days",
      },
      {
        name: "Funded",
        maxLoss: "8% trailing",
        dailyLoss: "3% fixed",
        drawdownType: "trailing",
        profitSplit: "80% bi-weekly",
        payoutTiming: "First payout after 30 calendar days, then bi-weekly",
        consistencyRule: "Max 25% of total profits in one trading day",
        inactivityRule: "At least one trade every 30 days",
      },
    ],
  },
  {
    type: "bnpl-1-step",
    label: "Buy Now Pay Later — 1 Step",
    shortLabel: "BNPL 1 Step",
    tagline: "One-phase challenge with activation fee due after passing.",
    bestFor: "Traders who want a single-phase path with deferred activation fee.",
    phases: [
      {
        name: "Evaluation",
        profitTarget: "6%",
        maxLoss: "10% trailing",
        dailyLoss: "5% fixed",
        drawdownType: "trailing",
        inactivityRule: "At least one trade every 30 days",
        activationFee: "Activation fee must be paid within 15 days of passing",
      },
      {
        name: "Funded",
        maxLoss: "6% trailing",
        dailyLoss: "3% fixed",
        drawdownType: "trailing",
        profitSplit: "80% bi-weekly",
        payoutTiming: "First payout after 30 calendar days, then bi-weekly",
        consistencyRule: "Max 15% of total profits in one trading day",
        inactivityRule: "At least one trade every 30 days",
      },
    ],
  },
  {
    type: "rapid-runway",
    label: "Rapid Runway",
    shortLabel: "Rapid Runway",
    tagline: "Phase 1 is skipped — evaluation starts at Phase 2.",
    bestFor: "Traders who want a shorter path to the funded stage.",
    phases: [
      {
        name: "Phase 2",
        profitTarget: "5%",
        maxLoss: "8% trailing",
        dailyLoss: "5% fixed",
        drawdownType: "trailing",
        inactivityRule: "At least one trade every 30 days",
        activationFee: "Activation fee must be paid within 15 days of passing",
      },
      {
        name: "Funded",
        maxLoss: "8% trailing",
        dailyLoss: "3% fixed",
        drawdownType: "trailing",
        profitSplit: "80% bi-weekly",
        payoutTiming: "First payout after 30 calendar days, then bi-weekly",
        consistencyRule: "Max 20% of total profits in one trading day",
        inactivityRule: "At least one trade every 30 days",
      },
    ],
  },
];

export function getChallenge(type: ChallengeType): ChallengeSpec | undefined {
  return challenges.find((c) => c.type === type);
}

export function fundedPhase(spec: ChallengeSpec): ChallengePhase | undefined {
  return spec.phases.find((p) => p.name === "Funded");
}
