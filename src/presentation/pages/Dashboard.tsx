import React, { useEffect, useState } from 'react';
import { AuthUseCases } from '../../application/useCases/AuthUseCases';
import { AuthService } from '../../application/services/AuthService';
import { User } from '../../domain/models/User';

const authUseCases = new AuthUseCases(new AuthService());

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const authenticatedUser = await authUseCases.getAuthenticatedUser();
        setUser(authenticatedUser);
      } catch (error) {
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

  if (!user) {
    return <p>No se ha encontrado información del usuario.</p>;
  }

  return (
    <div>
      <h1>Bienvenido, {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Roles: {user.roles.map((role) => role.name).join(', ')}</p>
    </div>
  );
};

export default Dashboard;
