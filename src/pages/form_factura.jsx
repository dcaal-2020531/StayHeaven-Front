import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/form_style.css';

const FormFactura = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar los datos al backend
    console.log('Factura guardada');
    navigate('/facturas');
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/facturas');
  };

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <form className="card expanded-form" onSubmit={handleSubmit}>
          <h1>Crear Nueva Factura</h1>

          <label>ID Cliente:</label>
          <input type="text" required />

          <label>Concepto:</label>
          <input type="text" required />

          <label>Total (Q):</label>
          <input type="number" step="0.01" required />

          <div className="form-actions">
            <button type="submit" className="btn submit">
              Guardar
            </button>
            <button type="button" className="btn cancel" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormFactura;
