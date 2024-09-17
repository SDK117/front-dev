import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './presentation/components/MainLayout';
import HomePage from './presentation/pages/HomePage';
import LoginPage from './presentation/pages/LoginPage';
import MenuPage from './presentation/pages/MenuPage.tsx';
import PromotionsPage from './presentation/pages/PromotionsPage.tsx';
import LocationsPage from './presentation/pages/LocationsPage.tsx';
import ContactPage from './presentation/pages/ContactPage.tsx';
import HeroSection from './presentation/components/HeroSection.tsx';
import RegisterPage from './presentation/pages/RegisterPage.tsx';



const App: React.FC = () => (
  <Router>
    <MainLayout>
      <HeroSection />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/menu" element={<MenuPage/>}/>
      <Route path="/promotions" element={<PromotionsPage/>}/>
      <Route path="/locations" element={<LocationsPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </MainLayout>
  </Router>
);

export default App;
