import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useLoreById } from "../hooks/useLoreById";
import { LORES } from "../data/lores";
import { PageFrame } from "../components/cinematic/PageFrame";

export function Lore() {
  const { id } = useParams<{ id: string }>();
  const lore = useLoreById(id);
  if (!lore) return <PageFrame eyebrow="Erro" title="História não encontrada"><p className="font-sans text-mist">O índice não contém este registro.</p><Link to="/historias" className="mt-5 inline-block font-mono text-xs uppercase tracking-ultra text-signal">Voltar ao arquivo</Link></PageFrame>;
  const index = LORES.findIndex((entry) => entry.id === lore.id);
  const previous = index > 0 ? LORES[index - 1] : undefined;
  const next = index < LORES.length - 1 ? LORES[index + 1] : undefined;
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}><PageFrame eyebrow={`Relato · ${lore.recordType}`} title={lore.title} subtitle={`${lore.date} · Status: ${lore.status}`}>
    <article className="mx-auto mt-6 max-w-2xl border-l-2 border-signal/25 pl-6 font-sans text-lg leading-[1.85] text-mist"><p>{lore.content ?? ""}</p><dl className="mt-10 grid gap-3 border-t border-stroke pt-5 text-sm sm:grid-cols-2"><div><dt className="font-mono text-[9px] uppercase tracking-ultra text-signal/70">Local</dt><dd className="mt-1 text-bone">{lore.locationId ? <Link to={`/locais/${lore.locationId}`} className="hover:text-signal">{lore.locationId.split("-").join(" ")}</Link> : "Não catalogado"}</dd></div><div><dt className="font-mono text-[9px] uppercase tracking-ultra text-signal/70">Personagens citados</dt><dd className="mt-1 flex flex-wrap gap-2">{lore.characterIds.map((characterId) => <Link key={characterId} to={`/personagens/${characterId}`} className="text-bone hover:text-signal">{characterId.split("-").join(" ")}</Link>)}</dd></div></dl></article>
    {lore.relatedLoreIds?.length ? <section className="mx-auto mt-10 max-w-2xl border-t border-stroke pt-6"><h2 className="font-mono text-[10px] uppercase tracking-ultra text-signal/80">Registros relacionados</h2><div className="mt-3 flex flex-wrap gap-2">{lore.relatedLoreIds.map((relatedId) => { const related = LORES.find((entry) => entry.id === relatedId); return related ? <Link key={related.id} to={`/historias/${related.id}`} className="rounded border border-stroke px-3 py-2 text-sm text-mist hover:border-signal/50 hover:text-bone">{related.title}</Link> : null; })}</div></section> : null}
    <nav className="mx-auto mt-10 grid max-w-2xl gap-3 border-t border-stroke pt-6 sm:grid-cols-2" aria-label="Navegação entre registros">{previous ? <Link to={`/historias/${previous.id}`} className="rounded border border-stroke p-4 hover:border-signal/50"><span className="block font-mono text-[9px] uppercase tracking-ultra text-mist">← Anterior</span><span className="mt-2 block text-bone">{previous.title}</span></Link> : <span />}{next ? <Link to={`/historias/${next.id}`} className="rounded border border-stroke p-4 text-right hover:border-signal/50"><span className="block font-mono text-[9px] uppercase tracking-ultra text-mist">Próximo →</span><span className="mt-2 block text-bone">{next.title}</span></Link> : null}</nav>
  </PageFrame></motion.div>;
}
