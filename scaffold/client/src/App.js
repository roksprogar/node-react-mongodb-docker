import React, { useEffect, useRef } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import M from 'materialize-css';

function App() {
  const _noteModal = useRef(null);
  const _titleInput = useRef(null);

  useEffect(() => {
    M.AutoInit();
    M.Modal.init(_noteModal.current);
    M.CharacterCounter.init(_titleInput.current);
    return () => {};
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Notes />
      <div className="fixed-action-btn">
        <a
          href="#modal-add-note"
          className="btn-floating btn-large waves-effect waves-light red modal-trigger"
        >
          <i className="material-icons">add</i>
        </a>
      </div>
      <div id="modal-add-note" className="modal" ref={_noteModal}>
        <div className="modal-content">
          <h4>Create a new note</h4>
          <div className="row">
            <form action="" className="col s12">
              <div className="input-field col s6">
                <input
                  type="text"
                  className="input_text"
                  data-length="15"
                  ref={_titleInput}
                />
                <label htmlFor="input_text">Title</label>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#"
            className="modal-action modal-close waves-effect btn-flat red white-text"
          >
            Cancel
          </a>{' '}
          <a
            href="#"
            className="modal-action modal-close waves-effect btn-flat green white-text"
          >
            Ok
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
