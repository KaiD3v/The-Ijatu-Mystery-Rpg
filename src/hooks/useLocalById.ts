import { useMemo } from "react";
import { LOCALS } from "../data/locals";

export function useLocalById(id: string | undefined) {
  return useMemo(() => LOCALS.find((local) => local.id === id) ?? null, [id]);
}
