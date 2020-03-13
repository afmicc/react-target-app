import createReducer from './createReducer';
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
    error: (payload && payload[0]) || 'An error occured. Please try again.'
  })
});
