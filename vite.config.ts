import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite conexiones desde todas las interfaces
    port: 5173,      // Asegúrate de que el puerto es el mismo que usas
  }
});
