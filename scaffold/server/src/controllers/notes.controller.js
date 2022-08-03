import Note from '../models/notes.model.js';

export async function createNote(request, response) {
  if (!request.body) {
    response.status(400).send({
      message: 'Note cannot be empty',
      success: false,
    });
  }
  const note = new Note({
    title: request.body.title,
    description: request.body.description,
  });

  let data;
  try {
    data = await note.save();
  } catch (error) {
    console.error(error);
    response.status(500).send({
      message: 'Something went wrong',
      success: false,
    });
  }

  response.status(201).send({
    message: 'Note created!',
    success: true,
    data,
  });
}
