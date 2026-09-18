import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { PageFrame } from "../components/cinematic/PageFrame";
import { CHARACTERS, characterById } from "../data/characters";
import { useArchiveMode } from "../context/ArchiveModeContext";

const attributeLabels = {
  PV: "Pontos de vida",
  PE: "Pontos de esforço",
  For: "Força",
  Res: "Resistência",
  Agi: "Agilidade",
  Sab: "Sabedoria",
  Int: "Inteligência",
  Cha: "Presença",
} as const;

function formatModifier(value: string | number): string {
  const num = Number(value);
  if (!Number.isNaN(num) && num > 0) return `+${num}`;
  return String(value);
}

function parseSkill(skill: string): { name: string; rank?: string } {
  const match = skill.match(/^(.*?)(?:\s+(\d+))?$/);
  return {
    name: match?.[1]?.trim() ?? skill,
    rank: match?.[2] ? `+${match[2]}` : undefined,
  };
}

export function Character() {
  const { id } = useParams<{ id: string }>();
  const character = characterById(id);
  const { mode, setMode } = useArchiveMode();
  const [revealed, setRevealed] = useState(false);

  // Rola para o topo sempre que trocar de personagem (ex: clicar em Próximo ou Relações)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (character) {
      document.title = `${character.fullName} · Dossiê · O Mistério de Ijatu`;
    }
  }, [id, character]);

  if (!character) {
    return (
      <PageFrame eyebrow="404" title="Ficha não encontrada">
        <p className="text-mist">Este nome não consta no elenco do arquivo.</p>
        <Link
          className="mt-6 inline-block font-mono text-xs uppercase tracking-ultra text-signal hover:underline"
          to="/personagens"
        >
          Voltar ao elenco
        </Link>
      </PageFrame>
    );
  }

  const index = CHARACTERS.findIndex((entry) => entry.id === character.id);
  const previous = index > 0 ? CHARACTERS[index - 1] : undefined;
  const next = index < CHARACTERS.length - 1 ? CHARACTERS[index + 1] : undefined;
  const isObservation = character.status.toLowerCase().includes("observa");

  const coreAttributes = [
    { label: "For", name: attributeLabels.For, value: character.attributes.str },
    { label: "Res", name: attributeLabels.Res, value: character.attributes.con },
    { label: "Agi", name: attributeLabels.Agi, value: character.attributes.dex },
    { label: "Sab", name: attributeLabels.Sab, value: character.attributes.knw },
    { label: "Int", name: attributeLabels.Int, value: character.attributes.int },
    { label: "Cha", name: attributeLabels.Cha, value: character.attributes.char },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <PageFrame
        className="max-w-7xl py-8 sm:py-12"
        headerClassName="mb-6 sm:mb-8"
        eyebrow={`Dossiê Investigativo · ${character.roleLabel}`}
        title={character.fullName}
        subtitle={character.summary}
      >
        <div className="mx-auto max-w-6xl">
          {/* Barra superior de navegação e status */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-stroke/60 pb-4">
            <Link
              to="/personagens"
              className="inline-flex items-center gap-1.5 rounded border border-stroke bg-panel/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-ultra text-mist transition hover:border-signal/50 hover:bg-panel hover:text-bone"
            >
              <span>←</span> Voltar ao elenco
            </Link>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-ultra">
              <span className="text-mist/60">Dossiê #{String(index + 1).padStart(2, "0")}</span>
              <span className="h-3 w-px bg-stroke" />
              <span
                className={`rounded px-2.5 py-0.5 ${
                  isObservation
                    ? "border border-amber-500/30 bg-amber-500/10 text-amber-300"
                    : "border border-signal/20 bg-signal/15 text-signal"
                }`}
              >
                {character.status}
              </span>
            </div>
          </div>

          {/* Grid principal estilo Dossiê RPG: Sidebar lateral (Desktop) + Coluna de conteúdo */}
          <div className="character-dossier-grid">
            {/* COLUNA ESQUERDA (SIDEBAR): Retrato, Identificação e Mecânica Rápida */}
            <aside className="character-dossier-sidebar space-y-5 lg:sticky lg:top-20 lg:max-h-[calc(100vh-5.5rem)] lg:overflow-y-auto lg:pr-1">
              {/* Card de Retrato e Dados de Identidade */}
              <section
                className="rounded-xl border border-stroke bg-panel/70 p-5 shadow-panel backdrop-blur-sm"
                aria-labelledby="character-identity-title"
              >
                <div className="relative mx-auto w-44 max-w-full sm:w-48">
                  <div className="overflow-hidden rounded-lg border border-signal/30 bg-abyss p-1 shadow-innerline">
                    <img
                      src={character.profilePic}
                      alt={`Retrato de ${character.fullName}`}
                      width={192}
                      height={192}
                      className="aspect-square w-full rounded object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-signal/40 bg-void px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-ultra text-signal shadow-sm">
                    {character.roleLabel}
                  </span>
                </div>

                <div className="mt-5 text-center">
                  <h2 id="character-identity-title" className="font-display text-xl font-semibold text-bone">
                    {character.fullName}
                  </h2>
                  {character.nickname && character.nickname !== character.fullName ? (
                    <p className="font-mono text-[10px] text-signal/80">“{character.nickname}”</p>
                  ) : null}
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-ultra text-mist/80">
                    {character.occupation} · {character.age} anos
                  </p>
                </div>

                {character.locations && character.locations.length > 0 ? (
                  <div className="mt-4 border-t border-stroke/60 pt-4" aria-label="Locais relacionados">
                    <p className="font-mono text-[9px] uppercase tracking-ultra text-signal/70">
                      Locais frequentes
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {character.locations.map((location) => (
                        <Link
                          key={location}
                          to={`/locais/${location}`}
                          className="rounded-full border border-stroke bg-abyss/60 px-2.5 py-1 font-mono text-[9px] text-mist transition hover:border-signal/50 hover:text-bone"
                        >
                          {location.split("-").join(" ")}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </section>

              {/* Card de Mecânica e Atributos Rápidos */}
              <section
                className="rounded-xl border border-stroke bg-panel/70 p-5 shadow-panel backdrop-blur-sm"
                aria-labelledby="character-stats-title"
              >
                <div className="flex items-center justify-between border-b border-stroke/60 pb-3">
                  <p className="font-mono text-[10px] uppercase tracking-ultra text-signal/85">
                    Resumo Mecânico
                  </p>
                  <span className="font-mono text-[9px] text-mist/60">Sistema Ijatu</span>
                </div>

                {/* Pontos Vitais (PV e PE) em destaque */}
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  <div
                    className="rounded-lg border border-red-900/30 bg-blood/15 p-2.5 text-center shadow-innerline"
                    title={attributeLabels.PV}
                  >
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-red-300/80">
                      Pontos de Vida
                    </span>
                    <span className="mt-1 block font-display text-2xl font-bold text-bone">
                      {character.hitPoints}{" "}
                      <span className="font-sans text-xs font-normal text-mist/70">PV</span>
                    </span>
                  </div>

                  <div
                    className="rounded-lg border border-amber-900/30 bg-signal/10 p-2.5 text-center shadow-innerline"
                    title={attributeLabels.PE}
                  >
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-signal/80">
                      Pontos de Esforço
                    </span>
                    <span className="mt-1 block font-display text-2xl font-bold text-bone">
                      {character.effortPoints}{" "}
                      <span className="font-sans text-xs font-normal text-mist/70">PE</span>
                    </span>
                  </div>
                </div>

                {/* Grade dos 6 Atributos Fundamentais */}
                <div className="mt-4">
                  <p className="mb-2 font-mono text-[9px] uppercase tracking-ultra text-mist/70">
                    Atributos Fundamentais (Rolagem)
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {coreAttributes.map(({ label, name, value }) => (
                      <div
                        key={label}
                        className="group rounded border border-stroke bg-abyss/70 p-2 text-center transition hover:border-signal/40"
                        title={`${name}: ${formatModifier(value)}`}
                      >
                        <span className="block font-mono text-[9px] uppercase text-mist/75 group-hover:text-signal">
                          {label}
                        </span>
                        <span className="mt-0.5 block font-mono text-base font-semibold text-bone">
                          {formatModifier(value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </aside>

            {/* COLUNA DIREITA: Narrativa, Biografia, Perícias e Modo de Mesa */}
            <div className="character-dossier-content space-y-6">
              {/* Citação marcante e Personalidade */}
              <section className="rounded-xl border border-stroke bg-panel/60 p-6 shadow-panel backdrop-blur-sm">
                <p className="font-mono text-[10px] uppercase tracking-ultra text-signal/80">
                  Depoimento & Personalidade
                </p>
                <blockquote className="mt-3 border-l-2 border-signal/50 pl-4 font-display text-2xl italic leading-relaxed text-bone/90 sm:text-3xl">
                  “{character.quote}”
                </blockquote>
                <p className="mt-4 text-sm leading-relaxed text-mist sm:text-base">
                  {character.personality}
                </p>
              </section>

              {/* Dossiê Biográfico: Aparência e História */}
              <section
                className="rounded-xl border border-stroke bg-panel/40 p-6 shadow-panel backdrop-blur-sm"
                aria-labelledby="character-story-title"
              >
                <p className="font-mono text-[10px] uppercase tracking-ultra text-signal/85">
                  Dossiê Biográfico
                </p>
                <h2
                  id="character-story-title"
                  className="mt-1 font-display text-2xl font-light italic text-bone"
                >
                  Aparência e História
                </h2>

                {character.appearance && character.appearance.length > 0 ? (
                  <div className="mt-4">
                    <p className="font-mono text-[9px] uppercase tracking-ultra text-mist/60">
                      Traços Físicos & Porte
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {character.appearance.map((item) => (
                        <li
                          key={item}
                          className="rounded border border-stroke bg-abyss/50 px-2.5 py-1 font-mono text-xs text-bone/85"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-5 border-t border-stroke/60 pt-5">
                  <p className="font-mono text-[9px] uppercase tracking-ultra text-mist/60">
                    Histórico Arquivado
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-mist sm:text-base">
                    {character.history}
                  </p>
                </div>
              </section>

              {/* Perícias e Especialidades */}
              <section
                className="rounded-xl border border-stroke bg-panel/60 p-6 shadow-panel backdrop-blur-sm"
                aria-labelledby="character-skills-title"
              >
                <p className="font-mono text-[10px] uppercase tracking-ultra text-signal/85">
                  Competências
                </p>
                <h2
                  id="character-skills-title"
                  className="mt-1 font-display text-2xl font-light italic text-bone"
                >
                  Perícias e Especialidades
                </h2>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {character.skills.map((skill) => {
                    const parsed = parseSkill(skill);
                    return (
                      <li
                        key={skill}
                        className="flex items-center justify-between rounded border border-stroke/90 bg-abyss/50 px-3.5 py-2.5 text-sm transition hover:border-signal/30"
                      >
                        <span className="flex items-center text-bone/90">
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-signal/70" />
                          {parsed.name}
                        </span>
                        {parsed.rank ? (
                          <span className="rounded bg-signal/15 px-2 py-0.5 font-mono text-xs font-semibold text-signal">
                            {parsed.rank}
                          </span>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </section>

              {/* Painel de Informações de Mesa (Jogador / Mestre) */}
              <section
                className="rounded-xl border border-stroke bg-panel/60 p-5 sm:p-6 shadow-panel backdrop-blur-sm"
                aria-labelledby="table-info-title"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2
                      id="table-info-title"
                      className="font-mono text-[10px] uppercase tracking-ultra text-signal/85"
                    >
                      Informações de Mesa
                    </h2>
                    <p className="mt-1 text-xs text-mist">
                      O modo Jogador é padrão. Pistas e segredos confidenciais requerem liberação no modo Mestre.
                    </p>
                  </div>
                  <div className="inline-flex rounded border border-stroke p-1" role="group" aria-label="Modo de leitura">
                    <button
                      type="button"
                      aria-pressed={mode === "jogador"}
                      onClick={() => {
                        setMode("jogador");
                        setRevealed(false);
                      }}
                      className={`rounded px-3 py-1.5 font-mono text-[10px] uppercase tracking-ultra transition ${
                        mode === "jogador" ? "bg-bone/10 text-bone" : "text-mist hover:text-bone"
                      }`}
                    >
                      Jogador
                    </button>
                    <button
                      type="button"
                      aria-pressed={mode === "mestre"}
                      onClick={() => {
                        setMode("mestre");
                        setRevealed(false);
                      }}
                      className={`rounded px-3 py-1.5 font-mono text-[10px] uppercase tracking-ultra transition ${
                        mode === "mestre" ? "bg-signal/15 text-signal" : "text-mist hover:text-bone"
                      }`}
                    >
                      Mestre
                    </button>
                  </div>
                </div>

                <div className="mt-5 border-t border-stroke pt-5">
                  {mode === "jogador" ? (
                    <p className="text-sm text-mist/70">
                      Arquivo público ativo. Pistas e conteúdo confidencial estão ocultos para preservar o mistério.
                    </p>
                  ) : revealed ? (
                    <div className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <h3 className="font-mono text-[10px] uppercase tracking-ultra text-signal/80">
                            Objetivos
                          </h3>
                          <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-mist">
                            {character.objectives.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>

                          <h3 className="mt-5 font-mono text-[10px] uppercase tracking-ultra text-signal/80">
                            Relações
                          </h3>
                          <ul className="mt-3 space-y-2 text-sm text-mist">
                            {character.relations.map((relation) => (
                              <li key={relation.characterId}>
                                <Link
                                  to={`/personagens/${relation.characterId}`}
                                  className="font-medium text-bone hover:text-signal hover:underline"
                                >
                                  {relation.label}
                                </Link>{" "}
                                — {relation.detail}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-mono text-[10px] uppercase tracking-ultra text-signal/80">
                            Pistas
                          </h3>
                          <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-mist">
                            {character.clues.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>

                          <h3 className="mt-5 font-mono text-[10px] uppercase tracking-ultra text-signal">
                            Segredos Confidenciais
                          </h3>
                          <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-bone/90">
                            {character.secrets.map((item) => (
                              <li key={item} className="text-amber-200/90">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex justify-end border-t border-stroke/60 pt-4">
                        <button
                          type="button"
                          onClick={() => setRevealed(false)}
                          className="rounded border border-stroke px-3 py-1.5 font-mono text-[10px] uppercase tracking-ultra text-mist transition hover:border-signal/50 hover:text-bone"
                        >
                          Ocultar segredos do mestre
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div role="alert" className="rounded-lg border border-signal/20 bg-signal/5 p-4">
                      <p className="text-sm text-mist">
                        Aviso de Campanha: esta ficha contém pistas cruciais e spoilers do mistério.
                      </p>
                      <button
                        type="button"
                        onClick={() => setRevealed(true)}
                        className="mt-3 rounded border border-signal/50 bg-signal/10 px-3.5 py-2 font-mono text-[10px] uppercase tracking-ultra text-signal transition hover:bg-signal/20"
                      >
                        Revelar informações do mestre
                      </button>
                    </div>
                  )}
                </div>
              </section>

              {/* Navegação entre Fichas */}
              <nav
                className="grid gap-3 border-t border-stroke/80 pt-6 sm:grid-cols-2"
                aria-label="Navegação entre fichas"
              >
                {previous ? (
                  <Link
                    to={`/personagens/${previous.id}`}
                    className="group rounded-lg border border-stroke bg-panel/50 p-4 transition hover:border-signal/50 hover:bg-panel"
                  >
                    <span className="block font-mono text-[9px] uppercase tracking-ultra text-mist group-hover:text-signal">
                      ← Ficha Anterior
                    </span>
                    <span className="mt-1 block font-display text-lg text-bone">
                      {previous.fullName}
                    </span>
                  </Link>
                ) : (
                  <Link
                    to="/personagens"
                    className="group rounded-lg border border-stroke bg-panel/50 p-4 transition hover:border-signal/50 hover:bg-panel"
                  >
                    <span className="block font-mono text-[9px] uppercase tracking-ultra text-mist group-hover:text-signal">
                      ← Início do Arquivo
                    </span>
                    <span className="mt-1 block font-display text-lg text-bone">
                      Voltar ao elenco
                    </span>
                  </Link>
                )}

                {next ? (
                  <Link
                    to={`/personagens/${next.id}`}
                    className="group rounded-lg border border-stroke bg-panel/50 p-4 text-right transition hover:border-signal/50 hover:bg-panel"
                  >
                    <span className="block font-mono text-[9px] uppercase tracking-ultra text-mist group-hover:text-signal">
                      Próxima Ficha →
                    </span>
                    <span className="mt-1 block font-display text-lg text-bone">
                      {next.fullName}
                    </span>
                  </Link>
                ) : (
                  <Link
                    to="/personagens"
                    className="group rounded-lg border border-stroke bg-panel/50 p-4 text-right transition hover:border-signal/50 hover:bg-panel"
                  >
                    <span className="block font-mono text-[9px] uppercase tracking-ultra text-mist group-hover:text-signal">
                      Fim do Arquivo
                    </span>
                    <span className="mt-1 block font-display text-lg text-bone">
                      Voltar ao elenco →
                    </span>
                  </Link>
                )}
              </nav>
            </div>
          </div>
        </div>
      </PageFrame>
    </motion.div>
  );
}
