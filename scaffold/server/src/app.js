const express = require('express');
const cors = require('cors');

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
