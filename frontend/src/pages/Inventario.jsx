// src/pages/Inventory.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Inventario.css';

const Inventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    obtenerProductos();
  }, []);

  return (
    <div className="inventory-container">
      <h2>Inventario</h2>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.nombre}</td>
              <td>{p.categoria}</td>
              <td>${p.precio}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
