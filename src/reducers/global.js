import { fromJS } from "immutable";
import { UPDATE_DIMENSION } from "../actions/global";

const defaultState = {
  winWidth: 0,
  isMobile: false,
  winHeight: 0
};
const initialState = fromJS(defaultState);

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_DIMENSION:
      return state
        .set("winWidth", action.width)
        .set("isMobile", action.width < 1024)
        .set("winHeight", action.height);
    default:
      return state;
  }
}
