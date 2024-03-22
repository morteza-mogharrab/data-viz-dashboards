import React, { useState, useEffect } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ScatterPlotComponentDog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.donneesquebec.ca/recherche/dataset/e302c3f1-f562-449f-975f-40eb7c9d3b01/resource/b6eedf12-a543-4d61-bcaf-b05bea9e75e2/download/permis-animaux.json');
      const jsonData = await response.json();
      // Filter data for animals with weight greater than 0 kg, less than 80 kg, less than 20 years old, and of type "Chien"
      const filteredData = jsonData.filter(animal => animal.Animal_Poids_kg > 0 && animal.Animal_Poids_kg < 80 && calculateAge(animal.Animal_Date_de_naissance) !== null && animal.Animal_Type_de_permis === "Chien");
      setData(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    // Only return age if it's between 0 and 20 years old, otherwise return null
    return (age >= 0 && age <= 20) ? age : null;
  };

  return (
    <div>
      <div style={{ width: '100%', height: 700, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ResponsiveContainer width="80%" height="80%">
          <ScatterChart
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="Animal_Poids_kg"
              type="number"
              name="Dog's Weight (kg)"
              unit="kg"
              label={{ value: 'Weight (kg) for Dogs', position: 'insideBottom', offset: -20 }} // Label for X axis
            />
            <YAxis
              dataKey={(entry) => calculateAge(entry.Animal_Date_de_naissance)}
              type="number"
              name="Dog's Age"
              unit=" Y"
              allowDecimals={false}
              domain={[0, 20]} // Set Y-axis domain to 0-20 years
              label={{ value: 'Age (years) for Dogs', angle: -90, position: 'insideLeft', offset: -10 }} // Label for Y axis
            />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter
              name="Dogs"
              data={data}
              fill="#63b598" // Light green color for dogs
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div style={{ textAlign: 'center', marginTop: '-80px' }}>
        <p>This scatter plot visualizes the distribution of dogs based on their weight and age, offering insights into these factors among registered dogs.</p>
      </div>
    </div>
  );
};

export default ScatterPlotComponentDog;
