import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRouters.js';

const port = process.env.PORT || 8000;

connectDB();
