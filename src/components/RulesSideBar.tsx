import { Link } from "react-router-dom";

interface OpenMenuProps {
  isOpen: boolean;
  toggleMenu: () => void; // add prop toggleMenu
}

export const RulesSideBar: React.FC<OpenMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center h-full max-w-4xl bg-gray-800 text-white ${
        isOpen ? "" : "hidden"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Regras</h2>
      <ul className="flex flex-col gap-2">
        <li className="cursor-pointer hover:text-gray-400"><Link to={'/regras/1'}>O Mestre do Jogo</Link></li>
        <li className="cursor-pointer hover:text-gray-400"><Link to={'/regras/2'}>Como Jogar</Link></li>
        <li className="cursor-pointer hover:text-gray-400"><Link to={'/regras/3'}>Sistema de Dados</Link></li>
        <li><button onClick={toggleMenu}>Fechar</button></li>
      </ul>  
    </div>
  );
};