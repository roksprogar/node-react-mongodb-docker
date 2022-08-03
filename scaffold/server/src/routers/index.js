import cors from 'cors';
import healthCheck from './health.routers.js';
import notes from './notes.routers.js';

const CORS_HOST = process.env.CORS_HOST || 'localhost';
const CORS_PORT = process.env.CORS_PORT || 3000;
const CORS_ADDRESS = `http://${CORS_HOST}:${CORS_PORT}`;
// console.log('CORS set to address: ', CORS_ADDRESS);
const corsOptions = {
  origin: CORS_ADDRESS,
};

function initRouters(app) {
  app.use(cors(corsOptions));
  app.use(healthCheck);
  app.use(notes);
}

export default initRouters;
