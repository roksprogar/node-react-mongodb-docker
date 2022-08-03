import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const router = express.Router();

const CORS_HOST = process.env.CORS_HOST || 'localhost';
const CORS_PORT = process.env.CORS_PORT || 3000;
const CORS_ADDRESS = `http://${CORS_HOST}:${CORS_PORT}`;
// console.log('CORS set to address: ', CORS_ADDRESS);
const corsOptions = {
  origin: CORS_ADDRESS,
};

router.get('/', cors(corsOptions), (req, res) => {
  res.send('Hello from express!');
});

router.get('/healthcheck', cors(corsOptions), (req, res) => {
  mongoose.connection.db.admin().ping((error, result) => {
    if (error || !result) {
      res.send({
        status: 'error',
        message: `Ping fail with error: ${error}`,
      });
    }
    res.send({
      status: 'success',
      message: `Connection with mongo is up: ${result}`,
    });
  });
});

export default router;
