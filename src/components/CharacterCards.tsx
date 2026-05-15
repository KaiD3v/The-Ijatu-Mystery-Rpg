import type { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type {
  CharacterAppearance,
  CharacterAttributes,
} from "../types/content";

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
  return (
    <Dialog.Root>
      <Dialog.Trigger className="">
        <div className="card-container  items-center justify-center text-center bg-gray-900 rounded-lg w-full sm:w-72 overflow-hidden cursor-pointer relative shadow-xl">
          <div className="bg-gray-800 h-32">
            <div className="flex flex-col gap-8 text-gray-200 text-center items-center justify-center">
              <div className="mt-8 px-24" />
              <div className="p-1 bg-gray-800 rounded-full">
                <img
                  width="100"
                  src={profilePic}
                  alt={`Retrato de ${name}`}
                  className="rounded-full cursor-pointer"
                />
              </div>
            </div>
            <div>
              <h1 className="text-center text-gray-300 font-bold">{name}</h1>
              <div className="text-gray-400 mt-8">{desc}</div>
            </div>
            <div className="absolute flex items-center justify-center text-white bottom-0 left-0 right-0 rounded-b-lg px-6 py-12">
              {icons?.map((icon, index) => (
                <span key={index} className="mr-4">
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Content className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute sm:text-base text-sm inset-0 flex justify-center items-center bg-slate-700 overflow-hidden">
          <div className="sm:w-5/6 sm:h-5/6 w-full max-w-screen-lg h-full border border-white rounded-md bg-gray-800 overflow-y-auto flex flex-col ">
            <div className="flex justify-end absolute top-0 right-0 m-2">
              <Dialog.Close className="absolute top-0 right-0 m-2 text-gray-300 cursor-pointer">
                <X />
              </Dialog.Close>
            </div>
            <div className="flex border sm:text-base text-sm bg-gray-800 border-t-0 rounded-t-none rounded-md p-4 flex-col gap-4 justify-center items-center text-left">
              <Dialog.Title className="text-white sm:text-xl text-sm ">
                {name}, {age}, {job}
              </Dialog.Title>
              <Dialog.Description className="text-gray-300">
                {desc}
              </Dialog.Description>
              <div className="m-0 p-0 border border-gray-400 w-full" />
              <h1> Personalidade: </h1>
              <p>{personality}</p>
              <div className="m-0 p-0 border border-gray-400 w-full" />
              {appearance ? (
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-white text-xl mb-0">Aparência</h1>
                  <ul>
                    {appearance.height && <li>Altura: {appearance.height}</li>}
                    {appearance.hair && <li>Cabelo: {appearance.hair}</li>}
                    {appearance.eyesColor && (
                      <li>Cor dos olhos: {appearance.eyesColor}</li>
                    )}
                    {appearance.skinColor && (
                      <li>Cor da pele: {appearance.skinColor}</li>
                    )}
                    {appearance.clothes && (
                      <li>Roupas: {appearance.clothes}</li>
                    )}
                    {appearance.more && (
                      <li>Outros detalhes: {appearance.more}</li>
                    )}
                    {curiosity && <li>{curiosity}</li>}
                  </ul>
                </div>
              ) : null}
              <div className="border border-gray-400 w-full" />
              <div className="justify-center text-center">
                <h1 className="text-white sm:text-xl text-sm">Atributos</h1>
                <div className="flex sm:text-xl text-sm gap-6 bg-gray-200 text-github sm:p-4 py-2 text rounded-xl">
                  <h1>PV: {hp}</h1>
                  <h1>PE: {pe}</h1>
                  <h1>For: {attr.str}</h1>
                  <h1>Res: {attr.con}</h1>
                  <h1>Agi: {attr.dex}</h1>
                  <h1>Sab: {attr.knw}</h1>
                  <h1>Int: {attr.int}</h1>
                  <h1>Cha: {attr.char}</h1>
                </div>
                <details className="flex">
                  <summary className="cursor-pointer">Habilidades</summary>
                  <ul>
                    {skills?.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </details>
                <h1 className="text-white m-4 text-xl">Perícias</h1>
                <ul className="flex text-left justify-center items-center flex-col">
                  {pro?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="m-0 p-0 border border-gray-400 w-full" />
              <div>
                <h1 className="text-white m-4 text-xl">História</h1>
                <p>{lore}</p>
              </div>
              <div className="m-0 p-0 border border-gray-400 w-full" />
            </div>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
