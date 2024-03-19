import { SearchX } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col justify-center items-center text-center m-10">
        <h1 className=" text-3xl text-bold italic m-5">Ops! Parece que há um mistério aqui...</h1>
        <p>Sua página não foi encontrada!</p>
        <Link to={'/'}>
        <SearchX height={80} width={100}/>
        </Link>
        <div className='flex gap-2'>
        <p>Voltar para</p><Link className='underline' to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
