import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const Spotifychart = () => {
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

  const countAnimalTypes = () => {
    const animalTypesCount = { Chien: 0, Chat: 0 };
    data.forEach(entry => {
      const animalType = entry.Animal_Type_de_permis;
      if (animalType === "Chien") {
        animalTypesCount.Chien++;
      } else if (animalType === "Chat") {
        animalTypesCount.Chat++;
      }
    });

    return Object.entries(animalTypesCount).map(([type, count]) => ({
      name: type,
      count
    }));
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const COLORS = ['#20283E', '#488A99'];

  return (
    <div>
      <div style={{ width: '100%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ResponsiveContainer width="80%" height="80%">
          <PieChart>
            <Pie
              data={countAnimalTypes()}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={170}
              fill="#8884d8"
              dataKey="count"
              nameKey="name"
            >
              {countAnimalTypes().map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>This chart shows the distribution of animal types (dogs and cats) among registered animals.</p>
      </div>
    </div>
  );
};

export default Spotifychart;
