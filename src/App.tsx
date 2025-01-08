import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Componentes y Layouts
import PublicLayout from './presentation/components/public/PublicLayout.tsx';
import AdminLayout from './presentation/components/Admin/AdminLayout';
import ClienteLayout from './presentation/components/Client/ClienteLayout';

// Páginas
import LoginPage from './presentation/pages/publicpages/LoginPage.tsx';
import MenuPage from './presentation/pages/publicpages/MenuPage.tsx';
import PromotionsPage from './presentation/pages/publicpages/PromotionsPage.tsx';
import LocationsPage from './presentation/pages/publicpages/LocationsPage.tsx';
import ContactPage from './presentation/pages/publicpages/ContactPage.tsx';
import HeroSection from './presentation/components/public/HeroSection.tsx';
import RegisterPage from './presentation/pages/publicpages/RegisterPage.tsx';
import AdminPanel from './presentation/pages/adminpages/AdminPanel.tsx';
import ClientePanel from './presentation/pages/clientpages/ClientePanel.tsx';
import PublicContent from './presentation/pages/publicpages/PublicContent.tsx';

// Hook de autenticación
const useAuth = () => {
  const [role, setRole] = useState<string | null>(localStorage.getItem('role'));

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole && storedRole !== role) {
      setRole(storedRole);
    }
  }, [role]);

  return role;
};

const App: React.FC = () => {
  const role = useAuth();

  return (
    // Asegúrate de que Router envuelva el código que utiliza <Navigate />
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
        {role === 'admin' && (
          <Route element={<AdminLayout />}>
            <Route path="/admin-panel" element={<AdminPanel />} />
          </Route>
        )}

        {/* Rutas privadas (solo accesibles por el cliente) */}
        {role === 'cliente' && (
          <Route element={<ClienteLayout />}>
            <Route path="/cliente-panel" element={<ClientePanel />} />
          </Route>
        )}

        {/* Si no hay rol, redirige al login */}
        {role === null && <Route path="*" element={<Navigate to="/login" />} />}
      </Routes>
    </Router>
  );
};

export default App;
