// src/infrastructure/repositories/PermissionRepository.ts
import { IPermissionRepository } from '../../domain/repositories/IPermissionRepository';
import { Permission } from '../../domain/models/Permission';
import axios from '../api/axiosInstance';

export class PermissionRepository implements IPermissionRepository {

  async getAllPermissions(): Promise<Permission[]> {
    const response = await axios.get('/permissions');
    return response.data;
  }

}
