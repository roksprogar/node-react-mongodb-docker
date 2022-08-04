import React, { useEffect, useRef } from 'react';
import NotesForm from './NotesForm';
import M from 'materialize-css';
import ModalFooter from './ModalFooter';

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
      <ModalFooter />
    </div>
  );
}

export default Modal;
