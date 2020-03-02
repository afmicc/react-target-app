import createReducer from './createReducer';
import { addCourse, loadCoursesSucces, loadCoursesError } from '../actions/coursesActions';

const intialState = {
  list: [],
  error: undefined
};

export default createReducer(intialState, {
  [addCourse]: (state, { payload }) => ({
    ...state,
    list: [...state.list, payload]
  }),
  [loadCoursesSucces]: (state, { payload }) => ({
    ...state,
    list: payload
  }),
  [loadCoursesError]: (state, { payload }) => ({
    ...state,
    error: payload
  })
});
