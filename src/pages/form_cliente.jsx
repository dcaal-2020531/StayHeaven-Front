import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../css/form_style.css';

const FormCliente = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Formulario enviado');
    // Luego de guardar, por ejemplo, navegas a la lista de clientes:
    navigate('/clientes');
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/clientes'); // Ruta a donde quieres volver al cancelar
  };

  return (
    <div className="content">
      <h1>Registrar Nuevo Cliente</h1>
      <form className="card" onSubmit={handleSubmit}>
        <label>Nombre Completo:</label><br />
        <input type="text" name="nombre" required /><br /><br />

        <label>Email:</label><br />
        <input type="email" name="email" required /><br /><br />

        <label>Teléfono:</label><br />
        <input type="text" name="telefono" /><br /><br />

        <button type="submit" className="btn submit">Guardar</button>
        <button className="btn cancel" onClick={handleCancel}>Cancelar</button>
      </form>
    </div>
  );
};

export default FormCliente;
