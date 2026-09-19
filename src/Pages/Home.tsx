import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BookOpen, Eye, FileSearch, MapPin, ShieldQuestion, Users } from "lucide-react";
import { DossierCard, MediaFrame, SectionHeader, StatusBadge, ButtonLink } from "../components/ui";
import { getLocalAsset, LOCALS } from "../data/locals";
import { LORES } from "../data/lores";
import angelaProfile from "../assets/ProfilePictures/angelaProfile.png";
import { useLenis } from "../hooks/useLenis";

const featuredCharacter = {
  name: "Ângela de Matos",
  description: "Garçonete e testemunha improvável das conversas que a cidade prefere esquecer.",
  profilePic: angelaProfile,
};

const evidence = [
  { label: "1977", title: "O linchamento", text: "Uma ferida antiga ainda marca os muros da cidade." },
  { label: "1987", title: "O assassinato", text: "Um corpo às margens do rio rompe a rotina de Ijatu." },
  { label: "Agora", title: "As versões", text: "Cada depoimento aponta para uma verdade diferente." },
];

const steps = [
  { icon: Eye, title: "Observe", text: "Leia pistas, mapas e relatos como partes do mesmo arquivo." },
  { icon: Users, title: "Interprete", text: "Reúna uma mesa, escolha personagens e dê voz às testemunhas." },
  { icon: ShieldQuestion, title: "Decida", text: "Conecte evidências e escolha o que sua investigação fará com elas." },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Home() {
  useLenis();
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? undefined
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
      };

  return (
    <div className="relative overflow-hidden">
      <section aria-labelledby="hero-title" className="relative isolate border-b border-stroke/70 px-4 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_20%_10%,rgba(201,162,39,0.11),transparent_64%),radial-gradient(ellipse_55%_65%_at_100%_90%,rgba(92,26,34,0.25),transparent_68%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(234,230,222,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(234,230,222,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-stroke/70 pb-5">
              <StatusBadge>Arquivo em andamento</StatusBadge>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">Acre · 1987 · Caso IJ-01</p>
            </div>
            <motion.h1 id="hero-title" initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease }} className="mt-10 max-w-4xl font-display text-[clamp(3.25rem,9vw,7.5rem)] font-light leading-[0.88] tracking-[-0.03em] text-bone text-glow-signal">
              O silêncio
              <span className="block italic text-mist">também testemunha.</span>
            </motion.h1>
            <motion.p initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16, duration: 0.65 }} className="mt-8 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">
              Um RPG de mesa investigativo ambientado em Ijatu, uma cidade pequena do Acre onde um assassinato quebra a confiança entre vizinhos. Você não recebe a verdade: precisa montá-la.
            </motion.p>
            <motion.div initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.55, ease }} className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <ButtonLink to="/regras" variant="primary">Começar a investigar <ArrowRight className="h-4 w-4" aria-hidden /></ButtonLink>
              <ButtonLink to="/historias" variant="secondary">Ler o caso</ButtonLink>
            </motion.div>
          </div>

          <aside className="relative rounded-xl border border-stroke/80 bg-panel/70 p-5 shadow-panel backdrop-blur-sm sm:p-7" aria-label="Resumo do caso">
            <p className="eyebrow">Nota de campo · 01</p>
            <p className="mt-6 font-display text-2xl leading-tight text-bone sm:text-3xl">Uma mesa para quem prefere perguntas difíceis a respostas prontas.</p>
            <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-stroke/70 pt-5">
              <div><dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal/85">Formato</dt><dd className="mt-1 text-sm text-mist">RPG de mesa</dd></div>
              <div><dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal/85">Tom</dt><dd className="mt-1 text-sm text-mist">Mistério e tensão</dd></div>
              <div><dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal/85">Cenário</dt><dd className="mt-1 text-sm text-mist">Interior do Acre</dd></div>
              <div><dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal/85">Arquivo</dt><dd className="mt-1 text-sm text-mist">Em expansão</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 sm:py-28" aria-labelledby="case-title">
        <div className="mx-auto max-w-7xl">
          <SectionHeader id="case-title" eyebrow="O caso" title="A cidade não esqueceu." description="Na manhã de domingo, um morador é encontrado morto às margens do rio. O crime parece impossível — até que as histórias antigas começam a se repetir." action={<Link className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-signal transition hover:text-bone" to="/historias">Arquivo completo <ArrowRight className="h-3.5 w-3.5" aria-hidden /></Link>} />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {evidence.map((entry, index) => (
              <motion.article key={entry.label} {...(reveal ?? {})} transition={reduceMotion ? undefined : { duration: 0.6, ease, delay: index * 0.08 }} className="relative border-l border-signal/45 px-5 py-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">{entry.label}</p>
                <h3 className="mt-3 font-display text-2xl text-bone">{entry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{entry.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stroke/70 bg-panel/35 px-4 py-20 sm:px-8 sm:py-28" aria-labelledby="highlights-title">
        <div className="mx-auto max-w-7xl">
          <SectionHeader id="highlights-title" eyebrow="Destaques do arquivo" title="Comece por um fio." description="Locais, pessoas e relatos que ajudam a entrar no universo sem precisar conhecer o sistema inteiro." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <DossierCard href="/locais" label="Ver todos os locais">
              <MediaFrame src={LOCALS[0] ? getLocalAsset(LOCALS[0].imageAsset) : undefined} alt="Capa documental da cidade de Ijatu" aspect="landscape" />
              <p className="eyebrow mt-5">Local · Acesso público</p>
              <h3 className="mt-2 font-display text-2xl text-bone">{LOCALS[0]?.title ?? "A cidade de Ijatu"}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-mist">{LOCALS[0]?.summary ?? "O centro de tudo que ainda não foi explicado."}</p>
            </DossierCard>
            <DossierCard href="/personagens" label="Conhecer o elenco">
              <MediaFrame src={featuredCharacter.profilePic} alt="Retrato de Ângela de Matos" aspect="landscape" />
              <p className="eyebrow mt-5">Pessoa · Depoimento</p>
              <h3 className="mt-2 font-display text-2xl text-bone">{featuredCharacter.name}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-mist">{featuredCharacter.description}</p>
            </DossierCard>
            <DossierCard href={`/historias/${LORES[0]?.id ?? ""}`} label="Ler o relato">
              <div className="media-frame aspect-[16/10] bg-[radial-gradient(circle_at_30%_30%,rgba(201,162,39,0.22),transparent_40%),linear-gradient(135deg,#14141f,#08080f)]"><FileSearch className="h-12 w-12 text-signal/70" aria-hidden /></div>
              <p className="eyebrow mt-5">História · Registro 077</p>
              <h3 className="mt-2 font-display text-2xl text-bone">{LORES[0]?.title ?? "O relato perdido"}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-mist">Um eco do passado pode explicar o que a cidade tenta esconder.</p>
            </DossierCard>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 sm:py-28" aria-labelledby="how-title">
        <div className="mx-auto max-w-7xl">
          <SectionHeader id="how-title" eyebrow="Como jogar" title="O arquivo é o seu tabuleiro." description="A experiência foi desenhada para acompanhar uma mesa de RPG e também funcionar como leitura independente para quem está chegando agora." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <motion.div key={title} {...(reveal ?? {})} transition={reduceMotion ? undefined : { duration: 0.6, ease, delay: index * 0.08 }} className="dossier-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-signal/35 bg-signal/10 text-signal"><Icon className="h-5 w-5" aria-hidden /></span>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-mist">0{index + 1}</p>
                <h3 className="mt-2 font-display text-2xl text-bone">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stroke/70 bg-abyss/70 px-4 py-20 sm:px-8 sm:py-24" aria-labelledby="about-title">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow">Sobre o projeto</p>
            <h2 id="about-title" className="mt-3 max-w-2xl font-display text-3xl font-light text-bone sm:text-4xl">Um dossiê autoral para jogar, consultar e imaginar.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-mist sm:text-base">The Sins of Ijatu é um projeto de KaiD3v: uma aplicação React/TypeScript que transforma regras, locais, histórias e personagens em um arquivo navegável. A estética de investigação existe para servir a leitura — nunca para esconder informação.</p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.16em] text-signal/90">
              <a href="https://kaidev.com.br" target="_blank" rel="noreferrer" className="transition hover:text-bone">Portfólio</a>
              <a href="https://github.com/KaiD3v" target="_blank" rel="noreferrer" className="transition hover:text-bone">GitHub</a>
              <Link to="/contatos" className="transition hover:text-bone">Contato</Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink to="/regras" variant="secondary"><BookOpen className="h-4 w-4" aria-hidden /> Regras</ButtonLink>
            <ButtonLink to="/locais" variant="quiet"><MapPin className="h-4 w-4" aria-hidden /> Locais</ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
