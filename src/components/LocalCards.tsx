import { Link } from "react-router-dom";
import localsData from "../json/LocalsPattern.json";

interface Local {
  id: string;
  title: string;
  desc: string;
  image: string;
  details: string;
  secrets: string[]
}

const locals: Local[] = localsData.locals;

export const LocalCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      {locals.map((local) => (
        <Link to={`/locais/${local.id}`} key={local.id}>
          <div className="max-w-xs h-80 border-black py-4 items-center text-center overflow-hidden bg-githubComponents">
            <h1 className="text-center text-lg font-bold m-1">{local.title}</h1>
            <img
              src={local.image}
              alt="nome do local"
              className="w-full"
            />
            <p className="text-center break-all m-1">{local.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
