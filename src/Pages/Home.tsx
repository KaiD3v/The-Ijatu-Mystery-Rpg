export const Home = () => {
  return (
    <div className="flex flex-col items-center m-10 font-times">
      <div className="h-10" />
      <div className="flex flex-col mt-4 border-l p-4"> {/* Adicionando padding de 4 unidades */}
        <h1 className="text-9xl pr-4 text-white italic">Ijatu Mystery</h1>
        <p className="m-3 text-2xl ml-1 font-extralight italic text-gray-500">
          O RPG de Mistério mais pica do Brasil!
        </p>
        <div className="flex mt-10">
          <button className="text-github bg-gray-100 border rounded-lg m-1 px-14 py-3 transition duration-300 hover:shadow-lg hover:opacity-100">
            Explorar Conteúdo
          </button>
          <div className="bg-white w-px" />
          <button className="text-white border border-white rounded-lg m-1 px-14 py-3 transition duration-500 ease-in-out hover:bg-black hover:border-white hover:opacity-100">
            Baixar Livros
          </button>
        </div>
      </div>
      <div className="">
        
      </div>
    </div>
  );
};