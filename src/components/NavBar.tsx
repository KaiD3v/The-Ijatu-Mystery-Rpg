import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { mainNavLinks } from "../config/navigation";
import { cn } from "../lib/cn";
import { useArchiveMode } from "../context/ArchiveModeContext";

const linkBase =
  "relative block rounded-md px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-mist transition-colors hover:bg-panel/70 hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal";

function routeActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function NavBar() {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const { mode, setMode } = useArchiveMode();

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [closeMenu, pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>("a, button"));
      if (!focusable.length) return;
      const currentIndex = focusable.indexOf(document.activeElement as HTMLElement);
      const nextIndex = event.shiftKey
        ? currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1
        : currentIndex === focusable.length - 1 ? 0 : currentIndex + 1;
      event.preventDefault();
      focusable[nextIndex]?.focus();
    };
    document.addEventListener("keydown", onKeyDown);

    const media = window.matchMedia("(min-width: 1024px)");
    const onDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) closeMenu();
    };
    media.addEventListener?.("change", onDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      media.removeEventListener?.("change", onDesktop);
    };
  }, [closeMenu, mobileOpen]);

  return (
    <header id="site-header" className="sticky top-0 z-50 border-b border-stroke/80 bg-void/90 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/35 to-transparent" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3.5 sm:px-8">
        <Link to="/" className="relative z-10 flex rounded-md flex-col leading-none transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal" onClick={closeMenu} aria-label="The Sins of Ijatu — início">
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-signal/80">The Sins of</span>
          <span className="mt-0.5 font-display text-2xl font-light tracking-tight text-bone sm:text-3xl">Ijatu</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {mainNavLinks.map(({ to, label }) => {
            const active = routeActive(pathname, to);
            return (
              <NavLink key={to} to={to} className={cn(linkBase, active && "bg-panel/50 text-bone")} aria-current={active ? "page" : undefined}>
                <span className="relative z-10">{label}</span>
                {active ? <motion.span layoutId="nav-underline" className="absolute inset-x-2 bottom-1 h-px bg-gradient-to-r from-transparent via-signal to-transparent" transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 30 }} /> : null}
              </NavLink>
            );
          })}
        </nav>
        <div className="hidden items-center rounded border border-stroke/80 p-1 lg:flex" role="group" aria-label="Modo do arquivo" title="O modo Mestre pode revelar spoilers">
          <button type="button" onClick={() => setMode("jogador")} aria-pressed={mode === "jogador"} className={cn("rounded px-2 py-1.5 font-mono text-[9px] uppercase tracking-ultra", mode === "jogador" ? "bg-bone/10 text-bone" : "text-mist")}>Jogador</button>
          <button type="button" onClick={() => setMode("mestre")} aria-pressed={mode === "mestre"} className={cn("rounded px-2 py-1.5 font-mono text-[9px] uppercase tracking-ultra", mode === "mestre" ? "bg-signal/15 text-signal" : "text-mist")}>Mestre</button>
        </div>

        <button ref={toggleRef} type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-stroke/80 bg-panel/80 text-bone transition-colors hover:border-signal/40 hover:bg-panel2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal lg:hidden" aria-expanded={mobileOpen} aria-controls="mobile-nav" aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMobileOpen((value) => !value)}>
          {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.button type="button" aria-label="Fechar menu" className="fixed inset-0 top-[4.5rem] z-0 bg-void/70 lg:hidden" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reduceMotion ? undefined : { opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }} onClick={closeMenu} />
            <motion.nav ref={panelRef} id="mobile-nav" aria-label="Navegação móvel" initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={reduceMotion ? undefined : { height: 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }} className="relative z-10 overflow-hidden border-t border-stroke/60 bg-abyss/98 lg:hidden">
              <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-8">
                <div className="mb-2 flex items-center gap-2 border-b border-stroke pb-3" role="group" aria-label="Modo do arquivo"><span className="mr-auto font-mono text-[9px] uppercase tracking-ultra text-mist">Modo</span><button type="button" onClick={() => setMode("jogador")} aria-pressed={mode === "jogador"} className={cn("rounded border px-3 py-2 font-mono text-[10px] uppercase tracking-ultra", mode === "jogador" ? "border-bone/40 text-bone" : "border-stroke text-mist")}>Jogador</button><button type="button" onClick={() => setMode("mestre")} aria-pressed={mode === "mestre"} className={cn("rounded border px-3 py-2 font-mono text-[10px] uppercase tracking-ultra", mode === "mestre" ? "border-signal/40 text-signal" : "border-stroke text-mist")}>Mestre</button></div>
                {mainNavLinks.map(({ to, label }) => {
                  const active = routeActive(pathname, to);
                  return <NavLink key={to} to={to} onClick={closeMenu} aria-current={active ? "page" : undefined} className={cn("rounded-md border px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal", active ? "border-signal/35 bg-panel text-bone" : "border-transparent text-mist hover:border-stroke hover:bg-panel/60 hover:text-bone")}>{label}</NavLink>;
                })}
              </div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
