import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/stylelogin.css';

const BACKEND_URL = 'http://localhost:1992/v1/login/addClient';

const BACKEND_URL2 = 'http://localhost:1992/v1/login/initLogin';

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

  // Función para iniciar sesión
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
      const response = await fetch(`${BACKEND_URL2}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Inicio de sesión exitoso');
        navigate('/dashboard'); // Redirige al dashboard
      } else {
        alert(`Error: ${data.message || 'Credenciales inválidas'}`);
      }
    } catch (error) {
      alert('Ocurrió un error al conectar con el servidor');
      console.error(error);
    }
  };

  // Función para registrar nuevo usuario
  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.querySelector('input[name="name"]').value;
    const surname = form.querySelector('input[name="surname"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;
    const birthdate = form.querySelector('input[name="birthdate"]').value;
    const phone = form.querySelector('input[name="phone"]').value;
    const country = form.querySelector('input[name="country"]').value;
    const city = form.querySelector('input[name="city"]').value;
    const checkbox = form.querySelector('input[type="checkbox"]');

    if (!checkbox.checked) {
      alert('Por favor confirma que no eres un robot.');
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          surname,
          email,
          password,
          birthdate,
          phone,
          country,
          city,
          role: 'CLIENT',
        }),
      });

      const contentType = response.headers.get('content-type');

      if (!response.ok) {
        const errorText = contentType && contentType.includes('application/json')
          ? await response.json()
          : await response.text();

        alert(`Error: ${errorText.message || errorText || 'No se pudo registrar el usuario'}`);
        return;
      }

      await response.json();
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      setActiveTab('signin');
    } catch (error) {
      alert('Ocurrió un error al conectar con el servidor');
      console.error(error);
    }
  };

  return (
    <>
      <div className="background-layer"></div>

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
              <input type="text" placeholder="Nombres" name="name" required />
              <input type="text" placeholder="Apellidos" name="surname" required />
              <input type="email" placeholder="Correo electrónico" required />
              <input type="password" placeholder="Contraseña" required />
              <input type="text" placeholder="Teléfono" name="phone" required />
              <input type="text" placeholder="País" name="country" required />
              <input type="text" placeholder="Ciudad" name="city" required />
              <label htmlFor="birthdate">Fecha de nacimiento:</label>
              <input
                type="date"
                name="birthdate"
                required
                onChange={handleBirthdateChange}
              />
              <input
                type="number"
                placeholder="Edad (automática)"
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