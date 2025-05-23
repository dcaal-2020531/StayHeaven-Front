import React, { useState, useEffect } from 'react';

const HotelUpdateForm = ({ hotel, onCancel, onUpdate }) => {
  const [form, setForm] = useState({
    name: '',
    addres: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    schedule: ''
  });

  useEffect(() => {
    if (hotel) {
      setForm({
        name: hotel.name,
        addres: hotel.addres,
        phone: hotel.phone,
        email: hotel.email,
        country: hotel.country,
        city: hotel.city,
        schedule: hotel.schedule
      });
    }
  }, [hotel]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:1992/v1/hotel/${hotel._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Error al actualizar el hotel');

      const data = await res.json();
      alert('Hotel actualizado correctamente');
      onUpdate(data.updatedHotel); // Notifica al componente padre
    } catch (err) {
      console.error('Error al actualizar el hotel:', err);
      alert('Hubo un error al actualizar el hotel');
    }
  };

  return (
    <div className="form-container">
      <h2>Actualizar Hotel</h2>
      <form onSubmit={handleSubmit} className="hotel-form">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" required />
        <input name="addres" value={form.addres} onChange={handleChange} placeholder="Dirección" required />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Teléfono" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Correo" required />
        <input name="country" value={form.country} onChange={handleChange} placeholder="País" required />
        <input name="city" value={form.city} onChange={handleChange} placeholder="Ciudad" required />
        <input name="schedule" value={form.schedule} onChange={handleChange} placeholder="Horario" required />

        <div className="form-buttons">
          <button type="submit">Actualizar</button>
          <button type="button" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default HotelUpdateForm;