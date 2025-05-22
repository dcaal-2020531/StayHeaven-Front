// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/index.jsx';  
import Dashboard from './pages/dashboard.jsx';

import Facturas from './pages/factura.jsx';
import FormFactura from './pages/form_factura.jsx';

import Clientes from './pages/cliente.jsx';
import FormCliente from './pages/form_cliente.jsx';

import Empleados from './pages/empleado.jsx'; // Si lo tienes
import FormEmpleado from './pages/form_empleado.jsx';

import Habitaciones from './pages/habitaciones.jsx';
import FormHabitacion from './pages/form_habitaciones.jsx';

import Hotel from './pages/hotel.jsx';
import FormHotel from './pages/form_hotel.jsx';

import Reservas from './pages/reservas.jsx';
import FormReserva from './pages/form_reservas.jsx';

import './css/stylelogin.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Facturas */}
        <Route path="/facturas" element={<Facturas />} />
        <Route path="/facturas/nueva" element={<FormFactura />} />

        {/* Clientes */}
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/clientes/nuevo" element={<FormCliente />} />

        {/* Empleados */}
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/empleados/nuevo" element={<FormEmpleado />} />

        {/* Habitaciones */}
        <Route path="/habitaciones" element={<Habitaciones />} />
        <Route path="/habitaciones/nueva" element={<FormHabitacion />} />

        {/* Hotel */}
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/hotel/nuevo" element={<FormHotel />} />

        {/* Reservas */}
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/reservas/nueva" element={<FormReserva />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
