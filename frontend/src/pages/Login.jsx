/*import React, { useState } from 'react';

import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  validar el login
    console.log('Inicio de sesión con:', formData);
    if (formData.email === 'dueno@golosito.com') {
      navigate('/admin'); // Redirige al panel de administrador
    } else {
      navigate('/'); // Redirige al home 
     

      }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          name="email"
          placeholder="ejemplo@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          placeholder="••••••"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();

      if (res.ok) {
        if (data.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          name="email"
          placeholder="ejemplo@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          placeholder="••••••"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
