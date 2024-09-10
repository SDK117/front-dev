import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => (
  <section className="py-12 bg-yellow-100">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Nuestro restaurante" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
          <p className="text-gray-700 mb-4">En Pollería Hilda, nos enorgullecemos de ofrecer el mejor pollo a la brasa de la ciudad. Con más de 20 años de experiencia, hemos perfeccionado nuestra receta para brindarle a nuestros clientes una experiencia culinaria inolvidable.</p>
          <p className="text-gray-700 mb-4">Utilizamos ingredientes frescos y de alta calidad, y nuestro pollo es marinado durante horas para garantizar un sabor excepcional en cada bocado.</p>
          <Link to="/#" className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Conoce más</Link>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
