import { createAction, createDispatcher } from './createAction';
import * as userApi from 'api/userApi';

export const signInUserSuccess = createAction('SIGN_IN_USER_SUCCESS');
export const signInUserError = createAction('SIGN_IN_USER_ERROR');
export const signIn = credentials =>
  createDispatcher(userApi.signIn, signInUserSuccess, signInUserError, credentials);

export const signUpSuccess = createAction('SIGN_UP_USER_SUCCESS');
export const signUpError = createAction('SIGN_UP_USER_ERROR');
export const signUp = params =>
  createDispatcher(userApi.signUp, signUpSuccess, signUpError, params);
