import { Quote as QuoteIcon } from "lucide-react";
import { Avatar } from "@/components/brand/Avatar";

export function Quote({
  name,
  role,
  body,
}: {
  name: string;
  role: string;
  body: string;
}) {
  return (
    <figure className="relative rounded-card border border-white/10 bg-surface/70 p-7 shadow-soft">
      <QuoteIcon
        className="absolute right-6 top-6 h-8 w-8 text-accent/30"
        strokeWidth={1.5}
      />
      <blockquote className="text-[15px] leading-relaxed text-ink/90">
        &ldquo;{body}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <Avatar name={name} size={40} />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-ink">{name}</span>
          <span className="text-xs text-ink-muted">{role}</span>
        </div>
      </figcaption>
    </figure>
  );
}
