import { SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[55vh] flex-col items-center justify-center px-4 py-20 text-bone"
    >
      <div className="max-w-lg text-center">
        <p className="font-mono text-[10px] uppercase tracking-ultra text-signal/90">
          Registro ausente
        </p>
        <h1 className="mt-4 font-display text-3xl font-light italic sm:text-4xl">
          O arquivo termina em branco.
        </h1>
        <p className="mt-4 font-sans text-mist">
          Esta rota não consta no dossiê. Pode ser erro de digitação — ou algo
          apagou o trecho de propósito.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex flex-col items-center gap-3 rounded-lg border border-stroke bg-panel/40 px-8 py-5 font-sans text-sm text-bone shadow-innerline backdrop-blur-sm transition hover:border-signal/30 hover:shadow-glow"
        >
          <SearchX className="h-14 w-14 text-signal/60" strokeWidth={1.15} />
          <span className="font-mono text-[10px] uppercase tracking-ultra text-signal/80">
            Voltar à entrada
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
