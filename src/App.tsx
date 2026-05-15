import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { appRoutes } from "./routes/appRoutes";

export default function App() {
  return (
    <div className=" bg-github h-full w-screen">
      <NavBar />
      <Routes>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}
