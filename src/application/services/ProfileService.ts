import { User } from '../../domain/models';
import axiosInstance from '../../infrastructure/api/axiosInstance';

export class ProfileService {
  async getProfile(): Promise<User> {
    try {
      const response = await axiosInstance.get('/profile');
      console.log('Response:', response.data);
      return response.data.data;
    } catch (error) {
      console.error('Error en ProfileService:', error);
      throw error;
    }
  }
}
