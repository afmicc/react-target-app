import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { func } from 'prop-types';

import routes from 'constants/routes';

const PrivateRoute = ({ component: Component, ...props }) => {
  const authenticated = useSelector(({ user: { auth }}) => auth);

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
  component: func.isRequired
};

export default PrivateRoute;
