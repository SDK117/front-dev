import { AuthService } from '../services/AuthService';
import { User } from '../../domain/models'; // Cambia esta línea

export class AuthUseCases {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async login(email: string, password: string): Promise<{ token: string, user: User }> {
    const response = await this.authService.login(email, password);
    // Asegúrate de que el token esté definido
    if (!response.token) {
      throw new Error('No se recibió un token');
    }
    const user = await this.getAuthenticatedUser();
    return {
      token: response.token,
      user:user,
    };
  }

  async getAuthenticatedUser(): Promise<User> {
    return this.authService.getAuthenticatedUser();
  }

  async logout(): Promise<void> {
    await this.authService.logout();
  }
}
