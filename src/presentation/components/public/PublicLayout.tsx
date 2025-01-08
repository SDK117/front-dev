import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';

const PublicLayout: React.FC = () => (
  <div className="relative flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1 relative">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default PublicLayout;
