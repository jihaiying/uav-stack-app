import { combineReducers } from "redux";
import globalData from "./globalReducer";

const rootReducer = combineReducers({
  globalData
});

export default rootReducer;
