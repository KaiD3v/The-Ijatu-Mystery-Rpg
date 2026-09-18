import type { GameRule, RuleId, RuleSection } from "../types/content";

const sectionsByRule: Partial<Record<RuleId, readonly RuleSection[]>> = {
  "mestre-jogo": [
    { id: "preparacao", title: "Prepare o caso", paragraphs: ["O mestre apresenta Ijatu, interpreta seus habitantes e administra pistas, riscos e consequências."], bullets: ["Separe fatos verdadeiros, suspeitas e pistas antes da sessão.", "Organize uma linha do tempo, mas deixe o grupo escolher a ordem da investigação.", "Diga o risco e o custo antes de qualquer rolagem."] },
    { id: "pistas", title: "Pistas e falhas", paragraphs: ["Nunca esconda a única pista atrás de um teste: uma falha deve mudar o preço, o tempo ou o perigo, não interromper o caso."], callout: "Uma pista essencial sempre chega ao grupo; o teste decide em que estado a cena fica depois dela." },
  ],
  "como-jogar": [
    { id: "ciclo", title: "O ciclo da cena", paragraphs: ["O jogo alterna três movimentos: o mestre descreve uma situação concreta; os jogadores dizem o que fazem, perguntam e dividem tarefas; o mestre narra o resultado e atualiza a cena."], bullets: ["Descreva sinais sensoriais e escolhas possíveis, sem antecipar a solução.", "Registre cada pista encontrada e as hipóteses do grupo.", "Use tempo real apenas quando a ordem das ações importar."] },
    { id: "investigacao", title: "Investigação aberta", paragraphs: ["Permita que o grupo formule hipóteses sem exigir uma resposta única antes da hora. Uma boa pergunta pode ser mais valiosa que uma rolagem perfeita."], callout: "O caso deve continuar se movendo mesmo quando os jogadores escolhem uma direção inesperada." },
  ],
  "sistema-dados": [
    { id: "rolagem", title: "Quando rolar", paragraphs: ["Quando houver risco, role 2d6 + atributo + perícia aplicável. Compare com uma dificuldade: 6 fácil, 8 moderada, 10 difícil ou 12 extrema."], table: [{ heading: "6", value: "Fácil" }, { heading: "8", value: "Moderada" }, { heading: "10", value: "Difícil" }, { heading: "12", value: "Extrema" }] },
    { id: "resultado", title: "Resultados", paragraphs: ["Igualar ou superar é sucesso; abaixo é falha com consequência. Vantagem rola dois conjuntos e conserva o maior total; desvantagem conserva o menor."], bullets: ["Dois seis naturais: acerto crítico e um benefício extra.", "Dois uns naturais: erro crítico e uma complicação relevante.", "O mestre anuncia o risco antes da rolagem."] },
    { id: "exemplo-rolagem", title: "Exemplo: rolagem", paragraphs: ["Paulo tenta decifrar uma carta sob pressão. O mestre anuncia dificuldade 8 e o custo de falhar: a testemunha vai embora. Paulo rola 2d6 + Inteligência + Investigação; com 9, encontra a pista a tempo."], callout: "A consequência é combinada antes dos dados, para que o resultado seja uma escolha informada." },
  ],
  habilidades: [
    { id: "origens", title: "Habilidades de origem", paragraphs: ["Cada personagem escolhe uma habilidade de origem."], bullets: ["Estudioso: +2 em Atualidades.", "Língua de prata: +2 em Persuasão ou Enganação.", "Fofoca: +2 em Persuasão ou Intuição ao obter rumores.", "Trabalhador braçal: +1 dano com ferramenta de profissão.", "Professor: uma vez por cena, concede +1 em uma perícia a um aliado.", "Médico: ao curar, soma Inteligência ao PV recuperado.", "Cuidador de animais: +2 em Lidar com animais.", "Mimado: começa com o dobro do dinheiro inicial definido pelo mestre.", "Trambiqueiro: +1 em Enganação, Intimidação e Luta.", "Guardião: ao preparar ou ajudar alguém, essa pessoa recupera 1 PE ou 1 PV, uma vez por cena."] },
    { id: "exemplo-cura", title: "Exemplo: cura", paragraphs: ["Francisca usa Medicina (Inteligência) depois de uma cena de cuidado. Se a ação for possível e a rolagem vencer a dificuldade, o personagem recupera os PV definidos pelo equipamento e pela habilidade Médico."], callout: "Cura não apaga automaticamente uma condição: trate a causa e registre o tempo de recuperação." },
  ],
  combate: [
    { id: "ordem", title: "Ordem e ataques", paragraphs: ["No início de um conflito, cada participante rola 1d6 + Destreza; aja do maior para o menor e refaça a ordem apenas quando a situação mudar."], bullets: ["Corpo a corpo ou desarmado: 2d6 + Luta contra Reflexos.", "Arma de fogo ou arco: 2d6 + Pontaria contra Reflexos.", "Surpresa: Luta ou Pontaria contra Percepção ou Instintos."] },
    { id: "distancia", title: "Distância e dano", paragraphs: ["Corpo a corpo ocupa a mesma zona; curta distância vai até 10 m; média, de 11 a 30 m; longa, de 31 a 100 m com linha de visão."], table: [{ heading: "Curta", value: "até 10 m" }, { heading: "Média", value: "11–30 m" }, { heading: "Longa", value: "31–100 m + linha de visão" }] },
    { id: "exemplo-combate", title: "Exemplo: combate", paragraphs: ["Marcos age antes do oponente, rola 2d6 + Luta e compara com Reflexos. O dano da arma só é aplicado depois de confirmar o acerto; a ficção determina se a zona continua segura."], callout: "O mapa ajuda a responder onde cada personagem está, não substitui a descrição da cena." },
    { id: "cura-condicoes", title: "Cura e condições", paragraphs: ["Cura exige Medicina (Inteligência) e uma ação apropriada. Tipos de dano: perfurante, balístico, cortante, concussão, veneno e fogo."], bullets: ["Sangramento: -1 PV ao fim da rodada até primeiros socorros.", "Infecção: -1 PE máximo até remédio e repouso.", "Inflamação: ponto fraco recebe +1 dano por cena até anti-inflamatório.", "Envenenado: -1 PV por rodada durante três rodadas; exige repouso e cuidado médico."] },
  ],
};

