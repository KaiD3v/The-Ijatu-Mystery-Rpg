export interface GameRule {
  id: string;
  title: string;
  content: string;
}

export interface GameLocal {
  id: string;
  title: string;
  desc?: string;
  image: string;
  mapImage?: string;
  details: string;
  secrets?: string[];
}

export interface LoreEntry {
  id: string;
  title: string;
  content?: string;
}

export interface Weapon {
  id: string;
  name: string;
  description: string;
  price: string;
  damage: string;
}

export interface GameItem {
  id: string;
  name: string;
  description: string;
  price: string;
  type: string;
}

export interface CharacterAttributes {
  str: string;
  con: string;
  dex: string;
  knw: string;
  int: string;
  char: string;
}

export interface CharacterAppearance {
  height?: string;
  hair?: string;
  eyesColor?: string;
  skinColor?: string;
  clothes?: string;
  more?: string;
}
