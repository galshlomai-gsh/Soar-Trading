// Answers are conservative: where an authoritative answer is not confirmed,
// the copy points the reader to the Terms of Service or support.

import {
  Banknote,
  Info,
  type LucideIcon,
  Receipt,
  Rocket,
  ScrollText,
  ShieldCheck,
  Target,
} from "lucide-react";

export type FaqCategory =
  | "general"
  | "challenges"
  | "bnpl"
  | "rapid-runway"
  | "rules"
  | "payouts"
  | "compliance";

export interface FaqItem {
  q: string;
  a: string;
  category: FaqCategory;
}

export const faqCategories: {
  id: FaqCategory;
  label: string;
  icon: LucideIcon;
}[] = [
  { id: "general", label: "General", icon: Info },
  { id: "challenges", label: "Challenges", icon: Target },
  { id: "bnpl", label: "BNPL", icon: Receipt },
  { id: "rapid-runway", label: "Rapid Runway", icon: Rocket },
  { id: "rules", label: "Rules", icon: ScrollText },
  { id: "payouts", label: "Payouts", icon: Banknote },
  { id: "compliance", label: "Compliance & Policies", icon: ShieldCheck },
];

const SAFE = "Please contact support before assuming this is available.";

export const faqItems: FaqItem[] = [
  {
    category: "general",
    q: "Who are you?",
    a: "Soar Funding is a trading brand operated by SOAR SOFTWARE LTD, a company registered in England & Wales (company number 16435138). We provide simulated trading challenges and educational tools for traders.",
  },
  {
    category: "general",
    q: "Who is Soar Funding best suited for?",
    a: "Soar Funding is built for traders who want a rule-based, challenge-driven evaluation. Each challenge has clear targets and drawdown limits — please review the Terms of Service before purchasing.",
  },
  {
    category: "general",
    q: "When do I get my account?",
    a: `Account details are delivered after successful payment and onboarding checks. Exact delivery times may vary. ${SAFE}`,
  },
  {
    category: "general",
    q: "What platform do you use?",
    a: `Platform options are published on the challenge purchase flow. ${SAFE}`,
  },
  {
    category: "challenges",
    q: "2 Step Rules",
    a: "Phase 1 profit target is 8% and Phase 2 target is 6%. Maximum loss is 8% fixed. Daily loss limit is 4% fixed, based on EOD equity or balance (whichever is higher). On the funded stage, the consistency rule is max 40% of total profits in one trading day.",
  },
  {
    category: "challenges",
    q: "1-Step Rules",
    a: "Profit target is 10%. Maximum loss is 8% trailing. Daily loss limit is 3% fixed, based on EOD equity or balance (whichever is higher). On the funded stage, the consistency rule is max 35% of total profits in one trading day.",
  },
  {
    category: "challenges",
    q: "Can I take multiple challenges?",
    a: `Rules on holding multiple challenges vary by challenge type. ${SAFE}`,
  },
  {
    category: "challenges",
    q: "Is the challenge fee refundable?",
    a: "Challenge fees are non-refundable. On standard challenges, the fee is refundable on your first payout. See the Terms of Service for full details.",
  },
  {
    category: "challenges",
    q: "How long do I have to activate a challenge after purchase?",
    a: `Activation windows depend on the challenge type. ${SAFE}`,
  },
  {
    category: "challenges",
    q: "Can I buy a challenge for someone else?",
    a: "Third-party purchases and third-party payouts are prohibited. The purchaser must be the trader operating the account.",
  },
  {
    category: "payouts",
    q: "What are the payout terms?",
    a: "For standard funded accounts, the first payout is available after 30 calendar days, subject to KYC, rule checks, and payout approval. First payout profit split is 100%; ongoing payouts are 80% bi-weekly. Minimum payout request threshold is 1% profit.",
  },
  {
    category: "challenges",
    q: "Are funded accounts real or simulated?",
    a: "All funded accounts are simulated demo accounts. All balances, profits, losses, and performance metrics are virtual. See the Risk Disclosure for full details.",
  },
  {
    category: "challenges",
    q: "Can I merge funded accounts?",
    a: `Rules on merging funded accounts vary by challenge type. ${SAFE}`,
  },
  {
    category: "rules",
    q: "What are the core trading rules?",
    a: "Minimum 2-minute hold on every trade. No copy trading or hedging across accounts. No HFT, toxic trading, execution abuse, or latency arbitrage. Weekend holding is permitted. VPNs and static IPs are allowed if consistent. At least one trade every 30 days. Expert Advisors must be reviewed and approved. Stop-loss is not mandatory but recommended. All trades are monitored by the risk team.",
  },
  {
    category: "rules",
    q: "Can I trade the news?",
    a: "Trading within 5 minutes before or after high-impact news is not permitted unless you have purchased the correct add-on. Profits made during the restricted window may be deducted, and repeated breaches may close the account.",
  },
  {
    category: "rules",
    q: "Are Expert Advisors (EAs) allowed?",
    a: "Expert Advisors may be used where they are reviewed, approved, and compliant with Soar Funding's trading rules. Strategies that exploit demo conditions, pricing, execution, latency, or platform infrastructure are not allowed.",
  },
  {
    category: "rules",
    q: "Can I copy trade or hedge across accounts?",
    a: "Copy trading and hedging across accounts are not permitted. Each trader must trade independently and comply with the platform's risk rules.",
  },
  {
    category: "rules",
    q: "What counts as toxic trading?",
    a: "Toxic trading is any strategy or behaviour that exploits demo conditions, pricing, execution, latency, or platform infrastructure. Toxic trading is a hard breach and can result in account termination, loss of profits, and no payout eligibility.",
  },
  {
    category: "rules",
    q: "What is a soft breach?",
    a: "Soft breaches are behaviours that violate the trading rules without triggering immediate account termination. They accumulate and do not reset until a successful payout is completed. Three soft breaches count as one hard breach. Enforcement may occur retrospectively after phase completion or a payout request.",
  },
  {
    category: "rules",
    q: "What is a hard breach?",
    a: "A hard breach is a serious violation that can terminate the account outright. Consequences include loss of profits, no payout eligibility, and no refund of the challenge fee.",
  },
  {
    category: "rules",
    q: "What are the consistency rules on the funded stage?",
    a: "Consistency rules cap the share of total profits that can be made on a single trading day on a simulated funded account. 2 Step: 40% max. 1 Step: 35% max. BNPL 2 Step: 25% max. Rapid Runway: 20% max. BNPL 1 Step: 15% max.",
  },
  {
    category: "rules",
    q: "Can I use a VPN, VPS, or static IP?",
    a: "VPNs and static IPs are permitted where usage is consistent. VPS providers should also be used consistently. Unusual location changes or frequent switching between providers may trigger a review.",
  },
  {
    category: "rules",
    q: "Are accounts reviewed retrospectively?",
    a: "All trades are monitored by the risk team. Accounts may be reviewed after phase completion or a payout request. Soar Funding may deduct profits, reclassify breaches, or terminate accounts based on historical activity where rules have been breached.",
  },
  {
    category: "rules",
    q: "Is a stop-loss required?",
    a: "A stop-loss is not mandatory, but it is strongly recommended on every trade. Drawdown limits still apply regardless of whether a stop-loss is attached.",
  },
  {
    category: "rules",
    q: "Where do the full rules live?",
    a: "The Terms of Service are authoritative. Where there is any conflict between marketing copy and the Terms, the Terms apply.",
  },
  {
    category: "general",
    q: "How do I contact support?",
    a: "Email support@soar-funding.com for any account, billing, or rules question.",
  },
  {
    category: "general",
    q: "Where can I manage my account?",
    a: `A client portal is planned for account management. ${SAFE}`,
  },
  {
    category: "general",
    q: "Whats The Leverage",
    a: `Leverage varies by asset class and challenge type. ${SAFE}`,
  },
  {
    category: "general",
    q: "Whats the Commission",
    a: `Commission schedules depend on platform and instrument. ${SAFE}`,
  },
  {
    category: "general",
    q: "Do you have a trader community?",
    a: "Soar Funding runs a trader community on Discord — see the Join Our Community link in the footer.",
  },
  {
    category: "bnpl",
    q: "BUY NOW PAY LATER Targets and Limits",
    a: "BNPL 2 Step: Phase 1 target 8%, Phase 2 target 5%, max loss 10% trailing, daily loss 5% fixed. BNPL 1 Step: profit target 6%, max loss 10% trailing, daily loss 5% fixed. Activation fee must be paid within 15 days of passing.",
  },
  {
    category: "bnpl",
    q: "BUY NOW PAY LATER Rules",
    a: "BNPL 2 Step funded: 8% trailing max loss, 3% fixed daily loss, 80% profit split bi-weekly, 25% consistency rule. BNPL 1 Step funded: 6% trailing max loss, 3% fixed daily loss, 80% profit split bi-weekly, 15% consistency rule. Inactivity rule: at least one trade every 30 days.",
  },
  {
    category: "bnpl",
    q: "Only $20 upfront?!",
    a: `BNPL positioning on the live Soar Funding site refers to reduced upfront cost. The activation fee is paid after passing. ${SAFE}`,
  },
  {
    category: "rapid-runway",
    q: "Rapid Runway Rules",
    a: "Phase 1 is skipped. Phase 2 target is 5%. Maximum loss is 8% trailing. Challenge daily loss is 5% and funded daily loss is 3% fixed. Profit split is 80% bi-weekly. Consistency rule is max 20% of total profits in one trading day. Activation fee must be paid within 15 days of passing. Inactivity rule: at least one trade every 30 days.",
  },
  {
    category: "rapid-runway",
    q: "Targets and Limits",
    a: "Phase 2 target: 5%. Max loss: 8% trailing. Challenge daily loss: 5%. Funded daily loss: 3% fixed.",
  },
  {
    category: "compliance",
    q: "IP Address & Location Consistency Policy",
    a: "Your login IP should be reasonably consistent across sessions. Unusual location changes may trigger a review. Occasional travel is acceptable, but persistent location switching to circumvent rules is not.",
  },
  {
    category: "compliance",
    q: "Use of VPS or VPN Services",
    a: "VPNs and static IPs are permitted where usage is consistent. VPS providers should also be used consistently. Frequent switching between locations or providers may trigger a review.",
  },
  {
    category: "compliance",
    q: "Responsible Trading & Gambling Policy",
    a: "Trading on a Soar Funding challenge should reflect a controlled, risk-aware strategy. Behaviour that resembles gambling — such as outsized position sizing designed to force a result — may be flagged and reviewed.",
  },
  {
    category: "compliance",
    q: "Trading While Travelling",
    a: "You can trade while travelling provided your location pattern remains reasonably consistent. Please review the IP address & location policy before extended travel.",
  },
];

export const topFaq = (): FaqItem[] => faqItems.slice(0, 6);
