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

export const getProfileSuccess = createAction('GET_PROFILE_USER_SUCCESS');
export const getProfileError = createAction('GET_PROFILE_USER_ERROR');
export const getProfile = params =>
  createDispatcher(userApi.getProfile, getProfileSuccess, getProfileError, params);

export const logoutSuccess = createAction('LOG_OUT_USER_SUCCESS');
export const logoutError = createAction('LOG_OUT_USER_ERROR');
export const logout = params =>
  createDispatcher(userApi.logout, logoutSuccess, logoutError, params);

export const facebookSignInSuccess = createAction('FACEBOOK_SIGN_IN_SUCCESS');
export const facebookSignInError = createAction('FACEBOOK_SIGN_IN_ERROR');
export const facebookSignIn = token =>
  createDispatcher(userApi.facebookSignIn, facebookSignInSuccess, facebookSignInError, token);
