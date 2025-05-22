import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/form_style.css';

const FormFactura = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar los datos al backend
    console.log('Factura guardada');
    // Redirigir a la lista de facturas o donde quieras:
    navigate('/facturas');
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/facturas'); // Cambia esta ruta según corresponda
  };

  return (
    <div className="content">
      <h1>Crear Nueva Factura</h1>
      <form className="card" onSubmit={handleSubmit}>
        <label>ID Cliente:</label><br />
        <input type="text" /><br /><br />

        <label>Concepto:</label><br />
        <input type="text" /><br /><br />

        <label>Total (Q):</label><br />
        <input type="number" step="0.01" /><br /><br />

        <button type="submit" className="btn submit">Guardar</button>
        <button className="btn cancel" onClick={handleCancel}>Cancelar</button>
      </form>
    </div>
  );
};

export default FormFactura;
