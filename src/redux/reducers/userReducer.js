import createReducer from './createReducer';
import { signInUserSuccess, signInUserError } from '../actions/userActions';

const intialState = {
  value: undefined,
  auth: undefined,
  error: undefined
};

export default createReducer(intialState, {
  [signInUserSuccess]: (state, { payload }) => ({
    ...state,
    value: payload.data,
    auth: payload.headers,
    error: undefined
  }),
  [signInUserError]: (state, { payload }) => ({ ...state, error: payload[0] })
});
