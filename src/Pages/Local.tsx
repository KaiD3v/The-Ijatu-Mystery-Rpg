import localsData from "../json/LocalsPattern.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

interface Local {
  id: string;
  title: string;
  desc?: string;
  image: string;
  mapImage?: string;
  details: string;
  secrets?: string[];
}

const locals: Local[] = localsData.locals;

export const Local = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedLocal, setSelectedLocal] = useState<Local | null>(null);

  useEffect(() => {
    const local = locals.find((local) => local.id === id);
    setSelectedLocal(local || null);
  }, [id]);

  // Formatar texto json
  const formatText = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // negrito
      .replace(/_(.*?)_/g, "<u>$1</u>") // sublinhado
      .replace(/\n/g, "<br>"); // quebra de linha
  };

  return (
    <div>
      {selectedLocal ? (
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col gap-4 justify-center items-center m-10"
        >
          <h1 className="text-2xl mt-4 font-semibold text-gray-200">
            {selectedLocal.title}
          </h1>
          <img
            src={selectedLocal.image}
            alt={selectedLocal.title}
            className="mb-4 sm:max-w-4xl rounded-md shadow-md sm:m-0 p-0"
          />
          <div
            className="mb-6 text-gray-300 text-left"
            dangerouslySetInnerHTML={{
              __html: formatText(selectedLocal.details),
            }}
          />
          <div className="border border-gray-400 w-full" />
          <div>
            <h1 className="text-2xl font-semibold mb-2 text-gray-200">
              Mapa Local
            </h1>
            <img
              src={selectedLocal.mapImage}
              alt={selectedLocal.title}
              className="rounded-md shadow-md"
            />
          </div>
          <div className="border border-gray-400 w-full" />
          <div className="mt-8">
            <h1 className="text-2xl font-semibold mb-2 text-gray-200">
              Segredos do Local:
            </h1>
            {selectedLocal.secrets && selectedLocal.secrets.length > 0 ? (
              <ul className="text-left text-white">
                {selectedLocal.secrets.map((secret, i) => (
                  <li key={i} className="mb-2">
                    {secret}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-300">Sem Segredos</p>
            )}
          </div>
          <div className="border border-gray-400 m-4 w-full" />
        </m.div>
      ) : (
        <p className="text-center text-gray-300">Local não encontrado</p>
      )}
    </div>
  );
};
