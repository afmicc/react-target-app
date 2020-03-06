import createReducer from './createReducer';
import {
  signInUserSuccess,
  signInUserError,
  signUpSuccess,
  signUpError
} from 'redux/actions/userActions';

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
  }),
  [signUpSuccess]: (state, { payload }) => ({ value: payload }),
  [signUpError]: (state, { payload }) => ({
    ...state,
    error:
      (payload && payload.full_messages && payload.full_messages[0]) ||
      'An error occured. Please try again.'
  })
});
