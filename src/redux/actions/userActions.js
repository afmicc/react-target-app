import { createAction, createDispatcher } from './createAction';
import * as userApi from '../../api/userApi';

export const signInUserSuccess = createAction('SIGN_IN_USER_SUCCESS');
export const signInUserError = createAction('SIGN_IN_USER_ERROR');
export const signIn = credentials =>
  createDispatcher(userApi.signIn, signInUserSuccess, signInUserError, credentials);
