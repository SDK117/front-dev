import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-yellow-600 text-white p-8">
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Pollería Hilda</h3>
          <p>El mejor pollo a la brasa de la ciudad desde 2000.</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/#" className="hover:text-yellow-200">Menú</Link></li>
            <li><Link to="/#" className="hover:text-yellow-200">Promociones</Link></li>
            <li><Link to="/#" className="hover:text-yellow-200">Ubicaciones</Link></li>
            <li><Link to="/#" className="hover:text-yellow-200">Contacto</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Contacto</h3>
          <p>Teléfono: (01) 123-4567</p>
          <p>Email: info@polleriahilda.com</p>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-bold mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-200">Facebook</a>
            <a href="#" className="hover:text-yellow-200">Instagram</a>
            <a href="#" className="hover:text-yellow-200">Twitter</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; 2024 Pollería Hilda. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
