import { useState, useEffect } from 'react';
import Header from '../../components/Header/index';
import Aside from '../../components/Aside';
import { useParams } from 'react-router-dom';
import { getUserData, getAverageData, getActivityData } from '../../datas/getAllDatas';
import Error from '../Error';
import CardAside from '../../components/CardAside';
import ObjectifChart from '../../components/ObjectifChart';
import ActivityChart from '../../components/ActivityChart'

function Profil() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [dataAverage, setDataAverage] = useState(null);
  const [dataActivity, setDataActivity] = useState(null);

  // Utilisation de useEffect pour charger les données de l'utilisateur
  useEffect(() => {
    getUserData(id)
      .then(data => {
        setUser(data); // Met à jour l'état avec les données de l'utilisateur
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, [id]); // Le hook se déclenche à chaque changement de `id`
  console.log("user profil",user);
  
  useEffect(() => {
    getAverageData(id)
      .then(data => {
        setDataAverage(data); // Met à jour l'état avec les données de l'utilisateur
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, [id]);
  console.log("AVERAGE DATA Profil",dataAverage);

  useEffect(() => {
    getActivityData(id)
      .then(data => {
        setDataActivity(data); // Met à jour l'état avec les données de l'utilisateur
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, [id]);
  console.log("Activity DATA Profil",dataActivity);

  if (!user) {
    return <Error />; // Affiche une erreur si `user` est null ou undefined
  }

  return (
    <>
      <Header />
      <main className='ml-48 relative mr-20 mb-5'>
        <header className='mt-12 flex flex-col flex-nowrap gap-5'>
          <h1 className='text-5xl'>Bonjour <span className='text-red-500'>{user.userInfos.firstName}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
        <div className='flex flex-row flex-nowrap items-start justify-between mt-6 w-full'>
          <div className='w-80% bg-slate-400 gap-4'>
            <div className='w-full mb-2'>
              <ActivityChart dataActivity={dataActivity}/>
            </div>
            <div className='w-full flex flex-row flex-nowrap items-center mt-2'>
              <ObjectifChart dataAverage={dataAverage}/>
            </div>
          </div>
          <CardAside helth={user} id={id} />
        </div>
      </main>
      <Aside />
    </>
  );
}

export default Profil;
