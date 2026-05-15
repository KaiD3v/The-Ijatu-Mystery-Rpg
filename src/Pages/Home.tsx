import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Users, Skull, FileQuestion, MapPin, BookOpen } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const dossierItems = [
  {
    title: "Enigmas",
    text: "Pistas que não se deixam ler na primeira passagem.",
    icon: Search,
  },
  {
    title: "Personagens",
    text: "Cada rosto esconde um álibi ou uma confissão em potencial.",
    icon: Users,
  },
  {
    title: "Ambientes",
    text: "O Acre respira atrás da cortina de árvores e silêncio.",
    icon: Skull,
  },
  {
    title: "Conspiração",
    text: "O que a cidade sabe — e o que finge não ver.",
    icon: FileQuestion,
  },
];

const quickLinks = [
  { to: "/regras", label: "Regras", hint: "Sistema", icon: BookOpen },
  { to: "/locais", label: "Locais", hint: "Mapa mental", icon: MapPin },
  { to: "/personagens", label: "Elenco", hint: "Fichas", icon: Users },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Home = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const blobLRef = useRef<HTMLDivElement>(null);
  const blobRRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = rootRef.current;
    const hero = heroRef.current;
    const bL = blobLRef.current;
    const bR = blobRRef.current;
    if (!root || !hero || !bL || !bR) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bL,
        { y: 0 },
        {
          y: 140,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1.15,
          },
        }
      );
      gsap.fromTo(
        bR,
        { y: 0 },
        {
          y: -110,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1.15,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <section
        ref={heroRef}
        className="relative min-h-[92vh] overflow-hidden px-4 pb-28 pt-16 sm:px-8 sm:pt-24"
      >
        <div
          ref={blobLRef}
          className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-signal/5 blur-3xl will-change-transform"
        />
        <div
          ref={blobRRef}
          className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blood/20 blur-3xl will-change-transform"
        />

        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(234,230,222,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(234,230,222,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stroke/50 pb-6">
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.55em" }}
              animate={{ opacity: 1, letterSpacing: "0.35em" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[10px] uppercase text-signal/90 sm:text-xs"
            >
              Dossiê em andamento
            </motion.p>
            <p className="font-mono text-[10px] uppercase tracking-ultra text-mist/90">
              Ref. BR-AC · IJ-1987 · CONF
            </p>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 max-w-4xl font-display text-5xl font-light leading-[0.95] tracking-tight text-bone sm:text-7xl md:text-8xl text-glow-signal"
          >
            O silêncio
            <span className="block italic text-mist/90">também testemunha.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 max-w-xl font-sans text-lg font-light leading-relaxed text-mist sm:text-xl"
          >
            Um RPG de mistério onde a floresta, a cidade e o medo compartilham a
            mesma mesa. Você não joga apenas — investiga.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              to="/regras"
              className="inline-flex min-h-[48px] items-center justify-center border border-signal/50 bg-signal/10 px-10 py-3 font-mono text-[11px] uppercase tracking-ultra text-bone shadow-glow transition hover:bg-signal/20 hover:shadow-panel"
            >
              Abrir arquivo de regras
            </Link>
            <Link
              to="/historias"
              className="inline-flex min-h-[48px] items-center justify-center border border-stroke px-10 py-3 font-mono text-[11px] uppercase tracking-ultra text-mist transition hover:border-signal/30 hover:text-bone"
            >
              Linha do tempo
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-16 grid gap-3 sm:grid-cols-3"
          >
            {quickLinks.map(({ to, label, hint, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="group flex items-center gap-4 rounded-lg border border-stroke/80 bg-panel/40 px-4 py-4 shadow-innerline backdrop-blur-sm transition hover:border-signal/25 hover:bg-panel/70"
              >
                <Icon className="h-5 w-5 shrink-0 text-signal/65" strokeWidth={1.2} />
                <div className="min-w-0 text-left">
                  <p className="font-mono text-[9px] uppercase tracking-ultra text-mist/80">
                    {hint}
                  </p>
                  <p className="truncate font-display text-lg text-bone">{label}</p>
                </div>
                <span className="ml-auto shrink-0 font-mono text-[9px] uppercase text-signal/0 transition group-hover:text-signal/80">
                  →
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-stroke/60 bg-panel/30 px-4 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="font-mono text-[10px] uppercase tracking-ultra text-signal/80">
              Evidências
            </p>
            <h2 className="mt-4 font-display text-3xl font-light text-bone sm:text-4xl">
              O que o caso exige de você
            </h2>
          </motion.div>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {dossierItems.map(({ title, text, icon: Icon }) => (
              <motion.li
                key={title}
                variants={item}
                className="group relative overflow-hidden rounded border border-stroke/80 bg-panel/60 p-6 shadow-innerline backdrop-blur-sm transition hover:border-signal/25 hover:shadow-glow"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-signal/10 blur-2xl" />
                </div>
                <Icon className="relative h-7 w-7 text-signal/70" strokeWidth={1.25} />
                <h3 className="relative mt-5 font-display text-xl text-bone">{title}</h3>
                <p className="relative mt-3 font-sans text-sm leading-relaxed text-mist">
                  {text}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section id="intro" className="px-4 py-24 sm:px-8">
        <div className="mx-auto max-w-prose">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="font-display text-3xl font-light italic text-bone sm:text-4xl"
          >
            Introdução ao caso
          </motion.h2>
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-10 border-l-2 border-signal/35 pl-6 font-sans text-base font-light leading-relaxed text-mist sm:text-lg"
          >
            Bem-vindo a IJatu Mystery, uma experiência única de RPG de mesa que
            combina um cenário envolvente com um sistema de jogo dinâmico. IJatu
            é uma pequena cidade no coração do Acre: laços profundos, rotinas
            pacíficas — e um assassinato que rasga a superfície. Cabe aos
            jogadores atravessar a névoa, confrontar testemunhas instáveis e
            decidir o que salvar… e o que enterrar de vez.
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Link
              to="/personagens"
              className="inline-flex min-h-[44px] items-center border border-stroke px-6 py-2 font-mono text-[10px] uppercase tracking-ultra text-mist transition hover:border-signal/35 hover:text-bone"
            >
              Ver elenco
            </Link>
            <Link
              to="/contatos"
              className="inline-flex min-h-[44px] items-center border border-transparent px-6 py-2 font-mono text-[10px] uppercase tracking-ultra text-signal/80 underline-offset-4 transition hover:text-signal"
            >
              Canal de contato
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
