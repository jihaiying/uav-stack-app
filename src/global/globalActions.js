export const UPDATE_DIMENSION = Symbol("UPDATE_DIMENSION");
export function updateDimension({ width, height }) {
  return {
    type: UPDATE_DIMENSION,
    width,
    height
  };
}

export const SWITCH_LANGUAGE = Symbol("SWITCH_LANGUAGE");
export function switchLanguage() {
  return {
    type: SWITCH_LANGUAGE
  };
}

export const SET_USERINFO = Symbol("SET_USERINFO");
export function setUserInfo(userInfo) {
  return {
    type: SET_USERINFO,
    userInfo
  };
}
