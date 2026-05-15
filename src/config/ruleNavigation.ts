import type { NavLinkItem } from "./navigation";

/** Itens do menu lateral de regras (rótulos curtos mantidos para consistência com o layout atual). */
export const ruleNavLinks: NavLinkItem[] = [
  { to: "/regras/mestre-jogo", label: "O Mestre do Jogo" },
  { to: "/regras/como-jogar", label: "Como Jogar" },
  { to: "/regras/sistema-dados", label: "Sistema de Dados" },
  { to: "/regras/habilidades", label: "habilidades" },
  { to: "/regras/combate", label: "Combate" },
];
