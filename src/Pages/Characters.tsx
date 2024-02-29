import { CharacterCards } from "../components/CharacterCards";
import angelaProfile from "../assets/ProfilePictures/angelaProfile.png";
import pauloProfile from "../assets/ProfilePictures/pauloProfile.png";
import marcosProfile from "../assets/ProfilePictures/marcosProfile.png";
import josefinoProfile from "../assets/ProfilePictures/josefinoProfile.png"
import { PartyPopper, Beer, BookOpen, Axe, FlameKindling, Church } from "lucide-react";

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
              eyesColor: "Pretos",
              skinColor: "Branca",
              clothes:
                "Por passar a maior parte do tempo em casa, Paulo prefere roupas despojadas e confortáveis. Ele geralmente veste uma camiseta social larga, com apenas os botões centrais abotoados, combinada com um short grande e de material leve. Seu calçado favorito é uma papete, que o acompanha em todos os lugares.",
            }}
            lore={
              "Curioso e apaixonado por literatura, Paulo sonha em transcrever livros do árabe para o português. Esse desejo nasceu após um encontro marcante com um grupo de imigrantes do Oriente Médio quando era mais jovem."
            }
            age={"31"}
            job={"Bibliotecário"}
            pro={["investigação: 2"]}
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
          <CharacterCards
            name="Marcos Santos"
            desc="Marcos é um homem de poucas palavras, quieto e reservado."
            profilePic={marcosProfile}
            skills={["Trabalhador Braçal"]}
            icons={[<Axe />, <FlameKindling />]}
            personality=" Ele prefere a solidão da floresta à agitação da cidade e tem uma conexão profunda com a natureza ao seu redor. Apesar de sua natureza solitária, ele é observador e atento aos detalhes, demonstrando uma sabedoria silenciosa em suas ações."
            appearence={{
              height: "1,90m",
              hair: "Negros",
              eyesColor: "Castanhos",
              skinColor: "Bronzeada pelo sol",
              clothes:
                "Ele veste roupas simples e práticas, geralmente uma camisa xadrez desgastada, calças jeans resistentes e botas de couro gastas pela trilha.",
            }}
            lore={
              "Marcos é um lenhador experiente que vive em uma pequena cabana isolada nas profundezas da floresta. Ele aprendeu desde cedo a sobreviver na natureza, desenvolvendo habilidades de caça, rastreamento e sobrevivência que o tornaram um mestre do ambiente selvagem. Apesar de sua vida solitária, Marcos não é insensível à presença humana. De tempos em tempos, ele visita o Bar do Tonhão na cidade próxima, onde troca suas mercadorias por suprimentos essenciais e compartilha breves conversas com os habitantes locais. No entanto, sua verdadeira casa está entre as árvores altas e o silêncio tranquilo da floresta, onde ele se sente verdadeiramente em paz."
            }
            age={"30"}
            job={"Lenhador/Seringueiro"}
            pro={[
              "Atletismo: 2",
              "Intuição: 2",
              "Lidar com Animais: 1",
              "Luta: 2",
              "Medicina: 1",
              "Sobrevivencia: 1",
            ]}
            hp={"8"}
            pe={"2"}
            attr={{
              str: "2",
              con: "2",
              dex: "0",
              knw: "1",
              int: "2",
              char: "0",
            }}
          />

          <CharacterCards
            name="Joséfino"
            desc="Joséfino é reverenciado como uma figura respeitada e admirada na comunidade como padre e líder espiritual."
            profilePic={josefinoProfile}
            skills={["Língua de Prata"]}
            icons={[<Church />]}
            personality="Extremamente inteligente e eloquente, Joséfino é reverenciado como uma figura respeitada e admirada na comunidade como padre e líder espiritual. No entanto, por trás de sua fachada piedosa, ele esconde uma natureza manipuladora e ambiciosa. Ele é capaz de usar sua inteligência e carisma para alcançar seus objetivos, muitas vezes às custas dos outros. Joséfino é conhecido por seus acordos sujos com o prefeito da cidade, envolvendo-se em práticas questionáveis em busca de poder e riqueza."
            appearence={{
              height: "1,80m",
              hair: "Negros",
              eyesColor: "Castanhos",
              skinColor: "Branca",
              clothes:
                "Ele veste roupas simples e práticas, geralmente uma camisa xadrez desgastada, calças jeans resistentes e botas de couro gastas pela trilha.",
            }}
            lore={
              "Nascido e criado na cidade de Ijatu, Joséfino seguiu uma trajetória de vida que o levou ao sacerdócio. Como líder da única igreja da cidade, ele exerce uma influência significativa sobre os habitantes locais, usando sua posição para consolidar seu poder e alcançar seus próprios interesses. Apesar de sua vida financeira aparentemente próspera, há segredos sombrios por trás da fachada piedosa de Joséfino, revelando um homem disposto a fazer qualquer coisa para manter seu domínio sobre a comunidade."
            }
            age={"45"}
            job={"Padre"}
            pro={["Enganação: 2",
                  "Intimidação: 1,",
                  "Investigação: 2",
                  "Intuição: 1",
                  "Natureza: 2",
                  "Persuasão: 3",
                  "Religião: 3"]}
            hp={"6"}
            pe={"2"}
            attr={{
              str: "0",
              con: "0",
              dex: "0",
              knw: "0",
              int: "2",
              char: "1",
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
