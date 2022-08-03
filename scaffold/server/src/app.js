const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_CONN = `mongodb://${MONGO_HOST}:${MONGO_PORT}`;

mongoose.connect(MONGO_CONN);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

const PORT = process.env.PORT || 3002;
const CORS_HOST = process.env.CORS_HOST || 'localhost';
const CORS_PORT = process.env.CORS_PORT || 3000;
const CORS_ADDRESS = `http://${CORS_HOST}:${CORS_PORT}`;
// console.log('CORS set to address: ', CORS_ADDRESS);

const app = express();

const corsOptions = {
  origin: CORS_ADDRESS,
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello from express!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
