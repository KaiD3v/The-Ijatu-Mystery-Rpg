import { Link } from "react-router-dom";
import type { GameCharacter } from "../types/content";

export function CharacterCard({ character }: { character: GameCharacter }) {
  const isObservation = character.status.toLowerCase().includes("observa");

  return (
    <Link
      to={`/personagens/${character.id}`}
      className="group block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/40 focus-visible:ring-offset-2 focus-visible:ring-offset-void"
    >
      <article className="flex min-h-[22rem] h-full w-full flex-col overflow-hidden rounded-xl border border-stroke bg-panel shadow-panel transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 hover:shadow-glow">
        <div className="relative flex shrink-0 flex-col items-center bg-gradient-to-b from-panel2 to-panel pb-7 pt-6">
          {/* Badge de status no topo direito */}
          <div className="absolute right-3 top-3">
            <span
              className={`rounded-full px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider ${
                isObservation
                  ? "border border-amber-500/30 bg-amber-500/10 text-amber-300/90"
                  : "border border-signal/20 bg-signal/10 text-signal/80"
              }`}
            >
              {character.status}
            </span>
          </div>

          {/* Retrato em moldura circular com micro-zoom */}
          <div className="overflow-hidden rounded-full border border-signal/25 bg-abyss p-1 shadow-innerline">
            <img
              width={128}
              height={128}
              loading="lazy"
              src={character.profilePic}
              alt={`Retrato de ${character.fullName}`}
              className="h-32 w-32 rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <p className="mt-3 font-mono text-[9px] uppercase tracking-ultra text-signal/75">
            {character.roleLabel}
          </p>
          <h2 className="mt-1 px-3 text-center font-display text-lg font-semibold text-bone transition-colors group-hover:text-amber-100">
            {character.fullName}
          </h2>
        </div>

        <div className="flex flex-1 flex-col px-5 pb-5 pt-3">
          <p className="text-center font-mono text-[10px] uppercase tracking-ultra text-mist/70">
            {character.occupation} · {character.age} anos
          </p>
          <p className="mt-3 line-clamp-3 text-center text-sm leading-snug text-mist">
            {character.summary}
          </p>
          <p className="mt-auto pt-4 text-center font-display text-base italic text-bone/80 group-hover:text-bone">
            “{character.quote}”
          </p>
        </div>
      </article>
    </Link>
  );
}
