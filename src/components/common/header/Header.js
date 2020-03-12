import * as React from 'react';
import PropTypes from 'prop-types';

import smilies from '../../../assets/smilies.svg';

const Header = ({ header, subheader }) => {
  return (
    <>
      <img src={smilies} alt="smilies"></img>
      <h1 className="column__header">{header}</h1>
      <h2 className="column__subheader">{subheader}</h2>
    </>
  );
};

Header.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string
};

export default Header;
