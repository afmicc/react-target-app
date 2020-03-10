import React, { useContext } from 'react';

import './Modal.css';
import close from 'assets/close.svg';
import ModalContext from './ModalContext';

const Modal = () => {
  const { modal, setModal } = useContext(ModalContext);

  if (!modal.visible) return <></>;
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-cross">
          <img
            src={close}
            alt="close"
            className="modal-cross__close-icon"
            onClick={() => setModal({ ...modal, visible: false })}
          ></img>
        </div>
        {modal.component}
      </div>
    </div>
  );
};

export default Modal;
