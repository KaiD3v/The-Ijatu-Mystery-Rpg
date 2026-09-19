export type AssetKind = "hero" | "local-cover" | "map" | "character" | "brand" | "social";

export interface AssetManifestEntry {
  src: string;
  kind: AssetKind;
  width: number;
  height: number;
  alt: string;
  credit: string;
  caption?: string;
}

/** Biblioteca de produção local; arquivos mestres e referências externas não entram no bundle. */
export const ASSET_MANIFEST: AssetManifestEntry[] = [
  { src: "/assets/brand/ijatu-hero.svg", kind: "hero", width: 1600, height: 900, alt: "Estrada úmida na floresta de Ijatu sob névoa", credit: "The Sins of Ijatu — arte vetorial autoral", caption: "Arquivo criminal amazônico, 1987" },
  { src: "/assets/locations/dossier-cover.svg", kind: "local-cover", width: 1200, height: 900, alt: "Textura documental do arquivo de Ijatu", credit: "The Sins of Ijatu — arte vetorial autoral", caption: "Dossiê de local" },
  { src: "/assets/maps/evidence-map.svg", kind: "map", width: 1200, height: 800, alt: "Planta de evidência esquemática de Ijatu", credit: "The Sins of Ijatu — planta narrativa autoral", caption: "Planta de evidência" },
  { src: "/assets/social/ijatu-og.svg", kind: "social", width: 1200, height: 630, alt: "Cartela The Sins of Ijatu", credit: "The Sins of Ijatu — arte vetorial autoral" },
  { src: "/assets/brand/favicon.svg", kind: "brand", width: 64, height: 64, alt: "Símbolo do The Sins of Ijatu", credit: "The Sins of Ijatu — marca autoral" },
];
