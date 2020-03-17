import createReducer from './createReducer';
import {
  getTargetsSuccess,
  getTargetsError,
  addTargetSuccess,
  addTargetError,
  saveTargetSuccess,
  saveTargetError
} from 'redux/actions/targetAction';

const intialState = {
  value: undefined,
  values: undefined,
  error: undefined
};

export default createReducer(intialState, {
  [getTargetsSuccess]: (state, { payload: { targets } }) => ({
    ...state,
    error: undefined,
    values: targets
  }),
  [getTargetsError]: (state, { payload }) => ({
    ...state,
    error: (payload && payload[0]) || 'An error occured. Please try again.'
  }),
  [addTargetSuccess]: (state, { payload }) => ({
    ...state,
    value: { ...state.value, lat: payload.lat, lng: payload.lng }
  }),
  [addTargetError]: (state, { payload }) => ({
    ...state,
    error: (payload && payload[0]) || 'An error occured. Please try again.'
  }),
  [saveTargetSuccess]: (state, { payload }) => ({
    ...state,
    value: undefined,
    values: [...state.values, payload]
  }),
  [saveTargetError]: (state, { payload }) => ({
    ...state,
    error: (payload && payload[0]) || 'An error occured. Please try again.'
  })
});
