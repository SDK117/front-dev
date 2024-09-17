import React from 'react';

const Register: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log('Registration attempt with the following data:');
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
      return;
    }

    alert('Registro exitoso. ¡Bienvenido a Pollería Hilda!');
    window.location.href = '/';
  };

  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-yellow-800 mb-6 text-center">Regístrate en Pollería Hilda</h1>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="w-full md:w-2/3">
              <form id="registrationForm" className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">Nombre</label>
                    <input type="text" id="firstName" name="firstName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600" required />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Apellido</label>
                    <input type="text" id="lastName" name="lastName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo electrónico</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600" required />
                </div>
                <div>
                  <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Contraseña</label>
                  <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600" required />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirmar contraseña</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600" required />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Número de teléfono</label>
                  <input type="tel" id="phoneNumber" name="phoneNumber" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600" required />
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="termsAndConditions" name="termsAndConditions" className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded" required />
                  <label htmlFor="termsAndConditions" className="ml-2 block text-sm text-gray-700">
                    Acepto los <a href="/terminos-y-condiciones" className="text-yellow-600 hover:text-yellow-800">términos y condiciones</a>
                  </label>
                </div>
                <div>
                  <button type="submit" className="w-full bg-yellow-600 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-700 transition duration-300">Registrarse</button>
                </div>
              </form>
            </div>

            <div className="w-full md:w-1/3 mt-8 md:mt-0">
              <div className="bg-yellow-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-4">Beneficios de registrarte</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Acceso a promociones exclusivas</li>
                  <li>Programa de recompensas</li>
                  <li>Pedidos rápidos y fáciles</li>
                  <li>Historial de pedidos</li>
                  <li>Notificaciones de ofertas especiales</li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-center text-gray-700 font-semibold">O regístrate con:</p>
                <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                  <i className="fab fa-google mr-2"></i> Registrarse con Google
                </button>
                <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                  <i className="fab fa-facebook mr-2"></i> Registrarse con Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
