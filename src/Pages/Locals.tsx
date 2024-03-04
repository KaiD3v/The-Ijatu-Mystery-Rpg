import { LocalCards } from "../components/LocalCards";
import { motion as m } from "framer-motion";

export const Locals = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className=" justify-center text-white italic text-center items-center m-10"
    >
      <div className="flex flex-col justify-center items-center text-left">
        <h1 className=" underline sm:text-4xl text-2xl italic font-times mt-4">
          Locais de Ijatu
        </h1>
        <p className="max-w-4xl my-6">
          Aqui você encontrará uma rica variedade de lugares para explorar nesta
          misteriosa cidade. Os "Locais" são os diferentes ambientes, edifícios
          e pontos de interesse que compõem o cenário de Ijatu. Nesta página, os
          usuários podem esperar encontrar uma descrição detalhada de cada
          local, incluindo sua história, importância para a trama do jogo e
          possíveis enigmas ou segredos que podem ser desvendados ao explorá-lo.
          Os locais podem variar desde a tranquila praça da cidade até a antiga
          mansão abandonada nos arredores, cada um oferecendo uma experiência
          única e desafiadora para os aventureiros. Além disso, os jogadores
          também podem encontrar dicas e pistas sobre como acessar determinados
          locais, bem como informações sobre os possíveis encontros e eventos
          que podem ocorrer em cada um deles. Prepare-se para mergulhar na
          atmosfera envolvente de Ijatu e descobrir os mistérios que aguardam em
          cada canto desta cidade pitoresca e repleta de segredos.
        </p>
      </div>
      <div className="m-0 p-0 border border-gray-400 w-full" />
      <div className="sm:flex sm:flex-row flex flex-col gap-2 my-4 items-center text-center justify-center">
        <LocalCards />
      </div>
      <div className="m-0 p-0 border border-gray-400 w-full" />
    </m.div>
  );
};
