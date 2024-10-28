import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayoutU: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      <Sidebar isVisible={sidebarVisible} />
      <div
        className={`flex flex-col flex-grow transition-all duration-300 ${
          sidebarVisible ? 'ml-64' : 'ml-0'
        } bg-gray-100`}
      >
        <Navbar toggleSidebar={toggleSidebar} />

        <main className="flex-1 p-4 transition-all duration-300">
          <h1 className="text-2xl font-bold text-yellow-600">
            Bienvenido a Pollería Hilda A
          </h1>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayoutU;
