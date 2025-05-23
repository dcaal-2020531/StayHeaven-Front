import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/form_style.css';

const FormHabitacion = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Habitación guardada');
    navigate('/habitaciones');
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/habitaciones');
  };

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <form className="card expanded-form" onSubmit={handleSubmit}>
          <h1>Agregar Habitación</h1>

          <label htmlFor="numero">Número:</label>
          <input id="numero" type="text" required />

          <label htmlFor="tipo">Tipo:</label>
          <select id="tipo" required defaultValue="">
            <option value="" disabled>
              Selecciona
            </option>
            <option value="Simple">Simple</option>
            <option value="Doble">Doble</option>
            <option value="Suite">Suite</option>
          </select>

          <label htmlFor="precio">Precio por Noche:</label>
          <input id="precio" type="number" required />

          <label htmlFor="estado">Estado:</label>
          <select id="estado" required defaultValue="">
            <option value="" disabled>
              Selecciona
            </option>
            <option value="Disponible">Disponible</option>
            <option value="Ocupada">Ocupada</option>
            <option value="Mantenimiento">Mantenimiento</option>
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

export default FormHabitacion;
