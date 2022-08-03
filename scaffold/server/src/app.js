const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_CONN = `mongodb://${MONGO_HOST}:${MONGO_PORT}`;

const PORT = process.env.PORT || 3002;
const CORS_HOST = process.env.CORS_HOST || 'localhost';
const CORS_PORT = process.env.CORS_PORT || 3000;
const CORS_ADDRESS = `http://${CORS_HOST}:${CORS_PORT}`;
// console.log('CORS set to address: ', CORS_ADDRESS);

mongoose.connect(`${MONGO_CONN}`).catch((error) => console.log(error));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDb connection error: '));

const app = express();

const corsOptions = {
  origin: CORS_ADDRESS,
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello from express!');
});

app.get('/healthcheck', (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
