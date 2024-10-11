import React, { useEffect, useState } from 'react';
import { AuthUseCases } from '../../application/useCases/AuthUseCases';
import { AuthService } from '../../application/services/AuthService';
import { User, Permission, Role } from '../../domain/models';

const authUseCases = new AuthUseCases(new AuthService());

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const authenticatedUser = await authUseCases.getAuthenticatedUser();
        setUser(authenticatedUser);
      } catch (error) {
        setError('Error al obtener el usuario autenticado');
        console.error('Error al obtener el usuario autenticado', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>No se ha encontrado información del usuario.</p>;
  }

  return (
    <div>
      <h1>Bienvenido, {user.name}</h1>
      <p>Email: {user.email}</p>

      <h2>Roles</h2>
      <p>{user.roles.length > 0 ? user.roles.map((role: Role) => role.name).join(', ') : 'No tiene roles asignados.'}</p>

      <h2>Permisos Globales</h2>
      <ul>
        {user.permissions?.map((permission: Permission) => (
          <li key={permission.id}>{permission.name}</li>
        ))}
      </ul>

      <h2>Permisos por Rol</h2>
      <ul>
        {user.roles.flatMap((role: Role) => role.permissions || []).map((permission: Permission) => (
          <li key={permission.id}>{permission.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
