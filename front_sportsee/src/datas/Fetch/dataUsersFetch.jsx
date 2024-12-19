export async function getUsersFetch(id, urlApi) {
    try {
        // Effectue une requête fetch vers l'API avec l'ID de l'utilisateur pour récupérer les données
        const response = await fetch(`${urlApi}/user/${id}`);

        if(!response.ok){
            console.log("reponse not ok activity")
            return null
        }
        
        const data = await response.json(); // Transforme la réponse en format JSON
        console.log("Données fetch utilisateur:", data.data);
        return data.data; // Retourne les données après la récupération
    } catch (error) {
        console.error("Erreur lors de la récupération des données utilisateur :", error);
        return null; // Retourne null en cas d'erreur
    }
}