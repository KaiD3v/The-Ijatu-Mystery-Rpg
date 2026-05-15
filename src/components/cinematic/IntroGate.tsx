import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "ijatu_cinematic_intro_v1";

export function IntroGate() {
  const [visible, setVisible] = useState(false);

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }
    setVisible(true);
    const t = window.setTimeout(dismiss, 2400);
    return () => window.clearTimeout(t);
  }, [dismiss]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } }}
        >
          <button
            type="button"
            onClick={dismiss}
            className="absolute right-4 top-4 z-[2100] rounded border border-stroke/80 bg-panel/80 px-3 py-2 font-mono text-[10px] uppercase tracking-ultra text-mist transition hover:border-signal/40 hover:text-bone"
          >
            Pular
          </button>
          <motion.div
            initial={{ opacity: 0, y: 12, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.35em" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[10px] uppercase text-signal/90 sm:text-xs"
          >
            Arquivo confidencial
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-4xl font-light tracking-tight text-bone sm:text-6xl md:text-7xl"
          >
            Ijatu
            <span className="block text-center font-sans text-lg font-medium tracking-[0.4em] text-mist sm:text-xl">
              MYSTERY
            </span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 h-px w-32 origin-center bg-gradient-to-r from-transparent via-signal/50 to-transparent"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8 max-w-xs text-center font-mono text-[10px] leading-relaxed text-mist"
          >
            Acesso autorizado apenas para investigação em curso.
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
