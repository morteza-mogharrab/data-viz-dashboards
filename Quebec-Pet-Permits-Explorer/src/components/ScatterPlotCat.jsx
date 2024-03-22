import React, { useState, useEffect } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ScatterPlotComponentCat = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.donneesquebec.ca/recherche/dataset/e302c3f1-f562-449f-975f-40eb7c9d3b01/resource/b6eedf12-a543-4d61-bcaf-b05bea9e75e2/download/permis-animaux.json');
      const jsonData = await response.json();
      // Filter data for animals with weight greater than 0 kg, less than 20 kg, less than 15 years old, and of type "Chat"
      const filteredData = jsonData.filter(animal => animal.Animal_Poids_kg > 0 && animal.Animal_Poids_kg < 20 && calculateAge(animal.Animal_Date_de_naissance) !== null && animal.Animal_Type_de_permis === "Chat");
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
    // Only return age if it's between 0 and 15 years old, otherwise return null
    return (age >= 0 && age <= 15) ? age : null;
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
              name="Weight (kg)"
              unit="kg"
              label={{ value: 'Weight (kg) for Cats', position: 'insideBottom', offset: -20 }} // Label for X axis
            />
            <YAxis
              dataKey={(entry) => calculateAge(entry.Animal_Date_de_naissance)}
              type="number"
              name="Age"
              unit=" Y"
              allowDecimals={false}
              domain={[0, 15]} // Set Y-axis domain to 0-15 years
              label={{ value: 'Age (years) for Cats', angle: -90, position: 'insideLeft', offset: -10 }} // Label for Y axis
            />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter
              name="Cats"
              data={data}
              fill="#AC3E31" // Red color for cats
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div style={{ textAlign: 'center', marginTop: '-80px' }}>
        <p>This scatter plot visualizes the distribution of cats based on their weight and age, offering insights into these factors among registered cats.</p>
      </div>
    </div>
  );
};

export default ScatterPlotComponentCat;
