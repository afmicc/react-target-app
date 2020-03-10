import React, { useState } from 'react';

import './Modal.css';
import close from 'assets/close.svg';
import ContactForm from 'components/ContactForm';

const Modal = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return <></>;
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-cross">
          <img
            src={close}
            alt="close"
            className="modal-cross__close-icon"
            onClick={() => setVisible(!visible)}
          ></img>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Modal;
