export const RULE_IDS = ["mestre-jogo", "como-jogar", "sistema-dados", "habilidades", "combate"] as const satisfies readonly string[];
export type RuleId = (typeof RULE_IDS)[number];

export const LOCAL_IDS = [
  "cidade-ijatu", "praca-central", "igreja", "boteco-tonhao", "bosque-seringueiras", "escola", "mercado", "cemiterio", "hospital", "acampamento",
  "casa-angela", "casa-paulo", "casa-marcos", "casa-josefino", "casa-francisca", "casa-isabel-cida", "casa-damiao", "casa-tonhao",
] as const satisfies readonly string[];
export type LocalId = (typeof LOCAL_IDS)[number];

export const CHARACTER_IDS = [
  "angela-matos", "paulo-sergio", "marcos-santos", "josefino", "alvaro", "carlos", "alfredo", "francisca-santos", "carmen-carvalho", "maria", "isabel-miranda", "mario-alcantara", "julio-soares",
] as const satisfies readonly string[];
export type CharacterId = (typeof CHARACTER_IDS)[number];

export const LORE_IDS = ["o-linchamento-77", "um-misterio-inexplicavel"] as const satisfies readonly string[];
export type LoreId = (typeof LORE_IDS)[number];

export const WEAPON_IDS = ["revolver", "pistola-semi-auto", "espingarda-caca", "escopeta-combate", "arco-caca", "facao-exploracao"] as const satisfies readonly string[];
export type WeaponId = (typeof WEAPON_IDS)[number];

export const ITEM_IDS = ["corda-resistente", "ferramenta-multifuncional", "lanterna", "kit-primeiros-socorros", "caderno-campo"] as const satisfies readonly string[];
export type ItemId = (typeof ITEM_IDS)[number];

export type LocalCategory = "urbano" | "religioso" | "natureza" | "comercial" | "residencial" | "servico";
export type LocalAssetId = `local-${string}` | `map-${string}`;
export type CharacterRole = "protagonista" | "npc" | "suspeito" | "figura-publica";
export type WeaponRange = "corpo a corpo" | "curta" | "média" | "longa";
export type Availability = "comum" | "restrita" | "rara";

export interface GameRule {
  readonly id: RuleId;
  readonly title: string;
  readonly content: string;
  readonly audience?: "public" | "mestre";
  readonly sections: readonly RuleSection[];
}

export interface RuleSection {
  readonly id: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly bullets?: readonly string[];
  readonly callout?: string;
  readonly table?: readonly { readonly heading: string; readonly value: string }[];
}

export interface GameLocal {
  readonly id: LocalId;
  readonly title: string;
  readonly fileNumber: string;
  readonly category: LocalCategory;
  readonly summary: string;
  readonly atmosphere: string;
  readonly imageAsset: LocalAssetId;
  readonly mapAsset?: LocalAssetId;
  readonly coordinates: { readonly x: number; readonly y: number };
  readonly tags: readonly string[];
  readonly publicFacts: readonly string[];
  readonly gmSecrets: readonly string[];
  readonly clues: readonly string[];
  readonly relatedEvents: readonly string[];
  readonly relatedCharacterIds: readonly CharacterId[];
}

export interface CharacterRelation {
  readonly characterId: CharacterId;
  readonly label: string;
  readonly detail: string;
}

export interface GameCharacter {
  readonly id: CharacterId;
  readonly fullName: string;
  readonly nickname?: string;
  readonly occupation: string;
  readonly age: number;
  readonly role: CharacterRole;
  readonly roleLabel: string;
  readonly profilePic: string;
  readonly quote: string;
  readonly summary: string;
  readonly personality: string;
  readonly appearance: readonly string[];
  readonly history: string;
  readonly attributes: CharacterAttributes;
  readonly skills: readonly string[];
  readonly hitPoints: number;
  readonly effortPoints: number;
  readonly locations: readonly LocalId[];
  readonly objectives: readonly string[];
  readonly clues: readonly string[];
  readonly secrets: readonly string[];
  readonly status: string;
  readonly relations: readonly CharacterRelation[];
}

export interface LoreEntry {
  readonly id: LoreId;
  readonly title: string;
  readonly content?: string;
  readonly date: string;
  readonly locationId?: LocalId;
  readonly characterIds: readonly CharacterId[];
  readonly recordType: "relato" | "depoimento" | "recorte" | "laudo";
  readonly status: "aberto" | "confirmado" | "contestado";
  readonly relatedLoreIds?: readonly LoreId[];
}

export interface Weapon {
  readonly id: WeaponId;
  readonly name: string;
  readonly description: string;
  readonly price: string;
  readonly damage: string;
  readonly range: WeaponRange;
  readonly weaponType: "branca" | "fogo" | "arco" | "improvisada";
  readonly availability: Availability;
  readonly ruleRefs: readonly RuleId[];
}

export interface GameItem {
  readonly id: ItemId;
  readonly name: string;
  readonly description: string;
  readonly price: string;
  readonly type: string;
  readonly availability: Availability;
  readonly ruleRefs: readonly RuleId[];
}

export interface CharacterAttributes {
  readonly str: string;
  readonly con: string;
  readonly dex: string;
  readonly knw: string;
  readonly int: string;
  readonly char: string;
}

export interface CharacterAppearance {
  readonly height?: string;
  readonly hair?: string;
  readonly eyesColor?: string;
  readonly skinColor?: string;
  readonly clothes?: string;
  readonly more?: string;
}
