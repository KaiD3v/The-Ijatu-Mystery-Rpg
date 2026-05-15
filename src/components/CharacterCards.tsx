import type { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type {
  CharacterAppearance,
  CharacterAttributes,
} from "../types/content";

const DIALOG_PORTAL_HOST =
  typeof globalThis !== "undefined" && globalThis.document?.body
    ? globalThis.document.body
    : undefined;

export interface CharacterCardProps {
  profilePic: string;
  age: string;
  job: string;
  name: string;
  desc: string;
  lore: string;
  icons?: ReactNode[];
  personality: string;
  skills?: string[];
  appearance?: CharacterAppearance;
  curiosity?: string;
  hp: string;
  pe: string;
  attr: CharacterAttributes;
  pro?: string[];
}

export function CharacterCards({
  name,
  desc,
  profilePic,
  icons,
  personality,
  appearance,
  curiosity,
  hp,
  pe,
  attr,
  skills,
  pro,
  age,
  job,
  lore,
}: CharacterCardProps) {
  const statBadges = [
    { label: "PV", value: hp },
    { label: "PE", value: pe },
    { label: "For", value: attr.str },
    { label: "Res", value: attr.con },
    { label: "Agi", value: attr.dex },
    { label: "Sab", value: attr.knw },
    { label: "Int", value: attr.int },
    { label: "Cha", value: attr.char },
  ];

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="group relative z-0 w-full max-w-[18rem] text-left focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/40 focus-visible:ring-offset-2 focus-visible:ring-offset-void sm:max-w-[18rem]"
        >
          <div className="relative flex h-[22rem] w-full flex-col overflow-hidden rounded-xl border border-stroke bg-panel shadow-panel transition-all duration-300 hover:border-signal/25 hover:shadow-glow">
            <div className="relative flex shrink-0 flex-col items-center bg-gradient-to-b from-panel2 to-panel pb-10 pt-6">
              <div className="rounded-full border border-signal/25 bg-abyss p-1 shadow-innerline">
                <img
                  width={100}
                  height={100}
                  src={profilePic}
                  alt=""
                  className="h-[100px] w-[100px] rounded-full object-cover"
                />
              </div>
              <h2 className="mt-3 px-3 text-center font-display text-base font-semibold text-bone">
                {name}
              </h2>
            </div>
            <div className="flex flex-1 flex-col px-3 pb-4 pt-2">
              <p className="line-clamp-3 text-center text-sm leading-snug text-mist">
                {desc}
              </p>
              {icons && icons.length > 0 ? (
                <div className="mt-auto flex justify-center gap-2 pt-4 text-signal/70">
                  {icons.map((icon, index) => (
                    <span key={index} className="flex h-8 w-8 items-center justify-center">
                      {icon}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </button>
      </Dialog.Trigger>

      {/* Um único portal + wrapper fixed: evita empilhamento errado entre dois portais e isola z-index acima do app (z-20) */}
      <Dialog.Portal container={DIALOG_PORTAL_HOST}>
        <div className="pointer-events-auto fixed inset-0 z-[10050] isolate">
          <Dialog.Overlay className="absolute inset-0 z-0 bg-[#050508]/85 backdrop-blur-md" />
          <Dialog.Content className="absolute left-1/2 top-1/2 z-[1] max-h-[90vh] w-[min(calc(100vw-2rem),42rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-stroke bg-panel2 p-4 shadow-panel sm:max-w-3xl sm:p-6">
            <div className="flex justify-end">
              <Dialog.Close
                type="button"
                className="rounded-md p-2 text-mist transition-colors hover:bg-white/5 hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/40"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </Dialog.Close>
            </div>

            <Dialog.Title className="pr-10 font-display text-xl font-light text-bone sm:text-2xl">
              {name}
              <span className="mt-1 block font-sans text-base font-normal text-mist">
                {age} anos · {job}
              </span>
            </Dialog.Title>
            <Dialog.Description className="mt-3 text-sm leading-relaxed text-mist sm:text-base">
              {desc}
            </Dialog.Description>

            <div className="my-4 h-px bg-stroke" />

            <h3 className="font-mono text-[10px] uppercase tracking-ultra text-signal/80">
              Personalidade
            </h3>
            <p className="mt-2 whitespace-pre-wrap text-sm text-bone/90 sm:text-base">
              {personality}
            </p>

            {appearance ? (
              <>
                <div className="my-4 h-px bg-stroke" />
                <h3 className="font-mono text-[10px] uppercase tracking-ultra text-signal/80">
                  Aparência
                </h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-bone/90 sm:text-base">
                  {appearance.height && <li>Altura: {appearance.height}</li>}
                  {appearance.hair && <li>Cabelo: {appearance.hair}</li>}
                  {appearance.eyesColor && (
                    <li>Cor dos olhos: {appearance.eyesColor}</li>
                  )}
                  {appearance.skinColor && (
                    <li>Cor da pele: {appearance.skinColor}</li>
                  )}
                  {appearance.clothes && <li>Roupas: {appearance.clothes}</li>}
                  {appearance.more && (
                    <li>Outros detalhes: {appearance.more}</li>
                  )}
                  {curiosity && <li>{curiosity}</li>}
                </ul>
              </>
            ) : null}

            <div className="my-4 h-px bg-stroke" />

            <h3 className="font-mono text-[10px] uppercase tracking-ultra text-signal/80">
              Atributos
            </h3>
            <div className="mt-3 flex flex-wrap justify-center gap-2 rounded-lg border border-stroke/80 bg-abyss/90 p-3 sm:gap-3">
              {statBadges.map(({ label, value }) => (
                <span
                  key={label}
                  className="inline-flex min-w-[3.25rem] items-center justify-center rounded border border-stroke bg-bone/10 px-2 py-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-bone sm:text-xs"
                >
                  {label}: {value}
                </span>
              ))}
            </div>

            <details className="mt-4 rounded-lg border border-stroke bg-panel/80 p-3">
              <summary className="cursor-pointer text-sm font-medium text-bone">
                Habilidades
              </summary>
              <ul className="mt-2 list-inside list-disc text-sm text-mist">
                {skills?.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </details>

            <h3 className="mt-6 font-mono text-[10px] uppercase tracking-ultra text-signal/80">
              Perícias
            </h3>
            <ul className="mt-2 space-y-1 text-left text-sm text-bone/90">
              {pro?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <div className="my-4 h-px bg-stroke" />

            <h3 className="font-mono text-[10px] uppercase tracking-ultra text-signal/80">
              História
            </h3>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-mist sm:text-base">
              {lore}
            </p>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
