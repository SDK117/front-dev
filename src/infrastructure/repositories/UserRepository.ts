// src/infrastructure/repositories/UserRepository.ts
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { User } from '../../domain/models/User';
import axios from '../api/axiosInstance';

export class UserRepository implements IUserRepository {

  async getAllUsers(): Promise<User[]> {
    const response = await axios.get('/users');
    return response.data;
  }
  async createUser(user: User): Promise<User> {
    const response = await axios.post('/users', user);
    return response.data;
  }




}
