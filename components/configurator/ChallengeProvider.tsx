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
  ALL_SIZES,
  type AccountSize,
  type ChallengeSpec,
  type ChallengeType,
  challenges,
  getChallenge,
  getPrice,
} from "@/components/data/challenges";

interface Selection {
  type: ChallengeType;
  size: AccountSize;
}

const DEFAULTS: Selection = { type: "1-step", size: "100k" };

interface Ctx extends Selection {
  setType: (v: ChallengeType) => void;
  setSize: (v: AccountSize) => void;
  spec: ChallengeSpec;
  price: number | undefined;
}

const ChallengeCtx = createContext<Ctx | null>(null);

function readFromParams(params: URLSearchParams): Selection {
  const type = params.get("type") as ChallengeType | null;
  const size = params.get("size") as AccountSize | null;
  const validType =
    type && challenges.some((c) => c.type === type) ? type : DEFAULTS.type;
  const validSize =
    size && ALL_SIZES.includes(size) ? size : DEFAULTS.size;
  return { type: validType, size: validSize };
}

export function ChallengeProvider({ children }: { children: React.ReactNode }) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [state, setState] = useState<Selection>(() => readFromParams(params));

  useEffect(() => {
    setState(readFromParams(params));
  }, [params]);

  const persist = useCallback(
    (next: Selection) => {
      setState(next);
      const q = new URLSearchParams(params.toString());
      q.set("type", next.type);
      q.set("size", next.size);
      router.replace(`${pathname}?${q.toString()}`, { scroll: false });
    },
    [params, pathname, router],
  );

  const setType = useCallback(
    (type: ChallengeType) => persist({ ...state, type }),
    [persist, state],
  );
  const setSize = useCallback(
    (size: AccountSize) => persist({ ...state, size }),
    [persist, state],
  );

  const value = useMemo<Ctx>(() => {
    const spec = getChallenge(state.type) ?? challenges[0];
    return {
      ...state,
      setType,
      setSize,
      spec,
      price: getPrice(spec, state.size),
    };
  }, [state, setType, setSize]);

  return <ChallengeCtx.Provider value={value}>{children}</ChallengeCtx.Provider>;
}

export function useChallenge() {
  const ctx = useContext(ChallengeCtx);
  if (!ctx) throw new Error("useChallenge must be used within ChallengeProvider");
  return ctx;
}
