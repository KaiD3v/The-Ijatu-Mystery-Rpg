import type { CharacterId, GameLocal, LocalAssetId, LocalId } from "../types/content";

/** Conteúdo usa IDs estáveis; as origens visuais ficam isoladas nesta camada. */
export const LOCAL_ASSETS: Partial<Record<LocalAssetId, string>> = {
  "local-cidade-ijatu": "/assets/locations/dossier-cover.svg",
  "local-praca-central": "/assets/locations/dossier-cover.svg",
  "local-igreja": "/assets/locations/dossier-cover.svg",
  "local-boteco-tonhao": "/assets/locations/dossier-cover.svg",
  "local-bosque-seringueiras": "/assets/locations/dossier-cover.svg",
  "local-escola": "/assets/locations/dossier-cover.svg",
  "local-mercado": "/assets/locations/dossier-cover.svg",
  "local-cemiterio": "/assets/locations/dossier-cover.svg",
  "local-hospital": "/assets/locations/dossier-cover.svg",
  "local-acampamento": "/assets/locations/dossier-cover.svg",
  "local-casa-angela": "/assets/locations/dossier-cover.svg",
  "local-casa-paulo": "/assets/locations/dossier-cover.svg",
  "local-casa-marcos": "/assets/locations/dossier-cover.svg",
  "local-casa-josefino": "/assets/locations/dossier-cover.svg",
  "local-casa-francisca": "/assets/locations/dossier-cover.svg",
  "local-casa-isabel-cida": "/assets/locations/dossier-cover.svg",
  "local-casa-damiao": "/assets/locations/dossier-cover.svg",
  "local-casa-tonhao": "/assets/locations/dossier-cover.svg",
  "map-cidade-ijatu": "/assets/maps/evidence-map.svg",
  "map-praca-central": "/assets/maps/evidence-map.svg",
  "map-igreja": "/assets/maps/evidence-map.svg",
  "map-boteco-tonhao": "/assets/maps/evidence-map.svg",
  "map-escola": "/assets/maps/evidence-map.svg",
  "map-mercado": "/assets/maps/evidence-map.svg",
  "map-cemiterio": "/assets/maps/evidence-map.svg",
  "map-hospital": "/assets/maps/evidence-map.svg",
  "map-acampamento": "/assets/maps/evidence-map.svg",
  "map-casa-josefino": "/assets/maps/evidence-map.svg",
};

export function getLocalAsset(assetId: LocalAssetId): string {
  return LOCAL_ASSETS[assetId] ?? "";
}

const local = (value: Omit<GameLocal, "fileNumber">, index: number): GameLocal => ({
  fileNumber: `IJ-${String(index).padStart(2, "0")}`,
  ...value,
});

const common = (id: LocalId, title: string, category: GameLocal["category"], summary: string, imageAsset: LocalAssetId, x: number, y: number, tags: readonly string[], characterIds: readonly CharacterId[], index: number, details: Partial<GameLocal> = {}): GameLocal => local({
  id, title, category, summary, atmosphere: "Um lugar onde a rotina parece normal até alguém fazer a pergunta certa.", imageAsset,
  coordinates: { x, y }, tags, relatedCharacterIds: characterIds,
  publicFacts: [summary], gmSecrets: ["Uma informação ainda não confirmada aguarda investigação no modo Mestre."], clues: ["Um detalhe do ambiente pode contradizer um depoimento."], relatedEvents: ["O caso de domingo"], ...details,
}, index);

