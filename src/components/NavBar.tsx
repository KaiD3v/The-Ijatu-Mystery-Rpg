import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [rulesOpen, setRulesOpen] = useState(false);
  const [localsOpen, setLocalsOpen] = useState(false);
  const [storiesOpen, setStoriesOpen] = useState(false);
  const [charactersOpen, setCharactersOpen] = useState(false);
  const [itensOpen, setItensOpen] = useState(false);

  return (
    <nav className=" flex text-gray-300 bg-githubnav font-times justify-between text-center p-4 border-b">
      <div className="flex text-center items-center ml-1">
        <Link className="flex text-center items-center ml-1" to={"/"}>
          <h1 className="text-2xl text- font-extralight">Ijatu</h1>
          <span className="text-2xl font-bold ml-2">Mystery</span>
        </Link>
      </div>
      <ul className=" flex justify-between gap-5">
        <li>
          <ul>
            <button onClick={() => setRulesOpen(!rulesOpen)}>Regras</button>
            {rulesOpen ? (
              <li className=" flex flex-col gap-1 absolute bg-gray-800 p-2 border rounded-md">
                <Link to={"/"}>Link 1</Link>
                <Link to={"/"}>Link 2</Link>
                <Link to={"/"}>Link 3</Link>
              </li>
            ) : (
              <li>
                <Link to={"/"}></Link>
              </li>
            )}
          </ul>
        </li>
        <li>
          <ul>
            <button onClick={() => setLocalsOpen(!localsOpen)}>Locais</button>
            {localsOpen ? (
              <li className=" flex flex-col gap-1 absolute bg-gray-800 p-2 border rounded-md">
                <Link to={"/"}>Link 1</Link>
                <Link to={"/"}>Link 2</Link>
                <Link to={"/"}>Link 3</Link>
              </li>
            ) : (
              <li>
                <Link to={"/"}></Link>
              </li>
            )}
          </ul>
        </li>
        <li>
          <ul>
            <button onClick={() => setStoriesOpen(!storiesOpen)}>
              Histórias
            </button>
            {storiesOpen ? (
              <li className=" flex flex-col gap-1 absolute bg-gray-800 p-2 border rounded-md">
                <Link to={"/"}>Link 1</Link>
                <Link to={"/"}>Link 2</Link>
                <Link to={"/"}>Link 3</Link>
              </li>
            ) : (
              <li>
                <Link to={"/"}></Link>
              </li>
            )}
          </ul>
        </li>
        <li>
          <ul>
            <button onClick={() => setCharactersOpen(!charactersOpen)}>
              Personagens
            </button>
            {charactersOpen ? (
              <li className=" flex flex-col gap-1 absolute bg-gray-800 p-2 border rounded-md">
                <Link to={"/"}>Link 1</Link>
                <Link to={"/"}>Link 2</Link>
                <Link to={"/"}>Link 3</Link>
              </li>
            ) : (
              <li>
                <Link to={"/"}></Link>
              </li>
            )}
          </ul>
        </li>
        <li>
          <ul>
            <button onClick={() => setItensOpen(!itensOpen)}>Itens</button>
            {itensOpen ? (
              <li className=" flex flex-col gap-1 absolute bg-gray-800 p-2 border rounded-md">
                <Link to={"/"}>Link 1</Link>
                <Link to={"/"}>Link 2</Link>
                <Link to={"/"}>Link 3</Link>
              </li>
            ) : (
              <li>
                <Link to={"/"}></Link>
              </li>
            )}
          </ul>
        </li>
        <li>
          <Link to={"/"}>Contatos</Link>
        </li>
      </ul>
    </nav>
  );
};
