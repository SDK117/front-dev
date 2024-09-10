import React from 'react';

const Testimonials: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-yellow-800">Lo que dicen nuestros clientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 mb-4">"El mejor pollo a la brasa que he probado. ¡Siempre regreso por más!"</p>
          <p className="font-bold">- María L.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 mb-4">"Las promociones son increíbles y la calidad nunca decepciona."</p>
          <p className="font-bold">- Carlos R.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 mb-4">"Excelente servicio y ambiente familiar. ¡Totalmente recomendado!"</p>
          <p className="font-bold">- Ana P.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
