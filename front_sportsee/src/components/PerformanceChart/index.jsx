import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function PerformanceChart(props) {
    // Mappage des catégories en anglais vers les catégories en français
    const kindInFrench = {
        "cardio": "Cardio",
        "energy": "Énergie",
        "endurance": "Endurance",
        "strength": "Force",
        "speed": "Vitesse",
        "intensity": "Intensité"
    };
    // Transformation des données pour adapter au format attendu par le graphique
    const formattedData = props.dataPerformance.data.map(item => ({
        kind: kindInFrench[props.dataPerformance.kind[item.kind]], // Utilisation du mappage français
        value: item.value
    }));
    // Inverser l'ordre des données
    const reversedData = formattedData.reverse();
    

    return (
        <div className='w-full h-full bg-[#282D30] rounded-md'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={reversedData} margin={{ top: 20, right: 23, bottom: 20, left: 23 }}>
                    <PolarGrid radialLines={false} stroke="#ffffff" />
                    <PolarAngleAxis dataKey="kind" tick={{ fontSize: 10, fill: "#ffffff" }} interval={0}/>
                    <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PerformanceChart;