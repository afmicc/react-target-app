import createReducer from './createReducer';
import { getTargetsSuccess, getTargetsError } from 'redux/actions/targetAction';

const intialState = {
  values: undefined,
  error: undefined
};

export default createReducer(intialState, {
  [getTargetsSuccess]: (state, { payload: { targets } }) => ({
    values: targets
  }),
  [getTargetsError]: (state, { payload }) => ({
    ...state,
    error: (payload && payload[0]) || 'An error occured. Please try again.'
  })
});
