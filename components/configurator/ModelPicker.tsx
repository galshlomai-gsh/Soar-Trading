"use client";

import { PillTabs } from "@/components/ui/PillTabs";
import { useChallenge } from "./ChallengeProvider";
import {
  type ChallengeModel,
  availableSteps,
  modelLabels,
  stepsDescriptions,
  stepsLabels,
} from "@/components/data/challenges";
import { cn } from "@/lib/cn";

export function ModelPicker({ variant = "stacked" }: { variant?: "stacked" | "inline" }) {
  const { model, steps, setModel, setSteps } = useChallenge();
  const stepOptions = availableSteps(model);

  const modelOptions = (Object.keys(modelLabels) as ChallengeModel[]).map((m) => ({
    value: m,
    label: modelLabels[m],
  }));

  return (
    <div className="flex flex-col gap-4">
      <PillTabs
        options={modelOptions}
        value={model}
        onChange={setModel}
        size="sm"
      />
      <div
        className={cn(
          "grid gap-2.5",
          variant === "stacked" && "grid-cols-1",
          variant === "inline" && stepOptions.length === 2 && "grid-cols-2",
          variant === "inline" && stepOptions.length === 3 && "grid-cols-3",
          variant === "inline" && stepOptions.length === 4 && "grid-cols-4",
        )}
      >
        {stepOptions.map((s) => {
          const active = steps === s;
          return (
            <button
              key={s}
              onClick={() => setSteps(s)}
              aria-pressed={active}
              className={cn(
                "rounded-card border px-4 py-3 text-left transition-all",
                active
                  ? "border-accent/60 bg-accent/8 ring-accent-soft"
                  : "border-white/10 bg-surface/60 hover:border-white/20",
                variant === "inline" && "text-center",
              )}
            >
              <div className="text-sm font-bold text-ink">{stepsLabels[s]}</div>
              <div
                className={cn(
                  "mt-1 text-[11px] leading-snug",
                  active ? "text-ink/70" : "text-ink-muted",
                )}
              >
                {stepsDescriptions[s]}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
