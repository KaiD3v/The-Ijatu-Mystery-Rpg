import { motion } from "framer-motion";
import {
  CharacterCards,
  type CharacterCardProps,
} from "../components/CharacterCards";
import { PageFrame } from "../components/cinematic/PageFrame";
import {
  npcCharacterRows,
  protagonistCharacterRows,
} from "../data/characters";

const PROTAGONIST_ROW_CLASS =
  "flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-10";
const NPC_ROW_CLASS =
  "flex flex-col items-center justify-center gap-8 md:flex-row md:gap-10";

function CharacterRow({
  characters,
  className,
}: {
  characters: CharacterCardProps[];
  className: string;
}) {
  return (
    <div className={className}>
      {characters.map((character) => (
        <CharacterCards key={character.name} {...character} />
      ))}
    </div>
  );
}

export function Characters() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <PageFrame
        eyebrow="Elenco"
        title="Personagens"
        subtitle="Protagonistas e figuras que movem o mistério em Ijatu — cada ficha é um depoimento disfarçado de estatística."
      >
        <section className="border-t border-stroke/60 pt-12">
          <h2 className="font-mono text-[10px] uppercase tracking-ultra text-signal/85">
            Protagonistas
          </h2>
          {protagonistCharacterRows.map((row, rowIndex) => (
            <div
              key={`protagonist-row-${rowIndex}`}
              className={rowIndex > 0 ? "mt-10" : "mt-8"}
            >
              <CharacterRow
                characters={row}
                className={PROTAGONIST_ROW_CLASS}
              />
            </div>
          ))}
        </section>

        <section className="mt-20 border-t border-stroke/60 pt-16">
          <h2 className="font-mono text-[10px] uppercase tracking-ultra text-signal/85">
            NPC&apos;s / PDM&apos;s
          </h2>
          <div className="mt-8">
            {npcCharacterRows.map((row, rowIndex) => (
              <CharacterRow
                key={`npc-row-${rowIndex}`}
                characters={row}
                className={rowIndex > 0 ? `${NPC_ROW_CLASS} mt-10` : NPC_ROW_CLASS}
              />
            ))}
          </div>
        </section>
      </PageFrame>
    </motion.div>
  );
}
