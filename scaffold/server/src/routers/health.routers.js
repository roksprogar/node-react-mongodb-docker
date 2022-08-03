import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from express!');
});

router.get('/healthcheck', (req, res) => {
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
