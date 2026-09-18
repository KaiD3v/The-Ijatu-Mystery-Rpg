import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useLoreById } from "../hooks/useLoreById";
import { LORES } from "../data/lores";
import { PageFrame } from "../components/cinematic/PageFrame";

const statusBadges = {
  aberto: "border-signal/40 bg-signal/10 text-signal",
  contestado: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  confirmado: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
} as const;

const recordTypeLabels = {
  relato: "Relato de Testemunha",
  depoimento: "Depoimento Registrado",
  recorte: "Recorte Documental",
  laudo: "Laudo Pericial",
} as const;

export function Lore() {
  const { id } = useParams<{ id: string }>();
  const lore = useLoreById(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (lore) {
      document.title = `${lore.title} · Histórias · O Mistério de Ijatu`;
    }
  }, [id, lore]);

  if (!lore) {
    return (
      <PageFrame eyebrow="Arquivo" title="História não encontrada">
        <p className="font-sans text-mist">O índice não contém este registro narrativo.</p>
        <Link
          to="/historias"
          className="mt-5 inline-block font-mono text-xs uppercase tracking-ultra text-signal hover:underline"
        >
          ← Voltar ao arquivo de histórias
        </Link>
      </PageFrame>
    );
  }

  const index = LORES.findIndex((entry) => entry.id === lore.id);
  const previous = index > 0 ? LORES[index - 1] : undefined;
  const next = index < LORES.length - 1 ? LORES[index + 1] : undefined;
  const statusClass = statusBadges[lore.status as keyof typeof statusBadges] ?? "border-stroke text-mist";
  const recordLabel = recordTypeLabels[lore.recordType as keyof typeof recordTypeLabels] ?? lore.recordType;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <PageFrame
        className="max-w-4xl py-8 sm:py-12"
        eyebrow={`Registro Documental · ${recordLabel}`}
        title={lore.title}
        subtitle={`Documento datado em ${lore.date} · Arquivo de Ijatu`}
      >
        <div className="border-t border-stroke/60 pt-6">
          {/* Barra de cabeçalho: Voltar + Status */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-stroke/40 pb-4">
            <Link
              to="/historias"
              className="inline-flex items-center gap-1.5 rounded border border-stroke bg-panel/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-ultra text-mist transition hover:border-signal/50 hover:bg-panel hover:text-bone"
            >
              <span>←</span> Todas as histórias
            </Link>
            <div className="flex items-center gap-2">
              <span className={`rounded border px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-ultra ${statusClass}`}>
                Status: {lore.status}
              </span>
            </div>
          </div>

          {/* Artigo / Conteúdo do Documento */}
          <article className="rounded-xl border border-stroke bg-panel/60 p-6 shadow-panel backdrop-blur-sm sm:p-10">
            <div className="border-l-2 border-signal/40 pl-6">
              <p className="font-serif text-lg leading-[1.9] text-bone/90 sm:text-xl sm:leading-[2]">
                {lore.content ?? ""}
              </p>
            </div>

            {/* Metadados: Local e Personagens citados */}
            <dl className="mt-10 grid gap-6 border-t border-stroke/60 pt-6 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-[9px] uppercase tracking-ultra text-signal/80">
                  Local Vinculado
                </dt>
                <dd className="mt-2">
                  {lore.locationId ? (
                    <Link
                      to={`/locais/${lore.locationId}`}
                      className="inline-flex rounded-full border border-stroke bg-abyss/60 px-3 py-1 font-mono text-xs text-bone transition hover:border-signal/50 hover:text-signal"
                    >
                      {lore.locationId.split("-").join(" ")} →
                    </Link>
                  ) : (
                    <span className="text-sm text-mist/60">Não catalogado</span>
                  )}
                </dd>
              </div>

              <div>
                <dt className="font-mono text-[9px] uppercase tracking-ultra text-signal/80">
                  Personagens Citados
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {lore.characterIds && lore.characterIds.length > 0 ? (
                    lore.characterIds.map((characterId) => (
                      <Link
                        key={characterId}
                        to={`/personagens/${characterId}`}
                        className="rounded-full border border-stroke bg-abyss/60 px-3 py-1 font-mono text-xs text-bone transition hover:border-signal/50 hover:text-signal"
                      >
                        {characterId.split("-").join(" ")}
                      </Link>
                    ))
                  ) : (
                    <span className="text-sm text-mist/60">Nenhum personagem registrado</span>
                  )}
                </dd>
              </div>
            </dl>
          </article>

          {/* Registros Relacionados */}
          {lore.relatedLoreIds && lore.relatedLoreIds.length > 0 ? (
            <section className="mt-10 rounded-xl border border-stroke bg-panel/40 p-6 shadow-panel">
              <p className="font-mono text-[10px] uppercase tracking-ultra text-signal/80">
                Conexões Documentais
              </p>
              <h2 className="mt-1 font-display text-xl font-light italic text-bone">
                Registros Relacionados
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {lore.relatedLoreIds.map((relatedId) => {
                  const related = LORES.find((entry) => entry.id === relatedId);
                  if (!related) return null;
                  return (
                    <Link
                      key={related.id}
                      to={`/historias/${related.id}`}
                      className="group block rounded-lg border border-stroke bg-panel/60 p-4 transition hover:border-signal/50 hover:bg-panel"
                    >
                      <span className="block font-mono text-[9px] uppercase tracking-ultra text-signal/70">
                        {related.recordType} · {related.date}
                      </span>
                      <span className="mt-1 block font-display text-base italic text-bone group-hover:text-signal">
                        {related.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          ) : null}

          {/* Navegação Entre Registros */}
          <nav
            className="mt-10 grid gap-3 border-t border-stroke/80 pt-6 sm:grid-cols-2"
            aria-label="Navegação entre registros"
          >
            {previous ? (
              <Link
                to={`/historias/${previous.id}`}
                className="group rounded-lg border border-stroke bg-panel/50 p-4 transition hover:border-signal/50 hover:bg-panel"
              >
                <span className="block font-mono text-[9px] uppercase tracking-ultra text-mist group-hover:text-signal">
                  ← Registro Anterior
                </span>
                <span className="mt-1 block font-display text-base italic text-bone">
                  {previous.title}
                </span>
              </Link>
            ) : (
              <Link
                to="/historias"
                className="group rounded-lg border border-stroke bg-panel/50 p-4 transition hover:border-signal/50 hover:bg-panel"
              >
                <span className="block font-mono text-[9px] uppercase tracking-ultra text-mist group-hover:text-signal">
                  ← Arquivo Geral
                </span>
                <span className="mt-1 block font-display text-base italic text-bone">
                  Voltar às histórias
                </span>
              </Link>
            )}

            {next ? (
              <Link
                to={`/historias/${next.id}`}
                className="group rounded-lg border border-stroke bg-panel/50 p-4 text-right transition hover:border-signal/50 hover:bg-panel"
              >
                <span className="block font-mono text-[9px] uppercase tracking-ultra text-mist group-hover:text-signal">
                  Próximo Registro →
                </span>
                <span className="mt-1 block font-display text-base italic text-bone">
                  {next.title}
                </span>
              </Link>
            ) : (
              <Link
                to="/historias"
                className="group rounded-lg border border-stroke bg-panel/50 p-4 text-right transition hover:border-signal/50 hover:bg-panel"
              >
                <span className="block font-mono text-[9px] uppercase tracking-ultra text-mist group-hover:text-signal">
                  Fim do Arquivo
                </span>
                <span className="mt-1 block font-display text-base italic text-bone">
                  Voltar às histórias →
                </span>
              </Link>
            )}
          </nav>
        </div>
      </PageFrame>
    </motion.div>
  );
}
