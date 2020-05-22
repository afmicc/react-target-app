import React, { memo } from 'react';
import { number, shape, node, func } from 'prop-types';
import GoogleMapReact from 'google-map-react';

const GoogleMap = ({ coords: { latitude: lat, longitude: lng }, zoom, onClick, children }) => (
  <GoogleMapReact
    center={{ lat, lng }}
    zoom={zoom}
    onClick={({ lat, lng }) => onClick({ lat, lng })}
  >
    {children}
  </GoogleMapReact>
);

GoogleMap.propTypes = {
  coords: shape({
    latitude: number.isRequired,
    longitude: number.isRequired
  }),
  zoom: number.isRequired,
  onClick: func,
  children: node.isRequired
};

export default memo(GoogleMap);
