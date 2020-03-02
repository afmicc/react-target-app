import createAction from './createAction';
import * as coursesApi from '../../api/courseApi';

export const addCourse = createAction('ADD_COURSE');

export const getCourses = () => async dispatch => {
  try {
    const courses = await coursesApi.getCourses();
    dispatch(loadCoursesSucces(courses));
  } catch ({ data }) {
    dispatch(loadCoursesError(data));
  }
};

export const loadCoursesSucces = createAction('LOAD_COURSES_SUCCESS');
export const loadCoursesError = createAction('LOAD_COURSES_ERROR');
