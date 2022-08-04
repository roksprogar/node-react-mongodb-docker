import React, { useState, useEffect } from 'react';
import Note from './Note';
import axios from 'axios';

function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    async function fetchNotes() {
      const { data } = await axios.get('http://localhost/api/notes');
      console.log('data', data.data);
      setNotes(data.data);
    }
    fetchNotes();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row">
          {notes &&
            notes.map((note) => (
              <Note
                key={note._id}
                title={note.title}
                description={note.description}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Notes;
