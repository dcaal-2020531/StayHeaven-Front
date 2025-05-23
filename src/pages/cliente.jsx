import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/stylevistas.css';

const Clientes = () => {
  const navigate = useNavigate();
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  const goToFormCliente = () => {
    navigate('/clientes/nuevo');
  };

   const goToFormCliente2 = () => {
    navigate('/dashboard');
  };


  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const res = await fetch('http://localhost:1992/v1/client/getall');
        if (!res.ok) throw new Error('Error al obtener clientes');
        const data = await res.json();
        setClientes(data.clientes || []); // Aquí está la corrección
      } catch (error) {
        console.error('Error al cargar clientes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);

  return (
    <div className="content">
      <h1>Gestión de Clientes</h1>
      
      <button className="btn" onClick={goToFormCliente2}> De greso a la página</button>
      {loading ? (
        <p>Cargando clientes...</p>
      ) : (
        <table className="styled-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>

            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente._id}>
                <td>{cliente.name} {cliente.surname}</td>
                <td>{cliente.email}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Clientes;