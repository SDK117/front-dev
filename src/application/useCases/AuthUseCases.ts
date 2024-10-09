import { AuthService } from '../services/AuthService';
import { User } from '../../domain/models/User';

export class AuthUseCases {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async login(email: string, password: string): Promise<User> {
    const response = await this.authService.login(email, password);
    return response;
  }

  async getAuthenticatedUser(): Promise<User> {
    return this.authService.getAuthenticatedUser();
  }

  async logout(): Promise<void> {
    await this.authService.logout();
  }
}
