// Styles
import "./App.css";

// Libs
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

// Components
import { NavBar } from "./components/NavBar";

// Pages
import { Home } from "./Pages/Home";
import { Characters } from "./Pages/Characters";
import { Rules } from "./Pages/Rules";
import { Rule } from "./Pages/Rule";

export default function App() {
  return (
    <div className=" bg-github h-full w-screen">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/personagens"} element={<Characters />} />
        <Route path={"/regras"} element={<Rules />} />
        <Route path="regras/:id" element={<Rule />} />
      </Routes>
    </div>
  );
}