import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  toggleSearchModal: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  toggleSearchModal,
}) => {
  const handleSidebarClick = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0'} ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        onClick={onClose}
        style={{ zIndex: 40 }}
      ></div>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-yellow-500 text-white p-4 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}
        style={{ zIndex: 50 }}
        onClick={handleSidebarClick}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white"
          aria-label="Cerrar menú"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="mt-8 space-y-4">
          <li>
            <Link to="/menu" className="block hover:text-yellow-200">
              Menú
            </Link>
          </li>
          <li>
            <Link to="/promociones" className="block hover:text-yellow-200">
              Promociones
            </Link>
          </li>
          <li>
            <Link to="/ubicaciones" className="block hover:text-yellow-200">
              Ubicaciones
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="block hover:text-yellow-200">
              Contacto
            </Link>
          </li>
        </ul>
        <div className="mt-8 space-y-4">
          <button
            onClick={toggleSearchModal}
            className="block w-full bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded text-center"
          >
            <svg
              className="w-6 h-6 inline-block mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            Buscar
          </button>
          <Link
            to="/login"
            className="block bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded text-center"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/register"
            className="block bg-yellow-700 hover:bg-yellow-800 px-4 py-2 rounded text-center"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
