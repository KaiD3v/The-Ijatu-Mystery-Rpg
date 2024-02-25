import * as Dialog from "@radix-ui/react-dialog";

interface CardProps {
  profilePic: string;
  name: string;
  desc: string;
}

export const CharacterCards: React.FC<CardProps> = ({
  name,
  desc,
  profilePic,
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
            <div className="absolute text-white bottom-0 left-0 right-0 rounded-b-lg px-6 py-12">
              Ícones
            </div>
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Content className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute bg-slate-700 p-40 rounded-md bg-gray-600">
          <Dialog.Title className="text-white text-xl mb-2">
            {name}
          </Dialog.Title>
          <Dialog.Description className="text-gray-300">
            {desc}
          </Dialog.Description>
          <Dialog.Close className="text-gray-300 cursor-pointer mt-4">
            Fechar
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
