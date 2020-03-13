import fetchIntercept from 'fetch-intercept';
import { headers } from './apiUtils';

export default store => () => {
  const unsubscribeFromStore = store.subscribe(() => {
    const { user: { auth } } = store.getState();

    if (auth) {
      unsubscribeFromStore();
      register(auth);
    }
  });
};

const register = auth => {
  fetchIntercept.register({
    request: function(url, config) {
      config.headers = headers(auth);
      return [url, config];
    },

    requestError: function(error) {
      // Called when an error occured during another 'request' interceptor call
      return Promise.reject(error);
    },

    response: function(response) {
      // Modify the reponse object
      return response;
    },

    responseError: function(error) {
      // Handle an fetch error
      return Promise.reject(error);
    }
  });
};
