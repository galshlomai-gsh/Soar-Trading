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
  type ChallengeSpec,
  type ChallengeType,
  challenges,
  getChallenge,
} from "@/components/data/challenges";

interface Selection {
  type: ChallengeType;
}

const DEFAULTS: Selection = { type: "2-step" };

interface Ctx extends Selection {
  setType: (v: ChallengeType) => void;
  spec: ChallengeSpec;
}

const ChallengeCtx = createContext<Ctx | null>(null);

function readFromParams(params: URLSearchParams): Selection {
  const type = params.get("type") as ChallengeType | null;
  if (type && challenges.some((c) => c.type === type)) {
    return { type };
  }
  return DEFAULTS;
}

export function ChallengeProvider({ children }: { children: React.ReactNode }) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [state, setState] = useState<Selection>(() => readFromParams(params));

  useEffect(() => {
    setState(readFromParams(params));
  }, [params]);

  const setType = useCallback(
    (type: ChallengeType) => {
      setState({ type });
      const q = new URLSearchParams(params.toString());
      q.set("type", type);
      router.replace(`${pathname}?${q.toString()}`, { scroll: false });
    },
    [params, pathname, router],
  );

  const value = useMemo<Ctx>(
    () => ({
      ...state,
      setType,
      spec: getChallenge(state.type) ?? challenges[0],
    }),
    [state, setType],
  );

  return <ChallengeCtx.Provider value={value}>{children}</ChallengeCtx.Provider>;
}

export function useChallenge() {
  const ctx = useContext(ChallengeCtx);
  if (!ctx) throw new Error("useChallenge must be used within ChallengeProvider");
  return ctx;
}
