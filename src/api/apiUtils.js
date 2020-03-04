export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status >= 400 && response.status < 500) {
    const error = await response.json();
    throw error;
  }
  throw new Error('Network response was not ok.');
}

export async function handleResponseAndHeaders(response) {
  const data = await handleResponse(response);
  return { ...data, headers: getHeaders(response) };
}

export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error('API call failed. ' + error);
  throw error;
}

const getHeaders = response => {
  try {
    return {
      token: response.headers.get('access-token'),
      client: response.headers.get('client'),
      expiry: response.headers.get('expiry'),
      uid: response.headers.get('uid')
    };
  } catch (error) {
    return {};
  }
};

export const headers = ({ token, client, uid }) => ({
  'content-type': 'application/json',
  'access-token': token,
  client,
  uid
});
