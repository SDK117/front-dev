import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../hooks/useProfile';
import { useLogout } from '../hooks/useLogout';
import LogoutModal from './LogoutModal';

interface UserProfileProps {
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onClose }) => {
  const { user, error } = useProfile();
  const navigate = useNavigate();
  const {
    isModalOpen,
    logoutSuccess,
    handleLogoutConfirmed,
    handleLogout,
    handleModalClose,
  } = useLogout(onClose, navigate);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg transform transition-all duration-300 ease-in-out">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Perfil del Usuario
          </h2>
        </div>
        {error && <div className="text-red-500">{error}</div>}

        {user && (
          <div className="mb-6 text-center">
            <div className="relative inline-block group">
              <img
                src="https://via.placeholder.com/100"
                alt={user.name}
                className="w-24 h-24 rounded-full mx-auto mb-2 border-4 border-yellow-500 transition duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <label className="bg-yellow-500 text-white rounded-full p-2 hover:bg-yellow-600 transition duration-150 cursor-pointer">
                  <input type="file" className="hidden" accept="image/*" />
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5 2a9 9 0 11-9-9 9 9 0 019 9z"
                    ></path>
                  </svg>
                </label>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        )}

        {user && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-2 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
              Roles
            </h4>
            <div className="flex flex-wrap gap-2">
              {user.roles.map((role) => (
                <span
                  key={role.id}
                  className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full"
                >
                  {role.name}
                </span>
              ))}
            </div>

            <h4 className="text-sm font-semibold mb-2 flex items-center mt-6">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
              Permisos
            </h4>
            <div className="max-h-28 overflow-y-auto bg-gray-50 rounded-lg p-4">
              <ul className="text-gray-600 text-xs">
                {user.permissions.map((permission) => (
                  <li key={permission.id} className="flex items-center mb-1">
                    <svg
                      className="w-3 h-3 mr-1 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                    {permission.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-4">
          <button
            onClick={handleLogoutConfirmed}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200 flex items-center"
          >
            <>
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7"
                ></path>
              </svg>
              Cerrar Sesión
            </>
          </button>

          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-200"
          >
            Cerrar
          </button>
        </div>

        <LogoutModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onLogout={handleLogout}
          logoutSuccess={logoutSuccess}
        />
      </div>
    </div>
  );
};

export default UserProfile;
