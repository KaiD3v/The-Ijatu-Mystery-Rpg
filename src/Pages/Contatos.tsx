import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { PageFrame } from "../components/cinematic/PageFrame";

export function Contatos() {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <PageFrame eyebrow="Canal seguro" title="Contatos" subtitle="Para mesas, leituras de cenário ou parcerias, consulte os canais públicos de autoria do projeto.">
        <div className="mt-10 max-w-lg border-t border-stroke/60 pt-12">
          <div className="inline-flex items-center gap-4 rounded-lg border border-stroke bg-panel/60 px-6 py-5 font-sans text-mist shadow-innerline">
            <Mail className="h-8 w-8 shrink-0 text-signal/70" strokeWidth={1.15} />
            <div className="text-left">
              <p className="font-mono text-[10px] uppercase tracking-ultra text-signal/85">Contato editorial</p>
              <p className="mt-1 text-sm text-bone">Abra uma discussão pública no repositório do projeto.</p>
              <a href="https://github.com/KaiD3v" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-xs text-signal underline-offset-4 hover:underline">
                <Github className="h-3.5 w-3.5" aria-hidden /> github.com/KaiD3v
              </a>
            </div>
          </div>
        </div>
      </PageFrame>
    </motion.div>
  );
}
