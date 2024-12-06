export async function getUsersFetch(id, urlApi) {
    try {
        const response = await fetch(`${urlApi}/user/${id}`);
        const data = await response.json();
        console.log("Données fetch utilisateur:", data.data);
        return data.data; // Retourne les données après la récupération
    } catch (error) {
        console.error("Erreur lors de la récupération des données utilisateur :", error);
        return null; // Retourne null en cas d'erreur
    }
}