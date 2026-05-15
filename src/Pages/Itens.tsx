import { motion } from "framer-motion";
import { ITEMS, WEAPONS } from "../data/catalog";
import { PageFrame } from "../components/cinematic/PageFrame";

const tableWrap =
  "overflow-x-auto rounded-lg border border-stroke bg-panel/50 shadow-innerline backdrop-blur-sm";
const tableClass =
  "hidden w-full min-w-[36rem] border-collapse text-left text-sm sm:table";
const thClass =
  "border-b border-stroke bg-panel2/95 px-3 py-3 font-mono text-[10px] font-normal uppercase tracking-ultra text-signal/90 sm:sticky sm:top-0 sm:z-10";
const tdClass =
  "border-b border-stroke/80 px-3 py-3 align-top font-sans text-mist last:border-b-0";
const rowHover = "transition-colors hover:bg-white/[0.03]";

const cardListClass = "grid gap-4 sm:hidden";

export function Itens() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <PageFrame
        eyebrow="Inventário"
        title="Itens e equipamento"
        subtitle="Tabelas de referência para mesa — leitura densa, como catálogo de evidências."
      >
        <section className="mt-10 space-y-5 border-t border-stroke/60 pt-12">
          <h2 className="font-display text-2xl font-light italic text-bone sm:text-3xl">
            Armas
          </h2>

          <div className={cardListClass}>
            {WEAPONS.map((weapon) => (
              <article
                key={weapon.id}
                className="rounded-lg border border-stroke bg-panel/70 p-4 shadow-innerline"
              >
                <h3 className="font-display text-lg text-bone">{weapon.name}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-mist">
                  {weapon.description}
                </p>
                <dl className="mt-3 grid grid-cols-2 gap-2 font-sans text-sm">
                  <div>
                    <dt className="font-mono text-[9px] uppercase tracking-ultra text-signal/70">
                      Preço
                    </dt>
                    <dd className="font-medium text-bone">Cr$ {weapon.price}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[9px] uppercase tracking-ultra text-signal/70">
                      Dano
                    </dt>
                    <dd className="font-medium text-bone">{weapon.damage}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <div className={tableWrap}>
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Arma</th>
                  <th className={thClass}>Descrição</th>
                  <th className={thClass}>Preço</th>
                  <th className={thClass}>Dano</th>
                </tr>
              </thead>
              <tbody>
                {WEAPONS.map((weapon) => (
                  <tr key={weapon.id} className={rowHover}>
                    <td className={`${tdClass} font-medium text-bone`}>
                      {weapon.name}
                    </td>
                    <td className={tdClass}>{weapon.description}</td>
                    <td className={tdClass}>Cr$ {weapon.price}</td>
                    <td className={tdClass}>{weapon.damage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14 space-y-5">
          <h2 className="font-display text-2xl font-light italic text-bone sm:text-3xl">
            Itens
          </h2>

          <div className={cardListClass}>
            {ITEMS.map((item) => (
              <article
                key={item.id}
                className="rounded-lg border border-stroke bg-panel/70 p-4 shadow-innerline"
              >
                <h3 className="font-display text-lg text-bone">{item.name}</h3>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-ultra text-signal/75">
                  {item.type}
                </p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-mist">
                  {item.description}
                </p>
                <p className="mt-3 font-sans text-sm font-medium text-bone">
                  CR$ {item.price}
                </p>
              </article>
            ))}
          </div>

          <div className={tableWrap}>
            <table className={`${tableClass} min-w-[42rem]`}>
              <thead>
                <tr>
                  <th className={thClass}>Item</th>
                  <th className={thClass}>Tipo</th>
                  <th className={thClass}>Descrição</th>
                  <th className={thClass}>Preço</th>
                </tr>
              </thead>
              <tbody>
                {ITEMS.map((item) => (
                  <tr key={item.id} className={rowHover}>
                    <td className={`${tdClass} font-medium text-bone`}>
                      {item.name}
                    </td>
                    <td className={tdClass}>{item.type}</td>
                    <td className={tdClass}>{item.description}</td>
                    <td className={tdClass}>CR$ {item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-prose border-t border-stroke/60 pt-12">
          <h2 className="font-display text-2xl font-light italic text-bone sm:text-3xl">
            Improvisando
          </h2>
          <p className="mt-4 font-sans leading-relaxed text-mist">
            Às vezes os aventureiros não têm equipamento à mão. Nestes momentos,
            criatividade e improviso viram aliados.
          </p>
          <ul className="mt-6 list-disc space-y-4 pl-5 font-sans text-mist marker:text-signal/50">
            <li>
              <strong className="text-bone">Armas improvisadas:</strong> pedras,
              paus ou ferramentas do ambiente em combates desesperados.
            </li>
            <li>
              <strong className="text-bone">Utensílios de sobrevivência:</strong>{" "}
              folhas, galhos e cascas para abrigos, armadilhas ou pesca.
            </li>
            <li>
              <strong className="text-bone">Disfarces e camuflagem:</strong> tecidos
              e roupas para passar despercebido.
            </li>
            <li>
              <strong className="text-bone">Truques e armadilhas:</strong> cordas e
              mecanismos simples para atrasar inimigos.
            </li>
            <li>
              <strong className="text-bone">Comunicação e sinais:</strong> fumaça,
              pedras ou ramos para mensagens à distância.
            </li>
          </ul>
          <p className="mt-6 font-sans text-sm leading-relaxed text-mist/85">
            A eficácia depende da criatividade, do ambiente e das habilidades dos
            personagens.
          </p>
        </section>
      </PageFrame>
    </motion.div>
  );
}
