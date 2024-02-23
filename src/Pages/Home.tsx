import { Search } from "lucide-react";
import { UsersRound } from "lucide-react";
import { Skull } from "lucide-react";
import MysteriousSvg from "../assets/svg/MysteryouSvg";

export const Home = () => {
  return (
    <div className="flex flex-col gap-10 items-center m-10 font-times">
      <div />
      <div className="flex flex-col mt-4 border-l p-4">
        <h1 className="text-6xl sm:text-9xl pr-4 text-white italic">
          Ijatu Mystery
        </h1>
        <p className="m-3 text-lg sm:text-2xl ml-1 font-extralight italic text-gray-500">
          O melhor rpg de mistério do Brasil!
        </p>
        <div className="flex flex-col sm:flex-row mt-10">
          <button className="text-github bg-gray-100 border rounded-lg m-1 px-10 py-3 transition duration-300 hover:shadow-lg hover:opacity-100">
            Explorar Conteúdo
          </button>
          <button className="text-white border border-white rounded-lg m-1 px-10 py-3 transition duration-500 ease-in-out hover:bg-black hover:border-white hover:opacity-100">
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

      <div className=" ">
        
      </div>
    </div>
  );
};
