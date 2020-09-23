import { get, post, put, del, handleResponseAndHeaders } from './apiUtils';

export const signIn = async credentials =>
  await post('/users/sign_in', { user: credentials }, handleResponseAndHeaders);

export const facebookSignIn = async token =>
  await post(
    '/users/facebook',
    { accessToken: token },
    { handleSuccess: handleResponseAndHeaders }
  );

export const signUp = async params => await post('/users', { user: params });

export const getProfile = async id => await get(`/users/${id}`);

export const logout = async () => await del(`/users/sign_out`);

export const updatePassword = async params =>
  await put('/users/password', { user: params }, handleResponseAndHeaders);

export const deleteAccount = async id => await del(`/users/${id}`);
