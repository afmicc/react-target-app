import React, { useContext } from 'react';
import { bool, node, shape } from 'prop-types';

import './Modal.css';
import close from 'assets/close.svg';
import ModalContext from './ModalContext';

const Modal = ({ config: { visible, component } }) => {
  const { setModal } = useContext(ModalContext);
  console.log('visible', visible);

  if (!visible) return <></>;
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-cross">
          <img
            src={close}
            alt="close"
            className="modal-cross__close-icon"
            onClick={() => setModal({ visible: false })}
          ></img>
        </div>
        {component}
      </div>
    </div>
  );
};

Modal.propTypes = {
  config: shape({
    visible: bool.isRequired,
    component: node
  })
};

export default Modal;
