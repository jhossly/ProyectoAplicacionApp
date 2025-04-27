import React from 'react';
import './Footer.css'; // Asegúrate de que este archivo exista

const Footer = () => {
  return (
    <footer className="footer"> {/* Usa className en lugar de style */}
      <p>&copy; 2025 Golosito 🛒 - Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;