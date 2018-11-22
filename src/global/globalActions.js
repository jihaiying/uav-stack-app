import {
  UPDATE_DIMENSION,
  SWITCH_LANGUAGE,
  SET_USERINFO
} from "./globalActionTypes";

export function updateDimension({ width, height }) {
  return {
    type: UPDATE_DIMENSION,
    width,
    height
  };
}

export function switchLanguage() {
  return {
    type: SWITCH_LANGUAGE
  };
}

export function setUserInfo(userInfo) {
  return {
    type: SET_USERINFO,
    userInfo
  };
}
