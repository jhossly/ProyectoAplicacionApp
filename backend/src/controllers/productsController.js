// src/controllers/productsController.js
import Products from '../models/Products.js';

export const crearProducto = async (req, res) => {
  console.log("Datos recibidos:", req.body);

  const { nombre, descripcion, precio, categoria, stock, imagen, conIVA } = req.body;

  // Calcular el precio con IVA si aplica
  const precioFinal = conIVA ? (parseFloat(precio) * 1.15).toFixed(2) : parseFloat(precio);

  try {
    const nuevoProducto = new Products({
      nombre,
      descripcion,
      precio: precioFinal,
      categoria,
      stock,
      imagen,
      conIVA,
      fechaIngreso: new Date()
    });

    await nuevoProducto.save();

    res.status(201).json({
      mensaje: 'Producto registrado correctamente',
      producto: nuevoProducto
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al registrar producto',
      error: error.message
    });
  }
};
