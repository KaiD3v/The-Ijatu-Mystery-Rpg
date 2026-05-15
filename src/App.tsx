import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { appRoutes } from "./routes/appRoutes";
import { CinematicLayers } from "./components/cinematic/CinematicLayers";
import { IntroGate } from "./components/cinematic/IntroGate";
import { useLenis } from "./hooks/useLenis";
import { useCursorGlow } from "./hooks/useCursorGlow";

export default function App() {
  const location = useLocation();
  useLenis();
  useCursorGlow();

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Pular para o conteúdo
      </a>
      <CinematicLayers />
      <IntroGate />
      <div className="relative z-20 flex min-h-screen w-full min-w-0 max-w-full flex-col">
        <NavBar />
        <AnimatePresence mode="wait">
          <motion.div
            id="main-content"
            key={location.pathname}
            tabIndex={-1}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-0 min-w-0 flex-1 flex-col outline-none"
          >
            <Routes location={location}>
              {appRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}
