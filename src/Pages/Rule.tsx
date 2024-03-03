import { useState, useEffect } from "react";
import { RulesSideBar } from "../components/RulesSideBar";
import { useParams } from "react-router-dom";
import rules from "../json/RulesPattern.json";
import { motion as m } from "framer-motion";

// Defina o tipo para as regras
interface Rule {
  id: string;
  title: string;
  content: string;
}

export const Rule = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { id } = useParams<{ id: string }>();

  const [selectedRule, setSelectedRule] = useState<Rule | null>(null);

  useEffect(() => {
    const rule = rules.regras.find((rule: Rule) => rule.id === id);

    setSelectedRule(rule || null);
  }, [id]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Formatar texto json
  const formatText = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // negrito
      .replace(/_(.*?)_/g, "<u>$1</u>") // sublinhado
      .replace(/\n/g, "<br>"); // quebra de linha
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
      <div className="flex m-10  max-w-2xl text-gray-300 flex-col items-center mt-10">
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
              -- Menu de Regras --
            </button>
          </div>
          <div className="max-w-2xl text-left border border-gray-400" />
          {selectedRule && (
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col gap-8"
              key={selectedRule.id}
            >
              <h1 className="sm:text-4xl underline text-gray-50 text-2xl italic font-times mt-4">
                {selectedRule.title}
              </h1>
              <div className="text-left">
                <p
                  dangerouslySetInnerHTML={{
                    __html: formatText(selectedRule.content),
                  }}
                ></p>
              </div>
            </m.div>
          )}
        </div>
        <div className="mt- p-0 border border-gray-400 w-full" />
      </div>
    </div>
  );
};
