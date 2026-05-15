import { Link } from "react-router-dom";
import { ruleNavLinks } from "../config/ruleNavigation";

export interface RulesSideBarProps {
  /** Em drawer: fecha ao escolher uma regra (o fechamento visual fica no portal do layout). */
  mode: "inline" | "drawer";
  onRequestClose?: () => void;
}

export function RulesSideBar({ mode, onRequestClose }: RulesSideBarProps) {
  const handleNav = () => {
    if (mode === "drawer") onRequestClose?.();
  };

  return (
    <div className="flex h-full min-h-0 w-full flex-col px-4 py-4 text-bone sm:px-5 sm:py-5">
      {mode === "inline" ? (
        <h2 className="border-b border-stroke/80 pb-3 font-mono text-[10px] uppercase tracking-ultra text-signal/90">
          Seções
        </h2>
      ) : null}
      <nav
        className={`flex-1 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] ${
          mode === "inline" ? "mt-4" : ""
        }`}
        aria-label="Índice das regras"
      >
        <ul className="flex flex-col gap-0.5 pb-4">
          {ruleNavLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={handleNav}
                className="block rounded-md border border-transparent px-3 py-3 font-sans text-sm leading-snug text-mist transition hover:border-stroke hover:bg-panel2/80 hover:text-bone active:bg-panel2"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
