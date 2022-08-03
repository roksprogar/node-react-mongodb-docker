import Note from '../models/notes.model.js';
import mongoose from 'mongoose';

export async function findAllNotes(request, response) {
  let data;
  try {
    data = await Note.find();
  } catch (error) {
    console.log(error);
    response.status(500).send({
      message: 'Something went wrong',
      success: false,
    });
  }
  response.send({ data, success: true });
}

export async function findOneNote(request, response) {
  const { id } = request.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    response.status(500).send({
      message: 'Invalid request!',
      success: false,
    });
  }

  let data;
  try {
    data = await Note.findById(id);
  } catch (error) {
    console.error(error);
    response.status(500).send({
      message: 'Something went wrong!',
      status: false,
    });
  }
  response.send({ data, success: true });
}

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

export async function deleteOneNote(request, response) {
  const { id } = request.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    response.status(400).send({
      message: 'invalid request',
      success: false,
    });
  }
  let data;
  try {
    data = await Note.deleteOne({ _id: id });
  } catch (error) {
    console.errorg(error);
    response.status(500).send({
      message: 'Something went wrong',
      success: false,
    });
  }
  response.send({
    data,
    success: true,
  });
}

export async function updateOneNote(request, response) {
  const { id } = request.params;
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!request.body || !isValid) {
    response.status(400).send({
      message: 'Invalid request',
      success: false,
    });
  }

  let data;
  try {
    data = await Note.findByIdAndUpdate(id, {
      title: request.body.title,
      description: request.body.description,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({
      message: 'Something went wrong',
      success: false,
    });
  }

  response.send({
    data,
    success: true,
  });
}
