import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/hotel.css';

const Hoteles = () => {
  const navigate = useNavigate();
  const [hoteles, setHoteles] = useState([]);
  const [loading, setLoading] = useState(true);

  const irAReserva = (id) => {
    navigate(`/reservas/nueva?hotelId=${id}`);
  };

  const irAReserva2 = () => {
    navigate('/dashboard');
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
      <button className="btn-reservar" onClick={irAReserva2}>Regresar a la página principal</button>
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
                  <button className="btn-reservar" onClick={() => irAReserva(hotel._id)}>Reservar</button>
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