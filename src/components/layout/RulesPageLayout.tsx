import { useCallback, useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { RulesSideBar } from "../RulesSideBar";

const RULES_INTRO_COPY = `Em um RPG de mesa, as regras são como os pilares que sustentam toda
a experiência de jogo. Elas servem como guias que definem como o
mundo fictício é explorado e como os jogadores interagem com ele.
Desde a criação dos personagens até a resolução de desafios e
conflitos, as regras estabelecem os limites e as possibilidades
dentro do universo imaginário do jogo. Ao mesmo tempo, oferecem
liberdade para que os jogadores contribuam com suas próprias
histórias e decisões, criando uma narrativa única a cada sessão. São
as regras que transformam a imaginação em aventura, proporcionando
momentos de diversão, desafio e colaboração entre os participantes.
Lembre-se de que as regras são flexíveis e podem ser adaptadas às
vontades da mesa.`;

interface RulesPageLayoutProps {
  children?: ReactNode;
}

const LG = "(min-width: 1024px)";

/** Drawer em portal: fora do motion.div do App (transform quebra `fixed` e empilhamento). */
function RulesMobileDrawerPortal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready || typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            key="rules-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-16 z-[30] bg-[#050508]/92 lg:hidden"
            aria-label="Fechar menu de regras"
            onClick={onClose}
          />
          <motion.div
            key="rules-drawer-panel"
            id="rules-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Índice das regras"
            initial={{ x: "-105%" }}
            animate={{ x: 0 }}
            exit={{ x: "-105%" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 left-0 top-16 z-[35] flex w-[min(18rem,92vw)] max-w-[92vw] flex-col overflow-hidden border-r border-stroke bg-panel shadow-panel lg:hidden"
          >
            <div className="flex shrink-0 items-center justify-between gap-2 border-b border-stroke bg-panel2 px-3 py-3">
              <span className="font-mono text-[10px] uppercase tracking-ultra text-signal/90">
                Índice
              </span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded border border-stroke text-mist transition hover:border-signal/35 hover:text-bone"
                aria-label="Fechar índice"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto">
              <RulesSideBar mode="drawer" onRequestClose={onClose} />
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}

export function RulesPageLayout({ children }: RulesPageLayoutProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);

  useEffect(() => {
    const mq = window.matchMedia(LG);
    const sync = () => {
      if (mq.matches) setDrawerOpen(false);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    if (window.matchMedia(LG).matches) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen, closeDrawer]);

  return (
    <div className="relative z-0 w-full overflow-x-hidden bg-void/40">
      <RulesMobileDrawerPortal open={drawerOpen} onClose={closeDrawer} />

      <div className="mx-auto flex w-full min-w-0 max-w-6xl flex-col lg:flex-row lg:items-start lg:gap-10 lg:px-8">
        <aside className="relative z-0 max-lg:hidden max-h-[min(100vh-6rem,100dvh-6rem)] w-64 shrink-0 overflow-hidden border-stroke/80 bg-panel/95 shadow-innerline backdrop-blur-sm lg:flex lg:flex-col lg:sticky lg:top-20 lg:self-start lg:border-r">
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]">
            <RulesSideBar mode="inline" />
          </div>
        </aside>

        <div className="relative z-0 min-w-0 flex-1 px-4 py-10 sm:px-6 sm:py-14 lg:px-0 lg:py-16">
          <div className="relative isolate mx-auto flex min-w-0 max-w-prose flex-col gap-8 text-left lg:mx-0">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-ultra text-signal/85">
                Protocolo
              </p>
              <h1 className="mt-3 font-display text-4xl font-light italic text-bone sm:text-5xl">
                Regras do jogo
              </h1>
            </div>
            <p className="font-sans text-sm leading-relaxed text-mist sm:text-base">
              {RULES_INTRO_COPY}
            </p>
            <div className="h-px w-full bg-gradient-to-r from-signal/30 via-stroke to-transparent" />
            <div className="lg:hidden">
              {!drawerOpen ? (
                <button
                  type="button"
                  onClick={openDrawer}
                  className="inline-flex min-h-[48px] w-full max-w-xs items-center justify-center border border-stroke bg-panel2/80 px-6 py-3 font-mono text-[10px] uppercase tracking-ultra text-bone transition hover:border-signal/35 hover:bg-panel hover:shadow-glow"
                  aria-expanded={false}
                  aria-controls="rules-drawer"
                >
                  Índice do arquivo
                </button>
              ) : null}
            </div>
            <div className="h-px w-full bg-stroke/80 lg:hidden" />
            <div className="max-w-none min-w-0 font-sans text-base leading-relaxed text-mist [&_strong]:text-bone [&_p]:mb-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
