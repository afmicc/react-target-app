import createReducer from './createReducer';
import { signInUserSuccess, signInUserError } from 'redux/actions/userActions';

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
  [signInUserError]: (state, { payload }) => ({
    ...state,
    error: (payload && payload[0]) || 'An error occured. Please try again.'
  })
});
