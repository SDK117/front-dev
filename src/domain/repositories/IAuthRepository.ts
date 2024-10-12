import { User } from '../../domain/models';

export interface IAuthRepository {
  login(email: string, password: string): Promise<User>;

  logout(): Promise<void>;
}
