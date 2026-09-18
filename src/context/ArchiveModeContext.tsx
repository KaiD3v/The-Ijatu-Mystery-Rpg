import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type ArchiveMode = "jogador" | "mestre";
interface ArchiveModeContextValue { mode: ArchiveMode; setMode: (mode: ArchiveMode) => void; }
const STORAGE_KEY = "ijatu-archive-mode";
const ArchiveModeContext = createContext<ArchiveModeContextValue | null>(null);

export function ArchiveModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ArchiveMode>(() => {
    if (typeof window === "undefined") return "jogador";
    try { return window.localStorage.getItem(STORAGE_KEY) === "mestre" ? "mestre" : "jogador"; } catch { return "jogador"; }
  });
  useEffect(() => { try { window.localStorage.setItem(STORAGE_KEY, mode); } catch { /* storage may be disabled */ } }, [mode]);
  const value = useMemo(() => ({ mode, setMode }), [mode]);
  return <ArchiveModeContext.Provider value={value}>{children}</ArchiveModeContext.Provider>;
}

export function useArchiveMode() {
  const context = useContext(ArchiveModeContext);
  if (!context) throw new Error("useArchiveMode deve ser usado dentro de ArchiveModeProvider");
  return context;
}
