export default (initialState, objReducer) => (state = initialState, action) =>
  (objReducer[action.type] && objReducer[action.type](state, action)) || state;
