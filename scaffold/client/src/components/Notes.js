import React, { useState, useEffect } from 'react';
import Note from './Note';
import axios from 'axios';

function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    async function fetchNotes() {
      const { data } = await axios.get('http://localhost/api/notes');
      setNotes(data.data);
    }
    fetchNotes();
  }, []);

  async function handleDelete(id) {
    const { data } = await axios.delete(`http://localhost/api/notes/${id}`);
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  }

  return (
    <section>
      <div className="container">
        <div className="row">
          {notes &&
            notes.map((note) => (
              <Note key={note._id} note={note} handleDelete={handleDelete} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Notes;
