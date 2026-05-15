import type { ReactElement } from "react";
import { Home } from "../Pages/Home";
import { Characters } from "../Pages/Characters";
import { Rules } from "../Pages/Rules";
import { Rule } from "../Pages/Rule";
import { Locals } from "../Pages/Locals";
import { Local } from "../Pages/Local";
import NotFound from "../Pages/NotFound";
import { Itens } from "../Pages/Itens";
import { Lores } from "../Pages/Lores";
import { Lore } from "../Pages/Lore";
import { Contatos } from "../Pages/Contatos";

export interface AppRouteConfig {
  path: string;
  element: ReactElement;
}

export const appRoutes: AppRouteConfig[] = [
  { path: "/", element: <Home /> },
  { path: "/personagens", element: <Characters /> },
  { path: "/regras", element: <Rules /> },
  { path: "/regras/:id", element: <Rule /> },
  { path: "/locais", element: <Locals /> },
  { path: "/locais/:id", element: <Local /> },
  { path: "/itens", element: <Itens /> },
  { path: "/historias", element: <Lores /> },
  { path: "/historias/:id", element: <Lore /> },
  { path: "/contatos", element: <Contatos /> },
  { path: "*", element: <NotFound /> },
];
