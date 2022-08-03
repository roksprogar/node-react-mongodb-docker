import express from 'express';
import * as healthController from '../controllers/health.controllers.js';

const router = express.Router();

router.get('/', healthController.testResponse);

router.get('/healthcheck', healthController.ping);

export default router;
