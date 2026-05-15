export interface NavLinkItem {
  to: string;
  label: string;
}

export const mainNavLinks: NavLinkItem[] = [
  { to: "/regras", label: "Regras" },
  { to: "/locais", label: "Locais" },
  { to: "/historias", label: "Histórias" },
  { to: "/personagens", label: "Personagens" },
  { to: "/itens", label: "Itens" },
  { to: "/contatos", label: "Contatos" },
];
