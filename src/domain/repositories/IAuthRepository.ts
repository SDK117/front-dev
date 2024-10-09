import { User } from '../models/User';

export interface IAuthRepository {
  login(email: string, password: string): Promise<User>;

  logout(): Promise<void>;

  getAuthenticatedUser(): Promise<User>;
}
