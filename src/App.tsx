import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import PublicLayout from './presentation/components/PublicLayout';
import AdminLayout from './presentation/componentsA/AdminLayout';

// Páginas públicas
import LoginPage from './presentation/pages/publicPages/LoginPage.tsx';
import MenuPage from './presentation/pages/publicPages/MenuPage.tsx';
import PromotionsPage from './presentation/pages/publicPages/PromotionsPage.tsx';
import LocationsPage from './presentation/pages/publicPages/LocationsPage.tsx';
import ContactPage from './presentation/pages/publicPages/ContactPage.tsx';
import HeroSection from './presentation/components/HeroSection';
import RegisterPage from './presentation/pages/publicPages/RegisterPage.tsx';

// Páginas privadas
import AdminContent from './presentation/pages/adminpages/AdminContent.tsx';
import PublicContent from './presentation/pages/publicPages/PublicContent.tsx';


const App: React.FC = () => (
  <Router>
    <Routes>
      {/* Rutas públicas */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<><HeroSection /><PublicContent /></>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/promotions" element={<PromotionsPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Rutas privadas (solo accesibles por el admin) */}
      <Route element={<AdminLayout />}>
        <Route path="/AdminContent" element={<AdminContent />} />


      </Route>
    </Routes>
  </Router>
);

export default App;
