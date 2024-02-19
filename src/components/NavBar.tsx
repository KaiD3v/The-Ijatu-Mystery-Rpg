import { useState } from "react";
import { Link } from "react-router-dom";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export const NavBar = () => {
  const [rulesOpen, setRulesOpen] = useState(false);
  const [localsOpen, setLocalsOpen] = useState(false);
  const [storiesOpen, setStoriesOpen] = useState(false);
  const [charactersOpen, setCharactersOpen] = useState(false);
  const [itensOpen, setItensOpen] = useState(false);

  return (
    <nav className=" flex text-gray-300 bg-githubnav font-times sm:justify-between justify-around text-center p-4 border-b">
      <div className="sm:hidden flex self-start left-1">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <HamburgerMenuIcon className=" w-8 h-8"/>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content sideOffset={5}>
            <ul className="flex flex-col gap-1 bg-gray-800 p-2 border rounded-md">
              <li><Link to={"/"}>Regras</Link></li>
              <li><Link to={"/"}>Locais</Link></li>
              <li><Link to={"/"}>Histórias</Link></li>
              <li><Link to={"/"}>Personagens</Link></li>
              <li><Link to={"/"}>Itens</Link></li>
            </ul>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
      <div className="flex justify-between items-center ml-1 sm:justify-center">
        <Link className="flex text-center items-center ml-1" to={"/"}>
          <h1 className="text-2xl text- font-extralight">Ijatu</h1>
          <span className="text-2xl font-bold ml-2">Mystery</span>
        </Link>
      </div>
      <ul className=" hidden sm:flex justify-between gap-5">
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
