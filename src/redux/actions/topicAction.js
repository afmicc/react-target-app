import { createAction, createDispatcher } from './createAction';
import * as topicApi from 'api/topicApi';

export const getTopicsSuccess = createAction('GET_TOPICS_SUCCESS');
export const getTopicsError = createAction('GET_TOPICS_ERROR');
export const getTopics = data =>
  createDispatcher(topicApi.getTopics, getTopicsSuccess, getTopicsError, data);
