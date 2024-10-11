// src/domain/repositories/IPermissionRepository.ts
import { Permission } from '../models/Permission';

export interface IPermissionRepository {
  getAllPermissions(): Promise<Permission[]>;
}
