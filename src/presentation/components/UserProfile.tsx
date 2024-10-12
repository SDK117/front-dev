import React, { useEffect, useState } from 'react';
import { ProfileService } from '../../application/services/ProfileService';
import { User } from '../../domain/models';

interface UserProfileProps {
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onClose }) => {
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

    fetchProfile();

  }, []);

  if (error) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
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
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <p>Cargando perfil...</p>
        </div>
      </div>
    );
  }

  // Vista del perfil del usuario cuando los datos están disponibles
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Perfil del Usuario</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-6 text-center">
          <img src="https://via.placeholder.com/100" alt={user.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
        </div>

        {/* Lista de roles del usuario */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Roles</h4>
          <div className="flex flex-wrap gap-2">
            {user.roles.map((role) => (
              <span
                key={role.id}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
              >
                {role.name}
              </span>
            ))}
          </div>
        </div>

        {/* Lista de permisos del usuario */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Permisos</h4>
          <ul className="list-disc list-inside text-gray-600">
            {user.permissions.map((permission) => (
              <li key={permission.id}>{permission.name}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end">
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
