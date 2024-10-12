import { IProfileRepository } from '../../domain/repositories/IProfileRepository';
import { User } from '../../domain/models';
import axiosInstance from '../api/axiosInstance';

export class ProfileRepository implements IProfileRepository {
  async getProfile(): Promise<User> {
    try {
      const response = await axiosInstance.get('/profile');
      return response.data.data;
    }catch (error) {
      console.error('Error al obtener el perfil desde el repositorio:', error);
      throw error;
    }
  }
}
