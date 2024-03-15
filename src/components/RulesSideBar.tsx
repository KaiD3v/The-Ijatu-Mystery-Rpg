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
        <li className="cursor-pointer hover:text-gray-400"><Link to={'/regras/mestre-jogo'}>O Mestre do Jogo</Link></li>
        <li className="cursor-pointer hover:text-gray-400"><Link to={'/regras/como-jogar'}>Como Jogar</Link></li>
        <li className="cursor-pointer hover:text-gray-400"><Link to={'/regras/sistema-dados'}>Sistema de Dados</Link></li>
        <li className="cursor-pointer hover:text-gray-400"><Link to={'/regras/habilidades'}>habilidades</Link></li>
        <li className="cursor-pointer hover:text-gray-400"><Link to={'/regras/combate'}>Combate</Link></li>
        <li><button onClick={toggleMenu}>Fechar</button></li>
      </ul>  
    </div>
  );
};