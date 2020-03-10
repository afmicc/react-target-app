import createReducer from './createReducer';
import {
  contactAdministratorsError,
  contactAdministratorsSuccess
} from 'redux/actions/contactAdministratorAction';

const intialState = {
  value: undefined,
  error: undefined
};

export default createReducer(intialState, {
  [contactAdministratorsSuccess]: (state, { payload: { data } }) => ({
    value: data
  }),
  [contactAdministratorsError]: (state, { payload }) => ({
    ...state,
    error: (payload && payload[0]) || 'An error occured. Please try again.'
  })
});
