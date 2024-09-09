import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './presentation/pages/HomePage';
import LoginPage from './presentation/pages/LoginPage';


const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* Aquí puedes añadir más rutas */}
    </Routes>
  </Router>
);

export default App;
