import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/stylevistas.css';

const Clientes = () => {
  const navigate = useNavigate();

  const goToFormCliente = (e) => {
    e.preventDefault();
    navigate('/clientes/nuevo'); // Ruta React Router para el formulario de clientes
  };

  return (
    <div className="content">
      <h1>Gestión de Clientes</h1>

      <div className="card">
        <h2>Registrar Cliente</h2>
        <p>Simulación de formulario de registro de clientes.</p>
        <button className="btn" onClick={goToFormCliente}>Registrar Cliente</button>
      </div>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Carlos López</td>
            <td>carlos@mail.com</td>
            <td>
              <button className="btn">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Clientes;
