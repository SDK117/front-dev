import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Bienvenidos a Pollería Hilda</h1>
      <p>Descubre nuestros deliciosos platillos y promociones</p>
      <Link to="/menu" className="cta-button">Ver Menú</Link>
    </div>
  </section>
);

export default Hero;
