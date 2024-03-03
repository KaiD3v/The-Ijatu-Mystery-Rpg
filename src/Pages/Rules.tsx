import { useState } from "react";
import { RulesSideBar } from "../components/RulesSideBar";

export const Rules = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-center">
      {/* Menu lateral */}
      <div className={`flex ${menuOpen ? "" : "hidden"}`}>
        <div className="lg:flex flex-col w-64 bg-gray-800 p-4 justify-start fixed border-r inset-y-0 left-0">
          <div className="flex flex-col items-start">
            <RulesSideBar isOpen={true} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex text-gray-300 flex-col items-center mt-10">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="sm:text-4xl text-gray-50 text-2xl italic font-times mt-4">
            Regras do Jogo
          </h1>
          <p className="max-w-4xl my-6">
            Em um RPG de mesa, as regras são como os pilares que sustentam toda
            a experiência de jogo. Elas servem como guias que definem como o
            mundo fictício é explorado e como os jogadores interagem com ele.
            Desde a criação dos personagens até a resolução de desafios e
            conflitos, as regras estabelecem os limites e as possibilidades
            dentro do universo imaginário do jogo. Ao mesmo tempo, oferecem
            liberdade para que os jogadores contribuam com suas próprias
            histórias e decisões, criando uma narrativa única a cada sessão. São
            as regras que transformam a imaginação em aventura, proporcionando
            momentos de diversão, desafio e colaboração entre os participantes.
            Lembre-se de que as regras são flexíveis e podem ser adaptadas às
            vontades da mesa.
          </p>
          <div className="m-0 p-0 border border-gray-400 w-full" />
          <div>
            <button onClick={toggleMenu} className="text-white">
              Menu de Regras
            </button>
          </div>
          <div className="m-0 p-0 border border-gray-400 w-full" />
        </div>
      </div>
    </div>
  );
};
