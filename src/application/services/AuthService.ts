import { User } from '../../domain/models/User.ts';
import axiosInstance from '../../infrastructure/api/axiosInstance';


export class AuthService {

  async login(email: string, password: string): Promise<User> {
    const response = await axiosInstance.post('/login', { email, password });
    return response.data;
  }

  async logout(): Promise<void> {
    await axiosInstance.post('/logout');
  }

  async getAuthenticatedUser(): Promise<User> {
    const response = await axiosInstance.get('/user');
    return response.data;
  }
}
