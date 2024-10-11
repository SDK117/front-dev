// src/infrastructure/repositories/RoleRepository.ts
import { IRoleRepository } from '../../domain/repositories/IRoleRepository';
import { Role } from '../../domain/models/Role';
import axios from '../api/axiosInstance';

export class RoleRepository implements IRoleRepository {

  async getAllRoles(): Promise<Role[]> {
    const response = await axios.get('/roles');
    return response.data;
  }






}
