import { Link } from "react-router-dom";
import localsData from "../json/LocalsPattern.json";

interface Local {
  id: string;
  title: string;
  desc: string;
}

const locals: Local[] = localsData.locals;

export const LocalCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      {locals.map((local) => (
        <Link to="/" key={local.id}>
          <div className="max-w-xs border-black py-4 items-center text-center overflow-hidden bg-githubComponents">
            <h1 className="text-center text-lg font-bold m-1">{local.title}</h1>
            <img
              src="https://2.bp.blogspot.com/-C4GYKJsXzCQ/V02COXETtZI/AAAAAAAAKgI/Qbt1u_6CugcC4xDGmjvHxp38HrF9ev2CQCLcB/s1600/51803.jpg"
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
