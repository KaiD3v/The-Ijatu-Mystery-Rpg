import { RULES } from "../data/rules";

/** Navegação derivada da fonte de conteúdo para evitar títulos e rotas divergentes. */
export const ruleNavLinks = RULES.map((rule, index) => ({
  id: rule.id,
  to: `/regras/${rule.id}`,
  label: rule.title,
  chapter: index + 1,
  audience: rule.audience,
}));
