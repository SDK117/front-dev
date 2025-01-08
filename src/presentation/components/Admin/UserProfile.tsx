import React from 'react';
// import { useProfile } from '../../hooks/useProfile.ts';

interface UserProfileProps {
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onClose }) => {
  // const { user, error } = useProfile();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 max-w-sm w-full shadow-lg transform transition-all duration-300 ease-in-out">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Perfil del Usuario
          </h2>
        </div>
        {/* Si tienes un error, se mostrará aquí */}
        {/* {error && <div className="text-red-500">{error}</div>} */}

        {/* Aquí también se comenta la lógica que depende de `user` */}
        {/* {user && ( */}
        <div className="mb-6 text-center">
          <div className="relative inline-block group">
            <img
              src="https://via.placeholder.com/100"
              alt="Usuario"
              className="w-20 h-20 rounded-full mx-4 mb-2 border-4 border-yellow-500 transition duration-300 group-hover:opacity-80"
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
          <h3 className="text-xl font-semibold text-gray-800">{/* user.name */}</h3>
          <p className="text-sm text-gray-600">{/* user.email */}</p>
        </div>
        {/* )} */}

        {/* Aquí se comenta el código relacionado con roles y permisos */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2 flex items-center">
            {/* Icono de roles */}
          </h4>
          <div className="flex flex-wrap gap-2">
            {/* user.roles.map(...) */}
          </div>

          <h4 className="text-sm font-semibold mb-2 flex items-center mt-6">
            {/* Icono de permisos */}
          </h4>
          <div className="max-h-28 overflow-y-auto bg-gray-50 rounded-lg p-4">
            <ul className="text-gray-600 text-xs">
              {/* user.permissions.map(...) */}
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-200"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
