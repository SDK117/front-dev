import React from 'react';
import { Outlet } from 'react-router-dom';

const ClienteLayout: React.FC = () => (
  <div className="flex min-h-screen">
    <header className="bg-blue-500 text-white p-4">Cliente Header</header>
    <main className="flex-1 p-4">
      <Outlet />
    </main>
    <footer className="bg-gray-800 text-white p-4">Cliente Footer</footer>
  </div>
);

export default ClienteLayout;
