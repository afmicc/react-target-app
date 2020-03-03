import { handleResponseAndHeaders, handleError } from './apiUtils';
const baseUrl = process.env.REACT_APP_API_URL;

export const signIn = credentials =>
  fetch(`${baseUrl}/users/sign_in`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ user: credentials })
  })
    .then(handleResponseAndHeaders)
    .catch(handleError);
