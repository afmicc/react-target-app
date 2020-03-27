import createReducer from './createReducer';
import errorManager from './errorManager';
import { getTopicsSuccess, getTopicsError } from 'redux/actions/topicAction';

const intialState = {
  values: undefined,
  error: undefined
};

export default createReducer(intialState, {
  [getTopicsSuccess]: (state, { payload: { topics } }) => ({
    values: topics
  }),
  [getTopicsError]: (state, { payload }) => ({
    ...state,
    error: errorManager(payload)
  })
});
