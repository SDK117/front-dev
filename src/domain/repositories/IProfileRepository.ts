import { User } from '../../domain/models';

export interface IProfileRepository {
  getProfile(): Promise<User>;
}
