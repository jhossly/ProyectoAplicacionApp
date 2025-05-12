
import express from 'express';
import cors from 'cors';
import userRouter from './routers/userRouter.js'
import productsRouter from './routers/productsRouter.js'
import ventasRouter from './routers/ventasRouter.js';
const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("¡Backend funcionando correctamente con Mongo BD local!");
  });
app.use('/api/auth', userRouter);
app.use ('/api/products',productsRouter);
app.use ('/api/ventas',ventasRouter);
export default app;
