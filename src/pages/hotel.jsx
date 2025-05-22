import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/stylevistas.css';

const Hotel = () => {
  const navigate = useNavigate();

  const goToFormHotel = (e) => {
    e.preventDefault();
    navigate('/hotel/nuevo'); // Ruta de React Router para el formulario de hotel
  };

  return (
    <div className="content">
      <h1>Gestión de Hotel</h1>
      <div className="card">
        <h2>Agregar Hotel</h2>
        <p>Formulario de ejemplo con botones .btn para interacción simulada.</p>
        <button className="btn" onClick={goToFormHotel}>Agregar Hotel</button>
      </div>
      <table className="styled-table">
        <thead>
          <tr><th>Nombre</th><th>Ciudad</th><th>Acciones</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Hotel Central</td>
            <td>Madrid</td>
            <td><button className="btn">Editar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Hotel;
