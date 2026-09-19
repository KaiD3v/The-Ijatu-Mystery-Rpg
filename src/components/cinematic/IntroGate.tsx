import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const STORAGE_KEY = "ijatu_cinematic_intro_v1";

export function IntroGate() {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const skipRef = useRef<HTMLButtonElement>(null);

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Sessões sem storage continuam funcionando normalmente.
    }
  }, []);

  useEffect(() => {
    // A abertura cinematográfica contextualiza a home; deep links devem ir direto ao conteúdo.
    if (pathname !== "/") {
      setVisible(false);
      return;
    }
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // Em modo privado, ainda mostramos a experiência e permitimos pular.
    }

    setVisible(true);
    const timeout = window.setTimeout(dismiss, reduceMotion ? 700 : 1500);
    return () => window.clearTimeout(timeout);
  }, [dismiss, pathname, reduceMotion]);

  useEffect(() => {
    if (!visible) return;
    skipRef.current?.focus();
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && pathname === "/" ? (
        <motion.div
          key="intro"
          role="dialog"
          aria-modal="true"
          aria-labelledby="intro-title"
          className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-void px-6"
          initial={reduceMotion ? false : { opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] } }}
        >
          <button
            ref={skipRef}
            type="button"
            onClick={dismiss}
            className="absolute right-4 top-4 z-[2100] rounded-md border border-stroke/80 bg-panel/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-mist transition hover:border-signal/40 hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          >
            Pular introdução
          </button>
          <motion.p initial={reduceMotion ? false : { opacity: 0, y: 8, letterSpacing: "0.5em" }} animate={{ opacity: 1, y: 0, letterSpacing: "0.35em" }} transition={{ duration: reduceMotion ? 0 : 0.65 }} className="font-mono text-[10px] uppercase text-signal sm:text-xs">
            Arquivo confidencial
          </motion.p>
          <motion.h1 id="intro-title" initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: reduceMotion ? 0 : 0.15, duration: reduceMotion ? 0 : 0.55 }} className="mt-6 text-center font-display text-5xl font-light tracking-tight text-bone sm:text-7xl">
            <span className="block text-center font-mono text-xs font-semibold tracking-[0.45em] text-signal/90 sm:text-sm">THE SINS OF</span>
            <span className="mt-1 block">Ijatu</span>
          </motion.h1>
          <motion.div initial={reduceMotion ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: reduceMotion ? 0 : 0.4, duration: reduceMotion ? 0 : 0.55 }} className="mt-10 h-px w-32 origin-center bg-gradient-to-r from-transparent via-signal/50 to-transparent" />
          <p className="mt-8 max-w-xs text-center font-mono text-[10px] leading-relaxed text-mist">Acesso autorizado apenas para investigação em curso.</p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
