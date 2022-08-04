import React, { useEffect, useRef } from 'react';
import NotesForm from './NotesForm';
import M from 'materialize-css';

function Modal() {
  const _noteModal = useRef(null);

  useEffect(() => {
    M.Modal.init(_noteModal.current);
    return () => {};
  }, []);

  return (
    <div id="modal-add-note" className="modal" ref={_noteModal}>
      <div className="modal-content">
        <NotesForm />
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
  );
}

export default Modal;
