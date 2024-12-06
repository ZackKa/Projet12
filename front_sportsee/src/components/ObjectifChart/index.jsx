import React, { useState, useRef } from 'react';
import { Area, AreaChart, XAxis, Tooltip, ResponsiveContainer} from 'recharts';

const dayToLetter = (day) => {
  const days = [" L", "M", "M", "J", "V", "S", "D  "]; // Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche
  return days[day - 1]; // On soustrait 1 pour que le tableau commence à 0 (lundi)
};

// Composant personnalisé pour le contenu du tooltip
const CustomTooltip = ({ payload }) => {
  if (payload && payload.length > 0) {
    return (
      <div className="bg-white border border-gray-300 rounded-md p-2 shadow-md text-gray-800">
        <p className="text-sm font-medium">{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

function ObjectifChart(props) {
  const [mouseX, setMouseX] = useState(null);
  const chartContainerRef = useRef(null); // Référence au conteneur de l'élément

  // Transformation des données pour remplacer les jours par leurs premières lettres
  const transformedData = props.dataAverage.sessions.map(session => ({
    ...session,
    day: dayToLetter(session.day)
  }));

  // Fonction pour capturer la position de la souris lors du survol
  const handleMouseMove = (e) => {
    // vérifier si la référence (chartContainerRef) pointe bien vers un élément valide dans le DOM
    if (chartContainerRef.current) {
      const chartWidth = chartContainerRef.current.clientWidth; // Obtenir la largeur du conteneur
      const mousePosition = e.nativeEvent.offsetX; // Position de la souris relative au conteneur
      const mousePercentage = (mousePosition / chartWidth) * 100; // Calculer la position en pourcentage
      setMouseX(mousePercentage); // Mettre à jour l'état de la position de la souris
    }
  };

  return (
    <div
      ref={chartContainerRef} // Ajout de la ref au conteneur
      className='bg-color-average-bg w-litle_chart h-64 relative pt-8 px-0 rounded-lg'
      onMouseMove={handleMouseMove} // Ajout de la fonction de suivi de la souris au conteneur
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={transformedData} width={300} height={200}>
          <XAxis dataKey="day" stroke="#FFFFFF" fontSize={12} tickLine={false} axisLine={false} fillOpacity={0.5}/>
          <Tooltip cursor={false} content={<CustomTooltip />} />
          <Area type="monotone" dataKey="sessionLength" stroke="#FFFFFF" fill="none"/>
        </AreaChart>
      </ResponsiveContainer>

      <h2 className='absolute top-[5%] left-[8%] text-white opacity-50 text-[10px] font-bold z-10 w-[50%]'>
        Durée moyenne des sessions
      </h2>

      {mouseX !== null && (
        <div className="absolute top-0 h-full bg-black bg-opacity-10 pointer-events-none z-10 rounded-lg"
        style={{
            left: `${mouseX}%`,  // Position horizontale dynamique
            width: `calc(100% - ${mouseX}%)`,  // Largeur dynamique
        }}
        />
        )}
    </div>
  );
}

export default ObjectifChart;
