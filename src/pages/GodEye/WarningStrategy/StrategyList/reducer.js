import { fromJS } from "immutable";
import { ADD_NUM } from "./actionTypes";

const defaultState = {
  num: 0
};

const initialState = fromJS(defaultState);

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_NUM:
      return state.set("num", state.get("num") + action.num);
    default:
      return state;
  }
}
