import { LocalCards } from "../components/LocalCards";
import { motion } from "framer-motion";
import { PageFrame } from "../components/cinematic/PageFrame";

export const Locals = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <PageFrame
        eyebrow="Cenário"
        title="Locais de Ijatu"
        subtitle="Cada endereço guarda ruído de folha, cheiro de chuva e versões conflitantes do mesmo fato. A cidade é um personagem — e ela mente com frequência."
      >
        <div className="mt-10 border-t border-stroke/60 pt-12">
          <LocalCards />
        </div>
      </PageFrame>
    </motion.div>
  );
};
