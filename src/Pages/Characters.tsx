import { motion } from "framer-motion";
import {
  CharacterCards,
  type CharacterCardProps,
} from "../components/CharacterCards";
import {
  npcCharacterRows,
  protagonistCharacterRows,
} from "../data/characters";

const PROTAGONIST_ROW_CLASS =
  "flex sm:flex-row flex-col gap-4 justify-center items-center";
const NPC_ROW_CLASS =
  "flex md:flex-row flex-col justify-center items-center gap-4";

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="justify-center text-white italic text-center items-center">
        <div>
          <h1 className=" underline sm:text-4xl text-2xl italic font-times mt-4">
            Bem-vindo à nossa página de Personagens!
          </h1>
        </div>
        <div className="m-10 flex flex-col justify-center items-center text-left border-b border-gray-600">
          <div>
            <p className="max-w-4xl my-6">
              Adentre o fascinante universo de [Nome do Universo ou História],
              onde cada personagem é uma peça crucial em um enredo repleto de
              aventuras, mistérios e emoções. Nesta página, convidamos você a
              explorar e descobrir os heróis, vilões e figuras icônicas que
              habitam o mundo vibrante e imaginativo criado por [...]
            </p>
            <p className="max-w-4xl my-6">
              Cada personagem é cuidadosamente elaborado, com uma história
              única, motivações profundas e uma personalidade cativante. Dos
              protagonistas corajosos que enfrentam desafios épicos aos
              antagonistas astutos que conspiram contra eles, cada personagem
              desempenha um papel vital na narrativa envolvente que se desenrola
              diante de nossos olhos.
            </p>
          </div>
        </div>
        <h1 className="m-4 underline sm:text-4xl text-2xl italic font-times mt-4">
          Protagonistas
        </h1>
        {protagonistCharacterRows.map((row, rowIndex) => (
          <div
            key={`protagonist-row-${rowIndex}`}
            className={rowIndex > 0 ? "mt-4" : undefined}
          >
            <CharacterRow
              characters={row}
              className={PROTAGONIST_ROW_CLASS}
            />
          </div>
        ))}
      </div>

      <div className="justify-center m-10 text-white italic text-center items-center">
        <div className="m-10 flex flex-col justify-center items-center text-left border-b border-gray-600"></div>
        <h1 className="m-4 underline sm:text-4xl text-2xl italic font-times mt-4">
          NPC's / PDM's
        </h1>
        {npcCharacterRows.map((row, rowIndex) => (
          <CharacterRow
            key={`npc-row-${rowIndex}`}
            characters={row}
            className={NPC_ROW_CLASS}
          />
        ))}
      </div>
    </motion.div>
  );
}
