import React, { useState } from 'react';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => Promise<void>;
  loggingOut: boolean;
  error: string | null;
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  isOpen,
  onClose,
  onLogout,
  loggingOut,
  error,
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleConfirmLogout = () => {
    setIsConfirmed(true);
  };

  const handleLogout = async () => {
    try {
      await onLogout();
      onClose();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-80 text-center modal-fade-in">
        {!isConfirmed ? (
          <>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ¿Quieres cerrar sesión?
            </h3>
            <p className="text-gray-600 mb-4">Confirma tu acción.</p>
            <div className="flex justify-around">
              <button
                onClick={handleConfirmLogout}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
              >
                Sí
              </button>
              <button
                onClick={onClose}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
              >
                No
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16" viewBox="0 0 52 52">
                <circle
                  className="text-green-100"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  className="text-green-500 checkmark"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ¡Sesión cerrada!
            </h3>
            <p className="text-gray-600 mb-4">
              Has cerrado sesión exitosamente.
            </p>
            <button
              onClick={handleLogout}
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
              disabled={loggingOut}
            >
              {loggingOut ? 'Cerrando sesión...' : 'Aceptar'}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </>
        )}
      </div>

      <style>
        {`
          @keyframes checkmark {
            0% {
              stroke-dashoffset: 50;
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 1;
              transform: scale(1);
            }
          }

          .checkmark {
            stroke-dasharray: 50;
            stroke-dashoffset: 50;
            animation: checkmark 0.8s ease-in-out forwards;
          }

          .modal-fade-in {
            animation: modalFade 0.5s ease-in-out forwards;
          }

          @keyframes modalFade {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default LogoutModal;
