import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useLoreById } from "../hooks/useLoreById";
import { PageFrame } from "../components/cinematic/PageFrame";

export function Lore() {
  const { id } = useParams<{ id: string }>();
  const lore = useLoreById(id);

  if (!lore) {
    return (
      <PageFrame eyebrow="Erro" title="História não encontrada">
        <p className="font-sans text-mist">O índice não contém este registro.</p>
      </PageFrame>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <PageFrame eyebrow="Relato" title={lore.title}>
        <article className="mt-6 max-w-prose border-l-2 border-signal/25 pl-6 font-sans text-lg leading-relaxed text-mist">
          {lore.content ?? ""}
        </article>
      </PageFrame>
    </motion.div>
  );
}
