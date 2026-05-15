import { Link } from "react-router-dom";
import { ruleNavLinks } from "../config/ruleNavigation";

interface RulesSideBarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export function RulesSideBar({ isOpen, toggleMenu }: RulesSideBarProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center h-full max-w-4xl bg-gray-800 text-white ${
        isOpen ? "" : "hidden"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Regras</h2>
      <ul className="flex flex-col gap-2">
        {ruleNavLinks.map(({ to, label }) => (
          <li key={to} className="cursor-pointer hover:text-gray-400">
            <Link to={to}>{label}</Link>
          </li>
        ))}
        <li>
          <button type="button" onClick={toggleMenu}>
            Fechar
          </button>
        </li>
      </ul>
    </div>
  );
}
