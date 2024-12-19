import mockDataUsers from './Mock/mockDataUsers.json'
import mockDataActivity from './Mock/mockDataActivity.json'
import mockDataAverage from './Mock/mockDataAverageSessions.json'
import mockDataPerformance from './Mock/mockDataPerformance.json'
import { getUsersFetch } from './Fetch/dataUsersFetch'
import { dataActivityFetch } from './Fetch/dataActivityFetch'
import { dataAverageSessionsFetch } from './Fetch/dataAverageSessionsFetch'
import { dataPerformanceFetch } from './Fetch/dataPerformanceFetch'


const USE_MOCK = process.env.REACT_APP_USE_MOCK;
const URL_API = process.env.REACT_APP_URL_API


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
                if (USE_MOCK === "1") {
                    console.log("mcok", typeof(USE_MOCK))
                    console.log(USE_MOCK)
                    return mockDataUsers.find((user) => user.id === parseInt(id)); // Retourne directement les données du mock
                }
                console.log("mcok", typeof(USE_MOCK))
                console.log(USE_MOCK)
                return await getUsersFetch(id, URL_API);
            
            case "activity":
                if (USE_MOCK === "1") {
                    return mockDataActivity.find((user) => user.userId === parseInt(id));
                }
                return await dataActivityFetch(id, URL_API);

            case "average":
                if (USE_MOCK === "1") {
                    return mockDataAverage.find((user) => user.userId === parseInt(id));
                } 
                return await dataAverageSessionsFetch(id, URL_API);

            case "performance":
                if (USE_MOCK === "1") {
                    return mockDataPerformance.find((user) => user.userId === parseInt(id));
                }
                return await dataPerformanceFetch(id, URL_API);

            default:
                return null; // Retourne null par défaut si le contexte ne correspond pas
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return null; // Retourne null en cas d'erreur
    }
}