import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface CardProps {
  profilePic: string;
  age: string;
  job: string;
  name: string;
  desc: string;
  icons?: React.ReactNode;
  personality: string;
  skills?: string[];
  appearence?: {
    height?: string;
    hair?: string;
    eyesColor?: string;
    skinColor?: string;
    clothes?: string;
    more?: string;
  };
  curiosity?: string;
  hp: string;
  pe: string;
  attr: {
    str: string;
    con: string;
    dex: string;
    knw: string;
    int: string;
    char: string;
  };
  pro?: string[];
}

export const CharacterCards: React.FC<CardProps> = ({
  name,
  desc,
  profilePic,
  icons,
  personality,
  appearence,
  curiosity,
  hp,
  pe,
  attr,
  skills,
  pro,
  age,
  job,
}) => {
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
                  alt="bolsolas"
                  className="rounded-full cursor-pointer"
                />
              </div>
            </div>
            <div>
              <h1 className="text-center text-gray-300 font-bold">{name}</h1>
              <div className="text-gray-400 mt-8">{desc}</div>
            </div>
            <div className="absolute flex items-center justify-center text-white bottom-0 left-0 right-0 rounded-b-lg px-6 py-12">
              {icons &&
                Array.isArray(icons) &&
                icons.map((icon, i) => (
                  <span key={i} className="mr-4">
                    {icon}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Content className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 flex justify-center items-center bg-slate-700">
          <div className="sm:w-5/6 sm:h-5/6 w-full h-full border border-white rounded-md bg-gray-800">
            <div className="flex justify-end absolute top-0 right-0 m-2">
              <Dialog.Close className="absolute top-0 right-0 m-2 text-gray-300 cursor-pointer">
                <X />
              </Dialog.Close>
            </div>

            <div className="flex border bg-gray-800 border-t-0 rounded-t-none rounded-md p-4 flex-col gap-4 justify-center items-center text-left h-full">
              <Dialog.Title className="text-white text-xl mb-0">
                {name}, {age}, {job}
              </Dialog.Title>
              <Dialog.Description className="text-gray-300">
                {desc}
              </Dialog.Description>
              <div>
                <h1> Personalidade: {personality}</h1>
              </div>
              {appearence ? (
                <div>
                  <h1>Aparência</h1>
                  <ul>
                    {appearence.height && <li>Altura: {appearence.height}</li>}
                    {appearence.hair && <li>Cabelo: {appearence.hair}</li>}
                    {appearence.eyesColor && (
                      <li>Cor dos olhos: {appearence.eyesColor}</li>
                    )}
                    {appearence.skinColor && (
                      <li>Cor da pele: {appearence.skinColor}</li>
                    )}
                    {appearence.clothes && (
                      <li>Roupas: {appearence.clothes}</li>
                    )}
                    {appearence.more && (
                      <li>Outros detalhes: {appearence.more}</li>
                    )}
                  </ul>
                  {curiosity}
                </div>
              ) : (
                ""
              )}
              <div className=" justify-center text-center">
                <details className="flex mr-12">
                  <summary className="cursor-pointer">Habilidades</summary>
                  <ul className="">
                    {skills?.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </details>

                <h1 className="text-white text-xl">Atributos</h1>
                <div className="flex gap-6 bg-gray-200 text-github p-4 rounded-xl">
                  <h1>PV: {hp}</h1>
                  <h1>PE: {pe}</h1>
                  <h1>For: {attr.str}</h1>
                  <h1>Res: {attr.con}</h1>
                  <h1>Agi: {attr.dex}</h1>
                  <h1>Sab: {attr.knw}</h1>
                  <h1>Int: {attr.int}</h1>
                  <h1>Cha: {attr.char}</h1>
                </div>

                <h1 className="text-white m-4 text-xl">Perícias</h1>

                <ul className="flex flex-col">
                  {pro?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
