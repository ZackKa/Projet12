export async function dataAverageSessionsFetch(id, urlApi) {
    try {
        const response = await fetch(`${urlApi}/user/${id}/average-sessions`);
        const data = await response.json();
        console.log("Données average:", data.data);
        return data.data; // Retourne les données après la récupération
    } catch (error) {
        console.error("Erreur lors de la récupération des données moyennes :", error);
        return null; // Retourne null en cas d'erreur
    }
}