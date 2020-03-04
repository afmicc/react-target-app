import { handleResponseAndHeaders, handleError } from './apiUtils';
const baseUrl = process.env.REACT_APP_API_URL;

export const signIn = async credentials => {
  try {
    const response = await fetch(`${baseUrl}/users/sign_in`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ user: credentials })
    });

    return handleResponseAndHeaders(response);
  } catch (error) {
    handleError(error);
  }
};
