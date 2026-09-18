import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LORES } from "../data/lores";
import { PageFrame } from "../components/cinematic/PageFrame";

export function Lores() {
  return <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}><PageFrame eyebrow="Arquivo narrativo" title="Histórias" subtitle="Relatos, recortes e depoimentos em volta do universo de Ijatu. Trate cada registro como evidência: leia devagar, volte atrás, conecte o que não bate.">
    <ul className="mt-4 space-y-2 border-t border-stroke/60 pt-10">{LORES.map((lore, i) => <motion.li key={lore.id} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.45 }}><Link to={`/historias/${lore.id}`} className="group block border-b border-stroke/40 py-4 transition hover:border-signal/30"><div className="flex items-baseline justify-between gap-4"><span className="font-display text-xl italic text-bone/90 sm:text-2xl">{lore.title}</span><span className="shrink-0 font-mono text-[10px] uppercase tracking-ultra text-signal/70">{lore.recordType}</span></div><div className="mt-2 flex flex-wrap gap-3 font-mono text-[9px] uppercase tracking-ultra text-mist/60"><span>{lore.date}</span><span>Status: {lore.status}</span></div></Link></motion.li>)}</ul>
  </PageFrame></motion.div>;
}
