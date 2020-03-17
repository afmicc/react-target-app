import { createAction, createDispatcher } from './createAction';
import * as targetApi from 'api/targetApi';

export const getTargetsSuccess = createAction('GET_TARGETS_SUCCESS');
export const getTargetsError = createAction('GET_TARGETS_ERROR');
export const getTargets = data =>
  createDispatcher(targetApi.getTargets, getTargetsSuccess, getTargetsError, data);

export const addTargetSuccess = createAction('ADD_TARGET_SUCCESS');
export const addTargetError = createAction('ADD_TARGET_ERROR');
export const addTarget = data =>
  createDispatcher(async location => location, addTargetSuccess, addTargetError, data);

export const saveTargetSuccess = createAction('CREATE_TARGET_SUCCESS');
export const saveTargetError = createAction('CREATE_TARGET_ERROR');
export const saveTarget = data =>
  createDispatcher(targetApi.saveTarget, saveTargetSuccess, saveTargetError, data);
