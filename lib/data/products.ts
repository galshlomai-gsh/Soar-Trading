// Pricing catalog for the Soar Funding website.
// Variation IDs come from the trade.soar-funding.com WooCommerce store and
// are the source of truth for the add-to-cart URL:
//   https://trade.soar-funding.com/checkout?add-to-cart=<variationId>
// The local /checkout route also accepts ?add-to-cart=<variationId>.
//
// Products whose `name` starts with "!" are hidden from <PricingTable />
// but remain available for direct deep links.

export type AccountSize = "10k" | "25k" | "50k" | "100k" | "200k";

export const ALL_SIZES: AccountSize[] = ["10k", "25k", "50k", "100k", "200k"];

export const sizeLabel: Record<AccountSize, string> = {
  "10k": "$10,000",
  "25k": "$25,000",
  "50k": "$50,000",
  "100k": "$100,000",
  "200k": "$200,000",
};

export const sizeShortLabel: Record<AccountSize, string> = {
  "10k": "$10k",
  "25k": "$25k",
  "50k": "$50k",
  "100k": "$100k",
  "200k": "$200k",
};

export interface ProductVariation {
  size: AccountSize;
  variationId: number;
  /**
   * Optional USD price shown on the pricing table. Omit when pricing
   * has not yet been finalised — the table renders "Price TBC" instead.
   */
  price?: number;
}

export interface Product {
  /** Stable slug used internally (e.g. for deep links). */
  slug: string;
  /** Marketing name. Prefix with "!" to hide from the pricing table. */
  name: string;
  /** Short one-line pitch rendered under the product name. */
  tagline: string;
  /** WooCommerce product ID (parent of all size variations). */
  productId: number;
  variations: ProductVariation[];
}

export const products: Product[] = [
  {
    slug: "1-step",
    name: "1 Step",
    tagline: "Single-phase evaluation with trailing drawdown.",
    productId: 97,
    variations: [
      { size: "10k", variationId: 98, price: 90 },
      { size: "25k", variationId: 99, price: 180 },
      { size: "50k", variationId: 100, price: 300 },
      { size: "100k", variationId: 101, price: 520 },
      { size: "200k", variationId: 102, price: 950 },
    ],
  },
  {
    slug: "2-step",
    name: "2 Step",
    tagline: "Classic two-phase evaluation with fixed drawdown.",
    productId: 90,
    variations: [
      { size: "10k", variationId: 91, price: 80 },
      { size: "25k", variationId: 92, price: 160 },
      { size: "50k", variationId: 93, price: 290 },
      { size: "100k", variationId: 94, price: 480 },
      { size: "200k", variationId: 95, price: 925 },
    ],
  },
  {
    slug: "rapid-runway",
    name: "Rapid Runway",
    tagline: "Phase 1 skipped — evaluation starts at Phase 2.",
    productId: 4083,
    variations: [
      { size: "10k", variationId: 4089 },
      { size: "25k", variationId: 4090 },
      { size: "50k", variationId: 4091 },
      { size: "100k", variationId: 4092 },
      { size: "200k", variationId: 4093 },
    ],
  },
  {
    slug: "instant-funding",
    name: "Instant Funding",
    tagline: "Skip the evaluation and go straight to funded.",
    productId: 4199,
    variations: [
      { size: "10k", variationId: 4200 },
      { size: "25k", variationId: 4201 },
      { size: "50k", variationId: 4202 },
      { size: "100k", variationId: 4203 },
      // Intentionally no $200k tier — Instant Funding caps at $100k.
    ],
  },
  {
    slug: "bnpl-1-step",
    name: "Buy Now Pay Later — 1 Step",
    tagline: "Pay the evaluation fee after you pass.",
    productId: 3224,
    variations: [
      { size: "10k", variationId: 3230 },
      { size: "25k", variationId: 3231 },
      { size: "50k", variationId: 3232 },
      { size: "100k", variationId: 3233 },
      { size: "200k", variationId: 3234 },
    ],
  },
  {
    slug: "bnpl-2-step",
    name: "Buy Now Pay Later — 2 Step",
    tagline: "Two-phase challenge with deferred activation fee.",
    productId: 1563,
    variations: [
      { size: "10k", variationId: 1569 },
      { size: "25k", variationId: 1570 },
      { size: "50k", variationId: 1571 },
      { size: "100k", variationId: 1572 },
      { size: "200k", variationId: 1573 },
    ],
  },
];

export const visibleProducts = products.filter((p) => !p.name.startsWith("!"));

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getVariation(
  product: Product,
  size: AccountSize,
): ProductVariation | undefined {
  return product.variations.find((v) => v.size === size);
}

export function getVariationById(
  variationId: number,
): { product: Product; variation: ProductVariation } | undefined {
  for (const p of products) {
    const v = p.variations.find((x) => x.variationId === variationId);
    if (v) return { product: p, variation: v };
  }
  return undefined;
}

export function checkoutHref(variationId: number): string {
  return `/checkout?add-to-cart=${variationId}`;
}
