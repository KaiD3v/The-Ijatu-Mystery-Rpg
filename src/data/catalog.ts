import weaponsData from "../json/Weapons.json";
import itemsData from "../json/Items.json";
import type { GameItem, Weapon } from "../types/content";

export const WEAPONS: Weapon[] = weaponsData.weapons as Weapon[];
export const ITEMS: GameItem[] = itemsData.items as GameItem[];
