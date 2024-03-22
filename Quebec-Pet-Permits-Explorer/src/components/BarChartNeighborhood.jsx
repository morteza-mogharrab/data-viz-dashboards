import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const BarChartNeighborhood = () => {
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

  const countPermitsByTerritory = () => {
    const territoryCount = {};
    data.forEach(entry => {
      const territory = entry.Gardien_Territoire_ex_villes;
      if (territoryCount[territory]) {
        territoryCount[territory]++;
      } else {
        territoryCount[territory] = 1;
      }
    });

    return Object.entries(territoryCount).map(([territory, count]) => ({
      territory,
      count
    }));
  };

  return (
    <div>
      <div style={{ width: '100%', height: 700, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ResponsiveContainer width="80%" height="80%">
          <BarChart data={countPermitsByTerritory()} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="territory" height={80} interval={0} angle={0} dx={0} dy={10}  tickFormatter={(value) => value.substring(0, 3)}/>
            <YAxis type="number" angle={0} dx={-10} dataKey="count">
              <Label value="Total Number of Pets Per Neighborhoods" position="insideLeft" angle={-90} offset={-15} dy={130} />
            </YAxis>
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#836338" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div style={{ textAlign: 'center', marginTop: '-120px', marginBottom: '50px' }}>
        <p>This bar chart displays the total number of pets per neighborhood, providing insights into the distribution of pets across different areas.</p>
      </div>
    </div>
  );
};

export default BarChartNeighborhood;
