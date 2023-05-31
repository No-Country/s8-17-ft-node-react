"use client";

import React from "react";

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col flex-shrink-0 w-64 bg-white">
        <div className="flex items-center justify-center h-14 bg-gray-800 text-white text-xl font-semibold">
          Admin Dashboard
        </div>
        <nav className="flex-grow">
          <ul className="flex flex-col py-4">
            <li className="px-5 py-2 hover:bg-gray-200">
              <a href="#">Inicio</a>
            </li>
            <li className="px-5 py-2 hover:bg-gray-200">
              <a href="#">Usuarios</a>
            </li>
            <li className="px-5 py-2 hover:bg-gray-200">
              <a href="#">Recetas</a>
            </li>
            <li className="px-5 py-2 hover:bg-gray-200">
              <a href="#">Configuración</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-grow p-10">
        <h1 className="text-2xl font-semibold">Bienvenido al Dashboard de Administrador</h1>
      </div>
    </div>
  );
};

export default AdminDashboard;
