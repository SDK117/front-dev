import React from 'react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string; // Asegúrate de agregar esta propiedad opcional
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, className }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-300 ${className} ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{ zIndex: 60 }} // Asegúrate de que el modal esté por encima del overlay y el sidebar
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-gray-900 transition-opacity duration-300 ${
          isOpen ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={onClose}
        style={{ zIndex: 50 }}
      ></div>

      {/* Modal Content */}
      <div
        className={`bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg overflow-y-auto transition-transform duration-300 ${
          isOpen ? 'transform scale-100' : 'transform scale-90'
        }`}
        style={{ zIndex: 60 }}
      >
        <div className="py-4 px-6">
          {/* Header */}
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold text-yellow-700">Buscar</p>
            <button onClick={onClose} className="text-black">
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
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                ></path>
              </svg>
            </button>
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />

          {/* Search Button */}
          <div className="flex justify-end pt-2">
            <button className="px-4 py-2 bg-yellow-600 rounded-lg text-white hover:bg-yellow-700">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
