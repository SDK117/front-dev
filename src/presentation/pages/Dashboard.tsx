// src/presentation/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import { ProfileService } from '../../application/services/ProfileService';
import { User } from '../../domain/models';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const profileService = new ProfileService();
      try {
        const userProfile = await profileService.getProfile();
        setUser(userProfile);
      } catch (err) {
        console.error('Error al obtener el perfil:', err);
        setError('Error al obtener el perfil. Redirigiendo al inicio.');
        navigate('/'); // Redirige al login si hay un error
      }
    };

    fetchProfile();
  }, [navigate]);

  if (error) {
    return <div>{error}</div>; // Muestra el mensaje de error si existe
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Nombre: {user.name}</p>
          <p>Email: {user.email}</p>
          <h2>Roles</h2>
          <ul>
            {user.roles && user.roles.length > 0 ? (
              user.roles.map((role) => (
                <li key={role.id}>{role.name}</li>
              ))
            ) : (
              <li>No hay roles asignados</li>
            )}
          </ul>

          <h2>Permisos</h2>
          <ul>
            {user.permissions && user.permissions.length > 0 ? (
              user.permissions.map((permission) => (
                <li key={permission.id}>{permission.name}</li>
              ))
            ) : (
              <li>No hay permisos asignados</li>
            )}
          </ul>
        </div>
      ) : (
        <p>Cargando perfil...</p>
      )}
    </div>
  );
};

export default Dashboard;
