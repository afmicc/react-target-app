import createReducer from './createReducer';
import {
  signInUserSuccess,
  signInUserError,
  signUpSuccess,
  signUpError,
  getProfileError,
  getProfileSuccess,
  logoutSuccess,
  logoutError,
  facebookSignInSuccess,
  facebookSignInError,
  updatePasswordSuccess,
  updatePasswordError,
  deleteAccountSuccess,
  deleteAccountError
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
  }),
  [getProfileSuccess]: (state, { payload: { user } }) => ({
    ...state,
    value: user,
    error: undefined
  }),
  [getProfileError]: (state, { payload }) => ({
    ...state,
    error:
      (payload && payload.full_messages && payload.full_messages[0]) ||
      'An error occured. Please try again.'
  }),
  [logoutSuccess]: () => ({
    intialState
  }),
  [logoutError]: (state, { payload }) => ({
    ...state,
    error: payload?.full_messages?.[0] || 'An error occurred. Please try again.'
  }),
  [facebookSignInSuccess]: (state, { payload: { data, headers } }) => ({
    value: data,
    auth: headers
  }),
  [facebookSignInError]: (state, { payload }) => ({
    ...state,
    error: (payload && payload[0]) || 'An error occured. Please try again.'
  }),
  [updatePasswordSuccess]: (state, { payload }) => ({
    ...state,
    value: payload,
    error: undefined
  }),
  [updatePasswordError]: (state, { payload }) => ({
    ...state,
    error:
      (payload && payload.full_messages && payload.full_messages[0]) ||
      'An error occured. Please try again.'
  }),
  [deleteAccountSuccess]: () => ({
    intialState
  }),
  [deleteAccountError]: (state, { payload }) => ({
    ...state,
    error: payload?.full_messages?.[0] || 'An error occurred. Please try again.'
  })
});
