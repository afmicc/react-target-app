export const createAction = actionName => {
  const action = payload => ({ type: actionName, payload });
  action.toString = () => actionName;
  return action;
};

export const createDispatcher = (func, success, error, ...params) => async dispatch => {
  try {
    const data = await func(...params);
    dispatch(success(data));
  } catch ({ errors }) {
    dispatch(error(errors));
  }
};
