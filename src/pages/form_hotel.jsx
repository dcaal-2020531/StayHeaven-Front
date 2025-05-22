import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/form_style.css';

const FormHotel = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para guardar el hotel
    console.log('Hotel guardado');
    navigate('/hotel'); // Navega a la lista o vista de hoteles
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/hotel'); // Navega a la lista o vista de hoteles
  };

  return (
    <div className="content">
      <h1>Agregar Nuevo Hotel</h1>
      <form className="card" onSubmit={handleSubmit}>
        <label>Nombre del Hotel:</label><br />
        <input type="text" required /><br /><br />

        <label>Dirección:</label><br />
        <input type="text" /><br /><br />

        <label>Ciudad:</label><br />
        <input type="text" /><br /><br />

        <button type="submit" className="btn submit">Guardar</button>
        <button className="btn cancel" onClick={handleCancel}>Cancelar</button>
      </form>
    </div>
  );
};

export default FormHotel;
