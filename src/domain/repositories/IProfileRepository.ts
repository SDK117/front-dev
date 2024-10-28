import { User } from '../models';

export interface IProfileRepository {
  getProfile(): Promise<User>;
}
