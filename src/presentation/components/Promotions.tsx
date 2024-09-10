import React from 'react';

const Promotions: React.FC = () => (
  <section className="bg-yellow-100 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-yellow-800">Promociones Especiales</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="font-bold text-2xl mb-4 text-yellow-600">¡Martes de 2x1!</h3>
        <p className="text-gray-700 mb-4">Todos los martes, lleva 2 pollos a la brasa por el precio de 1. ¡No te lo pierdas!</p>
        <a href="/promociones" className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
          Ver todas las promociones
        </a>
      </div>
    </div>
  </section>
);

export default Promotions;
