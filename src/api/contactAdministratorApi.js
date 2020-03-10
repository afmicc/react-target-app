import { handleError, handleResponse } from './apiUtils';
const baseUrl = process.env.REACT_APP_API_URL;

export const contact = async data => {
  try {
    const response = await fetch(`${baseUrl}/contact`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ contact: data })
    });

    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};
