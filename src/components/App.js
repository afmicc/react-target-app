import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from './menu/Menu';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
