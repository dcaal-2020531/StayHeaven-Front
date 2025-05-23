import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/admin.css';

const AdminPlataforma = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <h1>Administrador de Plataforma</h1>
      <div className="admin-buttons">
        <button onClick={() => navigate('/clientes')}>Ver Usuarios Registrados</button>
        <button onClick={() => navigate('/hotel/nuevo')}>Agregar Hotel</button>
        <button onClick={() => navigate('/dashboard')}>De regreso a la página principal</button>
      </div>
    </div>
  );
};

export default AdminPlataforma;
