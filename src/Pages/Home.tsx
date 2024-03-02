import { Search } from "lucide-react";
import { UsersRound } from "lucide-react";
import { Skull } from "lucide-react";
import { motion } from "framer-motion";
import MysteriousSvg from "../assets/svg/MysteryouSvg";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col h-full sm:gap-36 gap-20 items-center m-10 font-times"
    >
      <div />
      <div className="">
        <div className="flex flex-col mt-4 border-l p-4 h-sc">
          <h1 className="text-6xl sm:text-9xl pr-4 text-gray-200 italic">
            Ijatu Mystery
          </h1>
          <p className="m-3 text-lg sm:text-2xl ml-1 font-extralight italic text-gray-500">
            O melhor rpg de mistério do Brasil!
          </p>
          <div className="flex flex-col sm:flex-row mt-10">
            <button className="text-github bg-gray-100 border rounded-lg m-1 px-10 py-3 transition duration-300 hover:bg-github hover:text-gray-50 hover:opacity-100">
              Explorar Conteúdo
            </button>
            <button className="text-white border border-white rounded-lg m-1 px-10 py-3 transition duration-500 ease-in-out hover:bg-gray-50 hover:text-github hover:border-white hover:opacity-100">
              Baixar Livros
            </button>
          </div>
        </div>

        <div className="w-full max-w-2xl min-w-2xl border-r">
          <div className="mt-4">
            <p className="sm:text-2xl text-xl font-extralight italic text-gray-500">
              O que espera por você:
            </p>
            <ul className="sm:flex sm:flex-row  flex-col items-center justify-center gap-4 bg-gray-300 border-none rounded-lg m-1 p-2">
              <li className="text-black flex items-center">
                <Search className="mr-2" size={30} color="black" />
                Enigmas Intrigantes
              </li>
              <li className="text-black flex items-center">
                <UsersRound className="mr-2" size={30} color="black" />
                Personagens Misteriosos
              </li>
              <li className="text-black flex items-center">
                <Skull className="mr-2" size={30} color="black" />
                Ambientes Sombrios
              </li>
              <li className="text-black flex items-center">
                <MysteriousSvg />
                Conspirações Obscuras
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="m-0 p-0 border border-gray-400 w-full" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex justify-center items-center max-w-2xl"
      >
        <div className="flex gap justify-center items-center flex-col mt-4 border-l p-4 h-sc">
          <h1 className="text-6xl sm:text-7xl pr-4 text-gray-200 italic">
            Introdução
          </h1>
          <p className="m-3 text-lg sm:text-xl ml-1 font-extralight italic text-gray-500">
            "Bem-vindo a IJatu Mystery, uma experiência única de RPG de mesa que combina
            um cenário envolvente com um sistema de jogo dinâmico! IJatu é uma
            pequena cidade situada no coração do interior do Acre. Nesta
            comunidade autosustentável, os habitantes vivem em harmonia com a
            natureza, cada um desempenhando um papel crucial na vida cotidiana
            da cidade. Os laços de amizade e confiança são profundos entre os
            moradores de IJatu, onde todos se conhecem pelo nome e compartilham
            um senso de comunidade único. No entanto, a tranquilidade de IJatu é
            repentinamente quebrada quando um assassinato misterioso ocorre em
            uma manhã de domingo, lançando a cidade em um turbilhão de intriga e
            suspeita. Como parte deste emocionante RPG de mesa, os jogadores
            assumirão o papel de bravos aventureiros que se deparam com o
            desafio de desvendar os segredos ocultos da cidade e restaurar a paz
            perdida. O Mistério de IJatu apresenta um sistema de jogo inovador,
            projetado para proporcionar uma experiência imersiva e emocionante.
            Com regras simplificadas e flexíveis, os jogadores terão a liberdade
            de explorar o cenário, interagir com personagens intrigantes e
            resolver mistérios intrigantes. Cada escolha dos jogadores moldará o
            destino da cidade e de seus habitantes, levando a aventuras
            emocionantes e repletas de suspense. Prepare-se para uma jornada
            inesquecível em Sombras sobre IJatu, onde o destino da cidade está
            em suas mãos e a coragem será testada contra os perigos que
            espreitam nas sombras."
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
