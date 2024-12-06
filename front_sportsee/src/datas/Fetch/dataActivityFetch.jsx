export async function dataActivityFetch(id, urlApi) {
    try {
        const response = await fetch(`${urlApi}/user/${id}/activity`);
        const data = await response.json();
        console.log("Données activity:", data.data);
        return data.data; // Retourne les données après la récupération
    } catch (error) {
        console.error("Erreur lors de la récupération des données d'activité :", error);
        return null; // Retourne null en cas d'erreur
    }
}