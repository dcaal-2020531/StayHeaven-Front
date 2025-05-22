import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Importa useNavigate
import '../css/stylevistas.css';

const Facturas = () => {
  const navigate = useNavigate();

  const handleAddFactura = (e) => {
    e.preventDefault();
    navigate('/facturas/nueva'); // Cambia esta ruta según la configuración de tu router
  };

  const handleViewFactura = (e) => {
    e.preventDefault();
    // Aquí podrías pasar un ID dinámico si tienes varias facturas
    navigate('/ver-factura/001'); // Ajusta ruta e ID según tu app
  };

  return (
    <div className="content">
      <h1>Gestión de Facturas</h1>

      <div className="card">
        <h2>Agregar Factura</h2>
        <p>Simulación de registro de facturas.</p>
        <button className="btn" onClick={handleAddFactura}>Nueva Factura</button>
      </div>

      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>Juan Pérez</td>
            <td>Q120.00</td>
            <td>
              <button className="btn" onClick={handleViewFactura}>Ver</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Facturas;
