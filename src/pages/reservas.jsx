import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/stylevistas.css';

const Reservas = () => {
  const navigate = useNavigate();

  const goToFormReserva = (e) => {
    e.preventDefault();
    navigate('/reservas/nueva'); // Ruta React Router para el formulario de reservas
  };

    const goToFormReserva2 = (e) => {
    e.preventDefault();
    navigate('/dashboard'); // Ruta React Router para el formulario de reservas
  };

  return (
    <div className="content">
      <h1>Gestión de Reservas</h1>

      <div className="card">
        <h2>Agregar Reserva</h2>
        <button className="btn" onClick={goToFormReserva}>Agregar Reserva</button>
        <button className="btn" onClick={goToFormReserva2}> Regresar a la página principal </button>
      </div>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Habitación</th>
            <th>Entrada</th>
            <th>Salida</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Juan Pérez</td>
            <td>101</td>
            <td>2025-04-01</td>
            <td>2025-04-05</td>
            <td>Activa</td>
          </tr>
          <tr>
            <td>María Gómez</td>
            <td>102</td>
            <td>2025-03-20</td>
            <td>2025-03-25</td>
            <td>Finalizada</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Reservas;
