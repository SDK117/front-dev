import axiosInstance from '../api/axiosInstance';
import { IAuthRepository } from '../../domain/repositories/IAuthRepository';
import { User } from '../../domain/models';

export class AuthRepository implements IAuthRepository {
  async login(email: string, password: string): Promise<User> {
    try {
      const response = await axiosInstance.post('/login', { email, password });
      return response.data;
    } catch (error) {
      console.error('Error en login:', error);
      throw new Error('Error en la autenticación');
    }
  }

  async logout() {
    try {
      await axiosInstance.post('/logout');
    } catch (error) {
      console.error('Error en logout:', error);
      throw new Error('Error al cerrar sesión');
    }
  }
}
