import { User } from '../../domain/models';
//sirve
import axiosInstance from '../../infrastructure/api/axiosInstance';


export class AuthService {

  async login(email: string, password: string):Promise<{ token: string }>{
    const response = await axiosInstance.post('/login', { email, password });
    // Verifica que el token esté presente en la respuesta
    if (!response.data.token) {
      throw new Error('No se recibió un token');
    }

    // Devuelve el token
    return { token: response.data.token };
  }

  async logout(): Promise<void> {
    await axiosInstance.post('/logout');
  }

  async getAuthenticatedUser(): Promise<User> {
    const response = await axiosInstance.get('/profile');
    return response.data.data;
  }
}
