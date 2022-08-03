import mongoose from 'mongoose';

export function testResponse(req, res) {
  res.send('Hello from express!');
}

export function ping(req, res) {
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
}
