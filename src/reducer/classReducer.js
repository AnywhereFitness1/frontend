import { FETCH_CLASSES, FETCH_UPDATE_CLASS } from "../actions";

const initialState = {
  classes: []
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASSES:
      return {
        ...state,
        classes: action.payload
      };
    case FETCH_UPDATE_CLASS:
      console.log("reducer", action.payload);
      return {
        ...state,
        classes: action.payload.project
      };
    default:
      return state;
  }
};

export default classReducer;
