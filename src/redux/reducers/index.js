import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import user from './userReducer';
import contactAdministrator from './contactAdministratorReducer';
import target from './targetReducer';
import topic from './topicReducer';

const persistConfig = { key: 'targetMVD', storage, whitelist: ['auth'] };

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, user),
  contactAdministrator,
  target,
  topic
});

export default rootReducer;
