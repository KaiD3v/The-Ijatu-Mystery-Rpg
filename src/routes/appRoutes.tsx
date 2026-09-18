import { lazy, type ReactElement } from "react";

const Home = lazy(() => import("../Pages/Home").then(({ Home: component }) => ({ default: component })));
const Characters = lazy(() => import("../Pages/Characters").then(({ Characters: component }) => ({ default: component })));
const Character = lazy(() => import("../Pages/Character").then(({ Character: component }) => ({ default: component })));
const Rules = lazy(() => import("../Pages/Rules").then(({ Rules: component }) => ({ default: component })));
const Rule = lazy(() => import("../Pages/Rule").then(({ Rule: component }) => ({ default: component })));
const Locals = lazy(() => import("../Pages/Locals").then(({ Locals: component }) => ({ default: component })));
const Local = lazy(() => import("../Pages/Local").then(({ Local: component }) => ({ default: component })));
const Itens = lazy(() => import("../Pages/Itens").then(({ Itens: component }) => ({ default: component })));
const Lores = lazy(() => import("../Pages/Lores").then(({ Lores: component }) => ({ default: component })));
const Lore = lazy(() => import("../Pages/Lore").then(({ Lore: component }) => ({ default: component })));
const Contatos = lazy(() => import("../Pages/Contatos").then(({ Contatos: component }) => ({ default: component })));
const NotFound = lazy(() => import("../Pages/NotFound"));

export interface AppRouteConfig { path: string; element: ReactElement; }
export const appRoutes: AppRouteConfig[] = [
  { path: "/", element: <Home /> },
  { path: "/personagens", element: <Characters /> },
  { path: "/personagens/:id", element: <Character /> },
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
