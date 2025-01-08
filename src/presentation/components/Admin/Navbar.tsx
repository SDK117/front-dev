import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBell,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import UserProfile from './UserProfile.tsx';
//import LogoutModal from './LogoutModal.tsx';
//import { useLogout } from '../../hooks/useLogout.ts'; // Comenta esta línea para evitar el error

const Navbar: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);

  // Comenta los fragmentos relacionados con useLogout
  // const {
  //   isModalOpen,
  //   handleLogoutConfirmed,
  //   handleLogout,
  //   handleModalClose,
  //   loggingOut,
  //   error,
  // } = useLogout(() => setDropdownOpen(false));

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleProfileClick = () => {
    setShowUserProfile(true);
    setDropdownOpen(false);
  };

  const closeUserProfile = () => {
    setShowUserProfile(false);
  };

  return (
    <nav className="bg-white text-gray-800 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="text-gray-800 mr-4 focus:outline-none hover:text-yellow-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
            <span className="text-xl font-semibold text-yellow-600">
              Dashboard
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-yellow-600 transition duration-300 relative">
              <FontAwesomeIcon icon={faBell} size="lg" />
              <span className="absolute notification-dot bg-red-500 w-2 h-2 rounded-full top-0 right-0 transform translate-x-1/2 translate-y-1/2"></span>
            </button>
            <div className="relative">
              <button
                className="flex items-center focus:outline-none"
                onClick={toggleDropdown}
              >
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-2 border-2 border-yellow-400"
                />
                <span className="text-sm font-medium mr-1">John Doe</span>
                <FontAwesomeIcon icon={faChevronDown} size="xs" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-300">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100"
                    onClick={handleProfileClick}
                  >
                    Mi Perfil
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100"
                  >
                    Configuración
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100"
                    // onClick={handleLogoutConfirmed} // Comenta esta línea por ahora
                  >
                    Cerrar Sesión
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showUserProfile && <UserProfile onClose={closeUserProfile} />}

      {/* Comenta el LogoutModal por ahora */}
      {/* <LogoutModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onLogout={handleLogout}
        loggingOut={loggingOut}
        error={error}
      /> */}
    </nav>
  );
};

export default Navbar;
