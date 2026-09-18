import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { LocalCards } from "../components/LocalCards";
import { PageFrame } from "../components/cinematic/PageFrame";
import { LOCAL_CATEGORIES, LOCALS } from "../data/locals";

export const Locals = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof LOCAL_CATEGORIES)[number]["value"]>("todos");
  const [relevance, setRelevance] = useState("todos");
  const filteredLocals = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    return LOCALS.filter((local) => {
      const matchesCategory = category === "todos" || local.category === category;
      const searchable = [local.title, local.summary, local.atmosphere, ...local.tags, ...local.relatedCharacterIds].join(" ").toLocaleLowerCase("pt-BR");
      const matchesQuery = !normalized || searchable.includes(normalized);
      const matchesRelevance = relevance === "todos" || (relevance === "pistas" ? local.clues.length > 0 : local.relatedEvents.length > 0);
      return matchesCategory && matchesQuery && matchesRelevance;
    });
  }, [category, query, relevance]);
  const hasFilters = Boolean(query || category !== "todos" || relevance !== "todos");
  const clearFilters = () => { setQuery(""); setCategory("todos"); setRelevance("todos"); };

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
      <PageFrame eyebrow="Cenário" title="Locais de Ijatu" subtitle="Cada endereço guarda ruído de folha, cheiro de chuva e versões conflitantes do mesmo fato. Explore o arquivo por categoria ou pista.">
        <section className="mt-10 border-t border-stroke/60 pt-8" aria-labelledby="local-filters-title">
          <h2 id="local-filters-title" className="sr-only">Buscar e filtrar locais</h2>
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_13rem_13rem_auto] md:items-end">
            <label className="font-mono text-[10px] uppercase tracking-ultra text-signal/85">Buscar por título, personagem ou tag<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: floresta, Ângela..." className="mt-2 block w-full rounded border border-stroke bg-panel px-3 py-3 font-sans text-sm normal-case tracking-normal text-bone placeholder:text-mist/50 focus:border-signal/60 focus:outline-none focus:ring-2 focus:ring-signal/20" /></label>
            <label className="font-mono text-[10px] uppercase tracking-ultra text-signal/85">Categoria<select value={category} onChange={(event) => setCategory(event.target.value as typeof category)} className="mt-2 block w-full rounded border border-stroke bg-panel px-3 py-3 font-sans text-sm normal-case tracking-normal text-bone focus:border-signal/60 focus:outline-none">{LOCAL_CATEGORIES.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
            <label className="font-mono text-[10px] uppercase tracking-ultra text-signal/85">Relevância<select value={relevance} onChange={(event) => setRelevance(event.target.value)} className="mt-2 block w-full rounded border border-stroke bg-panel px-3 py-3 font-sans text-sm normal-case tracking-normal text-bone focus:border-signal/60 focus:outline-none"><option value="todos">Todas</option><option value="pistas">Com pistas</option><option value="eventos">Com eventos</option></select></label>
            <button type="button" onClick={clearFilters} disabled={!hasFilters} className="rounded border border-stroke px-4 py-3 font-mono text-[10px] uppercase tracking-ultra text-mist transition hover:border-signal/40 hover:text-bone disabled:cursor-not-allowed disabled:opacity-40">Limpar</button>
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-ultra text-mist/65" role="status" aria-live="polite">{filteredLocals.length} de {LOCALS.length} dossiês visíveis</p>
        </section>
        <div className="mt-8">{filteredLocals.length > 0 ? <LocalCards locals={filteredLocals} /> : <div className="rounded-xl border border-dashed border-stroke p-10 text-center"><p className="font-display text-2xl text-bone">Nenhum local encontrado</p><p className="mt-2 text-sm text-mist">Tente outra palavra-chave ou limpe os filtros do arquivo.</p><button type="button" onClick={clearFilters} className="mt-5 rounded border border-signal/40 px-4 py-2 font-mono text-[10px] uppercase tracking-ultra text-signal">Limpar filtros</button></div>}</div>
      </PageFrame>
    </motion.div>
  );
};
