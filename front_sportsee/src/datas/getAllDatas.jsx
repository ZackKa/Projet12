import mockDataUsers from './Mock/mockDataUsers.json'
import mockDataActivity from './Mock/mockDataActivity.json'
import mockDataAverage from './Mock/mockDataAverageSessions.json'
import mockDataPerformance from './Mock/mockDataPerformance.json'
import { getUsersFetch } from './Fetch/dataUsersFetch'
import { dataActivityFetch } from './Fetch/dataActivityFetch'
import { dataAverageSessionsFetch } from './Fetch/dataAverageSessionsFetch'
import { dataPerformanceFetch } from './Fetch/dataPerformanceFetch'

const useMock = process.env.REACT_APP_USE_MOCK;
const urlApi = process.env.REACT_APP_URL_API


export function getUserData(id) {
    return getDatas("user", id);
}

export function getActivityData(id)
{
    return getDatas("activity",id);
}

export function getAverageData(id)
{
    return getDatas("average",id);
}

export function getPerformanceData(id)
{
    return getDatas("performance",id);
}


async function getDatas(contexte, id) {
    try {
        switch (contexte) {
            case "user":
                if (useMock) {
                    return mockDataUsers.find((user) => user.id === parseInt(id)); // Retourne directement les données du mock
                }
                return await getUsersFetch(id, urlApi);
            
            case "activity":
                if (useMock) {
                    return mockDataActivity.find((user) => user.userId === parseInt(id));
                }
                return await dataActivityFetch(id, urlApi);

            case "average":
                if (useMock) {
                    return mockDataAverage.find((user) => user.userId === parseInt(id));
                } 
                return await dataAverageSessionsFetch(id, urlApi);

            case "performance":
                if (useMock) {
                    return mockDataPerformance.find((user) => user.id === parseInt(id));
                }
                return await dataPerformanceFetch(id, urlApi);

            default:
                return null; // Retourne null par défaut si le contexte ne correspond pas
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return null; // Retourne null en cas d'erreur
    }
}