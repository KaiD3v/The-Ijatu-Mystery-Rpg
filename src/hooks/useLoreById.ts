import { useMemo } from "react";
import { LORES } from "../data/lores";

export function useLoreById(id: string | undefined) {
  return useMemo(() => LORES.find((lore) => lore.id === id), [id]);
}
