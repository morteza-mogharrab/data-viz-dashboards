import React from 'react';
import { useHistory } from 'react-router-dom';

const InfoPage = () => {
  const history = useHistory();

  // Function to handle navigation to the dashboard page
  const handleGetStarted = () => {
    history.push('/dashboard');
  };

  return (
    <div>
      <h1>Welcome to Our Crypto Dashboard</h1>
      <p>This is a simple app to monitor your favorite cryptocurrencies.</p>
      {/* Button to navigate to the dashboard */}
      <button onClick={handleGetStarted}>Go to Dashboard</button>
    </div>
  );
};

export default InfoPage;
