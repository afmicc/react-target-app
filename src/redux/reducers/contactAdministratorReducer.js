import createReducer from './createReducer';
import errorManager from './errorManager';
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
    error: errorManager(payload)
  })
});
