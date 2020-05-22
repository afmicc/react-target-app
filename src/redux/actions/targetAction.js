import { createAction, createDispatcher } from './createAction';
import * as targetApi from 'api/targetApi';

export const getTargetsSuccess = createAction('GET_TARGETS_SUCCESS');
export const getTargetsError = createAction('GET_TARGETS_ERROR');
export const getTargets = data =>
  createDispatcher(targetApi.getTargets, getTargetsSuccess, getTargetsError, data);
