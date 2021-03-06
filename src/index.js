import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import 'styles/styles.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import configureStore from './redux/configureStore';
import configureFetchInterceptor from './api/apiInterceptor';

const { store, persistor } = configureStore();
const initFetchInterceptor = configureFetchInterceptor(store);
initFetchInterceptor();

ReactDOM.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </ReduxProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
