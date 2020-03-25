const baseUrl = process.env.REACT_APP_API_URL;

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

export function handleException(error) {
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

const apiRestCall = async (
  type,
  endpoint,
  body,
  { handleSuccess = handleResponse, handleError = handleException }
) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: type,
      headers: { 'content-type': 'application/json' },
      body: body && JSON.stringify(body)
    });

    return handleSuccess(response);
  } catch (error) {
    handleError(error);
  }
};

export const get = async (endpoint, ...params) => await apiRestCall('GET', endpoint, ...params);

export const post = async (endpoint, ...params) => await apiRestCall('POST', endpoint, ...params);

export const del = async (endpoint, ...params) => await apiRestCall('DELETE', endpoint, ...params);
