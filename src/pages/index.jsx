import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/stylelogin.css';

const Login = () => {
  const [activeTab, setActiveTab] = useState('signin');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleBirthdateChange = (e) => {
    const birthdate = new Date(e.target.value);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
      calculatedAge--;
    }
    setAge(calculatedAge >= 0 ? calculatedAge : '');
  };

  const goToDashboard = (event) => {
    event.preventDefault();
    const checkbox = event.target.querySelector('input[type="checkbox"]');
    if (checkbox && checkbox.checked) {
      alert('Inicio de sesión simulado. Redirigiendo al dashboard...');
      navigate('/dashboard');
    } else {
      alert('Por favor confirma que no eres un robot.');
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    alert('Registro simulado.');
  };

  return (
    <>
      {/* Fondo fijo */}
      <div className="background-layer"></div>

      {/* Contenedor centrador */}
      <div className="center-wrapper">
        <div className="form-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'signin' ? 'active' : ''}`}
              onClick={() => handleTabClick('signin')}
            >
              Iniciar Sesión
            </button>
            <button
              className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
              onClick={() => handleTabClick('signup')}
            >
              Registrarse
            </button>
          </div>

          {activeTab === 'signin' && (
            <form id="signin-form" className="form active" onSubmit={goToDashboard}>
              <h2>Iniciar Sesión</h2>
              <input type="email" placeholder="Correo electrónico" required />
              <input type="password" placeholder="Contraseña" required />
              <div className="captcha-box">
                <label>
                  <input type="checkbox" required /> No soy un robot
                </label>
              </div>
              <button type="submit">Ingresar</button>
            </form>
          )}

          {activeTab === 'signup' && (
            <form id="signup-form" className="form active" onSubmit={handleRegister}>
              <h2>Registro</h2>
              <input type="text" placeholder="Nombres" required />
              <input type="text" placeholder="Apellidos" required />
              <input type="email" placeholder="Correo electrónico" required />
              <input type="password" placeholder="Contraseña" required />
              <label htmlFor="birthdate">Fecha de nacimiento:</label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                required
                onChange={handleBirthdateChange}
              />
              <input
                type="number"
                placeholder="Edad"
                id="age"
                name="age"
                value={age}
                readOnly
              />
              <div className="captcha-box">
                <label>
                  <input type="checkbox" required /> No soy un robot
                </label>
              </div>
              <button type="submit">Registrarse</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
