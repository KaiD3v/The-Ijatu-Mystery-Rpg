import { Link } from "react-router-dom";

interface OpenMenuProps {
  isOpen: boolean;
  toggleMenu: () => void; // Adicionando a prop toggleMenu
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
        <li className="cursor-pointer hover:text-gray-400"><Link to={'/regras/1'}>ChupeChupe</Link></li>
        <li className="cursor-pointer hover:text-gray-400"><Link to={'/regras/2'}>Regras do Jogo</Link></li>
        <li className="cursor-pointer hover:text-gray-400">Exemplos</li>
        <li><button onClick={toggleMenu}>Close</button></li>
      </ul>  
    </div>
  );
};