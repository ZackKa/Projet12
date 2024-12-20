import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Fonction pour la legend dans le graphique
function CustomLegend(props) {
    // payload est généré et fourni par le composant Legend en fonction de dataKey de Bar
    const { payload } = props;
  
    return (
      <div className="flex flex-row justify-between items-center mb-6 mr-3">
        <h2 className='font-medium text-base'>Activité quotidienne</h2>
        <div className='flex flex-row justify-end items-center'>
        {/* Pour chaque élément dans le payload (les différentes barres du graphique), afficher une légende */}
            {payload.map((entry, index) => (
            <div key={`item-${index}`} className="flex items-center mr-5">
              {/* Afficher un cercle coloré correspondant à la couleur de la barre */}
                <div className={`w-2.5 h-2.5 rounded-full mr-2`} style={{ backgroundColor: entry.color }} />
                <span className="text-[#74798C]">
                {entry.value === 'kilogram' ? 'Poids (kg)' : entry.value === 'calories' ? 'Calories brûlées (kCal)' : entry.value}
                </span>
            </div>
            ))}
        </div>
      </div>
    );
  }

const dayOfMonth = (date) => {
    const parsedDate = new Date(date); // Convertir la date au format 'YYYY-MM-DD' en un objet Date
    return parsedDate.getDate(); // Retourner le jour du mois (1, 2, 3, ...)
  };

function ActivityChart(props) {
    // Récupération des valeurs de poids ('kilogram') de chaque session dans les données
    const kilogramValues = props.dataActivity.sessions.map(session => session.kilogram);
    const maxKilogram = Math.max(...kilogramValues); // Trouver le poids maximum
    const minKilogram = Math.min(...kilogramValues); // Trouver le poids minimum
    // Création d'un tableau de ticks pour l'axe Y basé sur la plage des poids
    const ticks = [];
    for (let i = minKilogram -1; i <= maxKilogram; i++) {
        ticks.push(i);
    }

    // Personnalisation du Tooltip qui s'affiche lorsque l'on survole une barre du graphique
    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        // On récupère les valeurs de poids et de calories
        const kilogram = payload[0].payload.kilogram;
        const calories = payload[1].payload.calories;

        return (
          <div className="bg-[#E60000] text-white p-3 flex flex-col items-center">
            {/* Affichage des valeurs de poids et de calories dans le tooltip */}
            <p className="text-xs mb-6">{kilogram}kg</p> {/* Affiche seulement le poids avec "kg" */}
            <p className="text-xs">{calories}kCal</p> {/* Affiche seulement les calories avec "kCal" */}
          </div>
        );
      }
      return null; // Si le tooltip n'est pas actif, rien n'est affiché
    };

    return (
      <div
        className='bg-color-activity-bg w-full h-full relative pt-5 px-0 rounded-md'
      >
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
            width={500}
            height={300}
            data={props.dataActivity.sessions}
            margin={{
                top: 0,
                right: 0,
                left: 30,
                bottom: 10,
            }}
            barGap={10}
        
        >
          {/* Ajout d'un quadrillage horizontal */}
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          {/* Axe des X : affichage des jours sous forme de dates */}
          <XAxis dataKey="day" tick={{ fill: '#74798C' }} tickLine={false} tickFormatter={(date) => dayOfMonth(date)}/>
          <YAxis yAxisId="right" orientation="left" hide={true}/>
          {/* Axe des Y à droite : affichage dynamique des valeurs de poids avec des ticks personnalisés */}
          <YAxis yAxisId="left" orientation="right" tickLine={false} axisLine={false} tick={{ fill: '#74798C' }}
            domain={[minKilogram - 1, maxKilogram]}  // Plage dynamique basée sur les valeurs de kilogram
            ticks={ticks} // Utiliser le tableau de ticks pour l'intervalle
          />
          <Tooltip content={<CustomTooltip />}/>
          <Legend content={<CustomLegend />}layout="horizontal" verticalAlign="top"/>
          {/* Barres pour le poids*/}
          <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]}/>
          {/* Barres pour les calories */}
          <Bar yAxisId="right" dataKey="calories" fill="#E60000" barSize={10}radius={[10, 10, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  }
  
  export default ActivityChart;