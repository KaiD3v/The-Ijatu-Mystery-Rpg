import { build } from "esbuild";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const source = `
  export { RULES } from "./src/data/rules.ts";
  export { LOCALS, LOCAL_ASSETS } from "./src/data/locals.ts";
  export { LORES } from "./src/data/lores.ts";
  export { WEAPONS, ITEMS } from "./src/data/catalog.ts";
  export { CHARACTERS } from "./src/data/characters.ts";
  export { RULE_IDS, LOCAL_IDS, CHARACTER_IDS, LORE_IDS, WEAPON_IDS, ITEM_IDS } from "./src/types/content.ts";
`;

const result = await build({
  stdin: { contents: source, resolveDir: root, sourcefile: "content-validation.ts" },
  bundle: true,
  write: false,
  format: "esm",
  platform: "node",
  target: "es2020",
  loader: { ".png": "dataurl", ".jpeg": "dataurl", ".jpg": "dataurl" },
});
const bundle = result.outputFiles[0]?.text;
if (!bundle) throw new Error("O bundle temporário de conteúdo não foi gerado.");
const encoded = Buffer.from(bundle).toString("base64");
const content = await import(`data:text/javascript;base64,${encoded}`);

const errors = [];
const ids = (entries, label) => {
  const values = entries.map((entry) => entry.id);
  const duplicates = values.filter((id, index) => values.indexOf(id) !== index);
  if (duplicates.length) errors.push(`${label}: IDs duplicados: ${[...new Set(duplicates)].join(", ")}`);
  return values;
};
const exactParity = (label, actual, registry) => {
  if (actual.length !== registry.length || actual.some((id, index) => id !== registry[index])) {
    errors.push(`${label}: coleção e registro de IDs não têm paridade exata.`);
  }
};
const required = (entries, label, fields) => {
  entries.forEach((entry) => fields.forEach((field) => {
    if (entry[field] === undefined || entry[field] === null || entry[field] === "") errors.push(`${label} ${entry.id ?? "(sem id)"}: campo obrigatório ausente: ${field}`);
  }));
};
const has = (set, value, label) => { if (!set.has(value)) errors.push(`${label}: referência inexistente: ${value}`); };

const ruleIds = ids(content.RULES, "RULES");
const localIds = ids(content.LOCALS, "LOCALS");
const loreIds = ids(content.LORES, "LORES");
const weaponIds = ids(content.WEAPONS, "WEAPONS");
const itemIds = ids(content.ITEMS, "ITEMS");
const characterIds = ids(content.CHARACTERS, "CHARACTERS");
exactParity("RULES", ruleIds, content.RULE_IDS);
exactParity("LOCALS", localIds, content.LOCAL_IDS);
exactParity("LORES", loreIds, content.LORE_IDS);
exactParity("WEAPONS", weaponIds, content.WEAPON_IDS);
exactParity("ITEMS", itemIds, content.ITEM_IDS);
exactParity("CHARACTERS", characterIds, content.CHARACTER_IDS);

required(content.RULES, "RULES", ["id", "title", "content", "sections"]);
required(content.LOCALS, "LOCALS", ["id", "title", "fileNumber", "category", "summary", "atmosphere", "imageAsset", "coordinates", "tags", "publicFacts", "gmSecrets", "clues", "relatedEvents", "relatedCharacterIds"]);
required(content.LORES, "LORES", ["id", "title", "date", "characterIds", "recordType", "status"]);
required(content.WEAPONS, "WEAPONS", ["id", "name", "description", "price", "damage", "range", "weaponType", "availability", "ruleRefs"]);
required(content.ITEMS, "ITEMS", ["id", "name", "description", "price", "type", "availability", "ruleRefs"]);
required(content.CHARACTERS, "CHARACTERS", ["id", "fullName", "occupation", "age", "role", "profilePic", "quote", "summary", "personality", "appearance", "history", "attributes", "skills", "hitPoints", "effortPoints", "locations", "objectives", "clues", "secrets", "status", "relations"]);

const ruleSet = new Set(ruleIds);
const localSet = new Set(localIds);
const loreSet = new Set(loreIds);
const characterSet = new Set(characterIds);
content.LOCALS.forEach((local) => local.relatedCharacterIds.forEach((id) => has(characterSet, id, `LOCALS ${local.id}`)));
content.CHARACTERS.forEach((character) => {
  character.locations.forEach((id) => has(localSet, id, `CHARACTERS ${character.id}`));
  character.relations.forEach((relation) => has(characterSet, relation.characterId, `CHARACTERS ${character.id}`));
});
content.LORES.forEach((lore) => {
  if (lore.locationId) has(localSet, lore.locationId, `LORES ${lore.id}`);
  lore.characterIds.forEach((id) => has(characterSet, id, `LORES ${lore.id}`));
  lore.relatedLoreIds?.forEach((id) => has(loreSet, id, `LORES ${lore.id}`));
});
content.WEAPONS.forEach((weapon) => weapon.ruleRefs.forEach((id) => has(ruleSet, id, `WEAPONS ${weapon.id}`)));
content.ITEMS.forEach((item) => item.ruleRefs.forEach((id) => has(ruleSet, id, `ITEMS ${item.id}`)));
content.LOCALS.forEach((local) => {
  if (!content.LOCAL_ASSETS[local.imageAsset]) errors.push(`LOCALS ${local.id}: asset de imagem não encontrado: ${local.imageAsset}`);
  if (local.mapAsset && !content.LOCAL_ASSETS[local.mapAsset]) errors.push(`LOCALS ${local.id}: asset de mapa não encontrado: ${local.mapAsset}`);
});

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Conteúdo TypeScript validado: ${content.RULES.length} regras, ${content.LOCALS.length} locais, ${content.LORES.length} histórias, ${content.WEAPONS.length} armas, ${content.ITEMS.length} itens e ${content.CHARACTERS.length} personagens.`);
}
