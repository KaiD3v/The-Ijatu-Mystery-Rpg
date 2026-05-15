import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mainNavLinks } from "../config/navigation";
import { cn } from "../lib/cn";

const linkBase =
  "relative block px-4 py-2 font-mono text-[10px] uppercase tracking-ultra text-mist transition-colors hover:text-bone";

function routeActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function NavBar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stroke/80 bg-void/85 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/35 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-8">
        <Link
          to="/"
          className="relative z-10 flex flex-col leading-none transition-opacity hover:opacity-90"
          onClick={() => setMobileOpen(false)}
        >
          <span className="font-display text-2xl font-light tracking-tight text-bone sm:text-3xl">
            Ijatu
          </span>
          <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.55em] text-signal/80">
            Mystery
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNavLinks.map(({ to, label }) => {
            const active = routeActive(pathname, to);
            return (
              <NavLink
                key={to}
                to={to}
                className={cn(linkBase, active ? "text-bone" : "")}
              >
                <span className="relative z-10">{label}</span>
                {active ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 bottom-1 h-px bg-gradient-to-r from-transparent via-signal to-transparent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </NavLink>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-stroke/80 bg-panel/80 text-bone transition-colors hover:border-signal/40 hover:bg-panel2 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-stroke/60 bg-abyss/95 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {mainNavLinks.map(({ to, label }) => {
                const active = routeActive(pathname, to);
                return (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded border border-transparent px-4 py-3 font-mono text-xs uppercase tracking-widest transition-colors",
                      active
                        ? "border-signal/30 bg-panel text-bone shadow-glow"
                        : "text-mist hover:border-stroke hover:bg-panel/60 hover:text-bone"
                    )}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
