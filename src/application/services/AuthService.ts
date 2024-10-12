import axiosInstance from '../../infrastructure/api/axiosInstance';

export class AuthService {
  async login(email: string, password: string): Promise<void> {
    const response = await axiosInstance.post('/login', { email, password });
    if (!response.data.token) {
      throw new Error('No se recibió un token');
    }
    this.storeToken(response.data.token);
  }

  async logout(): Promise<void> {
    await axiosInstance.post('/logout');
    this.removeToken();
  }

  private storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private removeToken(): void {
    localStorage.removeItem('token');
  }
}
