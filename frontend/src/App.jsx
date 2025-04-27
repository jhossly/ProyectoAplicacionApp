// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login";
import Footer from './components/Footer';
import Register from './pages/Register';
import './App.css'; // Importa estilos generales

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Header (si lo tienes o lo agregas después) */}
        {/* <Header /> */}

        {/* Área dinámica (cambia según la ruta) */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        {/* Footer siempre visible */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;