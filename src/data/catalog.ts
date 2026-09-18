import type { GameItem, Weapon } from "../types/content";

/** Catálogo editorial do jogo. Os registros são a fonte única do conteúdo de armas e itens. */
export const WEAPONS = [
  { id: "revolver", name: "Revólver", description: "Arma de fogo de tambor, confiável e discreta. Usa Pontaria, causa dano balístico e alcança curta ou média distância.", price: "cr$ 100.000", damage: "2d6", range: "curta", weaponType: "fogo", availability: "restrita", ruleRefs: ["sistema-dados", "combate"] },
  { id: "pistola-semi-auto", name: "Pistola semiautomática", description: "Arma de fogo compacta. Usa Pontaria, causa dano balístico e permite até dois ataques no turno, desde que haja munição e a situação permita.", price: "cr$ 200.000", damage: "2d6", range: "curta", weaponType: "fogo", availability: "restrita", ruleRefs: ["combate"] },
  { id: "espingarda-caca", name: "Espingarda de caça", description: "Arma de fogo de ação manual, com alcance curto ou médio. Uma luneta pode conceder +2 em Pontaria para longa distância quando houver linha de visão.", price: "cr$ 350.000", damage: "2d8", range: "média", weaponType: "fogo", availability: "restrita", ruleRefs: ["combate"] },
  { id: "escopeta-combate", name: "Escopeta de combate", description: "Arma de fogo de curto alcance. Concede +2 no ataque a curta distância e -2 a longa distância; causa dano balístico.", price: "cr$ 500.000", damage: "2d12", range: "curta", weaponType: "fogo", availability: "rara", ruleRefs: ["combate"] },
  { id: "arco-caca", name: "Arco de caça", description: "Arma silenciosa de média distância. Concede +2 a média, -2 a curta; um acerto realizado enquanto furtivo é crítico uma vez por cena.", price: "cr$ 100.000", damage: "1d8 + Destreza", range: "média", weaponType: "arco", availability: "comum", ruleRefs: ["combate"] },
  { id: "facao-exploracao", name: "Facão de exploração", description: "Ferramenta cortante para mata e combate corpo a corpo. Pode abrir trilhas e causar dano cortante.", price: "cr$ 50.000", damage: "1d6 + Destreza", range: "corpo a corpo", weaponType: "branca", availability: "comum", ruleRefs: ["combate", "habilidades"] },
] as const satisfies readonly Weapon[];

export const ITEMS = [
  { id: "corda-resistente", name: "Corda resistente", description: "Corda de sisal com 15 m. Serve para escalada, travessia, resgate, armadilhas e abrigo improvisado.", price: "cr$ 5.000", type: "Utensílio", availability: "comum", ruleRefs: ["combate"] },
  { id: "ferramenta-multifuncional", name: "Ferramenta multifuncional", description: "Canivete robusto com lâmina, tesoura, abridor e chave de fenda; concede uma solução plausível para reparos pequenos.", price: "cr$ 4.500", type: "Utensílio", availability: "comum", ruleRefs: ["habilidades"] },
  { id: "lanterna", name: "Lanterna de querosene", description: "Lanterna com lente de vidro e combustível para uma noite. Ilumina até 10 m, mas denuncia a posição em áreas escuras.", price: "cr$ 5.000", type: "Iluminação", availability: "comum", ruleRefs: ["combate"] },
  { id: "kit-primeiros-socorros", name: "Kit de primeiros socorros", description: "Gaze, antisséptico, esparadrapo e tesoura. Remove Sangramento quando usado após uma cena de cuidado.", price: "cr$ 3.000", type: "Medicina", availability: "comum", ruleRefs: ["combate", "habilidades"] },
  { id: "caderno-campo", name: "Caderno de campo", description: "Caderno pautado e lápis para registrar pistas, horários e depoimentos sem depender da memória.", price: "cr$ 800", type: "Investigação", availability: "comum", ruleRefs: ["sistema-dados"] },
] as const satisfies readonly GameItem[];
