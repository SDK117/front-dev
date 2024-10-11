// src/domain/repositories/IRoleRepository.ts
import { Role } from '../models/Role';

export interface IRoleRepository {
  getAllRoles(): Promise<Role[]>;
}
