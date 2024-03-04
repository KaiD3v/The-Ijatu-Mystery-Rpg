import { Link } from "react-router-dom";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export const NavBar = () => {

  return (
    <nav className=" flex text-gray-300 bg-githubnav font-times sm:justify-between justify-around text-center p-4 border-b">
      <div className="sm:hidden flex self-start left-1">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <HamburgerMenuIcon className=" w-8 h-8"/>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content sideOffset={5}>
            <ul className="flex flex-col gap-1 bg-gray-800 p-2 border rounded-md">
              <li><Link to={"/regras"}>Regras</Link></li>
              <li><Link to={"/locais"}>Locais</Link></li>
              <li><Link to={"/"}>Histórias</Link></li>
              <li><Link to={"/personagens"}>Personagens</Link></li>
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
            <Link to={'/regras'}>Regras</Link>
        </li>
        <li>
        <Link to={'/locais'}>Locais</Link>
        </li>
        <li>
         <Link to={'/'}>Historias</Link>
        </li>
        <li>
         <Link to={'/personagens'}>Personagens</Link>
        </li>
        <li>
        <Link to={'/'}>Itens</Link>
        </li>
        <li>
          <Link to={"/"}>Contatos</Link>
        </li>
      </ul>
    </nav>
  );
};