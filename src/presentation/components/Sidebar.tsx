import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  toggleSearchModal: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, toggleSearchModal }) => {
  return (
    <>
      {/* Overlay para el Sidebar */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0'} ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        onClick={onClose}
        style={{ zIndex: 40 }}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-yellow-500 text-white p-4 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}
        style={{ zIndex: 50 }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul className="mt-8 space-y-4">
          <li><a href="/menu" className="block hover:text-yellow-200">Menú</a></li>
          <li><a href="/promociones" className="block hover:text-yellow-200">Promociones</a></li>
          <li><a href="/ubicaciones" className="block hover:text-yellow-200">Ubicaciones</a></li>
          <li><a href="/contacto" className="block hover:text-yellow-200">Contacto</a></li>
        </ul>
        <div className="mt-8 space-y-4">
          <button onClick={toggleSearchModal} className="block w-full bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded text-center">
            <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            Buscar
          </button>
          <a href="/login" className="block bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded text-center">Iniciar Sesión</a>
          <a href="/registro" className="block bg-yellow-700 hover:bg-yellow-800 px-4 py-2 rounded text-center">Registrarse</a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
