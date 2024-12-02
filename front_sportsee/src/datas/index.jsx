//renommer le fichier
import mockDataUsers from '../Mock/mockDataUsers.json'
import mockDataActivity from '../Mock/mockDataActivity.json'
import mockDataAverage from '../Mock/mockDataAverageSessions.jspn'
import mockDataPerformance from '../Mock/mockDataPerformance.json'

getUserData(id) {

    return getDatas("user",id)
}

getActivityData(id)
{
    return getDatas("activity",id)
}

getAverageData(id)
{
    return getDatas("average",id)
}

getPerformanceData(id)
{
    return getDatas("performance",id)
}


private getDatas(contexte,id) {

    
    switch (contexte) {
        case "user":
            
            if(mock ){
                return   mockDataUsers.find((user) => user.id === parseInt(id));
            } 
            return getDataFecth(contexte, id);
        case "activity":
            
            if(mock ){
                return  mockDataActivity.find((user) => user.id === parseInt(id));
            } 
            return getDataFecth(contexte, id);
        case "average":
            
            if(mock ){
                return  mockDataAverage.find((user) => user.id === parseInt(id));
            } 
            return getDataFecth(contexte, id);
        case "performance":
            
            if(mock ){
                return  mockDataPerformance.find((user) => user.id === parseInt(id));
            } 
            return getDataFecth(contexte, id);
                      
                
    }

    return null;
}