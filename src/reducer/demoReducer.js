import { FETCH_CLASSES } from "../actions";

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
    default:
      return state;
  }
};

export default classReducer;
