import { useEffect, useRef } from "react";
import { BookOpen, ChevronRight, Shield } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { ruleNavLinks } from "../config/ruleNavigation";
import { cn } from "../lib/cn";

export interface RulesSideBarProps {
  variant: "desktop" | "mobile";
}

export function RulesSideBar({ variant }: RulesSideBarProps) {
  const { pathname } = useLocation();
  const mobileListRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (variant !== "mobile") return;
    const activeLink = mobileListRef.current?.querySelector<HTMLElement>("[aria-current='page']");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    activeLink?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest", inline: "center" });
  }, [pathname, variant]);

  if (variant === "mobile") {
    return (
      <nav aria-label="Capítulos das regras" className="border-y border-stroke/80 bg-abyss/95 shadow-panel backdrop-blur-xl">
        <ol ref={mobileListRef} className="rules-chapter-scroll flex gap-2 overflow-x-auto px-4 py-3">
          <li className="rules-chapter-item flex-shrink-0">
            <NavLink
              to="/regras"
              end
              className={({ isActive }) => cn(
                "inline-flex min-h-[44px] items-center gap-2 rounded-full border px-4 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors",
                isActive ? "border-signal/50 bg-signal/10 text-signal" : "border-stroke bg-panel/80 text-mist hover:border-signal/30 hover:text-bone"
              )}
            >
              <BookOpen className="h-4 w-4" aria-hidden />
              Visão geral
            </NavLink>
          </li>
          {ruleNavLinks.map(({ to, label, chapter, audience }) => (
            <li key={to} className="rules-chapter-item flex-shrink-0">
              <NavLink
                to={to}
                className={({ isActive }) => cn(
                  "inline-flex min-h-[44px] items-center gap-2 rounded-full border px-4 text-sm transition-colors",
                  isActive ? "border-signal/50 bg-signal/10 text-bone" : "border-stroke bg-panel/80 text-mist hover:border-signal/30 hover:text-bone"
                )}
              >
                <span className="font-mono text-[9px] text-signal/80">{String(chapter).padStart(2, "0")}</span>
                <span className="whitespace-nowrap">{label}</span>
                {audience === "mestre" ? <Shield className="h-3.5 w-3.5 text-signal/70" aria-label="Conteúdo do mestre" /> : null}
              </NavLink>
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  return (
    <nav aria-label="Índice das regras" className="h-full w-full overflow-hidden bg-panel/45 backdrop-blur-sm">
      <div className="border-b border-stroke/80 px-5 py-5">
        <p className="font-mono text-[9px] uppercase tracking-ultra text-signal/80">Arquivo de regras</p>
        <h2 className="mt-2 font-display text-2xl font-light italic text-bone">Índice de capítulos</h2>
      </div>

      <div className="p-2">
        <NavLink
          to="/regras"
          end
          className={({ isActive }) => cn(
            "flex items-center gap-3 rounded-lg border px-3 py-3 text-sm transition-colors",
            isActive ? "border-signal/35 bg-signal/10 text-bone" : "border-transparent text-mist hover:border-stroke hover:bg-panel2 hover:text-bone"
          )}
        >
          <BookOpen className="h-4 w-4 text-signal" aria-hidden />
          <span className="flex-1">Visão geral</span>
          <ChevronRight className="h-4 w-4 opacity-50" aria-hidden />
        </NavLink>

        <ol className="mt-1 space-y-1">
          {ruleNavLinks.map(({ to, label, chapter, audience }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => cn(
                  "group flex items-center gap-3 rounded-lg border px-3 py-3 transition-colors",
                  isActive ? "border-signal/35 bg-signal/10 text-bone" : "border-transparent text-mist hover:border-stroke hover:bg-panel2 hover:text-bone"
                )}
              >
                <span className="font-mono text-[10px] text-signal/80">{String(chapter).padStart(2, "0")}</span>
                <span className="min-w-0 flex-1 text-sm leading-snug">{label}</span>
                {audience === "mestre" ? <Shield className="h-3.5 w-3.5 text-signal/70" aria-label="Conteúdo do mestre" /> : null}
                <ChevronRight className="h-4 w-4 opacity-35 transition-transform group-hover:translate-x-0.5 group-hover:opacity-70" aria-hidden />
              </NavLink>
            </li>
          ))}
        </ol>
      </div>

      <p className="border-t border-stroke/80 px-5 py-4 font-mono text-[9px] uppercase tracking-[0.18em] text-mist/70">
        {ruleNavLinks.length} capítulos · leitura sequencial
      </p>
    </nav>
  );
}
