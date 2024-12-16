import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

function ScoreChart(props) {
    // Récupérer automatiquement 'todayScore' ou 'score' en fonction de ce qui existe dans props.user
    const donnee = props.user.todayScore !== undefined ? props.user.todayScore : props.user.score;
    // Calculer l'angle du score car les données sont de 0 à 1
    const scoreAngle = donnee * 360;

    return (
        <div className='w-full h-full bg-[#FBFBFB] rounded-md relative'>
            <ResponsiveContainer width='100%' height='100%'>
                <PieChart>
                    <Pie
                        dataKey='score' // On utilise la clé 'score' pour la donnée à afficher
                        // Création de données fictives avec deux éléments pour former deux secteurs dans le graphique
                        data={[{ score: 1 }, { score: 0 }]} 
                        cx='50%' // Centrer le graphique horizontalement
                        cy='50%' // Centrer le graphique verticalement
                        startAngle={90} // Commencer le graphique à 90° (à la position 12 heures)
                        endAngle={scoreAngle + 90}  // Calculer l'angle final en ajoutant l'angle du score au départ (pour ajuster la position du secteur)
                        stroke='none' // Enlever le contour autour du secteur
                        cornerRadius={100}
                        innerRadius="70%" // Rayon intérieur ajusté en pourcentage pour être plus près du centre
                        outerRadius="76%" // Rayon extérieur ajusté pour être proche de l'extrémité du graphique
                    >
                        <Cell fill='#FF0000' /> 
                        <Cell fill='none' /> 
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className='absolute top-2 left-3 text-[14px] text-black font-medium'>
                    Score
                </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[66%] h-[66%] bg-white rounded-full flex items-center justify-center text-black'>
                <div className='text-center'>
                    <div className='text-xl font-bold'>{(donnee * 100).toFixed(0)}%</div>
                    <div className='text-sm'>de votre objectif</div>
                </div>
            </div>
        </div>
    );
}

export default ScoreChart;