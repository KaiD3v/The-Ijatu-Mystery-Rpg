import { Link } from "react-router-dom";
import { LOCALS } from "../data/locals";

export function LocalCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
      {LOCALS.map((local) => (
        <Link
          to={`/locais/${local.id}`}
          key={local.id}
          className="group block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/40 focus-visible:ring-offset-2 focus-visible:ring-offset-void"
        >
          <article className="flex h-full min-h-[20rem] flex-col overflow-hidden rounded-xl border border-stroke bg-panel/70 shadow-innerline backdrop-blur-sm transition duration-300 hover:border-signal/25 hover:shadow-glow">
            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-abyss">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-80" />
              <img
                src={local.image}
                alt={local.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 text-left">
              <h2 className="font-display text-xl font-light text-bone">{local.title}</h2>
              {local.desc ? (
                <p className="mt-2 line-clamp-4 break-words font-sans text-sm leading-relaxed text-mist">
                  {local.desc}
                </p>
              ) : null}
              <span className="mt-auto pt-4 font-mono text-[9px] uppercase tracking-ultra text-signal/70 opacity-0 transition group-hover:opacity-100">
                Ver dossiê
              </span>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
