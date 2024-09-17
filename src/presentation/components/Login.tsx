import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos del formulario
    console.log('Login attempt with the following data:');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Remember me: ${remember}`);

    // Simulación de éxito
    alert('Inicio de sesión exitoso. ¡Bienvenido!');

    // Redirigir a la página de inicio
    window.location.href = '/';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col md:flex-row">
          {/* Left side: Login form */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            <h1 className="text-3xl font-bold text-yellow-800 mb-6">Iniciar Sesión</h1>
            <form id="loginForm" className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                    className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">Recordarme</label>
                </div>
                <a href="/recuperar-contrasena" className="text-sm text-yellow-600 hover:text-yellow-800">¿Olvidaste tu contraseña?</a>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-700 transition duration-300"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>

          {/* Right side: Social login and registration */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 pl-0 md:pl-8 border-t md:border-t-0 md:border-l border-gray-300 pt-8 md:pt-0">
            <h2 className="text-2xl font-bold text-yellow-800 mb-6">Otras opciones</h2>
            <div className="space-y-4">
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                <i className="fab fa-google mr-2"></i> Iniciar sesión con Google
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                <i className="fab fa-facebook mr-2"></i> Iniciar sesión con Facebook
              </button>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                ¿No tienes una cuenta?
                <a href="/registro" className="text-yellow-600 hover:text-yellow-800 font-semibold">Regístrate aquí</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export default Login;
