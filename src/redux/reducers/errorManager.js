export default (error, defaultMessage = 'An error occured. Please try again.') => {
  if (!error) return defaultMessage;
  let message = error?.[0];
  if (validMessage(message)) return message;
  message = error?.fullMessages?.[0];
  if (validMessage(message)) return message;
  let [key, value] = error && Object.entries(error)[0];
  message = value && value[0];
  if (validMessage(message)) return message;
  return defaultMessage;
};

const validMessage = message => message && typeof message === 'string';
