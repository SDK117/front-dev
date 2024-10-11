/*import { Role } from './Role';

export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  roles: Role[];
  token?: string;
}*/

// src/domain/models/User.ts
import { Role, Permission } from './index';

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  roles: Role[];
  permissions: Permission[];
}
