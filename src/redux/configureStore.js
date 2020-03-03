import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState = {}) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const persistConfig = { key: 'targetMVD', storage, whitelist: ['user'] };

  let store = createStore(
    persistReducer(persistConfig, rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
  let persistor = persistStore(store);

  return { store, persistor };
}
