import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Asegúrate de que la ruta es correcta
import SearchModal from './SearchModal'; // Asegúrate de que la ruta es correcta

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSearchModal = () => setIsSearchModalOpen(!isSearchModalOpen);

  return (
    <>
      <nav className="bg-yellow-600 text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">Pollería Hilda</a>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/menu" className="hover:text-yellow-200">Menú</a>
            <a href="/promociones" className="hover:text-yellow-200">Promociones</a>
            <a href="/ubicaciones" className="hover:text-yellow-200">Ubicaciones</a>
            <a href="/contacto" className="hover:text-yellow-200">Contacto</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={toggleSearchModal} className="text-white hover:text-yellow-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <a href="/login" className="bg-yellow-500 hover:bg-yellow-400 px-3 py-1 rounded">Iniciar Sesión</a>
            <a href="/registro" className="bg-yellow-700 hover:bg-yellow-600 px-3 py-1 rounded">Registrarse</a>
          </div>
          <div className="flex items-center space-x-4 md:hidden">
            <button onClick={toggleSidebar}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        toggleSearchModal={toggleSearchModal}
      />
      <SearchModal isOpen={isSearchModalOpen} onClose={toggleSearchModal} />
    </>
  );
};

export default Navbar;
