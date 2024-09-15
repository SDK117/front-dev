import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <main className="container mx-auto px-8 py-8">
      <section id="menu-component" className="px-8 py-8 bg-yellow-100 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-yellow-800 mb-8 text-center">Contáctanos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulario de contacto */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">Envíanos un mensaje</h2>
            <form id="contactForm" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  required
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="consulta">Consulta general</option>
                  <option value="reserva">Reserva</option>
                  <option value="queja">Queja o reclamo</option>
                  <option value="sugerencia">Sugerencia</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-700 transition duration-300"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">Información de contacto</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-yellow-600 text-xl mr-4 mt-1"></i>
                <div>
                  <h3 className="font-bold">Dirección principal</h3>
                  <p>Av. Principal 123, Miraflores, Lima, Perú</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-phone-alt text-yellow-600 text-xl mr-4 mt-1"></i>
                <div>
                  <h3 className="font-bold">Teléfono</h3>
                  <p>(01) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-envelope text-yellow-600 text-xl mr-4 mt-1"></i>
                <div>
                  <h3 className="font-bold">Correo electrónico</h3>
                  <p>info@polleriahilda.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-clock text-yellow-600 text-xl mr-4 mt-1"></i>
                <div>
                  <h3 className="font-bold">Horario de atención</h3>
                  <p>Lunes a Domingo: 11:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-yellow-800 mt-8 mb-4">Síguenos en redes sociales</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-3xl text-yellow-600 hover:text-yellow-700">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-3xl text-yellow-600 hover:text-yellow-700">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-3xl text-yellow-600 hover:text-yellow-700">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactForm;
