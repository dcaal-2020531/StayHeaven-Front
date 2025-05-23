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
    <div className="page-wrapper">
      <div className="form-container">
        <form className="card expanded-form" onSubmit={handleSubmit}>
          <h1>Agregar Reserva</h1>

          <label>Nombre del Cliente:</label>
          <input type="text" required />

          <label>Número de Habitación:</label>
          <input type="text" required />

          <label>Fecha de Entrada:</label>
          <input type="date" required />

          <label>Fecha de Salida:</label>
          <input type="date" required />

          <label>Estado:</label>
          <select required defaultValue="">
            <option value="" disabled>
              Selecciona
            </option>
            <option>Activa</option>
            <option>Finalizada</option>
          </select>

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

export default FormReserva;
