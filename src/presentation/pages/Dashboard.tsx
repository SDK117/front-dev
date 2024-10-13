import React, { useState } from 'react';
import UserProfile from '../components/UserProfile';

const Dashboard: React.FC = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleShowProfile = () => {
    setShowProfile(true);
  };
  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  return (
    <div className="dashboard-container">
      <h1>Bienvenido al Dashboard</h1>
      <button
        onClick={handleShowProfile}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Ver Perfil de Usuario
      </button>

      {showProfile && (
        <UserProfile onClose={handleCloseProfile} />
      )}
    </div>
  );
};

export default Dashboard;
