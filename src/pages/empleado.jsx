import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Importa useNavigate
import '../css/stylevistas.css';

const Empleados = () => {
  const navigate = useNavigate(); // <-- Hook para navegar

  const handleAddEmployee = (e) => {
    e.preventDefault();
    navigate('/empleados/nuevo'); // <-- Redirige a la ruta SPA (asegúrate de que exista en tu router)
  };

  const handleEdit = (e) => {
    e.preventDefault();
    // Podrías pasar un ID si deseas editar uno específico, por ejemplo:
    navigate('/editar-empleado/1'); // <-- Ajusta según tu lógica de edición
  };

  return (
    <div className="content">
      <h1>Gestión de Empleados</h1>

      <div className="card">
        <h2>Agregar Empleado</h2>
        <p>Formulario ficticio para añadir empleados.</p>
        <button className="btn" onClick={handleAddEmployee}>Añadir Empleado</button>
      </div>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Laura Sánchez</td>
            <td>Recepcionista</td>
            <td>
              <button className="btn" onClick={handleEdit}>Editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Empleados;
