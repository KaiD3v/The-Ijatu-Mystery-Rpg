import { motion as m } from "framer-motion";
import { useLocalById } from "../hooks/useLocalById";
import { formatRichText } from "../utils/formatRichText";
import { useParams } from "react-router-dom";

export function Local() {
  const { id } = useParams<{ id: string }>();
  const selectedLocal = useLocalById(id);

  if (!selectedLocal) {
    return <p className="text-center text-gray-300">Local não encontrado</p>;
  }

  const hasMapImage = Boolean(
    selectedLocal.mapImage && selectedLocal.mapImage.trim() !== ""
  );

  return (
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
          __html: formatRichText(selectedLocal.details),
        }}
      />
      <div className="border border-gray-400 w-full" />
      {hasMapImage ? (
        <div>
          <h1 className="text-2xl font-semibold mb-2 text-gray-200">
            Mapa Local
          </h1>
          <img
            src={selectedLocal.mapImage}
            alt={`Mapa de ${selectedLocal.title}`}
            className="rounded-md shadow-md"
          />
        </div>
      ) : null}
      <div className="border border-gray-400 w-full" />
      <div className="mt-8">
        <h1 className="text-2xl font-semibold mb-2 text-gray-200">
          Segredos do Local:
        </h1>
        {selectedLocal.secrets && selectedLocal.secrets.length > 0 ? (
          <ul className="text-left text-white">
            {selectedLocal.secrets.map((secret, index) => (
              <li key={index} className="mb-2">
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
  );
}
