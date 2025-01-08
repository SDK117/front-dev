import axios from '../../../infrastructure/api/axiosInstance'; // Importamos axios
import { AxiosError } from 'axios'; // Importamos AxiosError desde la librería axios

// Definimos una interfaz que represente los datos devueltos por el login (por ejemplo: token y role)
interface LoginResponse {
  token: string;
  role: string;
}

export class AuthService {
// Método para realizar login y obtener el token
  static async login(email: string, password: string): Promise<LoginResponse> {
    try {
      const response = await axios.post('/v1/auth/login', { email, password });
      return {
        token: response.data.token,
        role: response.data.role
      };
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response) {
          console.error('Error en la autenticación:', error.response.data);
        } else if (error.request) {
          console.error('Error de red o no se recibió respuesta', error.request);
        } else {
          console.error('Error desconocido:', error.message);
        }
      } else {
        console.error('Error desconocido:', error);
      }
      throw new Error('Error de autenticación');
    }
  }

  // Método para manejar el almacenamiento seguro del token (considera un entorno de seguridad)
  static saveToken(token: string): void {
    localStorage.setItem('authToken', token);  // Guardamos el token en localStorage (se recomienda encriptar)
  }

  // Método para obtener el token almacenado
  static getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Método para manejar el logout
  static logout(): void {
    localStorage.removeItem('authToken');  // Eliminamos el token del localStorage
  }
}
