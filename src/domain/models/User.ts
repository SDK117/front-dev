import { Role, Permission } from './index';

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: Date | null;
  created_at: Date;
  updated_at: Date;
  roles: Role[];
  permissions: Permission[];
}
