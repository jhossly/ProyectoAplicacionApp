// backend/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  fechaRegistro: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

export default User;
