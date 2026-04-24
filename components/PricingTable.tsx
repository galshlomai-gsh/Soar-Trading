import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  ALL_SIZES,
  type AccountSize,
  checkoutHref,
  sizeLabel,
  visibleProducts,
} from "@/lib/data/products";
import { cn } from "@/lib/cn";

export function PricingTable() {
  return (
    <section className="py-24" id="pricing">
      <Container size="wide">
        <div className="text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            Pricing
          </div>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Every challenge, every size
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-[1rem]">
            Pick an account type and size. Checkout opens pre-loaded with the
            variation you selected.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {visibleProducts.map((product) => (
            <article
              key={product.slug}
              className="flex flex-col overflow-hidden rounded-[20px] border border-white/10 bg-raised"
            >
              <header className="flex items-start justify-between gap-4 border-b border-white/10 bg-accent-gradient px-6 py-5 text-[#0B1220]">
                <div>
                  <h3 className="font-display text-lg font-extrabold tracking-tight">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed opacity-80">
                    {product.tagline}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-[#0B1220]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">
                  Product {product.productId}
                </span>
              </header>

              <div className="flex flex-1 flex-col divide-y divide-white/5">
                <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
                  <span>Account Size</span>
                  <span className="text-right">Price</span>
                  <span className="w-[1.25rem]" aria-hidden />
                </div>
                {ALL_SIZES.map((size) => {
                  const variation = product.variations.find(
                    (v) => v.size === size,
                  );
                  return (
                    <PriceRow
                      key={size}
                      size={size}
                      price={variation?.price}
                      variationId={variation?.variationId}
                    />
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PriceRow({
  size,
  price,
  variationId,
}: {
  size: AccountSize;
  price?: number;
  variationId?: number;
}) {
  const disabled = variationId === undefined;
  const priceDisplay =
    price !== undefined ? `$${price}` : variationId ? "Included" : "—";
  return (
    <div
      className={cn(
        "grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-4 transition-colors",
        !disabled && "hover:bg-white/[0.03]",
      )}
    >
      <span className="text-sm font-semibold text-ink">{sizeLabel[size]}</span>
      <span
        className={cn(
          "text-right font-display text-base font-extrabold tabular-nums",
          disabled ? "text-ink-dim" : "text-ink",
        )}
      >
        {priceDisplay}
      </span>
      {disabled ? (
        <span
          className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/5 text-ink-dim"
          aria-hidden
        >
          —
        </span>
      ) : (
        <Link
          href={checkoutHref(variationId!)}
          aria-label={`Buy ${sizeLabel[size]}`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-accent text-[#0B1220] shadow-[0_8px_20px_-8px_rgba(91,142,240,0.8)] transition-transform hover:scale-105 hover:brightness-110"
        >
          <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
        </Link>
      )}
    </div>
  );
}
