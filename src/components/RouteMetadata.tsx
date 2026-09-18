import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeMeta: Array<{ test: (path: string) => boolean; title: string; description: string }> = [
  { test: (path) => path === "/", title: "O Mistério de Ijatu · RPG de investigação", description: "Um dossiê interativo de mistério ambientado no Acre: regras, personagens, locais, histórias e pistas para sua mesa." },
  { test: (path) => path.startsWith("/regras"), title: "Regras · O Mistério de Ijatu", description: "Regras, exemplos de rolagem, combate, cura e condições para conduzir uma investigação em Ijatu." },
  { test: (path) => path.startsWith("/locais"), title: "Locais · O Mistério de Ijatu", description: "Dossiês dos locais de Ijatu, com pistas públicas, relações e mapas para a investigação." },
  { test: (path) => path.startsWith("/historias"), title: "Histórias · O Mistério de Ijatu", description: "Relatos, recortes e depoimentos que formam o arquivo narrativo de Ijatu." },
  { test: (path) => path.startsWith("/personagens"), title: "Personagens · O Mistério de Ijatu", description: "Fichas de protagonistas, testemunhas e suspeitos do caso de Ijatu." },
  { test: (path) => path.startsWith("/itens"), title: "Itens e armas · O Mistério de Ijatu", description: "Referência rápida de armas, equipamentos, alcance, dano e disponibilidade." },
  { test: (path) => path.startsWith("/contatos"), title: "Contatos · O Mistério de Ijatu", description: "Créditos, autoria e canais para falar sobre o projeto Ijatu Mystery." },
];

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) { element = document.createElement("meta"); element.setAttribute(attribute, key); document.head.appendChild(element); }
  element.content = content;
}

export function RouteMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const matched = routeMeta.find((entry) => entry.test(pathname));
    const isNotFound = !matched;
    const title = matched?.title ?? "Arquivo não encontrado · O Mistério de Ijatu";
    const description = matched?.description ?? "O registro solicitado não está no arquivo público de Ijatu.";
    const canonical = `${window.location.origin}${pathname}`;
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", `${window.location.origin}/assets/social/ijatu-og.svg`);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    let link = document.head.querySelector<HTMLLinkElement>("link[rel=canonical]");
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = canonical;
    let jsonLd = document.head.querySelector<HTMLScriptElement>("script[data-ijatu-jsonld]");
    if (!jsonLd) { jsonLd = document.createElement("script"); jsonLd.type = "application/ld+json"; jsonLd.dataset.ijatuJsonld = "true"; document.head.appendChild(jsonLd); }
    jsonLd.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "CreativeWork", name: title, description, url: canonical, image: `${window.location.origin}/assets/social/ijatu-og.svg`, inLanguage: "pt-BR" });
    setMeta("name", "robots", isNotFound ? "noindex, nofollow" : "index, follow");
  }, [pathname]);
  return null;
}
