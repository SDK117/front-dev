import axiosInstance from '../../infrastructure/api/axiosInstance';

export class AuthService {
  async login(email: string, password: string): Promise<void> {
    try {
      const response = await axiosInstance.post('/login', { email, password });
      if (!response.data.token) {
        throw new Error('No se recibió un token');
      }
      this.storeToken(response.data.token);
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      throw new Error('Error al iniciar sesión. Verifica tus credenciales.');
    }
  }

  async logout(): Promise<void> {
    try {
      await axiosInstance.post('/logout');
      this.removeToken();
    } catch (error) {
      console.error('Error durante el cierre de sesión:', error);
    }
  }

  private storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private removeToken(): void {
    localStorage.removeItem('token');
  }
  public getToken(): string | null {
    return localStorage.getItem('token');
  }
}
