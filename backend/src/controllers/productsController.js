import Products from '../models/Products.js';

export const crearProducto = async (req, res) => {
  const { nombre, descripcion, precio, categoria, stock, fechaIngreso } = req.body;

  try {
    const nuevoProducto = new Products({
      nombre,
      descripcion,
      precio,
      categoria,
      stock,
      fechaIngreso
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
