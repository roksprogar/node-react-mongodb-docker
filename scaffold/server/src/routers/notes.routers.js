import express from 'express';
import * as notes from '../controllers/notes.controller.js';
const router = express.Router();

router.get('/notes', (request, response) => {
  response.send('Hello from notes!');
});
router.get('/notes/:id', (request, response) => {
  response.send(`You requested note id ${request.params.id}`);
});
router.post('/notes', notes.createNote);
router.delete('/notes:id', () => {});
router.patch('/notes', () => {});

export default router;
