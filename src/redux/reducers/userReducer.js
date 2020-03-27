import createReducer from './createReducer';
import errorManager from './errorManager';
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
    error: errorManager(payload)
  }),
  [signUpSuccess]: (state, { payload }) => ({ value: payload }),
  [signUpError]: (state, { payload }) => ({
    ...state,
    error: errorManager(payload)
  }),
  [getProfileSuccess]: (state, { payload: { user } }) => ({
    ...state,
    value: user,
    error: undefined
  }),
  [getProfileError]: (state, { payload }) => ({
    ...state,
    error: errorManager(payload)
  }),
  [logoutSuccess]: () => ({
    intialState
  }),
  [logoutError]: (state, { payload }) => ({
    ...state,
    error: errorManager(payload)
  }),
  [facebookSignInSuccess]: (state, { payload: { data, headers } }) => ({
    value: data,
    auth: headers
  }),
  [facebookSignInError]: (state, { payload }) => ({
    ...state,
    error: errorManager(payload)
  }),
  [updatePasswordSuccess]: (state, { payload }) => ({
    ...state,
    value: payload,
    error: undefined
  }),
  [updatePasswordError]: (state, { payload }) => ({
    ...state,
    error: errorManager(payload)
  }),
  [deleteAccountSuccess]: () => ({
    intialState
  }),
  [deleteAccountError]: (state, { payload }) => ({
    ...state,
    error: errorManager(payload)
  })
});
