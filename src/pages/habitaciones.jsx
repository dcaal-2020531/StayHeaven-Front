import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/stylevistas.css';

const Habitaciones = () => {
  const navigate = useNavigate();

  const goToForm = (e) => {
    e.preventDefault();
    navigate('/habitaciones/nueva'); // Ruta React Router para el formulario de habitaciones
  };

  return (
    <div className="content">
      <h1>Gestión de Habitaciones</h1>

      <div className="card">
        <h2>Agregar Habitación</h2>
        <button className="btn" onClick={goToForm}>Agregar Habitación</button>
      </div>

      <table className="styled-table">
        <thead>
          <tr><th>Número</th><th>Tipo</th><th>Precio</th><th>Estado</th><th>Precio</th><th>Estado</th></tr>
        </thead>
        <tbody>
          <tr><td>101</td><td>Simple</td><td>$50</td><td>Disponible</td><td>$50</td><td>Disponible</td></tr>
          <tr><td>102</td><td>Doble</td><td>$80</td><td>Ocupada</td></tr>
          <tr><td>103</td><td>Suite</td><td>$150</td><td>Mantenimiento</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Habitaciones;
