import createReducer from './createReducer';
import { signInUser } from '../actions/userActions';

export default createReducer(
  {},
  {
    [signInUser]: (state, { payload }) => ({ ...state, email: payload.email })
  }
);
