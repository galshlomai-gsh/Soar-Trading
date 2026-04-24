export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "FAQ", href: "/faq" },
];

export const footerNav: { heading: string; items: { label: string; href: string }[] }[] = [
  {
    heading: "Platform",
    items: [
      { label: "Trading Rules", href: "/faq#rules" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Company",
    items: [{ label: "Contact Us", href: "/contact" }],
  },
  {
    heading: "Legal",
    items: [
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Risk Disclosure", href: "/risk-disclosure" },
    ],
  },
  {
    heading: "Security",
    items: [
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
];
