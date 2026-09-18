import { Link } from "react-router-dom";
import { getLocalAsset } from "../data/locals";
import type { GameLocal } from "../types/content";

interface LocalCardsProps { locals: readonly GameLocal[] }

export function LocalCards({ locals }: LocalCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {locals.map((local) => (
        <Link to={`/locais/${local.id}`} key={local.id} className="group block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/40 focus-visible:ring-offset-2 focus-visible:ring-offset-void">
          <article className="flex h-full min-h-[22rem] flex-col overflow-hidden rounded-xl border border-stroke bg-panel/70 shadow-innerline backdrop-blur-sm transition duration-300 hover:border-signal/25 hover:shadow-glow">
            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-abyss">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/85 via-transparent to-transparent opacity-90" />
              {getLocalAsset(local.imageAsset) ? <img src={getLocalAsset(local.imageAsset)} alt={`Capa documental de ${local.title}`} width={1200} height={900} loading="lazy" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "/assets/locations/dossier-cover.svg"; }} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /> : <div className="h-full w-full bg-gradient-to-br from-panel2 to-abyss" aria-hidden="true" />}
              <span className="absolute left-4 top-4 rounded border border-signal/30 bg-void/75 px-2 py-1 font-mono text-[9px] uppercase tracking-ultra text-signal">{local.fileNumber}</span>
            </div>
            <div className="flex flex-1 flex-col p-5 text-left">
              <p className="font-mono text-[9px] uppercase tracking-ultra text-signal/70">{local.category}</p>
              <h2 className="mt-2 font-display text-xl font-light text-bone">{local.title}</h2>
              <p className="mt-2 line-clamp-3 font-sans text-sm leading-relaxed text-mist">{local.summary}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-4">{local.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full border border-stroke px-2 py-1 font-mono text-[9px] text-mist/80">#{tag}</span>)}</div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
