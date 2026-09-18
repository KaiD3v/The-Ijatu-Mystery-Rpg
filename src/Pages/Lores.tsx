import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

export function Lores() {
  const [filterType, setFilterType] = useState<string>("todos");

  const filteredLores = filterType === "todos"
    ? LORES
    : LORES.filter((lore) => lore.recordType === filterType);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <PageFrame
        className="max-w-6xl py-8 sm:py-12"
        eyebrow="Arquivo Narrativo"
        title="Histórias e Registros"
        subtitle="Relatos, recortes e depoimentos que formam a memória oculta de Ijatu. Trate cada registro como evidência: cruze datas, nomes e versões para desvendar o que não bate."
      >
        {/* Barra de Filtro por Tipo de Registro */}
        <div className="border-t border-stroke/60 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por tipo de registro">
              <button
                type="button"
                onClick={() => setFilterType("todos")}
                className={`rounded border px-3 py-1.5 font-mono text-[10px] uppercase tracking-ultra transition ${
                  filterType === "todos"
                    ? "border-signal bg-signal/15 text-signal"
                    : "border-stroke bg-panel/40 text-mist hover:border-signal/40 hover:text-bone"
                }`}
              >
                Todos ({LORES.length})
              </button>
              {(["relato", "depoimento", "recorte", "laudo"] as const).map((type) => {
                const count = LORES.filter((l) => l.recordType === type).length;
                if (count === 0) return null;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFilterType(type)}
                    className={`rounded border px-3 py-1.5 font-mono text-[10px] uppercase tracking-ultra transition ${
                      filterType === type
                        ? "border-signal bg-signal/15 text-signal"
                        : "border-stroke bg-panel/40 text-mist hover:border-signal/40 hover:text-bone"
                    }`}
                  >
                    {recordTypeLabels[type]} ({count})
                  </button>
                );
              })}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-ultra text-mist/60">
              {filteredLores.length} registros catalogados
            </span>
          </div>
        </div>

        {/* Lista de Registros Narrativos */}
        <div className="mt-8 space-y-4">
          {filteredLores.map((lore, i) => {
            const statusClass = statusBadges[lore.status as keyof typeof statusBadges] ?? "border-stroke text-mist";
            const recordLabel = recordTypeLabels[lore.recordType as keyof typeof recordTypeLabels] ?? lore.recordType;

            return (
              <motion.article
                key={lore.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="group relative rounded-xl border border-stroke/80 bg-panel/60 p-5 shadow-panel transition-all duration-300 hover:border-signal/40 hover:bg-panel hover:shadow-glow sm:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-ultra text-signal/80">
                      {recordLabel}
                    </span>
                    <span className="text-stroke">•</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-mist/60">
                      {lore.date}
                    </span>
                  </div>
                  <span className={`rounded border px-2 py-0.5 font-mono text-[9px] uppercase tracking-ultra ${statusClass}`}>
                    Status: {lore.status}
                  </span>
                </div>

                <h2 className="mt-3 font-display text-2xl font-light italic text-bone transition group-hover:text-signal sm:text-3xl">
                  <Link to={`/historias/${lore.id}`} className="focus:outline-none">
                    {lore.title}
                  </Link>
                </h2>

                {lore.content ? (
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-mist/85 sm:text-base">
                    {lore.content}
                  </p>
                ) : null}

                {/* Metadados: Local e Personagens envolvidos */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-stroke/50 pt-4">
                  <div className="flex flex-wrap items-center gap-4 text-xs">
                    {lore.locationId ? (
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[9px] uppercase tracking-ultra text-signal/70">Local:</span>
                        <Link
                          to={`/locais/${lore.locationId}`}
                          className="rounded border border-stroke bg-abyss/60 px-2 py-0.5 font-mono text-[10px] text-bone/80 transition hover:border-signal/50 hover:text-signal"
                        >
                          {lore.locationId.split("-").join(" ")}
                        </Link>
                      </div>
                    ) : null}

                    {lore.characterIds && lore.characterIds.length > 0 ? (
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-mono text-[9px] uppercase tracking-ultra text-signal/70">Citações:</span>
                        {lore.characterIds.map((charId) => (
                          <Link
                            key={charId}
                            to={`/personagens/${charId}`}
                            className="rounded border border-stroke bg-abyss/40 px-2 py-0.5 font-mono text-[10px] text-mist transition hover:border-signal/50 hover:text-bone"
                          >
                            {charId.split("-").join(" ")}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <Link
                    to={`/historias/${lore.id}`}
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-ultra text-signal transition group-hover:translate-x-1"
                  >
                    Examinar registro <span>→</span>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </PageFrame>
    </motion.div>
  );
}
