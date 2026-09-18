import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CharacterCard } from "../components/CharacterCards";
import { PageFrame } from "../components/cinematic/PageFrame";
import { CHARACTERS } from "../data/characters";

function CharacterGroup({
  title,
  description,
  characters,
}: {
  title: string;
  description: string;
  characters: readonly (typeof CHARACTERS[number])[];
}) {
  if (!characters.length) return null;
  return (
    <section className="mt-12 first:mt-0" aria-labelledby={`characters-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-stroke/60 pb-4">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-ultra text-signal/75">Arquivo de elenco</p>
          <h2 id={`characters-${title.toLowerCase().replace(/\s+/g, "-")}`} className="mt-2 font-display text-3xl font-light italic text-bone">{title}</h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-mist/75">{description}</p>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {characters.map((character) => <CharacterCard key={character.id} character={character} />)}
      </div>
    </section>
  );
}

export function Characters() {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("todos");
  const filtered = useMemo(() => {
    const value = query.trim().toLocaleLowerCase("pt-BR");
    return CHARACTERS.filter((character) => (
      (role === "todos" || character.role === role)
      && (!value || [character.fullName, character.nickname, character.occupation, character.summary, ...character.locations]
        .join(" ").toLocaleLowerCase("pt-BR").includes(value))
    ));
  }, [query, role]);
  const protagonists = filtered.filter((character) => character.role === "protagonista");
  const supportingCast = filtered.filter((character) => character.role !== "protagonista");
  const clear = () => { setQuery(""); setRole("todos"); };

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
      <PageFrame className="max-w-7xl" eyebrow="Elenco" title="Personagens" subtitle="Um elenco de testemunhas, protagonistas e suspeitos. Abra qualquer ficha para compartilhar um dossiê direto.">
        <section className="mx-auto max-w-6xl border-t border-stroke/60 pt-8" aria-labelledby="character-filters-title">
          <h2 id="character-filters-title" className="sr-only">Buscar e filtrar personagens</h2>
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_15rem_auto] md:items-end lg:grid-cols-[minmax(0,1fr)_16rem_auto]">
            <label className="font-mono text-[10px] uppercase tracking-ultra text-signal/85">
              Buscar por nome, ocupação ou local
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: biblioteca, praça..." className="mt-2 block w-full rounded border border-stroke bg-panel px-3 py-3 font-sans text-sm normal-case tracking-normal text-bone placeholder:text-mist/50 focus:border-signal/60 focus:outline-none focus:ring-2 focus:ring-signal/20" />
            </label>
            <label className="font-mono text-[10px] uppercase tracking-ultra text-signal/85">
              Papel narrativo
              <select value={role} onChange={(event) => setRole(event.target.value)} className="mt-2 block w-full rounded border border-stroke bg-panel px-3 py-3 font-sans text-sm normal-case tracking-normal text-bone focus:border-signal/60 focus:outline-none">
                <option value="todos">Todos</option>
                <option value="protagonista">Protagonistas</option>
                <option value="npc">NPCs</option>
                <option value="suspeito">Suspeitos</option>
                <option value="figura-publica">Figuras públicas</option>
              </select>
            </label>
            <button type="button" onClick={clear} disabled={!query && role === "todos"} className="rounded border border-stroke px-4 py-3 font-mono text-[10px] uppercase tracking-ultra text-mist hover:border-signal/40 hover:text-bone disabled:cursor-not-allowed disabled:opacity-40">Limpar</button>
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-ultra text-mist/65" role="status" aria-live="polite">{filtered.length} de {CHARACTERS.length} fichas visíveis</p>
        </section>

        {filtered.length > 0 ? (
          <div className="mx-auto mt-10 max-w-6xl">
            <CharacterGroup title="Protagonistas" description="Personagens disponíveis para conduzir a investigação e tomar decisões em cena." characters={protagonists} />
            <CharacterGroup title="Elenco de apoio" description="Testemunhas, suspeitos e figuras públicas que movem a trama de Ijatu." characters={supportingCast} />
          </div>
        ) : (
          <div className="mx-auto mt-8 max-w-6xl rounded-xl border border-dashed border-stroke p-10 text-center">
            <p className="font-display text-2xl text-bone">Nenhuma ficha encontrada</p>
            <button type="button" onClick={clear} className="mt-5 rounded border border-signal/40 px-4 py-2 font-mono text-[10px] uppercase tracking-ultra text-signal">Limpar filtros</button>
          </div>
        )}
      </PageFrame>
    </motion.div>
  );
}
