import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './Menu.css';
import iconOpen from 'assets/menu_icon_open.svg';
import iconClose from 'assets/menu_icon_close.svg';
import ModalContext from 'components/common/Modal/ModalContext';
import ContactForm from 'components/ContactForm';

const Menu = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);
  const { setModal } = useContext(ModalContext);

  const handleContact = event => {
    event.preventDefault();
    setModal({ visible: true, component: <ContactForm /> });
    toggle();
  };

  return (
    <div className="menu">
      <div className="menu__image-container">
        <img
          src={visible ? iconClose : iconOpen}
          alt="icon"
          className="menu__icon"
          onClick={toggle}
        />
      </div>
      <CSSTransition in={visible} timeout={300} classNames="alert" unmountOnExit>
        <ul className="menu__list">
          <li>
            <NavLink exact to="/" onClick={toggle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={handleContact}>
              Contact
            </NavLink>
          </li>
        </ul>
      </CSSTransition>
    </div>
  );
};

export default Menu;
