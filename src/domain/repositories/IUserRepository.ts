// src/domain/repositories/IUserRepository.ts
import { User } from '../models/User';

export interface IUserRepository {
  getAllUsers(): Promise<User[]>;
  createUser(user: User): Promise<User>;
}
