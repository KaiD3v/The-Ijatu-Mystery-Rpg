import { useMemo } from "react";
import { RULES } from "../data/rules";

export function useRuleById(id: string | undefined) {
  return useMemo(() => RULES.find((rule) => rule.id === id) ?? null, [id]);
}
