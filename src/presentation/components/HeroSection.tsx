import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://page-images.websim.ai/Variedad%20de%20platos_1024x268xKqTTNAiPyNwuqGLh6x04a01a8b19095.jpg',
  'https://page-images.websim.ai/Interior%20de%20Poller%C3%ADa%20Hilda_1024x268xKqTTNAiPyNwuqGLh6xf66abac43d002.jpg',
  'https://page-images.websim.ai/Delicioso%20pollo%20a%20la%20brasa_1024x268xKqTTNAiPyNwuqGLh6x594885739accd.jpg'
];

const texts = [
  {
    title: 'Bienvenidos a Pollería Hilda',
    description: 'El mejor pollo a la brasa de la ciudad'
  },
  {
    title: 'Variedad de Platos',
    description: 'Disfruta de una amplia selección de deliciosos platos'
  },
  {
    title: 'Ambiente Acogedor',
    description: 'Relájate en nuestro agradable ambiente familiar'
  },
  {
    title: 'Sabor Inigualable',
    description: 'Prueba nuestro famoso pollo a la brasa con el mejor sabor'
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Cambia la imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Cambia la imagen y el texto cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative bg-yellow-500 text-white py-2">
      <div className="relative w-full h-96 overflow-hidden group">
        {/* Imagenes */}
        <div className="absolute inset-0 w-full h-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          ))}
        </div>

        {/* Texto superpuesto */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center transition-opacity duration-1000 ease-in-out">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{texts[currentSlide].title}</h1>
            <p className="text-xl mb-8">{texts[currentSlide].description}</p>
            <a href="/menu" className="bg-white text-yellow-600 font-bold py-2 px-6 rounded-full text-lg hover:bg-yellow-100 transition duration-300">Ver Menú</a>
          </div>
        </div>

        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-yellow-600 p-2 rounded-full hover:bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Previous Slide"
        >
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-yellow-600 p-2 rounded-full hover:bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Next Slide"
        >
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
