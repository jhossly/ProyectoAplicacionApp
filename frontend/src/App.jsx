// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login";
import Footer from './components/Footer';
import Register from './pages/Register';
//import CarruselOfertas from './components/CarruselOfertas';
import Ventas from './pages/Ventas';
import ProductCard from './components/ProductCard';
import AdminPanel from './pages/AdminPanel';
import AdminInicio from './pages/AdminInicio';
import Inventario from './pages/Inventario';
import './App.css'; 



const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Header */}
        {/* <Header /> */}

        {/* Área dinámica */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/productCard" element ={<ProductCard/>}/>
            <Route path='/adminPanel' element = {<AdminPanel/>}/>
            <Route path="/adminInicio" element={<AdminInicio />} />
            <Route path='/inventario' element={<Inventario/>}/>
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;