import type { LoreEntry } from "../types/content";

export const LORES = [
  {
    id: "o-linchamento-77",
    title: "O linchamento de 1977",
    content: "Depois de uma sequência de furtos e invasões, moradores de Ijatu perderam a confiança na polícia e organizaram sua própria caçada. Na noite de 1º de março de 1977, facões, enxadas e ferramentas viraram armas. O homem acusado morreu perto da igreja; uma estátua ainda guarda uma mancha que ninguém consegue remover. Os mais velhos contam que o espírito do morto continua aparecendo em muros e objetos, mas a cidade evita perguntar quem realmente conduziu a multidão.",
    date: "1977-03-01",
    locationId: "igreja",
    characterIds: ["josefino", "isabel-miranda"],
    recordType: "recorte",
    status: "contestado",
    relatedLoreIds: ["um-misterio-inexplicavel"],
  },
  {
    id: "um-misterio-inexplicavel",
    title: "Um mistério inexplicável",
    content: "Em uma manhã de domingo, o corpo de um morador foi encontrado na margem do rio. A cena não oferece uma explicação simples: faltam objetos, sobram versões e cada testemunha protege uma parte da própria rotina. Enquanto as autoridades procuram um culpado, a cidade começa a fraturar os pactos de vizinhança que a mantinham de pé. Investigar o crime significa decidir quais relações podem ser salvas quando a verdade finalmente aparecer.",
    date: "1987-06-14",
    locationId: "cidade-ijatu",
    characterIds: ["angela-matos", "francisca-santos", "josefino"],
    recordType: "laudo",
    status: "aberto",
    relatedLoreIds: ["o-linchamento-77"],
  },
] as const satisfies readonly LoreEntry[];
