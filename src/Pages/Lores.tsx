import loresData from "../json/Lores.json";
import { Link } from "react-router-dom";

interface Lore {
  id: string;
  title: string;
}

export const Lores = () => {
  // Dados das histórias
  const lores: Lore[] = loresData.lores;

  return (
    <div className="text-gray-200 flex flex-col gap-4 m-10">
      <div className="flex flex-col text-center justify-center content-center gap-4">
        <h1 className="text-5xl">Histórias</h1>
        <p>
          Nossa página de Histórias é um tesouro de narrativas emocionantes,
          repletas de mistério, aventura e suspense. Aqui, você encontrará uma
          coleção de contos fascinantes que o levarão a mundos imaginários e o
          envolverão em tramas cativantes em volta do universo de IJatu.
        </p>
      </div>
      <div className="mt- p-0 border border-gray-400 w-full" />
      <div className="flex flex-col text-center justify-center content-center gap-4">
        <div>
          <h2 className="text-3xl">Histórias Disponíveis:</h2>
          <ul className="text-center">
            {lores.map((lore) => (
              <li key={lore.id} className="text-lg">
                <Link to={`${lore.id}`}>
                {lore.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
