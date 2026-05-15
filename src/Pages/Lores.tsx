import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LORES } from "../data/lores";
import { PageFrame } from "../components/cinematic/PageFrame";

export function Lores() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <PageFrame
        eyebrow="Arquivo narrativo"
        title="Histórias"
        subtitle="Narrativas em volta do universo de Ijatu — mistério, tensão e mundos imaginários. Trate cada texto como evidência: leia devagar, volte atrás, conecte o que não bate."
      >
        <ul className="mt-4 space-y-2 border-t border-stroke/60 pt-10">
          {LORES.map((lore, i) => (
            <motion.li
              key={lore.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
            >
              <Link
                to={`/historias/${lore.id}`}
                className="group flex items-baseline justify-between gap-4 border-b border-stroke/40 py-4 font-display text-xl text-bone/90 transition hover:border-signal/30 hover:text-bone sm:text-2xl"
              >
                <span className="italic">{lore.title}</span>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-ultra text-signal/70 opacity-0 transition group-hover:opacity-100">
                  Abrir
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </PageFrame>
    </motion.div>
  );
}
