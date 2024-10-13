import React, { useEffect, useState } from 'react';
import { ProfileService } from '../../application/services/ProfileService';
import { User } from '../../domain/models';

interface UserProfileProps {
  onClose: () => void;
  onLogout: () => void; // Función para manejar el cierre de sesión
}

const UserProfile: React.FC<UserProfileProps> = ({ onClose, onLogout }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const profileService = new ProfileService();

    const fetchProfile = async () => {
      try {
        const userProfile = await profileService.getProfile();
        setUser(userProfile);
      } catch (err) {
        console.error('Error al obtener el perfil:', err);
        setError('Error al obtener el perfil.');
      }
    };

    // Llamada a la función
    fetchProfile(); // Esto se mantiene

    // Si deseas manejar la advertencia aún más, puedes envolver la llamada en una función anónima:
    // (async () => {
    //   await fetchProfile();
    // })();

  }, []);

  if (error) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg transform transition-all duration-300 ease-in-out">
          <h2 className="text-red-500">{error}</h2>
          <button
            onClick={onClose}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-200"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  }

  // Si los datos del usuario no están listos, muestra un mensaje de carga
  if (!user) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg transform transition-all duration-300 ease-in-out">
          <p>Cargando perfil...</p>
        </div>
      </div>
    );
  }

  // Vista del perfil del usuario cuando los datos están disponibles
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50`}>
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg transform transition-all duration-300 ease-in-out">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Perfil del Usuario</h2>
        </div>
        <div className="mb-6 text-center">
          <div className="relative inline-block group">
            <img
              src="https://via.placeholder.com/100"
              alt={user.name}
              className="w-24 h-24 rounded-full mx-auto mb-2 border-4 border-yellow-500 transition duration-300 group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <label className="bg-yellow-500 text-white rounded-full p-2 hover:bg-yellow-600 transition duration-150 cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  // onChange={handleFileUpload} // Descomentar si necesitas manejo de carga de archivos
                  accept="image/*"
                />
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
              </label>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>

        {/* Lista de roles del usuario */}
        <div className="mb-6 bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-semibold mb-2 flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
            </svg>
            Roles
          </h4>
          <div className="flex flex-wrap gap-2">
            {user.roles.map((role) => (
              <span key={role.id} className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                {role.name}
              </span>
            ))}
          </div>
        </div>

        {/* Lista de permisos del usuario */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2 flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            Permisos
          </h4>
          <div className="max-h-28 overflow-y-auto bg-gray-50 rounded-lg p-4"> {/* Cambiado a max-h-36 */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  {permission.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={onLogout} // Agregado para manejar el cierre de sesión
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
          >
            Cerrar Sesión
          </button>
          <button
            onClick={onClose}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-200"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
