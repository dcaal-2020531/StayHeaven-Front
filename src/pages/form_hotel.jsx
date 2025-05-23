import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/form_style.css';

const FormHotel = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    addres: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    schedule: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:1992/v1/hotel/createHotel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const error = await res.json();
        console.error('Error al guardar hotel:', error);
        alert('Error al guardar hotel: ' + error.message);
        return;
      }

      console.log('Hotel guardado con éxito');
      navigate('/admin-plataforma');

    } catch (err) {
      console.error('Error del servidor:', err);
      alert('Error del servidor al guardar el hotel');
    }
  };

  const handleCancel = () => {
    navigate('/admin-plataforma');
  };

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <form className="card expanded-form" onSubmit={handleSubmit}>
          <h1>Agregar Nuevo Hotel</h1>

          <label>Nombre del Hotel:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Dirección:</label>
          <input type="text" name="addres" value={formData.addres} onChange={handleChange} required />

          <label>Teléfono:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

          <label>Correo electrónico:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>País:</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} required />

          <label>Ciudad:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />

          <label>Horario:</label>
          <input type="text" name="schedule" value={formData.schedule} onChange={handleChange} required />

          <div className="form-actions">
            <button type="submit" className="btn submit">Guardar</button>
            <button type="button" className="btn cancel" onClick={handleCancel}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormHotel;