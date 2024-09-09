import React from 'react';

const AuthButtons: React.FC = () => (
  <div className="auth-buttons">
    <button onClick={() => window.location.href='/register'}>Registro</button>
    <button onClick={() => window.location.href='/login'}>Login</button>
  </div>
);

export default AuthButtons;
