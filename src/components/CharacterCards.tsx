import { Link } from "react-router-dom";
import type { GameCharacter } from "../types/content";

export function CharacterCard({ character }: { character: GameCharacter }) {
  return (
    <Link to={`/personagens/${character.id}`} className="group block w-full max-w-[19rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/40 focus-visible:ring-offset-2 focus-visible:ring-offset-void">
      <article className="flex min-h-[22rem] w-full flex-col overflow-hidden rounded-xl border border-stroke bg-panel shadow-panel transition-all duration-300 hover:border-signal/25 hover:shadow-glow">
        <div className="relative flex shrink-0 flex-col items-center bg-gradient-to-b from-panel2 to-panel pb-8 pt-6"><div className="rounded-full border border-signal/25 bg-abyss p-1 shadow-innerline"><img width={128} height={128} src={character.profilePic} alt={`Retrato de ${character.fullName}`} className="h-32 w-32 rounded-full object-cover" /></div><p className="mt-3 font-mono text-[9px] uppercase tracking-ultra text-signal/75">{character.roleLabel}</p><h2 className="mt-1 px-3 text-center font-display text-lg font-semibold text-bone">{character.fullName}</h2></div>
        <div className="flex flex-1 flex-col px-4 pb-4 pt-4"><p className="font-mono text-[10px] uppercase tracking-ultra text-mist/70">{character.occupation} · {character.age} anos</p><p className="mt-3 line-clamp-3 text-center text-sm leading-snug text-mist">{character.summary}</p><p className="mt-auto pt-4 text-center font-display text-base italic text-bone/80">“{character.quote}”</p></div>
      </article>
    </Link>
  );
}
