import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <header
        style={{ padding: '1rem', backgroundColor: '#007bff', color: '#fff' }}
      >
        <h1>Dashboard</h1>
      </header>

      <main style={{ flex: 1, padding: '1rem' }}>
        <Outlet />
      </main>

      <footer
        style={{
          padding: '1rem',
          backgroundColor: '#f1f1f1',
          textAlign: 'center',
        }}
      >
        <p>© 2024 Mi Application</p>
      </footer>
    </div>
  );
};

export default DashboardLayout;
