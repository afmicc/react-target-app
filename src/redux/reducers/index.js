import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import user from './userReducer';

const persistConfig = { key: 'targetMVD', storage, whitelist: ['auth'] };

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, user)
});

export default rootReducer;
