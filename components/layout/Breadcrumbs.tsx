import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex justify-center"
    >
      <ol className="inline-flex flex-wrap items-center gap-1.5 rounded-full border border-white/10 bg-surface/60 px-3 py-1.5 text-[11px] font-semibold">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-ink-muted transition-colors hover:text-ink"
          >
            <Home className="h-3 w-3" strokeWidth={2.5} />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="inline-flex items-center gap-1.5">
              <ChevronRight
                className="h-3 w-3 text-ink-muted/50"
                strokeWidth={2.5}
              />
              {!isLast && item.href ? (
                <Link
                  href={item.href}
                  className="text-ink-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-ink">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
