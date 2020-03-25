import React from 'react';
import TargetsMap from 'components/TargetsMap';

const withMap = Component => () => (
  <div className="page-container">
    <Component />
    <div className="column home-column-right">
      <TargetsMap />
    </div>
  </div>
);

export default withMap;
