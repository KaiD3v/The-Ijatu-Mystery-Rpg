import { CharacterCards } from "../components/CharacterCards";
import angelaProfile from "../assets/ProfilePictures/angelaProfile.png";
import pauloProfile from "../assets/ProfilePictures/pauloProfile.png"
import { PartyPopper, Beer, BookOpen } from "lucide-react";

export const Characters = () => {
  return (
    <div>
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
        <div className="flex md:flex-row flex-col justify-center items-center gap-4">
          <CharacterCards
            name="Angêla de Matos"
            desc="Ângela de Matos é uma garçonete extrovertida e empática no Bar do Tonhão."
            profilePic={angelaProfile}
            skills={["Trabalhador Braçal"]}
            icons={[<PartyPopper />, <Beer />]}
            personality="Ângela é uma garota do campo muito extrovertida, empática e amigável."
            curiosity=" Curiosidade: Ângela aprendeu a se defender muito bem, e por ajudar com os serviços braçais do sítio de sua família, ela adquiriu um porte físico bem forte e resistente 💪."
            appearence={{
              height: "5'6",
              hair: "Brown",
              eyesColor: "Green",
              skinColor: "Fair",
              clothes: "Casual",
            }}
            lore={
              "Ângela de Matos cresceu em uma fazenda nos arredores de Ijatu, onde ajudava sua família nos trabalhos rurais desde criança. Quando sua mãe adoeceu, ela começou a trabalhar como garçonete no único bar da cidade para ajudar nas despesas médicas. Apesar das dificuldades, Ângela mantém sua extroversão e empatia, recebendo os clientes com um sorriso caloroso. Enquanto equilibra o trabalho no campo e no bar com o cuidado de sua mãe, ela mantém viva a esperança de um futuro melhor."
            }
            age={"19"}
            job={"Garçonete"}
            pro={[
              "Atletismo: 3",
              "Enganação: 1",
              "Lidar com animais: 1",
              "Luta: 4",
              "Natureza: 1",
              "Sobrevivência: 2",
            ]}
            hp={"7"}
            pe={"2"}
            attr={{
              str: "2",
              con: "1",
              dex: "0",
              knw: "0",
              int: "0",
              char: "0",
            }}
          />
          <CharacterCards
            name="Paulo Sérgio de Almeida"
            desc="Amigável e atencioso, Paulo tende a se conectar facilmente com as pessoas ao seu redor."
            profilePic={pauloProfile}
            skills={["Estudioso"]}
            icons={[<BookOpen />]}
            personality=" É influenciável e tende a acreditar demais na bondade das pessoas, o que pode levá-lo a situações de decepção.
            Seu grande defeito é confiar demasiadamente em quem é gentil com ele, muitas vezes ignorando sinais de alerta."
            appearence={{
              height: "1,93m",
              hair: "Calvo",
              eyesColor: "Preto",
              skinColor: "Branca",
              clothes:
                "Por passar a maior parte do tempo em casa, Paulo prefere roupas despojadas e confortáveis. Ele geralmente veste uma camiseta social larga, com apenas os botões centrais abotoados, combinada com um short grande e de material leve. Seu calçado favorito é uma papete, que o acompanha em todos os lugares.",
            }}
            lore={
              "Curioso e apaixonado por literatura, Paulo sonha em transcrever livros do árabe para o português. Esse desejo nasceu após um encontro marcante com um grupo de imigrantes do Oriente Médio quando era mais jovem."
            }
            age={"31"}
            job={"Bibliotecário"}
            pro={[
              "investigação: 2"
            ]}
            hp={"6"}
            pe={"2"}
            attr={{
              str: "0",
              con: "0",
              dex: "0",
              knw: "0",
              int: "2",
              char: "0",
            }}
          />
        </div>
      </div>

      <div className="justify-center m-10 text-white italic text-center items-center">
        <div className="m-10 flex flex-col justify-center items-center text-left border-b border-gray-600"></div>
        <h1 className="m-4 underline sm:text-4xl text-2xl italic font-times mt-4">
          NPC's / PDM's
        </h1>
        <div className="flex md:flex-row flex-col justify-center items-center gap-4">
          s
        </div>
      </div>
    </div>
  );
};
