import { handleResponseAndHeaders, handleError, handleResponse } from './apiUtils';

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

export const signUp = async params => {
  try {
    const response = await fetch(`${baseUrl}/users`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ user: params })
    });

    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const getProfile = async id => {
  try {
    const response = await fetch(`${baseUrl}/users/${id}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    });

    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};
