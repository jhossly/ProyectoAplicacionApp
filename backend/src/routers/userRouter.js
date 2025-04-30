// backend/routes/userRoutes.js
import express from 'express';
import User from '../models/User.js';
import { login } from '../controllers/userController.js'; 
const router = express.Router();
router.post('/login', login);
// Registrar nuevo usuario
router.post('/register', async (req, res) => {
  try {
    const { nombre, correo, contraseña } = req.body;

    const nuevoUsuario = new User({ nombre, correo, contraseña });
    await nuevoUsuario.save();

    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
});

// Obtener todos los usuarios (solo para el admin)
router.get('/', async (req, res) => {
  try {
    const usuarios = await User.find().sort({ fechaRegistro: -1 });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
});

export default router;
