import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import './MainLayout.css'; // Asegúrate de que la ruta es correcta

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1 relative"> {/* Asegura que sea relativo para controlar elementos dentro */}
      {children}
    </main>
    <Footer />
  </div>
);

export default MainLayout;
