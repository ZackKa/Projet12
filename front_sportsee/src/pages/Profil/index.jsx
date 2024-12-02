import Header from '../../components/Header/index'
import Aside from '../../components/Aside'
import { useParams } from 'react-router-dom'
import mockDataUsers from '../../datas/Mock/mockDataUsers.json'
import Error from '../Error'
import CardAside from '../../components/CardAside'

function Profil() {
  const { id } = useParams()
  // const user=getUserData(id);
 const user = mockDataUsers.find((user) => user.id === parseInt(id));
  if (!user) {
      return <Error />;
  }
  return (
    <>
      <Header />
      <main className='ml-48 relative mr-20 mb-5'>
        <header className='mt-12 flex flex-col flex-nowrap gap-5'>
          <h1 className='text-5xl'>Bonjour <span className='text-red-500'>{user.userInfos.firstName}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
        <div className='flex flex-row flex-nowrap items-start justify-between mt-6'>
          <div className='w-3/5 bg-black h-8 gap-4'></div>
          <CardAside helth = {mockDataUsers} id = {id}/>
        </div>
      </main>
      <Aside />
    </>
  );
}

export default Profil;
