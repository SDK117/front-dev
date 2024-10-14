import React, { useState } from 'react';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => Promise<void>;
  logoutSuccess: boolean;
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  isOpen,
  onClose,
  onLogout,
  logoutSuccess,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    await onLogout();
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg transform transition-all duration-300">
        {logoutSuccess ? (
          <div className="flex flex-col items-center justify-center">
            <svg
              className="w-16 h-16 text-green-500 animate-bounce"
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
            <h2 className="text-lg font-semibold text-green-600 mt-4">
              ¡Sesión cerrada exitosamente!
            </h2>
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-semibold text-center mb-4">
              ¿Seguro que deseas cerrar sesión?
            </h2>
            {isLoading ? (
              <div className="flex justify-center mb-4">
                <svg
                  className="animate-spin h-8 w-8 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.952 7.952 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            ) : (
              <div className="flex justify-between mt-4">
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200 focus:ring-4 focus:ring-red-300"
                >
                  Sí, cerrar sesión
                </button>
                <button
                  onClick={onClose}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-200 focus:ring-4 focus:ring-gray-300"
                >
                  No, mantener sesión
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoutModal;
