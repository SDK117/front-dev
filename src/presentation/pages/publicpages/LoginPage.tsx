import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../../application/services/useCases/AuthService';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(email, password);
      AuthService.saveToken(response.token); // Guardamos el token al iniciar sesión
      localStorage.setItem('role', response.role); // Guardamos el rol

      // Redirigimos según el rol
      if (response.role === 'admin') {
        navigate('/admin-panel');
      } else if (response.role === 'cliente') {
        navigate('/cliente-panel');
      } else {
        // Si no tiene un rol válido, redirigimos al login
        navigate('/login');
      }
    } catch {
      setError('Error en las credenciales, por favor intente nuevamente');
    }
  };

  return (
    <div className="login-page">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginPage;
