import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { RulesSideBar } from "../RulesSideBar";

const RULES_INTRO_COPY = "Consulte os capítulos em sequência ou vá direto ao ponto durante a sessão. As regras orientam a investigação, a resolução de riscos e os conflitos sem substituir as decisões da mesa.";

interface RulesPageLayoutProps {
  children?: ReactNode;
}

export function RulesPageLayout({ children }: RulesPageLayoutProps) {
  const { pathname } = useLocation();
  const isOverview = pathname === "/regras" || pathname === "/regras/";
  const [headerOffset, setHeaderOffset] = useState(72);

  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;
    const updateOffset = () => setHeaderOffset(Math.ceil(header.getBoundingClientRect().height));
    updateOffset();
    const observer = new ResizeObserver(updateOffset);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full bg-void/40">
      <div className="sticky z-30 lg:hidden" style={{ top: headerOffset }}>
        <RulesSideBar variant="mobile" />
      </div>

      <div className="flex w-full min-w-0 flex-col lg:flex-row lg:items-stretch">
        <aside
          className="hidden w-72 flex-none border-r border-stroke/80 bg-panel/55 lg:block"
          style={{ minHeight: `calc(100vh - ${headerOffset}px)` }}
        >
          <RulesSideBar variant="desktop" />
        </aside>

        <div className="min-w-0 flex-1 px-4 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16 xl:px-16">
          <div className="mx-auto max-w-3xl">
            {isOverview ? (
              <header className="mb-10 border-b border-stroke/80 pb-8">
                <p className="font-mono text-[10px] uppercase tracking-ultra text-signal/85">Protocolo de mesa</p>
                <h1 className="mt-3 font-display text-4xl font-light italic text-bone sm:text-5xl">Regras do jogo</h1>
                <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-mist">{RULES_INTRO_COPY}</p>
              </header>
            ) : null}

            <div className="min-w-0 font-sans text-base leading-relaxed text-mist [&_strong]:text-bone">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
