import { User } from '../entities'; // Importamos la entidad User

export interface IUserRepository {
  getProfile(): Promise<User>; // Método para obtener el perfil del usuario
  getPermissions(): Promise<string[]>; // Opcional: Para obtener los permisos

}
