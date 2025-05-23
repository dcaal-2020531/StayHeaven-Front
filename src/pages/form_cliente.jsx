import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/form_style.css';

const FormCliente = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
    navigate('/clientes');
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/clientes');
  };

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <form className="card expanded-form" onSubmit={handleSubmit}>
          <h1>Registrar Nuevo Cliente</h1>

          <label>Nombre Completo:</label>
          <input type="text" name="nombre" required />

          <label>Email:</label>
          <input type="email" name="email" required />

          <label>Teléfono:</label>
          <input type="text" name="telefono" />

          <div className="form-actions">
            <button type="submit" className="btn submit">Guardar</button>
            <button type="button" className="btn cancel" onClick={handleCancel}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormCliente;
