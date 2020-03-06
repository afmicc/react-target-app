import * as React from 'react';
import PropTypes from 'prop-types';

import smilies from '../../../assets/smilies.svg';

const Header = ({ header, subheader }) => {
  return (
    <>
      <img src={smilies} alt="smilies"></img>
      <span className="column__header">{header}</span>
      <span className="column__subheader">{subheader}</span>
    </>
  );
};

Header.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string
};

export default Header;
