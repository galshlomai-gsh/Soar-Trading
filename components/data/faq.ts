// Answers are conservative: where an authoritative answer is not confirmed,
// the copy points the reader to the Terms of Service or the relevant page.

export type FaqCategory =
  | "general"
  | "1-step"
  | "2-step"
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

export const faqCategories: { id: FaqCategory; label: string }[] = [
  { id: "general", label: "General" },
  { id: "1-step", label: "1 Step" },
  { id: "2-step", label: "2 Step" },
  { id: "bnpl", label: "BNPL" },
  { id: "rapid-runway", label: "Rapid Runway" },
  { id: "rules", label: "Rules" },
  { id: "payouts", label: "Payouts" },
  { id: "compliance", label: "Compliance & Policies" },
];

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
    a: "Account details are delivered after successful payment and onboarding checks. Exact delivery times may vary — please contact support@soar-funding.com if you have not received your details.",
  },
  {
    category: "general",
    q: "What platform do you use?",
    a: "Platform options will be connected here once confirmed. Please refer to the challenge purchase flow for the current list of supported platforms.",
  },
  {
    category: "general",
    q: "Can I take multiple challenges?",
    a: "Rules on holding multiple challenges vary by challenge type and jurisdiction. Please review the Terms of Service before purchasing additional accounts.",
  },
  {
    category: "general",
    q: "Is the challenge fee refundable?",
    a: "Soar Funding operates a no-refund policy on challenge fees. Please see the Terms of Service for details.",
  },
  {
    category: "general",
    q: "Can I buy a challenge for someone else?",
    a: "Third-party purchases and third-party payouts are prohibited. The purchaser must be the trader operating the account.",
  },
  {
    category: "general",
    q: "How do I contact support?",
    a: "Email support@soar-funding.com for any account or billing questions.",
  },
  {
    category: "2-step",
    q: "What are the 2 Step rules?",
    a: "Phase 1 target is 8% and Phase 2 target is 6%. Maximum loss is 8% fixed and daily loss limit is 4% fixed, based on EOD equity or balance (whichever is higher). On the funded stage, the consistency rule is max 40% of total profits in one trading day.",
  },
  {
    category: "1-step",
    q: "What are the 1 Step rules?",
    a: "Profit target is 10%. Maximum loss is 8% trailing and daily loss limit is 3% fixed, based on EOD equity or balance (whichever is higher). On the funded stage, the consistency rule is max 35% of total profits in one trading day.",
  },
  {
    category: "bnpl",
    q: "What are the BNPL 2 Step targets and limits?",
    a: "Phase 1 target is 8% and Phase 2 target is 5%. Maximum loss is 10% trailing and daily loss limit is 5% fixed. The activation fee must be paid within 15 days of passing. Funded phase: 8% trailing max loss, 3% fixed daily loss, 80% profit split, 25% consistency rule.",
  },
  {
    category: "bnpl",
    q: "What are the BNPL 1 Step targets and limits?",
    a: "Profit target is 6%. Maximum loss is 10% trailing and daily loss limit is 5% fixed. The activation fee must be paid within 15 days of passing. Funded phase: 6% trailing max loss, 3% fixed daily loss, 80% profit split, 15% consistency rule.",
  },
  {
    category: "bnpl",
    q: "What does “only $20 upfront” mean?",
    a: "This refers to BNPL pricing positioning on the live Soar Funding site. The activation fee is paid after passing. Please confirm exact pricing on the purchase flow.",
  },
  {
    category: "rapid-runway",
    q: "What are the Rapid Runway rules?",
    a: "Phase 1 is skipped. Phase 2 target is 5%. Maximum loss is 8% trailing. Daily loss limit is 5% during the challenge and 3% on the funded stage. Profit split is 80% bi-weekly. Consistency rule is max 20% of total profits in one trading day. Activation fee must be paid within 15 days of passing.",
  },
  {
    category: "rules",
    q: "Can I trade news events?",
    a: "News trading is only allowed where your challenge or add-on permits it. Trading within 5 minutes before or after high-impact news may lead to profit deductions or a breach, depending on the account rules.",
  },
  {
    category: "rules",
    q: "Are Expert Advisors allowed?",
    a: "Expert Advisors may be used where approved and compliant with Soar Funding's trading rules. Strategies that exploit demo conditions, latency, pricing, execution, or platform infrastructure are not allowed.",
  },
  {
    category: "rules",
    q: "Is copy trading allowed?",
    a: "Copy trading or hedging across accounts is not allowed. Each trader must trade independently and comply with the platform's risk rules.",
  },
  {
    category: "rules",
    q: "What is the inactivity rule?",
    a: "You must place at least one trade every 30 days on every active account. Longer periods of inactivity may lead to account review or closure.",
  },
  {
    category: "rules",
    q: "What is the minimum trade hold time?",
    a: "A minimum two-minute hold is required on every trade.",
  },
  {
    category: "payouts",
    q: "What are the payout terms?",
    a: "Your first payout becomes available after 30 calendar days, subject to KYC, rule checks, and payout approval. After that, eligible payouts are available bi-weekly. Standard challenge profit split is 100% on the first payout and 80% on ongoing payouts. Minimum payout request threshold is 1% profit.",
  },
  {
    category: "payouts",
    q: "Are funded accounts real or simulated?",
    a: "All funded accounts are simulated demo accounts. All balances, profits, losses, and performance metrics are virtual. See the Risk Disclosure for full details.",
  },
  {
    category: "payouts",
    q: "Can I merge funded accounts?",
    a: "Rules on merging funded accounts vary by challenge type. Please review the Terms of Service before requesting a merge.",
  },
  {
    category: "compliance",
    q: "IP address & location consistency policy",
    a: "Your login IP should be reasonably consistent across sessions. Unusual location changes may trigger a review. Occasional travel is acceptable, but persistent location switching to circumvent rules is not.",
  },
  {
    category: "compliance",
    q: "Use of VPS or VPN services",
    a: "VPNs and static IPs are permitted where usage is consistent. VPS providers should also be used consistently. Frequent switching between locations or providers may trigger a review.",
  },
  {
    category: "compliance",
    q: "Responsible trading & gambling policy",
    a: "Trading on a Soar Funding challenge should reflect a controlled, risk-aware strategy. Behaviour that resembles gambling — such as outsized position sizing designed to force a result — may be flagged and reviewed.",
  },
  {
    category: "compliance",
    q: "Trading while travelling",
    a: "You can trade while travelling provided your location pattern remains reasonably consistent. Please review the IP address & location policy before extended travel.",
  },
];

export const topFaq = (): FaqItem[] => faqItems.slice(0, 6);
