import { combineReducers } from "redux";
import classReducer from "./demoReducer";

export default combineReducers({
  classes: classReducer
});
