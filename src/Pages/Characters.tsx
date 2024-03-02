import { CharacterCards } from "../components/CharacterCards";
import angelaProfile from "../assets/ProfilePictures/angelaProfile.png";
import pauloProfile from "../assets/ProfilePictures/pauloProfile.png";
import marcosProfile from "../assets/ProfilePictures/marcosProfile.png";
import josefinoProfile from "../assets/ProfilePictures/josefinoProfile.png";
import alvaroProfile from "../assets/ProfilePictures/alvaroProfile.png";
import carlosProfile from "../assets/ProfilePictures/carlosProfile.png";
import alfredoProfile from "../assets/ProfilePictures/alfredoProfile.png";
import franciscaProfile from "../assets/ProfilePictures/franciscaProfile.png";
import isabelProfile from "../assets/ProfilePictures/isabelProfile.png";
import marioProfile from "../assets/ProfilePictures/marioProfile.png"
import {
  PartyPopper,
  Beer,
  BookOpen,
  Axe,
  FlameKindling,
  Church,
  HandMetal,
  Tractor,
  GraduationCap,
  ClipboardPlus,
} from "lucide-react";

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
        <div className="flex sm:flex-row flex-col gap-4 justify-center items-center">
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
        </div>
        <div className="flex sm:flex-row flex-col gap-4 justify-center items-center mt-4">
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
            pro={[
              "Enganação: 2",
              "Intimidação: 1,",
              "Investigação: 2",
              "Intuição: 1",
              "Natureza: 2",
              "Persuasão: 3",
              "Religião: 3",
            ]}
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

          {/* Alvaro */}

          <CharacterCards
            name="Álvaro"
            desc="Álvaro cresceu trabalhando no comércio do pai, onde aprendeu desde cedo o valor do trabalho duro e da dedicação."
            profilePic={alvaroProfile}
            skills={["Trambiqueiro"]}
            icons={[<HandMetal />]}
            personality="- Álvaro é conhecido por sua natureza birrenta e teimosa, muitas vezes entrando em discussões ou brigas por qualquer motivo trivial.
             Ele é frequentemente descrito como alcoólatra, encontrando refúgio nas bebidas alcoólicas para escapar de seus problemas e frustrações.
             Embora seja fisicamente forte, Álvaro não é conhecido por sua inteligência ou perspicácia. Ele é muitas vezes considerado ingênuo ou simplório, confiando mais em sua força bruta do que em sua astúcia.
             Apesar de suas falhas, Álvaro é leal à sua família e amigos próximos, e está sempre disposto a protegê-los com sua força e determinação."
            appearence={{
              height: "1,80m",
              hair: "Negros",
              eyesColor: "Castanhos",
              skinColor: "Morena",
              clothes:
                "Sua vestimenta típica inclui uma camiseta preta, geralmente desgastada e manchada pelo trabalho, que destaca sua figura imponente.",
            }}
            lore={
              "Álvaro cresceu trabalhando no comércio do pai, onde aprendeu desde cedo o valor do trabalho duro e da dedicação. No entanto, sua personalidade birrenta e seu comportamento impulsivo muitas vezes o colocaram em apuros, causando atritos com clientes e colegas de trabalho. Sua luta contra o vício em álcool é uma fonte constante de conflito em sua vida, prejudicando suas relações pessoais e afetando seu desempenho no trabalho. Apesar de seus defeitos, Álvaro é uma alma atormentada em busca de redenção, lutando para superar seus demônios internos e encontrar seu lugar no mundo."
            }
            age={"20"}
            job={"Ajudante Geral no comércio do pai"}
            pro={[
              "Acrobacia: 1",
              "Atletismo: 2",
              "Enganação: 3",
              "Furtividade: 1",
              "Intimidação: 2",
              "Luta: 3",
              "Mãos Leves: 1",
              "Persuasão: 1",
              "Pilotagem: 1",
              "Pontaria: 1",
              "Pontaria: 1",
              "Reflexos: 1",
            ]}
            hp={"6"}
            pe={"2"}
            attr={{
              str: "1",
              con: "1",
              dex: "1",
              knw: "0",
              int: "0",
              char: "1",
            }}
          />
          <CharacterCards
            name="Carlos"
            desc="Inteligente e astuto, Carlos demonstra habilidades excepcionais para resolver problemas práticos relacionados à vida no campo."
            profilePic={carlosProfile}
            skills={["Cuidador de Animais"]}
            icons={[<Tractor />]}
            personality="Inteligente e astuto, Carlos demonstra habilidades excepcionais para resolver problemas práticos relacionados à vida no campo. Ele é trabalhador e dedicado às responsabilidades que possui na granja, ajudando seu pai em diversas tarefas agrícolas e de criação de animais. Apesar de sua juventude, Carlos mostra uma sabedoria além de seus anos, adquirida através da experiência e do trabalho árduo na fazenda e eventualmente é visto saindo com a filha do prefeito."
            appearence={{
              height: "1,74m",
              hair: "Negros",
              eyesColor: "Castanhos",
              skinColor: "Branca",
              clothes:
                "frequentemente visto usando roupas típicas de roça, práticas e confortáveis para suas atividades diárias.",
            }}
            lore={
              "Desde muito jovem, Carlos acompanha seu pai, João Carlos, na administração da fazenda da família. Ele aprendeu os segredos da agricultura e da pecuária desde cedo, desenvolvendo uma profunda conexão com a terra e os animais. Sua vida é marcada pela rotina do campo, onde ele desempenha um papel ativo no manejo dos cultivos e na criação dos animais."
            }
            age={"17"}
            job={"Granjeiro na fazenda do pai"}
            pro={[
              "Atualidade: 1",
              "Atletismo: 1",
              "Investigação: 1",
              "Intuição: 1",
              "Lidar com Animais: 4",
              "Luta: 1",
              "Medicina: 1",
              "Natureza: 2",
              "Percepção: 1",
              "Religião: 1",
              "Sobrevivência: 2",
              "Vontade: 1",
            ]}
            hp={"6"}
            pe={"2"}
            attr={{
              str: "1",
              con: "1",
              dex: "0",
              knw: "1",
              int: "1",
              char: "0",
            }}
          />
        </div>
        <div className="flex sm:flex-row flex-col gap-4 justify-center items-center mt-4">
          <CharacterCards
            name="Alfredo"
            desc="Alfredo é conhecido por sua natureza tímida e reservada, preferindo passar seu tempo estudando ou mergulhado em seus próprios pensamentos."
            profilePic={alfredoProfile}
            skills={["Estudioso"]}
            icons={[<GraduationCap />]}
            personality="Alfredo é conhecido por sua natureza tímida e reservada, preferindo passar seu tempo estudando ou mergulhado em seus próprios pensamentos.
            Ele é extremamente habilidoso com números e cálculos, demonstrando um talento natural para a matemática que o distingue entre seus colegas.
            Apesar de sua timidez, Alfredo é gentil e prestativo com aqueles ao seu redor, sempre disposto a oferecer ajuda quando necessário.
            Como filho do dono do comércio local e irmão de Álvaro, Alfredo muitas vezes se encontra no meio de conflitos familiares e rivalidades, mas prefere evitar confrontos sempre que possível."
            appearence={{
              height: "1,70m",
              hair: "Negros",
              eyesColor: "Castanhos",
              skinColor: "Branca",
              clothes:
                "Ele é frequentemente visto vestindo uma blusa cinza, que parece ser sua escolha preferida de vestuário.",
            }}
            lore={
              "Alfredo cresceu em uma família dedicada ao comércio local, onde sua inteligência e habilidades matemáticas foram notadas desde cedo. Enquanto seu irmão Álvaro se destacava pela força física, Alfredo encontrava conforto nos números e na lógica dos cálculos.  Apesar de sua natureza reservada, Alfredo é uma peça valiosa nos negócios da família, ajudando a gerenciar as finanças e a manter os registros em ordem. Seu talento para a matemática não passou despercebido por seus pais, que têm grandes esperanças para o futuro de seu filho mais novo. Embora ele ainda lute com sua timidez e inseguranças, Alfredo está determinado a seguir seu próprio caminho e provar seu valor no mundo."
            }
            age={"18"}
            job={"Estudante"}
            pro={[
              "Acrobacia: 1",
              "Atualidades: 4",
              "Investigação: 3",
              "Intuição: 1",
              "Mãos Leves: 1",
              "Medicina: 1",
              "Natureza: 2",
              "Percepção: 1",
              "Pilotagem: 1",
              "Pontaria: 1",
              "Reflexos: 1",
              "Religião: 2",
              "Sobrevivência: 1",
              "Vontade: 2",
            ]}
            hp={"6"}
            pe={"2"}
            attr={{
              str: "0",
              con: "0",
              dex: "1",
              knw: "2",
              int: "2",
              char: "0",
            }}
          />
          <CharacterCards
            name="Francisca"
            desc="Francisca é uma mulher durona e responsável, sempre se preocupando com seus pacientes e dando o melhor de si em cada consulta."
            profilePic={franciscaProfile}
            skills={["Médico"]}
            curiosity="Francisca cursou Enfermagem e Medicina na Universidade Unicesumar - Rio Branco - AC. Ela é a melhor amiga da Carmem Carvalho."
            icons={[<ClipboardPlus />]}
            personality=" Francisca é uma mulher durona e responsável, sempre se preocupando com seus pacientes e dando o melhor de si em cada consulta. Ela tem um coração generoso e gosta especialmente de cuidar de crianças. Sua paciência é notável e ela é conhecida por ser uma das pessoas mais tolerantes de Ijatu."
            appearence={{
              height: "1,63m",
              hair: "Ruivos",
              eyesColor: "Castanhos",
              skinColor: "Branca",
              clothes:
                "Ela é frequentemente vista vestindo um jaleco por cima de suas roupas casuais e coloridas.",
            }}
            lore={
              "Francisca Santos é uma figura respeitada em Ijatu, conhecida por sua dedicação à saúde e ao bem-estar da comunidade. Ela estabeleceu uma clínica médica na cidade e dedica-se inteiramente ao cuidado dos habitantes locais. Sua presença é reconfortante e sua habilidade médica é amplamente reconhecida."
            }
            age={"30"}
            job={"Médica"}
            pro={[
              "Enganação: 1",
              "Intimidação: 2",
              "Investigação: 3",
              "Intuição: 1",
              "Medicina: 3",
              "Natureza: 3",
              "Persuasão: 2",
              "Religião: 3",
              "Sobrevivência: 1",
              "Vontade: 3",
            ]}
            hp={"6"}
            pe={"2"}
            attr={{
              str: "0",
              con: "0",
              dex: "0",
              knw: "0",
              int: "3",
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
          <CharacterCards
            name="Isabel Miranda"
            desc="Isabel é uma mulher extremamente adorável e carismática. "
            profilePic={isabelProfile}
            skills={["Fofocando"]}
            personality="Isabel é uma mulher extremamente adorável e carismática. Sua simpatia e gentileza são contagiantes, fazendo com que todos ao seu redor se sintam confortáveis e bem-vindos em sua presença. Ela é conhecida por seu sorriso caloroso e sua disposição para ajudar os outros."
            appearence={{
              height: "1,58m",
              hair: "Grisalhos",
              eyesColor: "Castanhos",
              skinColor: "Branca",
              clothes:
                "Ela é frequentemente vista vestindo um jaleco por cima de suas roupas casuais e coloridas.",
            }}
            lore={
              "Trabalhando como faxineira para os poderosos da cidade há muitos anos, Isabel é uma figura respeitada e estimada por todos que a conhecem. Sua posição lhe proporciona acesso a informações privilegiadas, pois está sempre atenta às conversas que ocorrem ao seu redor enquanto realiza suas tarefas. Apesar de sua ocupação humilde, Isabel é uma mulher de grande integridade e sabedoria. Ela é uma confidente para muitos, oferecendo conselhos sábios e apoio emocional quando necessário. Sua presença é um raio de luz na comunidade, trazendo alegria e conforto a todos os que têm a sorte de conhecê-la."
            }
            age={"62"}
            job={"Faxineira dos poderosos da cidade"}
            pro={[
              "Acrobacia: 1",
              "Lidar com Animais: 1",
              "Investigação: 3",
              "Enganação: 3",
              "Furtividade: 2",
              "Intimidação: 2",
              "Intuição: 3",
              "Mãos Leves: 1",
              "Medicina: 1",
              "Vontade: 3",
              "Percepção: 1",
              "Persuasão: 4",
              "Pontaria: 1",
              "Reflexos: 1",
              "Sobrevivência: 1",
              "Pilotagem: 1",
            ]}
            hp={"6"}
            pe={"2"}
            attr={{
              str: "0",
              con: "0",
              dex: "1",
              knw: "0",
              int: "1",
              char: "2",
            }}
          />
          <CharacterCards
            name="Mário Alcântra"
            desc="Mário Alcântra parece ser uma pessoa encantadora e amigável, com um sorriso caloroso e um jeito afável que conquista a confiança dos outros. "
            profilePic={marioProfile}
            skills={["Língua de Prata"]}
            personality="Por fora, Mário Alcântra parece ser uma pessoa encantadora e amigável, com um sorriso caloroso e um jeito afável que conquista a confiança dos outros. No entanto, por baixo dessa fachada simpática, ele é um indivíduo manipulador e astuto, capaz de qualquer coisa para alcançar seus objetivos. Ele é mestre em jogos de poder e manipulação, utilizando sua inteligência e charme para influenciar os outros e alcançar seus próprios interesses."
            appearence={{
              height: "1,65m",
              hair: "Grisalhos",
              eyesColor: "Pretos",
              skinColor: "Branca",
              clothes:
                "Ele se veste de maneira elegante e impecável, com ternos bem cortados e gravatas combinando, transmitindo uma imagem de autoridade e sofisticação.",
            }}
            lore={
              "Mário Alcântra é o atual prefeito da cidade, uma figura influente e respeitada na comunidade. Ele ascendeu ao poder através de uma combinação de carisma, inteligência e manipulação, construindo uma rede de alianças e favores que o mantêm no topo.  Por trás de sua imagem pública de líder dedicado e visionário, Mário é um político astuto e calculista, sempre planejando seus próximos passos com cuidado e precisão. Ele é conhecido por jogar sujo quando necessário, manipulando situações e pessoas para alcançar seus objetivos pessoais e políticos. Apesar de sua natureza ambiciosa e manipuladora, Mário Alcântra é amplamente admirado e respeitado na cidade, principalmente entre os mais influentes e poderosos. No entanto, aqueles que conhecem sua verdadeira natureza sabem que por trás de seu sorriso amigável se esconde um homem capaz de qualquer coisa para manter seu poder e status."
            }
            age={"62"}
            job={"Faxineira dos poderosos da cidade"}
            pro={[
              "Acrobacia: 1",
              "Enganação: 4",
              "Furtividade: 1",
              "Intimidação: 2",
              "Investigação: 2",
              "Mãos Leves: 1",
              "Natureza: 2",
              "Percepção: 1",
              "Persuasão: 3",
              "Pilotagem: 1",
              "Pontaria: 2",
              "Reflexos: 1",
              "Religião: 2",
            ]}
            hp={"6"}
            pe={"2"}
            attr={{
              str: "0",
              con: "0",
              dex: "1",
              knw: "0",
              int: "2",
              char: "1",
            }}
          />
        </div>
      </div>
    </div>
  );
};