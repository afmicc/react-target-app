import React, { memo } from 'react';
import { number, shape, node } from 'prop-types';
import GoogleMapReact from 'google-map-react';

const GoogleMap = ({ coords: { latitude: lat, longitude: lng }, zoom, children }) =>
  lat && lng && zoom ? (
    <GoogleMapReact defaultCenter={{ lat, lng }} defaultZoom={zoom}>
      {children}
    </GoogleMapReact>
  ) : (
    <></>
  );

GoogleMap.propTypes = {
  coords: shape({
    latitude: number.isRequired,
    longitude: number.isRequired
  }),
  zoom: number.isRequired,
  children: node.isRequired
};

export default memo(GoogleMap);
