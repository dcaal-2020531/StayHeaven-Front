import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleTheme = () => setDarkTheme(!darkTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme !== null) setDarkTheme(savedTheme === 'true');
  }, []);

  useEffect(() => {
  const className = darkTheme ? 'dark-theme' : 'light-theme';
  document.body.classList.remove('dark-theme', 'light-theme');
  document.body.classList.add(className);
}, [darkTheme]);


  return (
    <div className="dashboard-body">
      <div className={`sidebar ${sidebarOpen ? '' : 'inactive'}`}>
        <div className="logo">
          <i className="fas fa-hotel"></i> Stay Heaven
        </div>
        <ul className="nav-list">
          <li><button onClick={() => navigate('/habitaciones')} className="nav-button"><i className="fas fa-bed"></i> Habitaciones</button></li>
          <li><button onClick={() => navigate('/clientes')} className="nav-button"><i className="fas fa-user-friends"></i> Clientes</button></li>
          <li><button onClick={() => navigate('/reservas')} className="nav-button"><i className="fas fa-calendar-check"></i> Reservas</button></li>
          <li><button onClick={() => navigate('/facturas')} className="nav-button"><i className="fas fa-file-invoice-dollar"></i> Factura</button></li>
          <li><button onClick={() => navigate('/empleados')} className="nav-button"><i className="fas fa-users"></i> Empleados</button></li>
                    <li><button onClick={() => navigate('/hoteles')} className="nav-button"><i className="fas fa-hotel"></i> hoteles  </button></li>
          <li><button onClick={() => navigate('/admin-plataforma')} className="nav-button"><i className="fas fa-user"></i> Admin de Plataforma</button></li>
          <li><button onClick={() => navigate('/')} className="nav-button"><i className="fas fa-sign-out-alt"></i> Cerrar Sesión</button></li>
        </ul>
      </div>

      <div className={`main-content ${sidebarOpen ? '' : 'expanded'}`}>
        <header className="top-header">
            <button
                id="toggle-sidebar"
                className="hamburger-btn"
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
            >
                <i className="fas fa-bars"></i>
            </button>

            <button
                id="toggle-theme"
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                {darkTheme ? 'Tema Claro' : 'Tema Oscuro'}
            </button>
        </header>
        <section className="cards-container">
          <article className="card">
            <i className="fas fa-hotel"></i>
            <h2 className="card-title">Habitaciones</h2>
            <p className="card-description">Gestiona las habitaciones del hotel.</p>
          </article>
          <article className="card">
            <i className="fas fa-calendar-check"></i>
            <h2 className="card-title">Reservas</h2>
            <p className="card-description">Administra las reservas de los clientes.</p>
          </article>
          <article className="card">
            <i className="fas fa-user-friends"></i>
            <h2 className="card-title">Clientes</h2>
            <p className="card-description">Visualiza y gestiona los clientes.</p>
          </article>
          <article className="card">
            <i className="fas fa-file-invoice-dollar"></i>
            <h2 className="card-title">Facturas</h2>
            <p className="card-description">Consulta y gestiona las facturas emitidas.</p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
