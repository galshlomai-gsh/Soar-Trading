export function ToBeConnected({ message }: { message: string }) {
  return (
    <div className="rounded-card border border-dashed border-white/15 bg-surface/40 p-4 text-center text-xs leading-relaxed text-ink-muted">
      {message}
    </div>
  );
}
