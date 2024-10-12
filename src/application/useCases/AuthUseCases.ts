import { AuthService } from '../services/AuthService';
import { ProfileUseCases } from './ProfileUseCases';
import { ProfileService } from '../services/ProfileService';
import { User } from '../../domain/models';

export class AuthUseCases {
  private authService: AuthService;
  private profileUseCases: ProfileUseCases;

  constructor(authService: AuthService, profileService: ProfileService) {
    this.authService = authService;
    this.profileUseCases = new ProfileUseCases(profileService);
  }

  async login(
    email: string,
    password: string,
  ): Promise<{ token: string; user: User }> {
    await this.authService.login(email, password);
    const token = this.getToken();
    if (!token) {
      throw new Error('No se recibió un token después de iniciar sesión');
    }

    const user = await this.profileUseCases.getProfile();
    return {
      token: token,
      user: user,
    };
  }

  async logout(): Promise<void> {
    await this.authService.logout();
  }

  private getToken(): string | null {
    return localStorage.getItem('token');
  }
}
