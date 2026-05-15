/**
 * Converte marcações simples do conteúdo estático em HTML seguro para uso com dangerouslySetInnerHTML.
 * Não interpreta HTML arbitrário do JSON — apenas **negrito**, _sublinhado_ e quebras de linha.
 */
export function formatRichText(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/_(.*?)_/g, "<u>$1</u>")
    .replace(/\n/g, "<br>");
}
