export default actionName => {
  const action = payload => ({ type: actionName, payload });
  action.toString = () => actionName;
  return action;
};
