import React from 'react';

const ClientePanel: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold text-blue-600">Bienvenido al Panel de Clientes</h1>
      <p className="mt-4 text-gray-600">
        Aquí puedes gestionar tus datos, realizar pedidos y acceder a promociones exclusivas.
      </p>
      <div className="mt-6">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Explorar Opciones
        </button>
      </div>
    </div>
  );
};

export default ClientePanel;
