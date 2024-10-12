import { User } from '../../domain/models';
import axiosInstance from '../../infrastructure/api/axiosInstance';

export class ProfileService {
  async getProfile(): Promise<User> {
    try {
      const response = await axiosInstance.get('/profile');
      return response.data.data;
    } catch (error) {
      console.error('Error al obtener el perfil:', error);
      throw error;
    }
  }
}
