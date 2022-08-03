const express = require('express');
const cors = require('cors');

const PORT = 3001;
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello from express!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
