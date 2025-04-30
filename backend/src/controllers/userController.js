import User from '../models/User.js';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ correo: email });
    if (!user || user.contraseña !== password) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    const isAdmin = email === 'admin@golosito.com'; // admin hardcoded

    res.status(200).json({
      message: 'Login exitoso',
      role: isAdmin ? 'admin' : 'user'
    });

  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error });
  }
};
