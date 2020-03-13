import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Menu from './menu/Menu';
import routes from './routes';
import ProtectedRoute from './privateRoute/PrivateRoute';
import Modal from './common/Modal';
import { ModalProvider } from './common/Modal/ModalContext';

function App() {
  const [modal, setModal] = useState({ visible: false, component: <></> });

  return (
    <ModalProvider value={{ setModal }}>
      <div className="App">
        <Menu />
        <Modal config={modal} />
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
    </ModalProvider>
  );
}

export default App;
