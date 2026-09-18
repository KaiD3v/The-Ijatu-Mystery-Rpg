import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion as m } from "framer-motion";
import { RulesPageLayout } from "../components/layout/RulesPageLayout";
import { useRuleById } from "../hooks/useRuleById";
import { RULES } from "../data/rules";
import type { GameRule } from "../types/content";
import { useArchiveMode } from "../context/ArchiveModeContext";

function RuleArticle({ rule }: { rule: GameRule }) {
  const [currentSection, setCurrentSection] = useState(rule.sections[0]?.id ?? "");
  const [revealed, setRevealed] = useState(false);
  const { mode } = useArchiveMode();
  useEffect(() => {
    const sections = rule.sections.map((section) => document.getElementById(`regra-${section.id}`)).filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) return undefined;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setCurrentSection(entry.target.id.replace("regra-", ""))), { rootMargin: "-20% 0px -65%", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [mode, revealed, rule.sections]);

  if (rule.audience === "mestre" && mode === "jogador") return <section className="rounded border border-signal/30 bg-signal/5 p-5" aria-label="Conteúdo reservado ao mestre"><h1 className="font-display text-3xl font-light italic text-bone">Registro reservado ao mestre</h1><p className="mt-3 text-sm leading-relaxed text-mist">Este capítulo contém orientação de condução e spoilers. Ative o modo Mestre no controle de mesa para revelar o conteúdo.</p></section>;
  if (rule.audience === "mestre" && !revealed) return <section className="rounded border border-signal/30 bg-signal/5 p-5" role="alert"><h1 className="font-display text-3xl font-light italic text-bone">Conteúdo do mestre</h1><p className="mt-3 text-sm leading-relaxed text-mist">Este capítulo pode revelar informações da campanha. Confirme para abrir.</p><button type="button" onClick={() => setRevealed(true)} className="mt-4 rounded border border-signal/50 px-3 py-2 font-mono text-[10px] uppercase tracking-ultra text-signal">Revelar capítulo</button></section>;
  const index = RULES.findIndex((item) => item.id === rule.id);
  const previous = index > 0 ? RULES[index - 1] : undefined;
  const next = index >= 0 && index < RULES.length - 1 ? RULES[index + 1] : undefined;
  return <m.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col gap-8">
    <header className="border-b border-stroke/80 pb-4"><p className="font-mono text-[10px] uppercase tracking-ultra text-signal/75">Capítulo {String(index + 1).padStart(2, "0")}</p><h1 className="mt-2 font-display text-3xl font-light italic text-bone sm:text-4xl">{rule.title}</h1></header>
    <nav className="rounded border border-stroke bg-panel/50 p-4" aria-label="Sumário deste capítulo"><p className="font-mono text-[10px] uppercase tracking-ultra text-signal/90">Neste capítulo</p><ol className="mt-3 grid gap-1 sm:grid-cols-2">{rule.sections.map((section) => <li key={section.id}><a href={`#regra-${section.id}`} aria-current={currentSection === section.id ? "location" : undefined} className={`block rounded px-2 py-1.5 text-sm transition ${currentSection === section.id ? "bg-signal/10 text-signal" : "text-mist hover:bg-panel2 hover:text-bone"}`}>{section.title}</a></li>)}</ol></nav>
    {rule.sections.map((section) => <section key={section.id} id={`regra-${section.id}`} className="rule-section-anchor"><h2 className="font-display text-2xl font-light italic text-bone">{section.title}</h2><div className="mt-3 space-y-4 text-left font-sans text-base leading-relaxed text-mist">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets ? <ul className="list-disc space-y-2 pl-5 marker:text-signal/70">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}{section.table ? <div className="overflow-x-auto rounded border border-stroke"><table className="w-full min-w-[18rem] text-left text-sm"><tbody>{section.table.map((row) => <tr key={row.heading} className="border-b border-stroke last:border-0"><th scope="row" className="px-3 py-2 font-mono text-xs text-signal">{row.heading}</th><td className="px-3 py-2 text-mist">{row.value}</td></tr>)}</tbody></table></div> : null}{section.callout ? <aside className="rounded border-l-2 border-signal/60 bg-signal/5 px-4 py-3 text-sm text-bone" role="note">{section.callout}</aside> : null}</div></section>)}
    <nav className="grid gap-3 border-t border-stroke pt-6 sm:grid-cols-2" aria-label="Navegação entre capítulos">{previous ? <Link to={`/regras/${previous.id}`} className="rounded border border-stroke p-4 text-left transition hover:border-signal/50 hover:bg-panel/60"><span className="block font-mono text-[9px] uppercase tracking-ultra text-mist">← Anterior</span><span className="mt-2 block text-bone">{previous.title}</span></Link> : <Link to="/regras" className="rounded border border-stroke p-4 text-left transition hover:border-signal/50 hover:bg-panel/60"><span className="block font-mono text-[9px] uppercase tracking-ultra text-mist">← Retornar</span><span className="mt-2 block text-bone">Visão geral</span></Link>}{next ? <Link to={`/regras/${next.id}`} className="rounded border border-stroke p-4 text-right transition hover:border-signal/50 hover:bg-panel/60"><span className="block font-mono text-[9px] uppercase tracking-ultra text-mist">Próximo →</span><span className="mt-2 block text-bone">{next.title}</span></Link> : <Link to="/regras" className="rounded border border-stroke p-4 text-right transition hover:border-signal/50 hover:bg-panel/60"><span className="block font-mono text-[9px] uppercase tracking-ultra text-mist">Concluir</span><span className="mt-2 block text-bone">Voltar ao índice →</span></Link>}</nav>
  </m.article>;
}

export function Rule() { const { id } = useParams<{ id: string }>(); const selectedRule = useRuleById(id); return <RulesPageLayout>{selectedRule ? <RuleArticle rule={selectedRule} /> : <p className="font-mono text-sm text-mist">Trecho não localizado no arquivo.</p>}</RulesPageLayout>; }
