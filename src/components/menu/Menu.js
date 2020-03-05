import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './Menu.css';
import iconOpen from 'assets/menu_icon_open.svg';
import iconClose from 'assets/menu_icon_close.svg';

const Menu = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);

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
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </CSSTransition>
    </div>
  );
};

export default Menu;
