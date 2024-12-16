import { useState, useEffect } from 'react';
import Header from '../../components/Header/index';
import Aside from '../../components/Aside';
import { useParams } from 'react-router-dom';
import { getUserData, getAverageData, getActivityData, getPerformanceData } from '../../datas/getAllDatas';
import Error from '../Error';
import CardAside from '../../components/CardAside';
import ObjectifChart from '../../components/ObjectifChart';
import ActivityChart from '../../components/ActivityChart';
import PerformanceChart from '../../components/PerformanceChart';
import ScoreChart from '../../components/ScoreChart';

function Profil() {
  const { id } = useParams(); // Récupérer le paramètre `id` depuis l'URL
  const [user, setUser] = useState(null); // État pour stocker les données de l'utilisateur
  const [dataAverage, setDataAverage] = useState(null); // État pour les données de moyenne
  const [dataActivity, setDataActivity] = useState(null);// État pour les données d'activité
  const [dataPerformance, setDataPerformance] = useState(null);// État pour les données de performance
  
  // Etats de chargement pour eviter les erreurs
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingAverage, setLoadingAverage] = useState(true);
  const [loadingActivity, setLoadingActivity] = useState(true);
  const [loadingPerformance, setLoadingPerformance] = useState(true);

  // useEffect est utilisé ici pour récupérer les données asynchrones depuis des APIs externes après le rendu initial du composant.
  useEffect(() => {
    getUserData(id) // Appel API pour récupérer les données de l'utilisateur
      .then(data => {
        setUser(data);// Mettre à jour l'état avec les données récupérées
        setLoadingUser(false); // Données utilisateur prêtes.
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, [id]); // useEffect dépend de l'ID, il se réexécute à chaque changement d'ID

  // Récupération des données de moyenne
  useEffect(() => {
    getAverageData(id)
      .then(data => {
        setDataAverage(data);
        setLoadingAverage(false); // Données moyennes prêtes
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, [id]);

  // Récupération des données d'activité
  useEffect(() => {
    getActivityData(id)
      .then(data => {
        setDataActivity(data);
        setLoadingActivity(false); // Données d'activité prêtes
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, [id]);

  // Récupération des données de performance
  useEffect(() => {
    getPerformanceData(id)
      .then(data => {
        setDataPerformance(data);
        setLoadingPerformance(false); // Données de performance prêtes
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, [id]);

    // Si les données de l'utilisateur sont toujours en chargement, afficher un message d'erreur
  if (loadingUser) {
    return <Error />; // // Afficher une erreur si les données de l'utilisateur ne sont pas encore disponibles
  }

  return (
    <>
      <Header />
      <main className='ml-48 relative mr-20 mb-7'>
        <header className='mt-12 flex flex-col flex-nowrap gap-5'>
          <h1 className='text-5xl'>Bonjour <span className='text-red-500'>{user.userInfos.firstName}</span></h1>
          <p className='font-medium'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
        <div className='flex flex-row flex-nowrap gap-11 mt-6 w-full h-full'>
          <div className='flex flex-col flex-nowrap w-activity_w h-full justify-between'>
            <div className='w-full h-activity_h mb-6'>
              {loadingActivity ? <div>Loading...</div> : <ActivityChart dataActivity={dataActivity}/>}
            </div>
            <div className='w-[100%] flex flex-row flex-nowrap items-center justify-between'>
              <div className='w-[29%] aspect-[1/1]'>
                {/* Affichage conditionnel pour ObjectifChart si dataAverage est prête */}
                {loadingAverage ? <div>Loading...</div> : <ObjectifChart dataAverage={dataAverage} />}
              </div>
              <div className='w-[29%] aspect-[1/1]'>
                {/* Affichage conditionnel pour PerformanceChart si dataPerformance est prête */}
                {loadingPerformance ? <div>Loading...</div> : <PerformanceChart dataPerformance={dataPerformance} />}
              </div>
              <div className='w-[29%] aspect-[1/1]'>
                <ScoreChart user={user} />
              </div>
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
