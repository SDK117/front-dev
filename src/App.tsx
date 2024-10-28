import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './presentation/components/MainLayout';
import MainLayoutU from './presentation/./componentsA/MainLayoutU.tsx';
import LoginPage from './presentation/pages/LoginPage';
import MenuPage from './presentation/pages/MenuPage.tsx';
import PromotionsPage from './presentation/pages/PromotionsPage.tsx';
import LocationsPage from './presentation/pages/LocationsPage.tsx';
import ContactPage from './presentation/pages/ContactPage.tsx';
import HeroSection from './presentation/components/HeroSection.tsx';
import RegisterPage from './presentation/pages/RegisterPage.tsx';
import MainContentUser from './presentation/pages/MainContentUser.tsx';
import MainContent from './presentation/pages/MainContent.tsx';


const App: React.FC = () => (
  <Router>
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <MainContent />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <LoginPage />
            </>
          }
        />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/promotions" element={<PromotionsPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Rutas para el layout de usuario */}
      <Route element={<MainLayoutU />}>
        <Route path="/dashboard/admin" element={<MainContentUser />} />
        <Route path="/dashboard/user" element={<MainContentUser />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
