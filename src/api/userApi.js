import { get, post, del, handleResponseAndHeaders } from './apiUtils';

export const signIn = async credentials =>
  await post('/users/sign_in', { user: credentials }, { handleSuccess: handleResponseAndHeaders });

export const facebookSignIn = async token =>
  await post(
    '/users/facebook',
    { access_token: token },
    { handleSuccess: handleResponseAndHeaders }
  );

export const signUp = async params => await post('/users', { user: params });

export const getProfile = async id => await get(`/users/${id}`);

export const logout = async () => await del(`/users/sign_out`);
