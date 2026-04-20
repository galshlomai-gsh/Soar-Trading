export type ChallengeModel = "bnpl" | "classic";
export type ChallengeSteps = "instant" | "rapid" | "one-step" | "two-step";
export type AccountSize = "10k" | "25k" | "50k" | "100k" | "200k" | "250k" | "500k";
export type Platform = "dxtrade" | "matchtrader";

export interface ChallengePrice {
  model: ChallengeModel;
  steps: ChallengeSteps;
  size: AccountSize;
  fee: number;
  profitTarget: string;
  dailyDD: string;
  maxDD: string;
  minDays: number;
  newsAllowed: boolean;
  weekendHold: boolean;
  easAllowed: boolean;
}

export const accountSizeAmount: Record<AccountSize, number> = {
  "10k": 10000,
  "25k": 25000,
  "50k": 50000,
  "100k": 100000,
  "200k": 200000,
  "250k": 250000,
  "500k": 500000,
};

export const modelLabels: Record<ChallengeModel, string> = {
  bnpl: "Buy Now, Pay Later",
  classic: "Classic",
};

export const stepsLabels: Record<ChallengeSteps, string> = {
  instant: "Instant",
  rapid: "Rapid",
  "one-step": "1-Step",
  "two-step": "2-Step",
};

export const stepsDescriptions: Record<ChallengeSteps, string> = {
  instant: "No evaluation, instant funding.",
  rapid: "Small targets, lightweight eval.",
  "one-step": "Single phase evaluation.",
  "two-step": "Two phase evaluation.",
};

export const platformLabels: Record<Platform, string> = {
  dxtrade: "DX Trade",
  matchtrader: "Match Trader",
};

// Steps available per model (mirrors soar-funding.com/en — Classic has no Rapid).
export const modelSteps: Record<ChallengeModel, ChallengeSteps[]> = {
  bnpl: ["instant", "rapid", "one-step", "two-step"],
  classic: ["instant", "one-step", "two-step"],
};

// Pricing rows transcribed from the reference. Rows not listed here are
// treated as unavailable and hidden by the pickers. Extend this list to
// unlock more combinations — do not add placeholder numbers.
export const pricing: ChallengePrice[] = [
  {
    model: "classic",
    steps: "two-step",
    size: "50k",
    fee: 325,
    profitTarget: "10% / 5%",
    dailyDD: "5%",
    maxDD: "10%",
    minDays: 0,
    newsAllowed: true,
    weekendHold: true,
    easAllowed: true,
  },
  {
    model: "classic",
    steps: "two-step",
    size: "100k",
    fee: 499,
    profitTarget: "10% / 5%",
    dailyDD: "5%",
    maxDD: "10%",
    minDays: 0,
    newsAllowed: true,
    weekendHold: true,
    easAllowed: true,
  },
  {
    model: "bnpl",
    steps: "instant",
    size: "100k",
    fee: 499,
    profitTarget: "No target",
    dailyDD: "4%",
    maxDD: "8%",
    minDays: 0,
    newsAllowed: true,
    weekendHold: true,
    easAllowed: true,
  },
];

export function findPrice(
  model: ChallengeModel,
  steps: ChallengeSteps,
  size: AccountSize,
): ChallengePrice | undefined {
  return pricing.find(
    (p) => p.model === model && p.steps === steps && p.size === size,
  );
}

export function availableSteps(model: ChallengeModel): ChallengeSteps[] {
  return modelSteps[model].filter((steps) =>
    pricing.some((p) => p.model === model && p.steps === steps),
  );
}

export function availableSizes(
  model: ChallengeModel,
  steps: ChallengeSteps,
  from: AccountSize[],
): AccountSize[] {
  return from.filter((size) =>
    pricing.some(
      (p) => p.model === model && p.steps === steps && p.size === size,
    ),
  );
}
