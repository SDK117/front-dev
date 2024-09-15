import React from 'react';
import { motion } from 'framer-motion';

interface MenuItemProps {
  title: string;
  description: string;
  price: number;
  image: string;
  show: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, description, price, image, show }) => {
  return (
    <motion.div
      className="p-4 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
      initial={{ scale: 0.10 }}
      animate={{ scale: show ? 1 : 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="overflow-hidden rounded-t-xl" // Hace que la imagen se mantenga dentro de su contenedor al hacer zoom
        whileHover={{ scale: 1.1 }} // Aplica un pequeño zoom al pasar el mouse
        transition={{ duration: 0.3 }} // La duración del zoom
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </motion.div>
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-yellow-600">${price}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItem;
