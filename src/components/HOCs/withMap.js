import React from 'react';
import TargetsMap from 'components/TargetsMap';

const withMap = Component => (...props) => (
  <div className="page-container">
    <Component {...props} />
    <div className="column home-column-right">
      <TargetsMap />
    </div>
  </div>
);

export default withMap;
