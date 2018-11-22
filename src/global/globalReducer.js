import {
  UPDATE_DIMENSION,
  SWITCH_LANGUAGE,
  SET_USERINFO
} from "./globalActionTypes";
import { fromJS } from "immutable";
import { LANGUAGES } from "../config/enum";
import Storage from "../lib/storage";

const lang = Storage.get("lang");

const defaultState = {
  winWidth: 0,
  isMobile: false,
  winHeight: 0,
  lang: lang ? lang : LANGUAGES.cn,
  userInit: false
};

const initialState = fromJS(defaultState);

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_DIMENSION:
      return state
        .set("winWidth", action.width)
        .set("isMobile", action.width < 1024)
        .set("winHeight", action.height);
    case SWITCH_LANGUAGE:
      const nextLang =
        state.get("lang") === LANGUAGES.en ? LANGUAGES.cn : LANGUAGES.en;
      Storage.set("lang", nextLang);
      return state.set("lang", nextLang);
    case SET_USERINFO:
      Storage.set("uav.apphub.user.token", action.userInfo.apphubtoken);
      Storage.set("user", JSON.stringify(action.userInfo.user));
      return state.set("userInit", true);
    default:
      return state;
  }
}
