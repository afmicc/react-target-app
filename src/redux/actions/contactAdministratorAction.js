import { createAction, createDispatcher } from './createAction';
import * as contactAdministratorApi from 'api/contactAdministratorApi';

export const contactAdministratorsSuccess = createAction('SIGN_IN_USER_SUCCESS');
export const contactAdministratorsError = createAction('SIGN_IN_USER_ERROR');
export const contactAdministrator = data =>
  createDispatcher(
    contactAdministratorApi.contact,
    contactAdministratorsSuccess,
    contactAdministratorsError,
    data
  );
