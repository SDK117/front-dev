import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './shared/styles/global.css'; // Si usas estilos globales

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
