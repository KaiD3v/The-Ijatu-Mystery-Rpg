import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { PageFrame } from "../components/cinematic/PageFrame";

export function Contatos() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <PageFrame
        eyebrow="Canal seguro"
        title="Contatos"
        subtitle="Para mesas, leituras de cenário ou parcerias — use o assunto “Ijatu” para prioridade na caixa de entrada."
      >
        <div className="mt-10 max-w-lg border-t border-stroke/60 pt-12">
          <a
            href="mailto:contato@exemplo.com?subject=Ijatu%20Mystery"
            className="group inline-flex items-center gap-4 rounded-lg border border-stroke bg-panel/60 px-6 py-5 font-sans text-mist shadow-innerline backdrop-blur-sm transition hover:border-signal/35 hover:text-bone"
          >
            <Mail
              className="h-8 w-8 shrink-0 text-signal/70 transition group-hover:text-signal"
              strokeWidth={1.15}
            />
            <div className="text-left">
              <p className="font-mono text-[10px] uppercase tracking-ultra text-signal/85">
                E-mail
              </p>
              <p className="mt-1 text-sm text-bone">contato@exemplo.com</p>
              <p className="mt-2 text-xs text-mist/80">
                Substitua pelo endereço real da campanha quando publicar.
              </p>
            </div>
          </a>
        </div>
      </PageFrame>
    </motion.div>
  );
}
