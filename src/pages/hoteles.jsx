import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/hotel.css';

// Formulario interno de actualización
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
      onUpdate(data.updatedHotel);
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

// Componente principal
const Hoteles = () => {
  const navigate = useNavigate();
  const [hoteles, setHoteles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hotelEditando, setHotelEditando] = useState(null);

  const irAPrincipal = () => {
    navigate('/dashboard');
  };

  const eliminarHotel = async (id) => {
    const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este hotel?');
    if (!confirmar) return;

    try {
      const res = await fetch(`http://localhost:1992/v1/hotel/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Error al eliminar hotel');
      alert('Hotel eliminado correctamente');
      setHoteles(hoteles.filter((hotel) => hotel._id !== id));
    } catch (error) {
      console.error('Error al eliminar hotel:', error);
      alert('Hubo un error al intentar eliminar el hotel');
    }
  };

  const actualizarListaHoteles = (hotelActualizado) => {
    setHoteles((prev) =>
      prev.map((hotel) =>
        hotel._id === hotelActualizado._id ? hotelActualizado : hotel
      )
    );
    setHotelEditando(null);
  };

  useEffect(() => {
    const fetchHoteles = async () => {
      try {
        const res = await fetch('http://localhost:1992/v1/hotel/getall');
        if (!res.ok) throw new Error('Error al obtener hoteles');
        const data = await res.json();
        setHoteles(data.hoteles || []);
      } catch (error) {
        console.error('Error al cargar hoteles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHoteles();
  }, []);

  return (
    <div className="content">
      <h1>Hoteles Disponibles</h1>
      <button className="btn-reservar" onClick={irAPrincipal}>Regresar a la página principal</button>
      
      {hotelEditando && (
        <HotelUpdateForm
          hotel={hotelEditando}
          onCancel={() => setHotelEditando(null)}
          onUpdate={actualizarListaHoteles}
        />
      )}

      {loading ? (
        <p>Cargando hoteles...</p>
      ) : (
        <div className="hoteles-grid">
          {hoteles.length === 0 ? (
            <p>No hay hoteles disponibles.</p>
          ) : (
            hoteles.map((hotel) => (
              <div className="hotel-card" key={hotel._id}>
                <h2>{hotel.name}</h2>
                <p>{hotel.city}, {hotel.country}</p>
                <p>{hotel.addres}</p>
                <p>Tel: {hotel.phone}</p>
                <div className="btn-container">
                  <button className="btn-eliminar" onClick={() => eliminarHotel(hotel._id)}>Eliminar</button>
                  <button className="btn-actualizar" onClick={() => setHotelEditando(hotel)}>Actualizar</button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Hoteles;