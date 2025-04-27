import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <h1>El Golosito 🛒</h1>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Buscar productos..." />
      </div>

      <div className="user-actions">
        <button 
          className="login-btn" 
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Iniciar Sesión
        </button>

        {showDropdown && (
          <div className="dropdown-menu">
            <Link to="/login" className="dropdown-item">Ingresar</Link>
            <Link to="/register" className="dropdown-item">Crear Cuenta</Link>
            <div className="dropdown-divider"></div>
            <Link to="/admin" className="dropdown-item">Soy Administrador</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;