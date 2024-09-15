import React, { useState } from 'react';
import MenuItem from '../components/MenuItem';
import CategoryButton from '../components/CategoryButton';
import { motion } from 'framer-motion';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const menuItems = [
    { title: "Pollo a la Brasa", description: "Nuestro clásico pollo marinado y asado a la perfección.", price: 55, image: "https://blog.sanfernando.pe/wp-content/uploads/2023/07/banner_3.jpg", category: "pollos" },
    { title: "Anticuchos", description: "Deliciosos anticuchos de corazón a la parrilla.", price: 25, image: "https://blog.sanfernando.pe/wp-content/uploads/2023/07/banner_3.jpg", category: "parrillas" },
    { title: "Papas Fritas", description: "Crujientes papas fritas, el acompañamiento perfecto.", price: 12, image: "https://blog.sanfernando.pe/wp-content/uploads/2023/07/banner_3.jpg", category: "guarniciones" },
    { title: "Ensalada Mixta", description: "Fresca ensalada de verduras variadas.", price: 15, image: "https://blog.sanfernando.pe/wp-content/uploads/2023/07/banner_3.jpg", category: "guarniciones" },
    { title: "Gaseosa 1L", description: "Refrescante gaseosa de tu elección.", price: 8, image: "https://blog.sanfernando.pe/wp-content/uploads/2023/07/banner_3.jpg", category: "bebidas" },
    { title: "Chicha Morada 1L", description: "Deliciosa chicha morada casera.", price: 10, image: "https://blog.sanfernando.pe/wp-content/uploads/2023/07/banner_3.jpg", category: "bebidas" },
  ];

  const filteredMenuItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter(item => item.category === activeCategory);

  return (
    <main className=" container mx-auto px-8 py-8">
      <section id="menu-component" className="px-8 py-8 bg-yellow-100 rounded-lg shadow-lg ">
        <h1 className="text-4xl font-bold text-yellow-800 mb-8 text-center">Nuestro Menú</h1>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <CategoryButton label="Todos" onClick={() => setActiveCategory('all')} active={activeCategory === 'all'} />
          <CategoryButton label="Pollos" onClick={() => setActiveCategory('pollos')} active={activeCategory === 'pollos'} />
          <CategoryButton label="Parrillas" onClick={() => setActiveCategory('parrillas')} active={activeCategory === 'parrillas'} />
          <CategoryButton label="Guarniciones" onClick={() => setActiveCategory('guarniciones')} active={activeCategory === 'guarniciones'} />
          <CategoryButton label="Bebidas" onClick={() => setActiveCategory('bebidas')} active={activeCategory === 'bebidas'} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenuItems.map(item => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <MenuItem
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                show={true}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Menu;
