import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AuthUseCases } from '../../application/useCases/AuthUseCases';
import { AuthService } from '../../application/services/AuthService';

interface AuthContextType {
  login: (email: string, password: string) => Promise<{ token: string }>; // Cambia aquí
  token: string | null;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const authUseCases = new AuthUseCases(new AuthService());

  const login = async (email: string, password: string): Promise<{ token: string }> => { // Cambia aquí
    try {
      const result = await authUseCases.login(email, password);
      if (result.token) {
        setToken(result.token);
        localStorage.setItem('token', result.token);
        setError(null);
      } else {
        setError('No se recibió un token. Inténtalo de nuevo.');
      }
      return result; // Asegúrate de devolver el resultado
    } catch (err) {
      setError('Credenciales inválidas. Inténtalo de nuevo.');
      console.error('Error al iniciar sesión', err);
      throw err; // Lanza el error para que el componente que llama pueda manejarlo
    }
  };

  return (
    <AuthContext.Provider value={{ login, token, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};
