// Styles
import "./App.css";

// Libs
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

// Components
import { NavBar } from "./components/NavBar";

// Pages
import { Home } from "./Pages/Home";

export default function App() {
  return (
    <div className=" bg-github h-screen w-screen">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </div>
  );
}