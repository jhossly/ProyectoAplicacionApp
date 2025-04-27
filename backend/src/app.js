// define las rutas
// src/app.js
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("¡Backend funcionando correctamente con Mongo BD local!");
  });
  
export default app;
