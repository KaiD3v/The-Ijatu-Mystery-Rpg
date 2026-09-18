import { ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { RulesPageLayout } from "../components/layout/RulesPageLayout";
import { RULES } from "../data/rules";
import { useArchiveMode } from "../context/ArchiveModeContext";

export function Rules() {
  const { mode } = useArchiveMode();

  return (
    <RulesPageLayout>
      <section aria-labelledby="rules-chapters-title">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-ultra text-signal/75">Consulta rápida</p>
            <h2 id="rules-chapters-title" className="mt-2 font-display text-3xl font-light italic text-bone">Escolha um capítulo</h2>
          </div>
          <span className="hidden font-mono text-[9px] uppercase tracking-ultra text-mist/70 sm:block">{RULES.length} registros</span>
        </div>

        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {RULES.map((rule, index) => (
            <li key={rule.id} className={index === 0 ? "sm:col-span-2" : undefined}>
              <Link
                to={`/regras/${rule.id}`}
                className="group flex h-full min-h-[12rem] flex-col rounded-xl border border-stroke/80 bg-panel/70 p-5 shadow-innerline transition hover:-translate-y-0.5 hover:border-signal/40 hover:bg-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-ultra text-signal/80">Capítulo {String(index + 1).padStart(2, "0")}</span>
                  {rule.audience === "mestre" ? <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/25 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-signal"><Shield className="h-3 w-3" aria-hidden /> Mestre</span> : null}
                </div>
                <h3 className="mt-4 font-display text-2xl font-light italic text-bone">{rule.title}</h3>
                <p className="rules-card-summary mt-3 text-sm leading-relaxed text-mist">
                  {rule.audience === "mestre" && mode === "jogador"
                    ? "Orientações de condução reservadas. Ative o modo Mestre para consultar este capítulo."
                    : rule.content}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 font-mono text-[9px] uppercase tracking-ultra text-bone">
                  Abrir capítulo
                  <ArrowRight className="h-4 w-4 text-signal transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </RulesPageLayout>
  );
}
