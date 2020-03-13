import React from 'react';
import { string, bool } from 'prop-types';

import './Indicator.scss';

const Indicator = ({ icon, label, title, background }) => (
  <div className="map__indicator">
    <div className={`map__indicator__circle ${background && 'map__indicator__circle--background'}`}>
      <img className="map__indicator__circle__image" src={icon} alt={label} />
    </div>
    {title && <span className="map__indicator__label">{title}</span>}
  </div>
);

Indicator.propTypes = {
  icon: string.isRequired,
  label: string.isRequired,
  title: string,
  background: bool
};

export default Indicator;
