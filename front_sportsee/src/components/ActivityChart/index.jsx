import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Fonction pour la legend
function CustomLegend(props) {
    // payload est généré et fourni par le composant Legend en fonction de dataKey de Bar
    const { payload } = props;
  
    return (
      <div className="flex flex-row justify-between items-center mb-6 mr-3">
        <h2 className='font-medium text-base'>Activité quotidienne</h2>
        <div className='flex flex-row justify-end items-center'>
            {payload.map((entry, index) => (
            <div key={`item-${index}`} className="flex items-center mr-5">
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
    const kilogramValues = props.dataActivity.sessions.map(session => session.kilogram);
    const maxKilogram = Math.max(...kilogramValues);
    const minKilogram = Math.min(...kilogramValues);
    // Créer un tableau de ticks avec un intervalle de 2
    const ticks = [];
    for (let i = minKilogram; i <= maxKilogram; i += 2) {
      ticks.push(i);
    }
    return (
      <div
        className='bg-color-activity-bg w-full h-96 relative pt-8 px-0 rounded-lg'
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
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="day" tick={{ fill: '#74798C' }} tickLine={false} tickFormatter={(date) => dayOfMonth(date)} // Formater pour afficher uniquement le jour
          />
          <YAxis yAxisId="right" orientation="left" hide={true}/>
          <YAxis yAxisId="left" orientation="right" tickLine={false} axisLine={false} tick={{ fill: '#74798C' }}
            domain={[minKilogram - 1, maxKilogram]}  // Plage dynamique basée sur les valeurs de kilogram
            ticks={ticks} // Utiliser le tableau de ticks pour l'intervalle
          />
          <Tooltip />
          <Legend content={<CustomLegend />}layout="horizontal" verticalAlign="top"/>
          <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]}/>
          <Bar yAxisId="right" dataKey="calories" fill="#E60000" barSize={10}radius={[10, 10, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
  
        <h2 className='absolute top-[5%] left-[8%] text-white opacity-50 text-[10px] font-bold z-10 w-[50%]'>
          Durée moyenne des sessions
        </h2>
      </div>
    );
  }
  
  export default ActivityChart;