import React, { useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import M from 'materialize-css';
import Modal from './components/Modal';

function App() {
  useEffect(() => {
    M.AutoInit();
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
      <Modal />
    </div>
  );
}

export default App;
