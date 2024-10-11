import { AuthService } from '../services/AuthService';
import { User } from '../../domain/models/User';

export class AuthUseCases {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async login(email: string, password: string): Promise<{ token: string }> {
    const response = await this.authService.login(email, password);
    // Asegúrate de que el token esté definido
    if (response.token === undefined) {
      throw new Error('No se recibió un token');
    }

    return { token: response.token };
  }

  async getAuthenticatedUser(): Promise<User> {
    return this.authService.getAuthenticatedUser();
  }

  async logout(): Promise<void> {
    await this.authService.logout();
  }
}
