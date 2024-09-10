import React from 'react';

const FeaturedProducts: React.FC = () => (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Nuestros Platos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-yellow-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Pollo a la Brasa" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2 text-gray-800">Pollo a la Brasa</h3>
            <p className="text-gray-700">Nuestro clásico pollo a la brasa, jugoso y lleno de sabor.</p>
            <a href="/menu" className="text-yellow-600 font-bold hover:text-yellow-700">Ver más</a>
          </div>
        </div>
        <div
          className="bg-yellow-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Anticuchos" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2 text-gray-800">Anticuchos</h3>
            <p className="text-gray-700">Deliciosos anticuchos de corazón, marinados y a la parrilla.</p>
            <a href="/menu" className="text-yellow-600 font-bold hover:text-yellow-700">Ver más</a>
          </div>
        </div>
        <div
          className="bg-yellow-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Papas Fritas" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2 text-gray-800">Papas Fritas</h3>
            <p className="text-gray-700">Crujientes papas fritas, el acompañamiento perfecto.</p>
            <a href="/menu" className="text-yellow-600 font-bold hover:text-yellow-700">Ver más</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
