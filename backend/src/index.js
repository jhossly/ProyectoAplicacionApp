
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import app from './app.js';
import userRouters from './routers/userRouter.js';




dotenv.config();
app.use('/api/usuarios', userRouters);





const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(" MongoDB conectado correctamente");
    app.listen(PORT, () => console.log(` Servidor corriendo en el puerto ${PORT}`));
  })
  .catch((err) => {
    console.error(" Error al conectar a MongoDB:", err);
    
  });