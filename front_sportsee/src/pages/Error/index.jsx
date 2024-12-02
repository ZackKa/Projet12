import Header from '../../components/Header/index'
import Aside from '../../components/Aside';

function Error() {
  return (
    <>
      <Header />
      <h1 className="text-4xl text-center text-black font-bold mt-52 ml-28" >Erreur 404 !</h1>
      <Aside />
    </>
  );
}

export default Error;