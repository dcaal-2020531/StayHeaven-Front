import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/form_style.css';

const FormEmpleado = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Empleado guardado');
    // Después de guardar, rediriges a la lista de empleados, por ejemplo:
    navigate('/empleados');
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/empleados'); // Cambia la ruta según corresponda
  };

  return (
    <div className="content">
      <h1>Agregar Empleado</h1>
      <form className="card" onSubmit={handleSubmit}>
        <label>Nombre:</label><br />
        <input type="text" required /><br /><br />

        <label>Rol:</label><br />
        <input type="text" /><br /><br />

        <label>Correo Electrónico:</label><br />
        <input type="email" /><br /><br />

        <button type="submit" className="btn submit">Guardar</button>
        <button className="btn cancel" onClick={handleCancel}>Cancelar</button>
      </form>
    </div>
  );
};

export default FormEmpleado;
