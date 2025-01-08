import React from 'react';
import {
  FaClipboardList,
  FaUtensils,
  FaPercent,
  FaUsers,
  FaCog,
} from 'react-icons/fa';

interface SidebarProps {
  isVisible: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible }) => {
  return (
    <aside
      className={`flex flex-col min-h-screen bg-yellow-600 text-white w-64 p-4 fixed left-0 top-0 z-40 shadow-lg transition-transform duration-300 transform ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mr-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M10 4a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 100-8 4 4 0 000 8z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-2xl font-bold">Pollería Hilda</span>
      </div>
      <nav>
        <ul className="space-y-3">
          <li>
            <a
              href="/dashboard"
              className="flex items-center py-2 px-4 rounded-lg transition duration-200 hover:bg-white hover:bg-opacity-10 hover:scale-105"
            >
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="/pedidos"
              className="flex items-center py-2 px-4 rounded-lg transition duration-200 hover:bg-white hover:bg-opacity-10 hover:scale-105"
            >
              <FaClipboardList className="mr-3" /> Pedidos
            </a>
          </li>
          <li>
            <a
              href="/menu"
              className="flex items-center py-2 px-4 rounded-lg transition duration-200 hover:bg-white hover:bg-opacity-10 hover:scale-105"
            >
              <FaUtensils className="mr-3" /> Menú
            </a>
          </li>
          <li>
            <a
              href="/promociones"
              className="flex items-center py-2 px-4 rounded-lg transition duration-200 hover:bg-white hover:bg-opacity-10 hover:scale-105"
            >
              <FaPercent className="mr-3" /> Promociones
            </a>
          </li>
          <li>
            <a
              href="/usuarios"
              className="flex items-center py-2 px-4 rounded-lg transition duration-200 hover:bg-white hover:bg-opacity-10 hover:scale-105"
            >
              <FaUsers className="mr-3" /> Usuarios
            </a>
          </li>
          <li>
            <a
              href="/configuracion"
              className="flex items-center py-2 px-4 rounded-lg transition duration-200 hover:bg-white hover:bg-opacity-10 hover:scale-105"
            >
              <FaCog className="mr-3" /> Configuración
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
