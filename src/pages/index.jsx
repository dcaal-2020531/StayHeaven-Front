import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/stylelogin.css';

// Ruta base del backend (cámbiala según sea necesario)
const BACKEND_URL = 'http://localhost:1999/v1/login/login';

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

  const goToDashboard = async (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;
    const checkbox = form.querySelector('input[type="checkbox"]');

    if (!checkbox.checked) {
      alert('Por favor confirma que no eres un robot.');
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Inicio de sesión exitoso');
        // Si usas token: localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        alert(`Error: ${data.message || 'Credenciales inválidas'}`);
      }
    } catch (error) {
      alert('Ocurrió un error al conectar con el servidor');
      console.error(error);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.querySelector('input[placeholder="Nombres"]').value;
    const surname = form.querySelector('input[placeholder="Apellidos"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;
    const birthdate = form.querySelector('input[type="date"]').value;
    const age = form.querySelector('input[name="age"]').value;
    const checkbox = form.querySelector('input[type="checkbox"]');

    if (!checkbox.checked) {
      alert('Por favor confirma que no eres un robot.');
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          surname,
          email,
          password,
          birthdate,
          age: Number(age),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        setActiveTab('signin');
      } else {
        alert(`Error: ${data.message || 'No se pudo registrar el usuario'}`);
      }
    } catch (error) {
      alert('Ocurrió un error al conectar con el servidor');
      console.error(error);
    }
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