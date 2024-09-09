import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import AuthButtons from '../components/AuthButtons';
import './HomePage.css';

const HomePage: React.FC = () => (
  <div className="home-page">
    <Header title="Bienvenidos a Pollería Deliciosa" subtitle="¡El mejor pollo a la brasa de la ciudad!" />

    <div className="auth-buttons-container">
      <AuthButtons />
    </div>

    <div className="container">
      <Sidebar />
      <div className="main-content">
        <h2>Bienvenidos a Pollería Deliciosa</h2>
        <p>Somos la pollería número uno en sabor y calidad...</p>
        <h3>Nuestro Menú</h3>
        <ul>
          <li>1/4 Pollo a la brasa</li>
          <li>1/2 Pollo a la brasa</li>
          <li>1 Pollo entero a la brasa</li>
          <li>Anticuchos</li>
          <li>Papas fritas</li>
          <li>Ensaladas frescas</li>
        </ul>
        <p>¡Haz tu pedido ahora y disfruta del mejor sabor en la comodidad de tu hogar!</p>
      </div>
    </div>

    <Footer text="&copy; 2023 Pollería Deliciosa. Todos los derechos reservados." />
  </div>
);

export default HomePage;
