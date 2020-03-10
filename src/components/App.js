import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Menu from './menu/Menu';
import routes from './routes';
import ProtectedRoute from './privateRoute/PrivateRoute';
import Modal from './common/Modal';

function App() {
  return (
    <div className="App">
      <Menu />
      <Modal />
      <Switch>
        {routes.map((route, index) =>
          route.private ? (
            <ProtectedRoute key={index} {...route} />
          ) : (
            <Route key={index} {...route} />
          )
        )}
      </Switch>
    </div>
  );
}

export default App;
