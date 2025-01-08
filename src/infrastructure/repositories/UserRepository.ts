import axios from '../api/axiosInstance'; // Importamos axios
import { AuthService } from '../../application/services/useCases/AuthService'; // Importamos AuthService
import { IUserRepository } from '../../domain/repositories/IUserRepository'; // Importamos la interfaz IUserRepository
import { User } from '../../domain/entities'; // Importamos la entidad User

export class UserRepository implements IUserRepository {
  getPermissions(): Promise<string[]> {
    throw new Error('Method not implemented.');
  }
  // Método para obtener el perfil del usuario
  async getProfile(): Promise<User> {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('Token no encontrado');
    }

    try {
      const response = await axios.get('/v1/account/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener el perfil del usuario:', error); // Si quieres ver detalles del error
      throw new Error('Error al obtener el perfil del usuario');
    }
  }
}
