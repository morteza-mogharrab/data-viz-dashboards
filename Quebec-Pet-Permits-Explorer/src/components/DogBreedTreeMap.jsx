import React, { useState, useEffect } from 'react';
import { Treemap, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const DogBreedTreeMap = () => {
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

  // Function to count permits by dog breed or category
  const countPermitsByDogBreed = () => {
    const breedCount = {};
    data.forEach(entry => {
      const breed = entry.Animal_Race_primaire_des_chiens || entry.Animal_Catégorie_race_primaire_de_chiens;
      if (breedCount[breed]) {
        breedCount[breed]++;
      } else {
        breedCount[breed] = 1;
      }
    });

    return Object.entries(breedCount).map(([breed, count]) => ({
      name: breed,
      count
    }));
  };

  return (
    <div>
      <div style={{ width: '100%', height: 500 }}>
        <ResponsiveContainer width="100%" height="100%">
          <Treemap
            data={countPermitsByDogBreed()}
            dataKey="count"
            ratio={4 / 3}
            stroke="#fff"
            fill="#3E7CB1"
            isAnimationActive={false}
            label={({ name }) => <text x={0} y={0} textAnchor="middle" dominantBaseline="middle">{name}</text>}
          >
            <Tooltip
              formatter={(value, name, props) => [value, props.payload.name]}
            />
            <Legend />
          </Treemap>
        </ResponsiveContainer>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <span>ِِِThe chart illustrates the distribution of dog breeds, providing insight into the varied representation of breeds among registered dogs.






</span>
      </div>
    </div>
  );
};

export default DogBreedTreeMap;
