import { combineReducers } from "redux";
import global from "./globalReducer";
import strategyList from "../pages/GodEye/WarningStrategy/StrategyList/reducer";

const rootReducer = combineReducers({
  global,
  strategyList
});

export default rootReducer;
