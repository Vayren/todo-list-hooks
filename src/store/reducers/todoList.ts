import * as actionTypes from '../actionTypes';

export default (state: Todo[] = [], action: any) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, action.payload];
    case actionTypes.DELETE_TODO:
      return state.filter((item: Todo) => item.id !== action.payload);
    case actionTypes.UPDATE_TODO:
      return state.map((item: Todo) => {
        if (item.id === action.payload.id) item.title = action.payload.title;
        return item;
      });
    case actionTypes.TOGGLE_TODO:
      return state.map((item: Todo) => {
        if (item.id === action.payload) item.status = !item.status;
        return item;
      });
    default:
      return state;
  }
}
