import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/form_style.css';

const FormReserva = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Procesar formulario aquí
    console.log('Reserva guardada');
    navigate('/reservas'); // Navega a la lista o vista de reservas
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/reservas'); // Navega a la lista o vista de reservas
  };

  return (
    <div className="content">
      <h1>Agregar Reserva</h1>
      <form className="card" onSubmit={handleSubmit}>
        <label>Nombre del Cliente:</label>
        <input type="text" required /><br /><br />

        <label>Número de Habitación:</label>
        <input type="text" required /><br /><br />

        <label>Fecha de Entrada:</label>
        <input type="date" required /><br /><br />

        <label>Fecha de Salida:</label>
        <input type="date" required /><br /><br />

        <label>Estado:</label>
        <select required defaultValue="">
          <option value="" disabled>Selecciona</option>
          <option>Activa</option>
          <option>Finalizada</option>
        </select><br /><br />

        <button type="submit" className="btn submit">Guardar</button>
        <button className="btn cancel" onClick={handleCancel}>Cancelar</button>
      </form>
    </div>
  );
};

export default FormReserva;
