import React from 'react';
import { motion } from 'framer-motion';

interface CategoryButtonProps {
  label: string;
  onClick: () => void;
  active: boolean;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ label, onClick, active }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
        active ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-800'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0.9 }} // Establece el tamaño inicial más pequeño para el efecto de zoom
      animate={{ scale: 1 }} // Escala el tamaño a 1 para el efecto de zoom al aparecer
      transition={{ duration: 0.5 }} // Duración del efecto de zoom
    >
      {label}
    </motion.button>
  );
};

export default CategoryButton;
