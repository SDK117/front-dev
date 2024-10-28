import { User } from '../models';

export interface IAuthRepository {
  login(email: string, password: string): Promise<User>;

  logout(): Promise<void>;
}
