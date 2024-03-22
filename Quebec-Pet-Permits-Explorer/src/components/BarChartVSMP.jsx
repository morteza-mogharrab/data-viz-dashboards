import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const BarChartVSMP = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.donneesquebec.ca/recherche/dataset/e302c3f1-f562-449f-975f-40eb7c9d3b01/resource/b6eedf12-a543-4d61-bcaf-b05bea9e75e2/download/permis-animaux.json');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const countAttributes = () => {
    let vaccinated = 0;
    let sterilized = 0;
    let microchipped = 0;
    let potentiallyDangerous = 0;

    data.forEach(animal => {
      if (animal.Animal_Vaccination === 1) {
        vaccinated++;
      }
      if (animal.Animal_Stérilisation === 1) {
        sterilized++;
      }
      if (animal.Animal_Micropuce === 1) {
        microchipped++;
      }
      if (animal.Animal_Potentiellement_dangereux === 1) {
        potentiallyDangerous++;
      }
    });

    return [
      { name: 'Vaccinated', vaccinated },
      { name: 'Sterilized', sterilized },
      { name: 'Microchipped', microchipped },
      { name: 'Potentially Dangerous', potentiallyDangerous }
    ];
  };

  return (
    <div>
      <div style={{ width: '100%', height: 700, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ResponsiveContainer width="80%" height="80%">
          <BarChart data={countAttributes()} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
              <Bar dataKey="vaccinated" stackId="a" fill="#2E86C1" />
              <Bar dataKey="sterilized" stackId="a" fill="#1ABC9C" />
              <Bar dataKey="microchipped" stackId="a" fill="#5D6D7E" />
              <Bar dataKey="potentiallyDangerous" stackId="a" fill="#D35400" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div style={{ textAlign: 'center', marginTop: '-90px' }}>
        <p>This bar chart compares the number of animals vaccinated, sterilized, microchipped, and identified as potentially dangerous, providing insights into the distribution of these attributes among registered animals.</p>
      </div>
    </div>
  );
};

export default BarChartVSMP;
