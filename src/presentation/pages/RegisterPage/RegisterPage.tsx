import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm/RegisterForm.tsx';

const RegisterPage: React.FC = () => (
  <div className="register-page">
    <Header title="Pollería Deliciosa" subtitle="Registro de Usuario" />
    <div className="container">
      <RegisterForm />
    </div>
    <Footer text="&copy; 2023 Pollería Deliciosa. Todos los derechos reservados." />
  </div>
);

export default RegisterPage;
