
// src/domain/models/Role.ts
export interface Permission {
  id: number;
  name: string;
}

export interface Role {
  id: number;
  name: string;
  permissions?: Permission[]; // Añadir esta línea
}

// src/domain/models/User.ts
export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  roles: Role[];
  token?: string;
  permissions?: Permission[]; // Esto se puede eliminar si no es necesario
}

