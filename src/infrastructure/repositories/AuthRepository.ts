import axiosInstance from '../api/axiosInstance';
import { IAuthRepository } from '../../domain/repositories/IAuthRepository';
import { User } from '../../domain/models';

export class AuthRepository implements IAuthRepository {
  async login(email: string, password: string): Promise<User> {
    const response = await axiosInstance.post('/login', { email, password });
    return response.data;
  }

  async logout() {
    await axiosInstance.post('/logout');
  }

  async getAuthenticatedUser(): Promise<User> {
    const response = await axiosInstance.get('/profile');
    return response.data;
  }
}
