"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  type AccountSize,
  type ChallengeModel,
  type ChallengeSteps,
  type Platform,
  findPrice,
} from "@/components/data/challenges";

export interface Selection {
  model: ChallengeModel;
  steps: ChallengeSteps;
  size: AccountSize;
  platform: Platform;
}

const DEFAULTS: Selection = {
  model: "classic",
  steps: "two-step",
  size: "100k",
  platform: "dxtrade",
};

interface Ctx extends Selection {
  setModel: (v: ChallengeModel) => void;
  setSteps: (v: ChallengeSteps) => void;
  setSize: (v: AccountSize) => void;
  setPlatform: (v: Platform) => void;
  price: ReturnType<typeof findPrice>;
}

const ChallengeCtx = createContext<Ctx | null>(null);

function readFromParams(params: URLSearchParams): Selection {
  return {
    model: (params.get("model") as ChallengeModel) || DEFAULTS.model,
    steps: (params.get("steps") as ChallengeSteps) || DEFAULTS.steps,
    size: (params.get("size") as AccountSize) || DEFAULTS.size,
    platform: (params.get("platform") as Platform) || DEFAULTS.platform,
  };
}

export function ChallengeProvider({ children }: { children: React.ReactNode }) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [state, setState] = useState<Selection>(() => readFromParams(params));

  useEffect(() => {
    setState(readFromParams(params));
  }, [params]);

  const update = useCallback(
    (patch: Partial<Selection>) => {
      const next = { ...state, ...patch };
      setState(next);
      const q = new URLSearchParams(params.toString());
      (Object.keys(patch) as (keyof Selection)[]).forEach((k) =>
        q.set(k, next[k]),
      );
      router.replace(`${pathname}?${q.toString()}`, { scroll: false });
    },
    [params, pathname, router, state],
  );

  const value = useMemo<Ctx>(
    () => ({
      ...state,
      setModel: (v) => update({ model: v }),
      setSteps: (v) => update({ steps: v }),
      setSize: (v) => update({ size: v }),
      setPlatform: (v) => update({ platform: v }),
      price: findPrice(state.model, state.steps, state.size),
    }),
    [state, update],
  );

  return <ChallengeCtx.Provider value={value}>{children}</ChallengeCtx.Provider>;
}

export function useChallenge() {
  const ctx = useContext(ChallengeCtx);
  if (!ctx) throw new Error("useChallenge must be used within ChallengeProvider");
  return ctx;
}
