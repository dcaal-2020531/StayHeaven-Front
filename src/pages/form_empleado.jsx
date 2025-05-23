import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/form_style.css';

const FormEmpleado = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Empleado guardado');
    navigate('/empleados');
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/empleados');
  };

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <form className="card expanded-form" onSubmit={handleSubmit}>
          <h1>Agregar Empleado</h1>

          <label>Nombre:</label>
          <input type="text" required />

          <label>Rol:</label>
          <input type="text" />

          <label>Correo Electrónico:</label>
          <input type="email" />

          <div className="form-actions">
            <button type="submit" className="btn submit">Guardar</button>
            <button type="button" className="btn cancel" onClick={handleCancel}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEmpleado;
