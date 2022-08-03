import express from 'express';
import mongoose from 'mongoose';
import initRouter from './routers/index.js';

const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_CONN = `mongodb://${MONGO_HOST}:${MONGO_PORT}`;

const PORT = process.env.PORT || 3002;

mongoose.connect(`${MONGO_CONN}`).catch((error) => console.log(error));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDb connection error: '));

const app = express();

initRouter(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
