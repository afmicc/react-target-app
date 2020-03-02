import { combineReducers } from 'redux';
import user from './userReducer';
import courses from './coursesReducer';

const rootReducer = combineReducers({
  user,
  courses
});

export default rootReducer;
