import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import routes from '../../constants/routes';

const PrivateRoute = ({ component: Component, ...props }) => {
  const authenticated = useSelector(({ user: { auth }}) => auth);

  console.log('authenticated', authenticated);
  console.log('props', props);
  return (
    <Route
      {...props}
      render={innerProps =>
        authenticated ? <Component {...innerProps} /> : <Redirect to={routes.home} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired
};

export default PrivateRoute;