export const RULES = [
  {
    id: "mestre-jogo",
    title: "O mestre do jogo",
    content: "O mestre apresenta Ijatu, interpreta seus habitantes e administra pistas, riscos e consequências. Prepare uma linha do tempo com fatos verdadeiros, suspeitos e pistas; deixe os jogadores escolherem a ordem da investigação. Quando uma ação tiver risco ou custo, peça uma rolagem. Nunca esconda a única pista atrás de um teste: a falha deve mudar o preço, o tempo ou o perigo, não interromper o caso.",
    audience: "mestre",
    sections: sectionsByRule["mestre-jogo"] ?? [],
  },
  {
    id: "como-jogar",
    title: "Como jogar",
    content: "O jogo alterna três movimentos: o mestre descreve uma situação concreta; os jogadores dizem o que fazem, perguntam e dividem tarefas; o mestre narra o resultado e atualiza a cena. Use tempo real apenas quando a ordem importar. Em investigação, registre cada pista encontrada e permita que o grupo formule hipóteses sem exigir uma resposta única antes da hora.",
    audience: "public",
    sections: sectionsByRule["como-jogar"] ?? [],
  },
  {
    id: "sistema-dados",
    title: "Sistema de rolagem",
    content: "Quando houver risco, role 2d6 + atributo + perícia aplicável. Compare com uma dificuldade: 6 fácil, 8 moderada, 10 difícil ou 12 extrema. Igualar ou superar é sucesso; abaixo é falha com consequência. Vantagem rola dois conjuntos e conserva o maior total; desvantagem conserva o menor. Dois seis naturais são acerto crítico e concedem um benefício extra; dois uns naturais são erro crítico e trazem uma complicação relevante. O mestre deve dizer o risco antes da rolagem.",
    audience: "public",
    sections: sectionsByRule["sistema-dados"] ?? [],
  },
  {
    id: "habilidades",
    title: "Habilidades dos personagens",
    content: "Cada personagem escolhe uma habilidade de origem. Estudioso: +2 em Atualidades. Língua de prata: +2 em Persuasão ou Enganação. Fofoca: +2 em Persuasão ou Intuição ao obter rumores. Trabalhador braçal: +1 dano com ferramenta de profissão. Professor: uma vez por cena, concede +1 em uma perícia a um aliado. Médico: ao curar, soma Inteligência ao PV recuperado. Cuidador de animais: +2 em Lidar com animais. Mimado: começa com o dobro do dinheiro inicial definido pelo mestre. Trambiqueiro: +1 em Enganação, Intimidação e Luta. Guardião: ao preparar ou ajudar alguém, essa pessoa recupera 1 PE ou 1 PV, uma vez por cena.",
    audience: "public",
    sections: sectionsByRule["habilidades"] ?? [],
  },
  {
    id: "combate",
    title: "Ordem de combate",
    content: "No início de um conflito, cada participante rola 1d6 + Destreza; aja do maior para o menor e refaça a ordem apenas quando a situação mudar. Ataque corpo a corpo ou desarmado: 2d6 + Luta contra Reflexos. Arma de fogo ou arco: 2d6 + Pontaria contra Reflexos. Um ataque surpresa pode usar Luta ou Pontaria contra Percepção (direção inesperada) ou Instintos (interrupção social). Corpo a corpo ocupa a mesma zona; curta distância vai até 10 m; média, de 11 a 30 m; longa, de 31 a 100 m com linha de visão. Cura exige Medicina (Inteligência) e uma ação apropriada. Tipos de dano: perfurante, balístico, cortante, concussão, veneno e fogo. Condições só entram quando a ficção e o mestre indicarem: sangramento causa -1 PV ao fim da rodada até primeiros socorros; infecção reduz -1 PE máximo até remédio e repouso; inflamação cria um ponto fraco que recebe +1 dano por cena até anti-inflamatório; envenenado causa -1 PV por rodada durante três rodadas e exige repouso e cuidado médico.",
    audience: "public",
    sections: sectionsByRule["combate"] ?? [],
  },
] as const satisfies readonly GameRule[];
