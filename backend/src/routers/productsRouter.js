import express from 'express';
import {crearProducto}from '../controllers/productsController.js';
const router =express.Router();
router.post('/',crearProducto)
export default router;