import createReducer from './createReducer';
import { signInUserSuccess, signInUserError } from '../actions/userActions';

const intialState = {
  value: undefined,
  auth: undefined,
  error: undefined
};

export default createReducer(intialState, {
  [signInUserSuccess]: (state, { payload: { data, headers } }) => ({
    value: data,
    auth: headers
  }),
  [signInUserError]: (state, { payload }) => ({ ...state, error: payload[0] })
});
