import React, { useState } from 'react';
import Navbar from './Navbar.tsx';
import Sidebar from './Sidebar.tsx';
import Footer from '../public/Footer.tsx';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
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

        <main className="flex-1 p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