export const LOCALS = [
  common("cidade-ijatu", "A cidade de Ijatu", "urbano", "Uma cidade pequena, cercada pela mata e por versões conflitantes do mesmo crime.", "local-cidade-ijatu", 50, 50, ["centro", "investigação", "comunidade"], ["angela-matos", "josefino", "julio-soares"], 1, { mapAsset: "map-cidade-ijatu", publicFacts: ["Ijatu é uma comunidade autossustentável do interior do Acre.", "Um assassinato recente interrompeu a rotina de domingo."], gmSecrets: ["Os assassinatos seguem um padrão que só aparece quando os horários são comparados."], clues: ["A praça é o ponto comum entre depoimentos aparentemente desconexos."], atmosphere: "Calor úmido, ruas quietas e a sensação de que todas as janelas observam." }),
  common("praca-central", "Praça Central", "urbano", "O palco dos eventos da cidade e o melhor lugar para observar quem chega e quem sai.", "local-praca-central", 50, 43, ["centro", "eventos", "testemunhas"], ["angela-matos", "carmen-carvalho", "isabel-miranda"], 2, { publicFacts: ["A praça recebe festas, homenagens e vendedores itinerantes.", "No fim da tarde, moradores de todas as idades circulam por ali."], gmSecrets: ["Uma das estátuas tem um compartimento usado para recados."], clues: ["Uma marca recente no banco norte.", "Um vendedor recorda uma capa escura na noite do crime."], relatedEvents: ["Domingo de silêncio"], atmosphere: "Árvores podadas, bancos quentes e conversas que param quando um estranho passa." }),
  common("igreja", "Igreja de Ijatu", "religioso", "Construída em 1832, a igreja guarda a memória oficial — e algumas omissões.", "local-igreja", 51, 30, ["história", "religião", "arquivo"], ["josefino"], 3, { mapAsset: "map-igreja", publicFacts: ["É o prédio mais antigo do centro.", "A comunidade usa o salão como abrigo em períodos de chuva."], gmSecrets: ["O livro de doações possui páginas arrancadas no mês do crime."], clues: ["Uma homenagem recente não aparece no livro público."], relatedEvents: ["A missa das testemunhas"], atmosphere: "Madeira antiga, velas apagadas e eco de passos no corredor lateral." }),
  common("boteco-tonhao", "Boteco do Tonhão", "comercial", "Bar, armazém e central informal de notícias para quem sabe ouvir.", "local-boteco-tonhao", 37, 53, ["rumores", "bebidas", "noite"], ["angela-matos", "marcos-santos", "julio-soares"], 4, { mapAsset: "map-boteco-tonhao", publicFacts: ["É o único estabelecimento que vende bebidas alcoólicas na cidade.", "Tonhão troca produtos e notícias com viajantes."], gmSecrets: ["Uma entrega foi registrada na madrugada anterior ao crime."], clues: ["A conta de uma mesa foi paga por alguém que não consta nas câmeras."], relatedEvents: ["A última rodada"], atmosphere: "Luz amarela, madeira gasta e o cheiro persistente de bebida e chuva." }),
  common("bosque-seringueiras", "Bosque das Seringueiras", "natureza", "Um bosque preservado na borda da mata, marcado por antigas rotas de extração.", "local-bosque-seringueiras", 17, 42, ["floresta", "trilhas", "natureza"], ["marcos-santos", "mario-alcantara"], 5, { publicFacts: ["O bosque é cercado por um portão de madeira.", "Antigos acampamentos de extração ainda aparecem entre as árvores."], gmSecrets: ["Uma trilha secundária liga o bosque à casa de Damião."], clues: ["Pegadas recentes desviam da trilha principal."], relatedEvents: ["A trilha que não consta no mapa"], atmosphere: "Folhas molhadas, casca branca e ruídos que parecem próximos demais." }),
  common("escola", "Escola Miranda de Assis", "servico", "A única escola de Ijatu também serve como arquivo vivo das famílias locais.", "local-escola", 62, 66, ["crianças", "educação", "registros"], ["carmen-carvalho", "carlos"], 6, { mapAsset: "map-escola", publicFacts: ["A escola atende crianças de toda a região.", "Carmen mantém uma horta com os alunos."], gmSecrets: ["Um caderno de chamada registra uma visita fora do horário."], clues: ["Uma criança desenhou a mesma caminhonete vista perto do bosque."], relatedEvents: ["A aula interrompida"], atmosphere: "Giz, ventiladores lentos e desenhos infantis cobrindo paredes antigas." }),
  common("mercado", "Mercado Soares", "comercial", "O maior comércio da cidade, onde suprimentos e favores mudam de mãos.", "local-mercado", 67, 46, ["comércio", "suprimentos", "família"], ["julio-soares", "alfredo", "alvaro"], 7, { mapAsset: "map-mercado", publicFacts: ["A família Soares vende alimentos, ferramentas e combustível.", "O estoque chega por estrada uma vez por semana."], gmSecrets: ["Há uma segunda contabilidade escondida atrás do depósito."], clues: ["Uma nota fiscal contradiz o horário de chegada da carga."], relatedEvents: ["A entrega de quarta-feira"], atmosphere: "Corredores apertados, rádio baixo e caixas empilhadas até o teto." }),
  common("cemiterio", "Cemitério", "religioso", "Um cemitério antigo na borda da mata, onde a neblina chega antes da noite.", "local-cemiterio", 78, 75, ["memória", "neblina", "morte"], ["josefino", "isabel-miranda"], 8, { mapAsset: "map-cemiterio", publicFacts: ["Duas estátuas guardam a entrada.", "As sepulturas mais novas ficam próximas ao muro leste."], gmSecrets: ["Uma lápide foi mexida sem registro do coveiro."], clues: ["Terra vermelha recente sob uma coroa de flores."], relatedEvents: ["O nome apagado"], atmosphere: "Pedras úmidas, estátuas gastas e silêncio quebrado por insetos." }),
  common("hospital", "Clínica da Francisca", "servico", "O único centro médico de Ijatu e o lugar onde todos deixam algum rastro.", "local-hospital", 28, 69, ["saúde", "prontuários", "testemunhas"], ["francisca-santos", "carmen-carvalho"], 9, { mapAsset: "map-hospital", publicFacts: ["Francisca atende a comunidade com equipe reduzida.", "A clínica possui uma pequena sala de observação."], gmSecrets: ["Um ferimento foi tratado sem registro no prontuário oficial."], clues: ["Fibras de tecido encontradas em uma gaze descartada."], relatedEvents: ["A madrugada na clínica"], atmosphere: "Desinfetante, chuva na janela e prontuários cuidadosamente organizados." }),
  common("acampamento", "Acampamento de Ijatu", "natureza", "Abrigo de viajantes nos arredores, com fogueiras e histórias de passagem.", "local-acampamento", 12, 78, ["viajantes", "estrada", "mata"], ["marcos-santos", "mario-alcantara"], 10, { mapAsset: "map-acampamento", publicFacts: ["O acampamento oferece abrigo temporário e espaço para fogueiras.", "Mercadores costumam pernoitar antes de seguir viagem."], gmSecrets: ["Um viajante deixou uma caixa lacrada sob a mesa comunal."], clues: ["Cinzas ainda quentes numa manhã sem movimento."], relatedEvents: ["O visitante sem nome"], atmosphere: "Fumaça doce, lona úmida e vozes que chegam da mata." }),
  common("casa-angela", "Casa de Ângela", "residencial", "Uma pequena fazenda nos arredores, dividida entre trabalho e cuidado familiar.", "local-casa-angela", 83, 25, ["fazenda", "família", "arredores"], ["angela-matos"], 11, { publicFacts: ["Ângela mora com a mãe e ajuda nos trabalhos da propriedade."], gmSecrets: ["A mãe de Ângela reconheceu uma voz na noite do crime."], clues: ["Uma lanterna foi devolvida com a lente quebrada."], relatedEvents: ["O barulho no pasto"], atmosphere: "Terra vermelha, ferramentas rurais e o som distante de animais." }),
  common("casa-paulo", "Casa de Paulo", "residencial", "Uma casa pequena, cheia de estantes e traduções inacabadas.", "local-casa-paulo", 40, 22, ["livros", "estudo", "correspondência"], ["paulo-sergio"], 12, { publicFacts: ["Paulo mantém uma coleção de livros e anotações de idiomas."], gmSecrets: ["Uma página traduzida menciona um nome que deveria ser desconhecido."], clues: ["Um envelope sem remetente escondido num dicionário."], relatedEvents: ["A tradução interrompida"], atmosphere: "Papel, café frio e poeira iluminada pela janela." }),
  common("casa-marcos", "Casa de Marcos", "residencial", "Uma cabana isolada entre árvores, próxima às rotas de caça e extração.", "local-casa-marcos", 9, 22, ["cabana", "floresta", "sobrevivência"], ["marcos-santos"], 13, { publicFacts: ["Marcos vive sozinho e conhece as trilhas da região."], gmSecrets: ["Ele guarda um mapa de pegadas que não compartilhou com a polícia."], clues: ["Uma ferramenta limpa demais para ter sido usada na mata."], relatedEvents: ["Rastros no barro"], atmosphere: "Lenha, couro molhado e o silêncio profundo da floresta." }),
  common("casa-josefino", "Casa de Josefino", "residencial", "Uma das maiores casas da cidade, atrás da igreja e de seus jardins bem cuidados.", "local-casa-josefino", 73, 19, ["autoridade", "jardim", "segredos"], ["josefino"], 14, { mapAsset: "map-casa-josefino", publicFacts: ["Josefino recebe moradores para conversas privadas."], gmSecrets: ["Um quarto permanece trancado desde a semana do crime."], clues: ["A chave reserva não está no lugar habitual."], relatedEvents: ["A visita depois da missa"], atmosphere: "Móveis escuros, relógios antigos e cheiro de madeira encerada." }),
  common("casa-francisca", "Casa de Francisca", "residencial", "Casa modesta em frente à praça, compartilhada por duas amigas de longa data.", "local-casa-francisca", 58, 83, ["amizade", "plantas", "rotina"], ["francisca-santos", "carmen-carvalho"], 15, { publicFacts: ["Francisca e Carmen dividem a casa."], gmSecrets: ["Carmen encontrou uma anotação médica que não era sua."], clues: ["Um par de botas molhadas deixado na varanda."], relatedEvents: ["A conversa na varanda"], atmosphere: "Plantas, livros de medicina e vozes baixas depois do expediente." }),
  common("casa-isabel-cida", "Casas de Isabel e Cida", "residencial", "Duas casas vizinhas diante da praça, com a melhor vista do movimento central.", "local-casa-isabel-cida", 87, 57, ["vizinhança", "testemunhas", "praça"], ["isabel-miranda"], 16, { publicFacts: ["Isabel e Cida são vizinhas de porta."], gmSecrets: ["Cida esconde uma carta recebida na manhã do crime."], clues: ["Isabel viu uma janela acesa depois da meia-noite."], relatedEvents: ["A janela em frente"], atmosphere: "Cortinas abertas, rádio ligado e vizinhas que notam cada detalhe." }),
  common("casa-damiao", "Casas de Damião", "residencial", "Duas casas próximas à floresta, onde o trabalho da madeira nunca para.", "local-casa-damiao", 24, 14, ["seringueiro", "marcenaria", "família"], ["marcos-santos", "mario-alcantara"], 17, { publicFacts: ["Damião trabalha como seringueiro e marceneiro.", "Silvia, sua filha, ajuda a manter a oficina."], gmSecrets: ["Damião reparou um veículo desconhecido no caminho da mata."], clues: ["Uma peça de madeira traz uma marca recente de faca."], relatedEvents: ["A oficina fechada"], atmosphere: "Serragem, látex e ferramentas alinhadas sob o alpendre." }),
  common("casa-tonhao", "Casa do Tonhão", "residencial", "A residência simples atrás do boteco, onde o dono guarda suas mercadorias.", "local-casa-tonhao", 30, 55, ["bar", "estoque", "rumores"], ["angela-matos", "julio-soares"], 18, { publicFacts: ["Tonhão mora nos fundos do boteco."], gmSecrets: ["Há uma saída de serviço que dá para um beco sem iluminação."], clues: ["Um recibo molhado com horário posterior ao fechamento."], relatedEvents: ["O beco dos fundos"], atmosphere: "Rádio antigo, caixas fechadas e o cheiro do bar atravessando a parede." }),
] as const satisfies readonly GameLocal[];

export const LOCAL_CATEGORIES = [
  { value: "todos", label: "Todas as categorias" }, { value: "urbano", label: "Urbano" }, { value: "comercial", label: "Comércio" }, { value: "natureza", label: "Natureza" }, { value: "residencial", label: "Residencial" }, { value: "religioso", label: "Religioso" }, { value: "servico", label: "Serviços" },
] as const satisfies readonly { value: GameLocal["category"] | "todos"; label: string }[];
