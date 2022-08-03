import mongoose from 'mongoose';

const NoteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      min: [3, 'Title should be longer than 3 characters!'],
      max: [30, 'Title should have no more than 30 characters!'],
      required: [true, 'Title is required!'],
    },
    description: {
      type: String,
      min: [5, 'Description should be longer than 5 characters!'],
      max: [50, 'Description should have no more than 50 characters!'],
      required: [true, 'Description is required!'],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Note', NoteSchema);
