import * as Dialog from "@radix-ui/react-dialog";

interface CardProps {
  id: string,
  profilePic: string,
  name: string,
  desc: string
}

export const CharacterCards: React.FC<CardProps> = ({ name, desc, profilePic }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="card-container bg-githubComponents rounded-xl w-72 p-0 m-10 overflow-hidden cursor-pointer">
          <div className="flex flex-col text-gray-300 text-center items-center justify-center">
            <h1>{name}</h1>
            <img
              width="250"
              src={profilePic}
              alt="bolsolas"
              className="rounded-md cursor-pointer mt-2 w-full"
            />
            <p className="break-words mt-2">{desc}</p>
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Content className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute bg-slate-700 p-40 rounded-md bg-gray-600">
          <Dialog.Title className="text-white text-xl mb-2">{name}</Dialog.Title>
          <Dialog.Description className="text-gray-300">
            {desc}
          </Dialog.Description>
          <Dialog.Close className="text-gray-300 cursor-pointer mt-4">Fechar</Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
