import { FETCH_POSTS } from "../actions";

const initialState = {
  data: []
};

const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default demoReducer;
